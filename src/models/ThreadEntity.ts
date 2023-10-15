/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentsFieldItem } from './DocumentsFieldItem';

export type ThreadEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    /**
     * The total number of credits used in this chat
     */
    credits: number;
    /**
     * The total number of messages in this chat
     */
    numMessages: number;
    /**
     * The organization name
     */
    orgname: string;
    /**
     * The chat thread name
     */
    name: string;
    /**
     * The documents this thread is using
     */
    documents: Array<DocumentsFieldItem>;
};

