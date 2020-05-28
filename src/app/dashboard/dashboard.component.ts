import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmodalComponent } from '../addmodal/addmodal.component';
import { IjobData } from '../interfaces/jobData';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  jobData: IjobData[] = [];
  saveData: string;
  rowData: any[] = [];
  columnDefs = [
    { headerName: 'Job Id', field: 'id' },
    { headerName: 'Job Title', field: 'title' },
    { headerName: 'Job Type', field: 'type' },
    { headerName: 'Job Description', field: 'description' },
    { headerName: 'Job Created Date', field: 'createdDate' }
  ];

  constructor(private jobDialog: MatDialog) { }

  ngOnInit(){
    this.rowData = JSON.parse(localStorage.getItem('selectedData'));
    // this.agGrid.api.setRowData(this.rowData);

  }

  openJobDialog(): void {
    const jobDialog = this.jobDialog.open(AddmodalComponent);
    jobDialog.afterClosed().subscribe(result => {
      console.log('Job Details added in Dashboard');
      this.jobData.push(result);
      this.rowData = this.jobData;
      this.saveData = JSON.stringify(this.rowData);
      localStorage.setItem('selectedData',this.saveData);
      console.log(this.rowData);
      this.agGrid.api.setRowData(this.rowData);
    });
  }

deleteData(): void {
  let x =[];
   x = this.agGrid.api.getSelectedRows();
  console.log(x);
  let index = this.rowData.indexOf(x);
  this.rowData.splice(index,1);
  console.log(this.rowData);
  this.agGrid.api.setRowData(this.rowData);
}






}
