import { CustomerAPI } from './customer/api';
import { CustomerGroupAPI } from './customerGroup/api';
import { DocumentAPI } from './document/api';
export declare class EasybillClient {
    private static instanceMap;
    private apiKey;
    readonly customerAPI: CustomerAPI;
    readonly customerGroupAPI: CustomerGroupAPI;
    readonly documentAPI: DocumentAPI;
    private constructor();
    static getInstance(apiKey: string): EasybillClient;
}
export * from './types';
