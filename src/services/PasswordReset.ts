/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PasswordReset {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Password reset
     * This endpoint will send an e-mail verification link to you
     * @returns any Password reset link sent
     * @throws ApiError
     */
    public passwordReset({
        email,
    }: {
        email: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/password-reset',
            query: {
                'email': email,
            },
        });
    }

}
