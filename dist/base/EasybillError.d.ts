import { AxiosError } from 'axios';
export declare class EasybillError extends Error {
    statusCode: number;
    displayName: string;
    axiosError: AxiosError;
    constructor(message: string, statusCode: number, displayName: string, axiosError: AxiosError);
}
