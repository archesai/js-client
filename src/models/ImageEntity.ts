/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobEntity } from './JobEntity';

export type ImageEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    contentType: string;
    imageUrl: string;
    /**
     * The image's name
     */
    name: string;
    /**
     * This job associated with this image
     */
    job: JobEntity;
    /**
     * The organization name
     */
    orgname: string;
    /**
     * The number of credits used to embed this image
     */
    credits: number;
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
    visibility: ImageEntity.visibility;
    /**
     * The image prompt
     */
    prompt: string;
};

export namespace ImageEntity {

    /**
     * The visibility status of the image
     */
    export enum visibility {
        PUBLIC = 'PUBLIC',
        PRIVATE = 'PRIVATE',
    }


}

