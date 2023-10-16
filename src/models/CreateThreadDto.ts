/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateThreadDto = {
    /**
     * The chat thread name
     */
    name?: string;
    /**
     * Optional. The id to use as the chat id. If taken, this endpoint will return a 409.
     */
    id?: string;
    /**
     * The ids of the documents this thread will use in generating responses. The documents must be available for the current agent. If empty, the thread will use all documents available to the agent.
     */
    documentIds?: Array<string>;
};

