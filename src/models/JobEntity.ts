/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type JobEntity = {
    /**
     * The item's unique identifier
     */
    id: string;
    /**
     * The creation date of this item
     */
    createdAt: string;
    /**
     * The time that the job was started
     */
    startedAt: string;
    /**
     * The time that the job was completed
     */
    completedAt: string;
    /**
     * The status of the current animation processing
     */
    status: JobEntity.status;
    /**
     * The percent progress of the current job
     */
    progress: number;
    /**
     * The type of job that is being processed
     */
    jobType: string;
    /**
     * The link to the resource that is being processed
     */
    resourceLink: string;
};

export namespace JobEntity {

    /**
     * The status of the current animation processing
     */
    export enum status {
        QUEUED = 'QUEUED',
        PROCESSING = 'PROCESSING',
        COMPLETE = 'COMPLETE',
        ERROR = 'ERROR',
    }


}

