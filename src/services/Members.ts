/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMemberDto } from '../models/CreateMemberDto';
import type { MemberEntity } from '../models/MemberEntity';
import type { PaginatedResponseOfMemberEntity } from '../models/PaginatedResponseOfMemberEntity';
import type { UpdateMemberDto } from '../models/UpdateMemberDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Members {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get the members of an organization
     * Get the members of an organization. ADMIN ONLY.
     * @returns PaginatedResponseOfMemberEntity Successfully returned paginated results
     * @throws ApiError
     */
    public getMembers({
        orgname,
        limit = 10,
        offset,
        sortBy = 'username',
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
        sortBy?: 'createdAt' | 'username',
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
    }): CancelablePromise<PaginatedResponseOfMemberEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/members',
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
     * Create a new member for an organization
     * Create a new member for an organization. ADMIN ONLY.
     * @returns MemberEntity Member was successfully created
     * @throws ApiError
     */
    public createMember({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: CreateMemberDto,
    }): CancelablePromise<MemberEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/members',
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
     * Remove a member from an organization
     * Remove a member from an organization. ADMIN ONLY.
     * @returns any Member was successfully deleted
     * @throws ApiError
     */
    public removeMember({
        orgname,
        memberId,
    }: {
        orgname: string,
        memberId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}/members/{memberId}',
            path: {
                'orgname': orgname,
                'memberId': memberId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update a member from an organization
     * Update a member from an organization. ADMIN ONLY.
     * @returns MemberEntity Member was successfully updated
     * @throws ApiError
     */
    public update({
        orgname,
        memberId,
        requestBody,
    }: {
        orgname: string,
        memberId: string,
        requestBody: UpdateMemberDto,
    }): CancelablePromise<MemberEntity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{orgname}/members/{memberId}',
            path: {
                'orgname': orgname,
                'memberId': memberId,
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
     * Accept invitation to this organization
     * Accept invitation to this organization. ADMIN ONLY.
     * @returns MemberEntity Member was successfully updated
     * @throws ApiError
     */
    public join({
        orgname,
    }: {
        orgname: string,
    }): CancelablePromise<MemberEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/members/join',
            path: {
                'orgname': orgname,
            },
            errors: {
                401: `Unauthorized`,
                403: `Email not verified`,
                404: `Not Found`,
            },
        });
    }

}
