/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateThreadDto } from '../models/CreateThreadDto';
import type { PaginatedResponseOfThreadEntity } from '../models/PaginatedResponseOfThreadEntity';
import type { ThreadEntity } from '../models/ThreadEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Threads {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a new thread
     * Create a new thread. USER and ADMIN can access this endpoint.
     * @returns ThreadEntity Successfully created a new thread
     * @throws ApiError
     */
    public create({
        orgname,
        agentId,
        requestBody,
    }: {
        orgname: string,
        agentId: string,
        requestBody: CreateThreadDto,
    }): CancelablePromise<ThreadEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/agents/{agentId}/threads',
            path: {
                'orgname': orgname,
                'agentId': agentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get all threads
     * Get all threads. ADMIN ONLY.
     * @returns PaginatedResponseOfThreadEntity Successfully returned paginated results
     * @throws ApiError
     */
    public findAll({
        orgname,
        agentId,
        limit = 10,
        offset,
        sortBy = 'createdAt',
        sortDirection = 'desc',
        searchTerm = '',
        startDate,
        endDate,
        aggregates = false,
        aggregateGranularity,
    }: {
        orgname: string,
        agentId: string,
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
        sortBy?: 'createdAt' | 'credits',
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
        /**
         * Whether or not to include aggregates in the response
         */
        aggregates?: boolean,
        /**
         * The granularity to use for ranged aggregates
         */
        aggregateGranularity?: 'day' | 'week' | 'month' | 'year',
    }): CancelablePromise<PaginatedResponseOfThreadEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/agents/{agentId}/threads',
            path: {
                'orgname': orgname,
                'agentId': agentId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'sortBy': sortBy,
                'sortDirection': sortDirection,
                'searchTerm': searchTerm,
                'startDate': startDate,
                'endDate': endDate,
                'aggregates': aggregates,
                'aggregateGranularity': aggregateGranularity,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a thread
     * Get a thread. ADMIN ONLY.
     * @returns ThreadEntity Successfully retrieved the thread
     * @throws ApiError
     */
    public findOne({
        orgname,
        agentId,
        threadId,
    }: {
        orgname: string,
        agentId: string,
        threadId: string,
    }): CancelablePromise<ThreadEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/agents/{agentId}/threads/{threadId}',
            path: {
                'orgname': orgname,
                'agentId': agentId,
                'threadId': threadId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a thread
     * Delete a thread. ADMIN ONLY.
     * @returns any Successfully deleted the thread
     * @throws ApiError
     */
    public remove({
        orgname,
        agentId,
        threadId,
    }: {
        orgname: string,
        agentId: string,
        threadId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}/agents/{agentId}/threads/{threadId}',
            path: {
                'orgname': orgname,
                'agentId': agentId,
                'threadId': threadId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
