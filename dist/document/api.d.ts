import { Requestable } from '../base/Requestable';
import { ResultList } from '../base/ResultList';
import { CreateDocumentParams, Document, GetDocumentsListParams, SendDocumentBody } from '../types';
export declare class DocumentAPI extends Requestable {
    getDocumentsList(params?: GetDocumentsListParams): Promise<ResultList<Document>>;
    getDocument(documentId: number): Promise<Document>;
    createDocument(data: CreateDocumentParams): Promise<Document>;
    updateDocument(documentId: number, data: CreateDocumentParams): Promise<Document>;
    deleteDocument(documentId: number): Promise<void>;
    completeDocument(documentId: number): Promise<Document>;
    cancelDocument(documentId: number, config?: {
        use_text_from_template?: boolean;
        pdf_template?: string;
    }): Promise<Document>;
    sendDocument(documentId: number, config: {
        type: 'email' | 'fax' | 'post';
        body: SendDocumentBody;
    }): Promise<void>;
    /**
     *
     * @returns the file's content as binary string
     */
    getDocumentPdf(documentId: number): Promise<string>;
}
