import { Requestable } from '../base/Requestable';
import { ResultList } from '../base/ResultList';
import { CreateCustomerParams, Customer, GetCustomersListParams } from '../types';
export declare class CustomerAPI extends Requestable {
    getCustomersList(params?: GetCustomersListParams): Promise<ResultList<Customer>>;
    getCustomer(customerId: number): Promise<Customer>;
    createCustomer(data: CreateCustomerParams): Promise<Customer>;
    updateCustomer(customerId: number, data: CreateCustomerParams): Promise<Customer>;
    deleteCustomer(customerId: number): Promise<void>;
}
