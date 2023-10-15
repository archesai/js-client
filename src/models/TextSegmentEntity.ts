/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TextSegmentEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The id of the document that this text segment belongs to
     */
    documentId: string;
    /**
     * The text of this text segment
     */
    text: string;
    /**
     * The page that this text segment belongs to
     */
    page: number;
    /**
     * The index of this text segment in the documents text segments
     */
    index: number;
    /**
     * The organization name
     */
    orgname: string;
};

