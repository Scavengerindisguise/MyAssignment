import { Component } from '@angular/core';
import { jobData } from '../interfaces/jobData';
import { DataServiceService } from '../services/data-service.service';
import { Store } from '@ngrx/store';
import * as JobListActions from '../job-list.actions'



@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss']
})
export class AddmodalComponent {
  jobData: jobData = {
    id: 0,
    title: '',
    type: '',
    description: '',
    createdDate: ''
  };

  constructor(private dataService:DataServiceService, private store: Store<{jobListData: {jobList: jobData[]}}>) { }

  addJobData(form){
    console.log(form);
    this.store.dispatch(new JobListActions.AddJob(this.jobData));
    // this.dataService.addJobData(this.jobData).subscribe(data => {
    //   console.log(data);
    // });
  }








}
