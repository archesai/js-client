/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDocumentDto = {
    /**
     * The document's name
     */
    name: string;
    /**
     * The visibility status of the document
     */
    visibility: UpdateDocumentDto.visibility;
};

export namespace UpdateDocumentDto {

    /**
     * The visibility status of the document
     */
    export enum visibility {
        PUBLIC = 'PUBLIC',
        PRIVATE = 'PRIVATE',
    }


}

