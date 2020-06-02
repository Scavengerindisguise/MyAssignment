import { Action } from '@ngrx/store';
import { jobData } from './interfaces/jobData';

export const ADD_JOB = 'ADD_JOB'
export const UPDATE_JOB = 'UPDATE_JOB'
export const DELETE_JOB = 'DELETE_JOB'

export class AddJob implements Action{
    readonly type = ADD_JOB;
    constructor(public payload: jobData){}
}

export class UpdateJob implements Action{
    readonly type = UPDATE_JOB;
    constructor(public payload: {id: number, jobData: jobData}){}
}

export class DeleteJob implements Action{
    readonly type = DELETE_JOB;
    constructor(public payload: number){}
}

export type JobListActions = AddJob | UpdateJob | DeleteJob;
