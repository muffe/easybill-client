import { Requestable } from '../base/Requestable';
import { ResultList } from '../base/ResultList';
import { CreateDocumentPaymentParams, DocumentPayment, GetDocumentPaymentsListParams } from '../types';
export declare class DocumentPaymentAPI extends Requestable {
    getDocumentPaymentsList(params?: GetDocumentPaymentsListParams): Promise<ResultList<DocumentPayment>>;
    createDocumentPayment(data: CreateDocumentPaymentParams): Promise<DocumentPayment>;
    getDocumentPayment(documentPaymentId: number): Promise<DocumentPayment>;
    deleteDocumentPayment(documentPaymentId: number): Promise<void>;
}
