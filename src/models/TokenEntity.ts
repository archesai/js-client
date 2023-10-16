/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AgentsFieldItem } from './AgentsFieldItem';

export type TokenEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    /**
     * The role of the token
     */
    role: TokenEntity.role;
    /**
     * The name of the token
     */
    name: string;
    /**
     * The organization name
     */
    orgname: string;
    /**
     * The username of the user who owns this token
     */
    username: string;
    /**
     * The token snippet
     */
    snippet: string;
    /**
     * The domains that can access this token
     */
    domains?: string;
    /**
     * The agents this token has access to
     */
    agents: Array<AgentsFieldItem>;
};

export namespace TokenEntity {

    /**
     * The role of the token
     */
    export enum role {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}

