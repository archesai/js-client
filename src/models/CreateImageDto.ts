/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateImageDto = {
    /**
     * The image's name
     */
    name: string;
    /**
     * The width of the image
     */
    width: number;
    /**
     * The height of the image
     */
    height: number;
    /**
     * Whether or not to use the init image
     */
    useInit: boolean;
    /**
     * The file path or url of the init image
     */
    initImage: string;
    /**
     * The visibility status of the image
     */
    visibility: CreateImageDto.visibility;
    /**
     * The image prompt
     */
    prompt: string;
};

export namespace CreateImageDto {

    /**
     * The visibility status of the image
     */
    export enum visibility {
        PUBLIC = 'PUBLIC',
        PRIVATE = 'PRIVATE',
    }


}

