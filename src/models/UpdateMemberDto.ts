/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateMemberDto = {
    /**
     * The invited email of this member
     */
    inviteEmail?: string;
    /**
     * The role of the member
     */
    role?: UpdateMemberDto.role;
};

export namespace UpdateMemberDto {

    /**
     * The role of the member
     */
    export enum role {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}

