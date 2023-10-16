/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTokenDto = {
    /**
     * The role of the token
     */
    role: CreateTokenDto.role;
    /**
     * The name of the token
     */
    name: string;
    /**
     * The domains that can access this token
     */
    domains?: string;
    /**
     * The ids of the agent this token will have access to. This can not be changed later.
     */
    agentIds?: Array<string>;
};

export namespace CreateTokenDto {

    /**
     * The role of the token
     */
    export enum role {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}

