/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobEntity } from './JobEntity';

export type DocumentEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    contentType: string;
    documentUrl: string;
    /**
     * @deprecated
     */
    sourceUrl: string;
    md5Hash: string;
    /**
     * The document size in bytes
     */
    size: string;
    /**
     * The document's name
     */
    name: string;
    /**
     * The document's summary
     */
    summary: string;
    /**
     * This job associated with this document
     */
    job: JobEntity;
    /**
     * The organization name
     */
    orgname: string;
    /**
     * The number of credits used to embed this document
     */
    credits: number;
    /**
     * The size of the documents text segments
     */
    chunkSize?: number;
    /**
     * The delimiter used to separate the document into text segments. If left blank, only chunkSize will be used.
     */
    delimiter?: string;
    /**
     * The visibility status of the document
     */
    visibility?: DocumentEntity.visibility;
    /**
     * The link to a preview image of the document
     */
    previewImage: string;
};

export namespace DocumentEntity {

    /**
     * The visibility status of the document
     */
    export enum visibility {
        PUBLIC = 'PUBLIC',
        PRIVATE = 'PRIVATE',
    }


}

