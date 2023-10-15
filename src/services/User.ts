/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { UserEntity } from '../models/UserEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class User {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get current user
     * This endpoint can be used to find out about the currently authorized user. USER and ADMIN can use endpoint.
     * @returns UserEntity User was successfully returned
     * @throws ApiError
     */
    public findOne(): CancelablePromise<UserEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update current user
     * This endpoint can be used to update the currently authorized user. ADMIN ONLY.
     * @returns UserEntity User was successfully updated
     * @throws ApiError
     */
    public update({
        requestBody,
    }: {
        requestBody: UpdateUserDto,
    }): CancelablePromise<UserEntity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
