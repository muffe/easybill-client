import { RawAxiosRequestHeaders, ResponseType } from 'axios';
export type HTTP_METHODS = 'GET' | 'POST' | 'DELETE' | 'PUT';
export declare class Requestable {
    private axiosInstance;
    private axiosCancelTokenSource;
    constructor(baseURL: string, apiKey: string);
    protected request<T>(config: {
        method: HTTP_METHODS;
        url: string;
        params?: Record<string, unknown>;
        data?: Record<string, unknown>;
        headers?: RawAxiosRequestHeaders;
        responseType?: ResponseType;
    }): Promise<T>;
    /**
     *  Cancel the request
     */
    cancel(message: string): void;
}
