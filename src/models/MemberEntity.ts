/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MemberEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    /**
     * The invited email of this member
     */
    inviteEmail: string;
    /**
     * Whether the invite was accepted
     */
    inviteAccepted: boolean;
    /**
     * The role of the member
     */
    role: MemberEntity.role;
    /**
     * The organization name
     */
    orgname: string;
    /**
     * The username of this member
     */
    username: string;
};

export namespace MemberEntity {

    /**
     * The role of the member
     */
    export enum role {
        USER = 'USER',
        ADMIN = 'ADMIN',
    }


}

