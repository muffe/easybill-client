"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requestable = void 0;
const axios_1 = __importDefault(require("axios"));
const bottleneck_1 = __importDefault(require("bottleneck"));
const logger_1 = require("../logger");
const EasybillError_1 = require("./EasybillError");
const limiter = new bottleneck_1.default({
    reservoir: 50,
    reservoirRefreshAmount: 50,
    reservoirRefreshInterval: 60 * 1000,
    minTime: 500,
    maxConcurrent: 1,
});
const maxNumberOfRetries = 10;
function handleOnLimiterFailed(error, jobInfo) {
    const { statusCode } = error;
    const isTooMuchRequestOrServerError = statusCode === 429 || String(statusCode).startsWith('5');
    if (isTooMuchRequestOrServerError && jobInfo.retryCount < maxNumberOfRetries) {
        (0, logger_1.log)({
            level: 'warn',
            message: `Reason: "${error.message}". Retrying job ${jobInfo.options.id}`,
            label: 'requestable',
        });
        // retry maximal 10 times. The delay between each retry is set to double (starting at 10s) with each attempt, but not exceed 60 seconds.
        return Math.min(5000 * 2 ** (jobInfo.retryCount + 1), 60000);
    }
    return null;
}
limiter.on('failed', handleOnLimiterFailed);
class Requestable {
    constructor(baseURL, apiKey) {
        this.axiosInstance = axios_1.default.create();
        this.axiosCancelTokenSource = axios_1.default.CancelToken.source();
        this.axiosInstance.defaults.baseURL = baseURL;
        this.axiosInstance.defaults.headers.common['Content-type'] = 'application/json;charset=UTF-8';
        this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
        this.axiosInstance.defaults.headers.common['X-Easybill-Escape'] = 'true';
    }
    request(config) {
        const { method, url, params, data, headers, responseType } = config;
        return limiter.schedule(async () => {
            const res = await this.axiosInstance
                .request({
                method,
                url,
                data,
                params,
                headers,
                cancelToken: this.axiosCancelTokenSource.token,
                responseType,
            })
                .catch((error) => {
                // The request was made and the server responded with a status code
                if (error.response) {
                    (0, logger_1.log)({
                        level: 'error',
                        message: JSON.stringify({
                            data: error.response.data,
                            statusCode: error.response.status,
                            headers: error.response.headers,
                        }, null, 3),
                        label: 'EasybillAPI',
                    });
                    throw new EasybillError_1.EasybillError(error.message, error.response.status, error.response.statusText, error);
                }
                else if (error.request) {
                    // The request was made but no response is received. Request is an instance of http.ClientRequest
                    (0, logger_1.log)({
                        level: 'error',
                        message: JSON.stringify({
                            request: error.request,
                        }, null, 3),
                        label: 'EasybillAPI',
                    });
                    throw new EasybillError_1.EasybillError(error.message, error.request.status, error.request.statusText, error);
                }
                throw new EasybillError_1.EasybillError(error.message, 500, 'Internal Server Error', error);
            });
            return res.data;
        });
    }
    /**
     *  Cancel the request
     */
    cancel(message) {
        this.axiosCancelTokenSource.cancel(message);
    }
}
exports.Requestable = Requestable;
