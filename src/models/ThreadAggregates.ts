/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GranularCount } from './GranularCount';
import type { GranularSum } from './GranularSum';

export type ThreadAggregates = {
    /**
     * The number of credits used in chat threads over specific timeframes
     */
    credits?: Array<GranularSum>;
    /**
     * The number of threads created over specific timeframes
     */
    threadsCreated?: Array<GranularCount>;
};

