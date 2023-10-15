/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobEntity } from '../models/JobEntity';
import type { PaginatedResponseOfJobEntity } from '../models/PaginatedResponseOfJobEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Jobs {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all tools
     * Get all tools. ADMIN ONLY.
     * @returns PaginatedResponseOfJobEntity Successfully returned paginated results
     * @throws ApiError
     */
    public findAll({
        orgname,
        limit = 10,
        offset,
        sortBy = 'createdAt',
        sortDirection = 'desc',
        searchTerm = '',
        startDate,
        endDate,
    }: {
        orgname: string,
        /**
         * The limit of the number of results returned
         */
        limit?: number,
        /**
         * The offset of the returned results
         */
        offset?: number,
        /**
         * The field to sort the results by
         */
        sortBy?: 'createdAt',
        /**
         * The direction to sort the results by
         */
        sortDirection?: 'asc' | 'desc',
        /**
         * Search term
         */
        searchTerm?: string,
        /**
         * The start date to search from
         */
        startDate?: string,
        /**
         * The end date to search to
         */
        endDate?: string,
    }): CancelablePromise<PaginatedResponseOfJobEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/jobs',
            path: {
                'orgname': orgname,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'sortBy': sortBy,
                'sortDirection': sortDirection,
                'searchTerm': searchTerm,
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a tool
     * Get a tool. ADMIN ONLY.
     * @returns JobEntity Successfully retrieved the tool
     * @throws ApiError
     */
    public findOne({
        orgname,
        id,
    }: {
        orgname: string,
        id: string,
    }): CancelablePromise<JobEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/jobs/{id}',
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

    /**
     * Delete a tool
     * Delete a tool. ADMIN ONLY.
     * @returns any Successfully deleted the tool
     * @throws ApiError
     */
    public remove({
        orgname,
        id,
    }: {
        orgname: string,
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}/jobs/{id}',
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
