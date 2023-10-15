/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateDocumentDto = {
    documentUrl: string;
    /**
     * The document's name
     */
    name: string;
    /**
     * The size of the documents text segments
     */
    chunkSize?: number;
    /**
     * The visibility status of the document
     */
    visibility: CreateDocumentDto.visibility;
    /**
     * The delimiter used to separate the document into text segments. If left blank, only chunkSize will be used.
     */
    delimiter?: string;
};

export namespace CreateDocumentDto {

    /**
     * The visibility status of the document
     */
    export enum visibility {
        PUBLIC = 'PUBLIC',
        PRIVATE = 'PRIVATE',
    }


}

