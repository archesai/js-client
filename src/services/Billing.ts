/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingUrlEntity } from '../models/BillingUrlEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Billing {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a checkout session for an organization
     * This endpoint will create a checkout session for an organization to purchase a subscription. Only available on archesai.com. ADMIN ONLY.
     * @returns BillingUrlEntity Successfully created url
     * @throws ApiError
     */
    public createCheckoutSession({
        orgname,
        product,
    }: {
        orgname: string,
        product: string,
    }): CancelablePromise<BillingUrlEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/checkout',
            path: {
                'orgname': orgname,
            },
            query: {
                'product': product,
            },
            errors: {
                400: `Bad Product`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a billing portal for an organization
     * This endpoint will create a billing for an organization to edit their subscription and billing information. Only available on archesai.com. ADMIN ONLY.
     * @returns BillingUrlEntity Successfully created url
     * @throws ApiError
     */
    public createBillingPortal({
        orgname,
    }: {
        orgname: string,
    }): CancelablePromise<BillingUrlEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{orgname}/billing',
            path: {
                'orgname': orgname,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
