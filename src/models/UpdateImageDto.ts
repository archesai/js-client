/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateImageDto = {
    /**
     * The image's name
     */
    name: string;
    /**
     * The visibility status of the image
     */
    visibility: UpdateImageDto.visibility;
};

export namespace UpdateImageDto {

    /**
     * The visibility status of the image
     */
    export enum visibility {
        PUBLIC = 'PUBLIC',
        PRIVATE = 'PRIVATE',
    }


}

