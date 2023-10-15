/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDocumentDto } from '../models/CreateDocumentDto';
import type { DocumentEntity } from '../models/DocumentEntity';
import type { PaginatedResponseOfDocumentEntity } from '../models/PaginatedResponseOfDocumentEntity';
import type { PaginatedResponseOfTextSegmentEntity } from '../models/PaginatedResponseOfTextSegmentEntity';
import type { UpdateDocumentDto } from '../models/UpdateDocumentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Documents {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Index a document
     * Index a document. ADMIN ONLY.
     * @returns DocumentEntity Successfully created document
     * @throws ApiError
     */
    public create({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: CreateDocumentDto,
    }): CancelablePromise<DocumentEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/documents',
            path: {
                'orgname': orgname,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Source URL`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get all documents
     * Get all documents. ADMIN ONLY.
     * @returns PaginatedResponseOfDocumentEntity Successfully returned paginated results
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
        sortBy?: 'createdAt' | 'name',
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
    }): CancelablePromise<PaginatedResponseOfDocumentEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/documents',
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
     * Get a document
     * Get a document. ADMIN ONLY.
     * @returns DocumentEntity Successfully returned document
     * @throws ApiError
     */
    public findOne({
        orgname,
        docId,
    }: {
        orgname: string,
        docId: string,
    }): CancelablePromise<DocumentEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/documents/{docId}',
            path: {
                'orgname': orgname,
                'docId': docId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update a document
     * Update a document. ADMIN ONLY.
     * @returns DocumentEntity Successfully updated document
     * @throws ApiError
     */
    public update({
        orgname,
        docId,
        requestBody,
    }: {
        orgname: string,
        docId: string,
        requestBody: UpdateDocumentDto,
    }): CancelablePromise<DocumentEntity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{orgname}/documents/{docId}',
            path: {
                'orgname': orgname,
                'docId': docId,
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
     * Delete a document
     * Delete a document. ADMIN ONLY.
     * @returns any Successfully deleted document
     * @throws ApiError
     */
    public remove({
        orgname,
        docId,
    }: {
        orgname: string,
        docId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}/documents/{docId}',
            path: {
                'orgname': orgname,
                'docId': docId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get all text segments
     * Get all text segments from a document. ADMIN ONLY.
     * @returns PaginatedResponseOfTextSegmentEntity Successfully returned paginated results
     * @throws ApiError
     */
    public getTextSegments({
        orgname,
        docId,
        limit = 10,
        offset,
        sortDirection = 'desc',
        sortBy = 'index',
    }: {
        orgname: string,
        docId: string,
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
            url: '/organizations/{orgname}/documents/{docId}/text-segments',
            path: {
                'orgname': orgname,
                'docId': docId,
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
