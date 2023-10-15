/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrganizationEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    /**
     * The name of the organization to create
     */
    orgname: string;
    /**
     * The billing email to use for the organization
     */
    billingEmail: string;
    /**
     * The plan that the organization is subscribed to
     */
    plan: OrganizationEntity.plan;
    /**
     * The number of credits you have remaining for this organization
     */
    credits: number;
};

export namespace OrganizationEntity {

    /**
     * The plan that the organization is subscribed to
     */
    export enum plan {
        FREE = 'FREE',
        BASIC = 'BASIC',
        PREMIUM = 'PREMIUM',
        API = 'API',
    }


}

