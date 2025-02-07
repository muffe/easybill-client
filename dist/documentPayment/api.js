"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentPaymentAPI = void 0;
const Requestable_1 = require("../base/Requestable");
class DocumentPaymentAPI extends Requestable_1.Requestable {
    getDocumentPaymentsList(params = { limit: 100, page: 1 }) {
        return this.request({
            method: 'GET',
            url: '/document-payments',
            params,
        });
    }
    createDocumentPayment(data) {
        return this.request({
            method: 'POST',
            url: '/document-payments',
            data,
        });
    }
    getDocumentPayment(documentPaymentId) {
        return this.request({
            method: 'GET',
            url: `/document-payments/${documentPaymentId}`,
        });
    }
    deleteDocumentPayment(documentPaymentId) {
        return this.request({
            method: 'DELETE',
            url: `/document-payments/${documentPaymentId}`,
        });
    }
}
exports.DocumentPaymentAPI = DocumentPaymentAPI;
