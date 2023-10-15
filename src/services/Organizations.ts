/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrganizationDto } from '../models/CreateOrganizationDto';
import type { OrganizationEntity } from '../models/OrganizationEntity';
import type { UpdateOrganizationDto } from '../models/UpdateOrganizationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Organizations {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create an organization
     * Create an organization. ADMIN ONLY.
     * @returns OrganizationEntity Organization was successfully created
     * @throws ApiError
     */
    public create({
        requestBody,
    }: {
        requestBody: CreateOrganizationDto,
    }): CancelablePromise<OrganizationEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Email not verified`,
            },
        });
    }

    /**
     * Get an organization
     * Get an organization. ADMIN ONLY.
     * @returns OrganizationEntity Organization was successfully returned
     * @throws ApiError
     */
    public findOne({
        orgname,
    }: {
        orgname: string,
    }): CancelablePromise<OrganizationEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}',
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
     * Delete an organization
     * Delete an organization. ADMIN ONLY.
     * @returns any Organization was successfully deleted
     * @throws ApiError
     */
    public delete({
        orgname,
    }: {
        orgname: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}',
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
     * Update an organization
     * Update an organization. ADMIN ONLY.
     * @returns any Organization was successfully updated
     * @throws ApiError
     */
    public update({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: UpdateOrganizationDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{orgname}',
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

}
