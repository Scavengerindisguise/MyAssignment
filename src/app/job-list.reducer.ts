import { jobData } from './interfaces/jobData';
import * as JobListActions from './job-list.actions'

const initialState = {
    jobList: [
        new jobData(5423, 'CEO', 'Permanent', 'New CEO Job', '01/06/20'),
        new jobData(5424, 'CEO', 'Permanent', 'New CEO Job', '01/06/20')
    ]
};

export function jobListReducer(state = initialState, action: JobListActions.JobListActions){
    switch (action.type) {
        case JobListActions.ADD_JOB:
            return {
                ...state,
                jobList: [...state.jobList, action.payload]
            };
        case JobListActions.UPDATE_JOB:
            const jobData = state.jobList[action.payload.id];
            const updatedJobData = {
                ...jobData,
                ...action.payload.jobData
            };
            const jobList = [...state.jobList];
            jobList[action.payload.id] = updatedJobData;
            return {
                ...state,
                jobList: jobList
            };
        case JobListActions.DELETE_JOB:
            const oldJobList = [...state.jobList];
            oldJobList.splice(action.payload, 1);
            return {
              ...state,
              jobList: oldJobList
            };
        default:
                return state;    
    }
}