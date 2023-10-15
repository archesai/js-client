/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDto } from '../models/LoginDto';
import type { RegisterDto } from '../models/RegisterDto';
import type { TokenDto } from '../models/TokenDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Authentication {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Register
     * This endpoint will register a new account and return a JWT token which should be provided in your auth headers
     * @returns TokenDto User was created successfully
     * @throws ApiError
     */
    public register({
        requestBody,
    }: {
        requestBody: RegisterDto,
    }): CancelablePromise<TokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User already exists with provided email`,
            },
        });
    }

    /**
     * Login
     * @returns TokenDto User was created successfully
     * @throws ApiError
     */
    public login({
        requestBody,
    }: {
        requestBody: LoginDto,
    }): CancelablePromise<TokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Deactivate
     * @returns any User was deleted successfully
     * @throws ApiError
     */
    public deactivate({
        requestBody,
    }: {
        requestBody: LoginDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/deactivate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
