/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ToolEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    /**
     * The id of the organization this tool belongs to
     */
    orgname: string;
    /**
     * The name of the tool
     */
    name: string;
    /**
     * The description of the tool
     */
    description: string;
    /**
     * The input types of the tool
     */
    inputs: Array<string>;
    /**
     * The output types of the tool
     */
    outputs: Array<string>;
};

