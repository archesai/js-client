/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedResponseOfTextSegmentEntity } from '../models/PaginatedResponseOfTextSegmentEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TextSegments {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all text segments
     * Get all text segments from all documents in your organization. ADMIN ONLY.
     * @returns PaginatedResponseOfTextSegmentEntity Successfully returned paginated results
     * @throws ApiError
     */
    public findAll({
        orgname,
        limit = 10,
        offset,
        sortDirection = 'desc',
        sortBy = 'index',
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
         * The direction to sort the results by
         */
        sortDirection?: 'asc' | 'desc',
        sortBy?: 'index' | 'page',
    }): CancelablePromise<PaginatedResponseOfTextSegmentEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/text-segments',
            path: {
                'orgname': orgname,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'sortDirection': sortDirection,
                'sortBy': sortBy,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}
