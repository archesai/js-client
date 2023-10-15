/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTokenDto } from '../models/CreateTokenDto';
import type { SignedTokenDto } from '../models/SignedTokenDto';
import type { TokenEntity } from '../models/TokenEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessTokens {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get access tokens
     * Get access tokens. ADMIN ONLY.
     * @returns TokenEntity Successfully returned access tokens
     * @throws ApiError
     */
    public getTokens({
        orgname,
    }: {
        orgname: string,
    }): CancelablePromise<Array<TokenEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/tokens',
            path: {
                'orgname': orgname,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create an access token
     * Create an access token. ADMIN ONLY.
     * @returns SignedTokenDto Successfully created access token
     * @throws ApiError
     */
    public create({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: CreateTokenDto,
    }): CancelablePromise<SignedTokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/tokens',
            path: {
                'orgname': orgname,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete an access token
     * Delete an access token. ADMIN ONLY.
     * @returns any Successfully deleted access token
     * @throws ApiError
     */
    public delete({
        orgname,
        id,
    }: {
        orgname: string,
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}/tokens/{id}',
            path: {
                'orgname': orgname,
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
