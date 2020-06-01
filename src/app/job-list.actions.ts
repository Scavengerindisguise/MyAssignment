import { Action } from '@ngrx/store';
import { jobData } from './interfaces/jobData';

export const ADD_JOB = 'ADD_JOB'

export class AddJob implements Action{
    readonly type = ADD_JOB;
    constructor(public payload: jobData){}
}

export type JobListActions = AddJob;
