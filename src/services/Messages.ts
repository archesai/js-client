/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMessageDto } from '../models/CreateMessageDto';
import type { MessageEntity } from '../models/MessageEntity';
import type { PaginatedResponseOfMessageEntity } from '../models/PaginatedResponseOfMessageEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Messages {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a new message
     * Create a new message. ADMIN ONLY.
     * @returns MessageEntity Successfully created a new message
     * @throws ApiError
     */
    public create({
        orgname,
        agentId,
        threadId,
        requestBody,
    }: {
        orgname: string,
        agentId: string,
        threadId: string,
        requestBody: CreateMessageDto,
    }): CancelablePromise<MessageEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/agents/{agentId}/threads/{threadId}/messages',
            path: {
                'orgname': orgname,
                'agentId': agentId,
                'threadId': threadId,
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
     * Get all messages
     * Get all messages. ADMIN ONLY.
     * @returns PaginatedResponseOfMessageEntity Successfully returned paginated results
     * @throws ApiError
     */
    public findAll({
        orgname,
        agentId,
        threadId,
        limit = 10,
        offset,
        sortDirection = 'desc',
        sortBy = 'createdAt',
    }: {
        orgname: string,
        agentId: string,
        threadId: string,
        /**
         * The limit of the number of results returned
         */
        limit?: number,
        /**
         * The offset of the returned results
         */
        offset?: number,
        /**
         * The direction to sort the results by
         */
        sortDirection?: 'asc' | 'desc',
        sortBy?: 'createdAt',
    }): CancelablePromise<PaginatedResponseOfMessageEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/agents/{agentId}/threads/{threadId}/messages',
            path: {
                'orgname': orgname,
                'agentId': agentId,
                'threadId': threadId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'sortDirection': sortDirection,
                'sortBy': sortBy,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
