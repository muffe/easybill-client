import { Requestable } from '../base/Requestable';
import { ResultList } from '../base/ResultList';
import {CreateDocumentPaymentParams, DocumentPayment, GetDocumentPaymentsListParams} from '../types';

export class DocumentPaymentAPI extends Requestable {
    getDocumentPaymentsList(
        params: GetDocumentPaymentsListParams = { limit: 100, page: 1 },
    ): Promise<ResultList<DocumentPayment>> {
        return this.request<ResultList<DocumentPayment>>({
        method: 'GET',
        url: '/document-payments',
        params,
        });
    }

    createDocumentPayment(data: CreateDocumentPaymentParams): Promise<DocumentPayment> {
        return this.request<DocumentPayment>({
        method: 'POST',
        url: '/document-payments',
        data,
        });
    }

    getDocumentPayment(documentPaymentId: number): Promise<DocumentPayment> {
        return this.request<DocumentPayment>({
        method: 'GET',
        url: `/document-payments/${documentPaymentId}`,
        });
    }

    deleteDocumentPayment(documentPaymentId: number): Promise<void> {
        return this.request<void>({
        method: 'DELETE',
        url: `/document-payments/${documentPaymentId}`,
        });
    }
}