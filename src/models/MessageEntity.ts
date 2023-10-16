/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CitationEntity } from './CitationEntity';

export type MessageEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    /**
     * The id of the thread this message belongs to
     */
    threadId: string;
    /**
     * The question in this message
     */
    question: string;
    /**
     * The answer given by the bot
     */
    answer: string;
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
    /**
     * The number of credits used in this message
     */
    credits: number;
    /**
     * The sources used in this message
     */
    citations: Array<CitationEntity>;
};

