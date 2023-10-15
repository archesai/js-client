/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentEntity } from '../models/AgentEntity';
import type { CreateAgentDto } from '../models/CreateAgentDto';
import type { PaginatedResponseOfAgentEntity } from '../models/PaginatedResponseOfAgentEntity';
import type { UpdateAgentDto } from '../models/UpdateAgentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Agents {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create an agent
     * Create an agent. ADMIN ONLY.
     * @returns AgentEntity Successfully created agent
     * @throws ApiError
     */
    public create({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: CreateAgentDto,
    }): CancelablePromise<AgentEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/agents',
            path: {
                'orgname': orgname,
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
     * Get all agents
     * Get all agents. ADMIN ONLY.
     * @returns PaginatedResponseOfAgentEntity Successfully returned paginated results
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
    }): CancelablePromise<PaginatedResponseOfAgentEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/agents',
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
                404: `Not Found`,
            },
        });
    }

    /**
     * Update an agent
     * Update an agent. ADMIN ONLY.
     * @returns AgentEntity Successfully returned agent
     * @throws ApiError
     */
    public update({
        orgname,
        agentId,
        requestBody,
    }: {
        orgname: string,
        agentId: string,
        requestBody: UpdateAgentDto,
    }): CancelablePromise<AgentEntity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{orgname}/agents/{agentId}',
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
     * Get an agent
     * Get an agent. ADMIN ONLY.
     * @returns AgentEntity Successfully returned agent
     * @throws ApiError
     */
    public findOne({
        orgname,
        agentId,
    }: {
        orgname: string,
        agentId: string,
    }): CancelablePromise<AgentEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/agents/{agentId}',
            path: {
                'orgname': orgname,
                'agentId': agentId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete an agent
     * Delete an agent. ADMIN ONLY.
     * @returns any Successfully deleted agent
     * @throws ApiError
     */
    public remove({
        orgname,
        agentId,
    }: {
        orgname: string,
        agentId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}/agents/{agentId}',
            path: {
                'orgname': orgname,
                'agentId': agentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
