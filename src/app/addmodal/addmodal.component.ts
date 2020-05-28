import { Component } from '@angular/core';
export interface IjobData {
  id: string,
  title: string,
  type: string,
  description: string,
  createdDate: string
}

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
