import { Component } from '@angular/core';
import { IjobData } from '../interfaces/jobData';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss']
})
export class AddmodalComponent {
  jobData: IjobData = {
    id: '',
    title: '',
    type: '',
    description: '',
    createdDate: ''
  };

  constructor(private dataService:DataServiceService) { }

  addJobData(form){
    console.log(form);
    this.dataService.addJobData(this.jobData).subscribe(data => {
      console.log(data);
    });
  }








}
