/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateImageDto } from '../models/CreateImageDto';
import type { ImageEntity } from '../models/ImageEntity';
import type { PaginatedResponseOfImageEntity } from '../models/PaginatedResponseOfImageEntity';
import type { UpdateImageDto } from '../models/UpdateImageDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Images {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create an image
     * Create an image. ADMIN ONLY.
     * @returns ImageEntity Successfully created image
     * @throws ApiError
     */
    public create({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: CreateImageDto,
    }): CancelablePromise<ImageEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/images',
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
     * Get all images
     * Get all images. ADMIN ONLY.
     * @returns PaginatedResponseOfImageEntity Successfully returned paginated results
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
    }): CancelablePromise<PaginatedResponseOfImageEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/images',
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
     * Get a image
     * Get a image. ADMIN ONLY.
     * @returns ImageEntity Successfully returned image
     * @throws ApiError
     */
    public findOne({
        orgname,
        imageId,
    }: {
        orgname: string,
        imageId: string,
    }): CancelablePromise<ImageEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/images/{imageId}',
            path: {
                'orgname': orgname,
                'imageId': imageId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update a image
     * Update a image. ADMIN ONLY.
     * @returns ImageEntity Successfully updated image
     * @throws ApiError
     */
    public update({
        orgname,
        imageId,
        requestBody,
    }: {
        orgname: string,
        imageId: string,
        requestBody: UpdateImageDto,
    }): CancelablePromise<ImageEntity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{orgname}/images/{imageId}',
            path: {
                'orgname': orgname,
                'imageId': imageId,
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
     * Delete a image
     * Delete a image. ADMIN ONLY.
     * @returns any Successfully deleted image
     * @throws ApiError
     */
    public remove({
        orgname,
        imageId,
    }: {
        orgname: string,
        imageId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}/images/{imageId}',
            path: {
                'orgname': orgname,
                'imageId': imageId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
