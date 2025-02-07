import { definitions, paths } from '../generated/types';
export type DocumentPayment = definitions['DocumentPayment'];
export type GetDocumentPaymentsListParams = paths['/document-payments']['get']['parameters']['query'];
export type CreateDocumentPaymentParams = paths['/document-payments']['post']['parameters']['body']['body'];
export type GetDocumentPaymentParams = paths['/document-payments/{id}']['get']['parameters']['path'];
export type DeleteDocumentPaymentParams = paths['/document-payments/{id}']['delete']['parameters']['path'];
