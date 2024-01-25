"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerGroupAPI = void 0;
const Requestable_1 = require("../base/Requestable");
class CustomerGroupAPI extends Requestable_1.Requestable {
    getCustomerGroupList(params = { limit: 100, page: 1 }) {
        return this.request({
            method: 'GET',
            url: '/customer-groups',
            params,
        });
    }
    getCustomerGroup(customerGroupId) {
        return this.request({
            method: 'GET',
            url: `/customer-groups/${customerGroupId}`,
        });
    }
    createCustomerGroup(data) {
        return this.request({
            method: 'POST',
            url: '/customer-groups',
            data,
        });
    }
    updateCustomerGroup(customerGroupId, data) {
        return this.request({
            method: 'PUT',
            url: `/customer-groups/${customerGroupId}`,
            data,
        });
    }
    deleteCustomerGroup(customerGroupId) {
        return this.request({
            method: 'DELETE',
            url: `/customer-groups/${customerGroupId}`,
        });
    }
}
exports.CustomerGroupAPI = CustomerGroupAPI;
