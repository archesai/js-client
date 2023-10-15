/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimationEntity } from '../models/AnimationEntity';
import type { CreateAnimationDto } from '../models/CreateAnimationDto';
import type { PaginatedResponseOfAnimationEntity } from '../models/PaginatedResponseOfAnimationEntity';
import type { UpdateAnimationDto } from '../models/UpdateAnimationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Animations {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create an animation
     * Create an animation. ADMIN ONLY.
     * @returns AnimationEntity Successfully created animation
     * @throws ApiError
     */
    public create({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: CreateAnimationDto,
    }): CancelablePromise<AnimationEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/animations',
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
     * Get all animations
     * Get all animations. ADMIN ONLY.
     * @returns PaginatedResponseOfAnimationEntity Successfully returned paginated results
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
    }): CancelablePromise<PaginatedResponseOfAnimationEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/animations',
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
     * Get a animation
     * Get a animation. ADMIN ONLY.
     * @returns AnimationEntity Successfully returned animation
     * @throws ApiError
     */
    public findOne({
        orgname,
        animationId,
    }: {
        orgname: string,
        animationId: string,
    }): CancelablePromise<AnimationEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/animations/{animationId}',
            path: {
                'orgname': orgname,
                'animationId': animationId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update a animation
     * Update a animation. ADMIN ONLY.
     * @returns AnimationEntity Successfully updated animation
     * @throws ApiError
     */
    public update({
        orgname,
        animationId,
        requestBody,
    }: {
        orgname: string,
        animationId: string,
        requestBody: UpdateAnimationDto,
    }): CancelablePromise<AnimationEntity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{orgname}/animations/{animationId}',
            path: {
                'orgname': orgname,
                'animationId': animationId,
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
     * Delete a animation
     * Delete a animation. ADMIN ONLY.
     * @returns any Successfully deleted animation
     * @throws ApiError
     */
    public remove({
        orgname,
        animationId,
    }: {
        orgname: string,
        animationId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}/animations/{animationId}',
            path: {
                'orgname': orgname,
                'animationId': animationId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
