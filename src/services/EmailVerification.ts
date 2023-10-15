/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmailVerification {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Resend e-mail verification
     * This endpoint will send an e-mail verification link to you. ADMIN ONLY.
     * @returns any E-mail verification link sent
     * @throws ApiError
     */
    public sendEmailVerification(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/email-verification/resend',
            errors: {
                400: `Already Verified`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * Confirm e-mail verification
     * This endpoint will confirm your e-mail with a token
     * @returns any E-mail verification confirmed
     * @throws ApiError
     */
    public confirmEmailVerification({
        token,
    }: {
        token: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/email-verification/confirm',
            query: {
                'token': token,
            },
            errors: {
                400: `Already Verified`,
                401: `Unauthorized`,
            },
        });
    }

}
