import { jobData } from './interfaces/jobData';
import * as JobListActions from './job-list.actions'

const initialState = {
    jobList: [
        new jobData('5423', 'CEO', 'Permanent', 'New CEO Job', '01/06/20'),
        new jobData('5423', 'CEO', 'Permanent', 'New CEO Job', '01/06/20')
    ]
};

export function jobListReducer(state = initialState, action: JobListActions.JobListActions){
    switch (action.type) {
        case JobListActions.ADD_JOB:
            return {
                ...state,
                jobList: [...state.jobList, action.payload]
            };
            default:
                return state;    
    }
}