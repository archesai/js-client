/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PathDto } from '../models/PathDto';
import type { ReadUrlDto } from '../models/ReadUrlDto';
import type { StorageItemDto } from '../models/StorageItemDto';
import type { WriteUrlDto } from '../models/WriteUrlDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Storage {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Read file
     * This endpoint will return a url for reading a file in the organization's secure storage. It will be valid for 15 minutes. ADMIN ONLY.
     * @returns ReadUrlDto Read  url was successfully created
     * @throws ApiError
     */
    public getReadUrl({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: PathDto,
    }): CancelablePromise<ReadUrlDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/storage/read',
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
     * Write file
     * This endpoint will return a url for writing to a file location in the organization's secure storage. You must write your file to the url returned by this endpoint. If you use is isDir param, it will create a directory instead of a file and you do not need to write to the url. ADMIN ONLY.
     * @returns WriteUrlDto Write urls was successfully created
     * @throws ApiError
     */
    public getWriteUrl({
        orgname,
        requestBody,
    }: {
        orgname: string,
        requestBody: PathDto,
    }): CancelablePromise<WriteUrlDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/storage/write',
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
     * Show directory
     * This endpoint will return a list of files and directories in the organization's secure storage at the specified path. ADMIN ONLY.
     * @returns StorageItemDto Path was successfully retrieved
     * @throws ApiError
     */
    public listDirectory({
        orgname,
        path,
    }: {
        orgname: string,
        path: string,
    }): CancelablePromise<Array<StorageItemDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{orgname}/storage/items',
            path: {
                'orgname': orgname,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete file or directory
     * This endpoint will delete a file or directory in the organization's secure storage at the specified path. ADMIN ONLY.
     * @returns any Path was successfully deleted
     * @throws ApiError
     */
    public delete({
        orgname,
        path,
    }: {
        orgname: string,
        path: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{orgname}/storage/delete',
            path: {
                'orgname': orgname,
            },
            query: {
                'path': path,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
