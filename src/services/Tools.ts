/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateToolDto } from '../models/CreateToolDto';
import type { PaginatedResponseOfToolEntity } from '../models/PaginatedResponseOfToolEntity';
import type { ToolEntity } from '../models/ToolEntity';
import type { UpdateToolDto } from '../models/UpdateToolDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Tools {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a new tool
     * Create a new tool. ADMIN ONLY.
     * @returns ToolEntity Successfully created a new tool
     * @throws ApiError
     */
    public create({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: CreateToolDto,
    }): CancelablePromise<ToolEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/tools',
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
     * Get all tools
     * Get all tools. ADMIN ONLY.
     * @returns PaginatedResponseOfToolEntity Successfully returned paginated results
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
    }): CancelablePromise<PaginatedResponseOfToolEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/tools',
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
     * @returns ToolEntity Successfully retrieved the tool
     * @throws ApiError
     */
    public findOne({
        orgname,
        id,
    }: {
        orgname: string,
        id: string,
    }): CancelablePromise<ToolEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/tools/{id}',
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
     * Update a tool
     * Update a tool. ADMIN ONLY.
     * @returns ToolEntity Successfully updated the tool
     * @throws ApiError
     */
    public update({
        orgname,
        id,
        requestBody,
    }: {
        orgname: string,
        id: string,
        requestBody: UpdateToolDto,
    }): CancelablePromise<ToolEntity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{orgname}/tools/{id}',
            path: {
                'orgname': orgname,
                'id': id,
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
            url: '/organizations/{orgname}/tools/{id}',
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
