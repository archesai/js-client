/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateAgentDto = {
    /**
     * The agent name
     */
    name?: string;
    /**
     * The agent description
     */
    description?: string;
    /**
     * The base LLM that the agent will use
     */
    llmBase?: UpdateAgentDto.llmBase;
    /**
     * The access scope of the agent. If set to ORGANIZATION, the agent will have access to all documents in the organization. If set to DOCUMENT, the agent will only have access to the documents specified in the documents field.
     */
    accessScope?: UpdateAgentDto.accessScope;
    /**
     * The ids of the documents this agent will have access to. If empty, the agent will have access to all documents.
     */
    documentIds?: Array<string>;
};

export namespace UpdateAgentDto {

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

