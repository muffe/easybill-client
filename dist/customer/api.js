"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAPI = void 0;
const Requestable_1 = require("../base/Requestable");
class CustomerAPI extends Requestable_1.Requestable {
    getCustomersList(params = { limit: 100, page: 1 }) {
        return this.request({
            method: 'GET',
            url: '/customers',
            params,
        });
    }
    getCustomer(customerId) {
        return this.request({
            method: 'GET',
            url: `/customers/${customerId}`,
        });
    }
    createCustomer(data) {
        return this.request({
            method: 'POST',
            url: '/customers',
            data,
        });
    }
    updateCustomer(customerId, data) {
        return this.request({
            method: 'PUT',
            url: `/customers/${customerId}`,
            data,
        });
    }
    deleteCustomer(customerId) {
        return this.request({
            method: 'DELETE',
            url: `/customers/${customerId}`,
        });
    }
}
exports.CustomerAPI = CustomerAPI;
