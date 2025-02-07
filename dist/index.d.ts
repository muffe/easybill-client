import { CustomerAPI } from './customer/api';
import { CustomerGroupAPI } from './customerGroup/api';
import { DocumentAPI } from './document/api';
import { DocumentPaymentAPI } from './documentPayment/api';
export declare class EasybillClient {
    private static instanceMap;
    private apiKey;
    readonly customerAPI: CustomerAPI;
    readonly customerGroupAPI: CustomerGroupAPI;
    readonly documentAPI: DocumentAPI;
    readonly documentPaymentAPI: DocumentPaymentAPI;
    private constructor();
    static getInstance(apiKey: string): EasybillClient;
}
export * from './types';
