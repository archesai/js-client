/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateMessageDto = {
    /**
     * The question in this message
     */
    question: string;
    /**
     * The max length of the answer given by the bot
     */
    answerLength?: number;
    /**
     * The max length of the context given to the bot
     */
    contextLength?: number;
    /**
     * The max number of sources returned included in the context
     */
    topK?: number;
    /**
     * The sililarity cutoff used in this message
     */
    similarityCutoff?: number;
    /**
     * The temperature for the LLM
     */
    temperature?: number;
};

