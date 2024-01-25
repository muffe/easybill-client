"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentAPI = void 0;
const Requestable_1 = require("../base/Requestable");
class DocumentAPI extends Requestable_1.Requestable {
    getDocumentsList(params = { limit: 100, page: 1 }) {
        return this.request({
            method: 'GET',
            url: '/documents',
            params,
        });
    }
    getDocument(documentId) {
        return this.request({
            method: 'GET',
            url: `/documents/${documentId}`,
        });
    }
    createDocument(data) {
        return this.request({
            method: 'POST',
            url: '/documents',
            data,
        });
    }
    updateDocument(documentId, data) {
        return this.request({
            method: 'PUT',
            url: `/documents/${documentId}`,
            data,
        });
    }
    deleteDocument(documentId) {
        return this.request({
            method: 'DELETE',
            url: `/documents/${documentId}`,
        });
    }
    completeDocument(documentId) {
        return this.request({
            method: 'PUT',
            url: `/documents/${documentId}/done`,
        });
    }
    cancelDocument(documentId, config = {}) {
        var _a;
        return this.request({
            method: 'POST',
            url: `/documents/${documentId}/cancel?use_text_from_template=${(_a = config.use_text_from_template) !== null && _a !== void 0 ? _a : false}`,
        });
    }
    sendDocument(documentId, config) {
        const { type, body } = config;
        return this.request({
            method: 'POST',
            url: `/documents/${documentId}/send/${type}`,
            data: body,
        });
    }
    /**
     *
     * @returns the file's content as binary string
     */
    getDocumentPdf(documentId) {
        return this.request({
            method: 'GET',
            url: `/documents/${documentId}/pdf`,
            headers: {
                accept: 'application/pdf',
            },
            responseType: 'arraybuffer',
        });
    }
}
exports.DocumentAPI = DocumentAPI;
