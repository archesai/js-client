/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentsFieldItem } from './DocumentsFieldItem';

export type AgentEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    /**
     * The organization name
     */
    orgname: string;
    /**
     * The agent name
     */
    name: string;
    /**
     * The agent description
     */
    description: string;
    /**
     * The base LLM that the agent will use
     */
    llmBase?: AgentEntity.llmBase;
    /**
     * The documents this agent has access to
     */
    documents: Array<DocumentsFieldItem>;
    /**
     * The access scope of the agent. If set to ORGANIZATION, the agent will have access to all documents in the organization. If set to DOCUMENT, the agent will only have access to the documents specified in the documents field.
     */
    accessScope?: AgentEntity.accessScope;
};

export namespace AgentEntity {

    /**
     * The base LLM that the agent will use
     */
    export enum llmBase {
        GPT_3_5_TURBO_16_K = 'GPT_3_5_TURBO_16_K',
        GPT_4 = 'GPT_4',
        MISTRAL_7B = 'MISTRAL_7B',
    }

    /**
     * The access scope of the agent. If set to ORGANIZATION, the agent will have access to all documents in the organization. If set to DOCUMENT, the agent will only have access to the documents specified in the documents field.
     */
    export enum accessScope {
        ORGANIZATION = 'ORGANIZATION',
        DOCUMENT = 'DOCUMENT',
    }


}

