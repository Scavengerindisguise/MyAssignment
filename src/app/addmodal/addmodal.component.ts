import { Component } from '@angular/core';
import { IjobData } from '../interfaces/jobData';

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

  constructor() { }

  addJobData(form){
    console.log(form);
  }








}
