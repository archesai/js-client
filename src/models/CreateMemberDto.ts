/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateMemberDto = {
    /**
     * The invited email of this member
     */
    inviteEmail: string;
    /**
     * The role of the member
     */
    role: CreateMemberDto.role;
};

export namespace CreateMemberDto {

    /**
     * The role of the member
     */
    export enum role {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}

