"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasybillClient = void 0;
const api_1 = require("./customer/api");
const api_2 = require("./customerGroup/api");
const api_3 = require("./document/api");
class EasybillClient {
    constructor(apiKey) {
        const baseURL = 'https://api.easybill.de/rest/v1';
        this.apiKey = apiKey;
        this.customerAPI = new api_1.CustomerAPI(baseURL, apiKey);
        this.customerGroupAPI = new api_2.CustomerGroupAPI(baseURL, apiKey);
        this.documentAPI = new api_3.DocumentAPI(baseURL, apiKey);
    }
    static getInstance(apiKey) {
        let instance = EasybillClient.instanceMap.get(apiKey);
        if (!instance) {
            instance = new EasybillClient(apiKey);
            EasybillClient.instanceMap.set(apiKey, instance);
        }
        return instance;
    }
}
exports.EasybillClient = EasybillClient;
EasybillClient.instanceMap = new Map();
__exportStar(require("./types"), exports);
