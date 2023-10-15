/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MemberEntity } from './MemberEntity';

export type UserEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    /**
     * The user's username
     */
    username: string;
    /**
     * The user's photo url
     */
    photoUrl: string;
    /**
     * The user's default organization name
     */
    defaultOrgname: string;
    /**
     * The user's e-mail
     */
    email: string;
    /**
     * The user's first name
     */
    firstName: string;
    /**
     * The user's last name
     */
    lastName: string;
    /**
     * The user's display name
     */
    displayName: string;
    /**
     * Whether or not the user has been set up yet
     */
    userSetup: boolean;
    /**
     * The number of questions remaining for this user
     */
    questionsRemaining: number;
    /**
     * Whether or not the user's e-mail has been verified
     */
    emailVerified: boolean;
    /**
     * The memberships of the currently signed in user
     */
    memberships: Array<MemberEntity>;
};

