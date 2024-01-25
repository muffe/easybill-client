import { Requestable } from '../base/Requestable';
import { ResultList } from '../base/ResultList';
import { CreateCustomerGroupParams, CustomerGroup, GetCustomersGroupListParams } from '../types';
export declare class CustomerGroupAPI extends Requestable {
    getCustomerGroupList(params?: GetCustomersGroupListParams): Promise<ResultList<CustomerGroup>>;
    getCustomerGroup(customerGroupId: number): Promise<CustomerGroup>;
    createCustomerGroup(data: CreateCustomerGroupParams): Promise<CustomerGroup>;
    updateCustomerGroup(customerGroupId: number, data: CreateCustomerGroupParams): Promise<CustomerGroup>;
    deleteCustomerGroup(customerGroupId: number): Promise<void>;
}
