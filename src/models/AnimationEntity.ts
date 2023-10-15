/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobEntity } from './JobEntity';

export type AnimationEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    contentType: string;
    animationUrl: string;
    /**
     * The animation's name
     */
    name: string;
    /**
     * The preview image of the animation
     */
    previewImage: string;
    /**
     * This job associated with this animation
     */
    job: JobEntity;
    /**
     * The organization name
     */
    orgname: string;
    /**
     * The number of credits used to embed this animation
     */
    credits: number;
    /**
     * The length of the animation
     */
    length: number;
    /**
     * The number of frames used in this animation
     */
    maxFrames: number;
    /**
     * The frames used per second
     */
    fps: number;
    /**
     * The width of the animation
     */
    width: number;
    /**
     * The height of the animation
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
     * The visibility status of the animation
     */
    visibility: AnimationEntity.visibility;
    /**
     * The animation prompts of the animation
     */
    animationPrompts: string;
    /**
     * Whether or not to use the audio
     */
    useAudio?: boolean;
    /**
     * The audio start time in seconds
     */
    audioStart?: number;
    /**
     * The file path or url of the audio
     */
    audioUrl?: string;
    /**
     * The translation x mapped to keyframes of the animation
     */
    translationX?: string;
    /**
     * The translation y mapped to keyframes of the animation
     */
    translationY?: string;
    /**
     * The translation z mapped to keyframes of the animation
     */
    translationZ?: string;
    /**
     * The translation x mapped to keyframes of the animation in 3d mode
     */
    translation3DX?: string;
    /**
     * The translation y mapped to keyframes of the animation in 3d mode
     */
    translation3DY?: string;
    /**
     * The translation z mapped to keyframes of the animation in 3d mode
     */
    translation3DZ?: string;
    /**
     * The border type
     */
    border?: string;
    /**
     * The zoom mapped to keyframes of the animation
     */
    zoom?: string;
    /**
     * The animation mode of the clip
     */
    mode?: string;
};

export namespace AnimationEntity {

    /**
     * The visibility status of the animation
     */
    export enum visibility {
        PUBLIC = 'PUBLIC',
        PRIVATE = 'PRIVATE',
    }


}

