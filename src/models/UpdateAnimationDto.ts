/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateAnimationDto = {
    /**
     * The animation's name
     */
    name: string;
    /**
     * The visibility status of the animation
     */
    visibility: UpdateAnimationDto.visibility;
};

export namespace UpdateAnimationDto {

    /**
     * The visibility status of the animation
     */
    export enum visibility {
        PUBLIC = 'PUBLIC',
        PRIVATE = 'PRIVATE',
    }


}

