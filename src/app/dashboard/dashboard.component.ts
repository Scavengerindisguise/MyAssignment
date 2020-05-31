import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmodalComponent } from '../addmodal/addmodal.component';
import { IjobData } from '../interfaces/jobData';
import { AgGridAngular } from 'ag-grid-angular';
import { DataServiceService } from '../services/data-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  jobData: IjobData[] = [];
  saveData: string;
  rowData: any;
  columnDefs = [
    { headerName: 'Job Id', field: 'id' },
    { headerName: 'Job Title', field: 'title', editable: true },
    { headerName: 'Job Type', field: 'type', editable: true },
    { headerName: 'Job Description', field: 'description', editable: true },
    { headerName: 'Job Created Date', field: 'createdDate', editable: true }
  ];

  constructor(private jobDialog: MatDialog, private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getList().subscribe(data => {
     console.log(data);
     this.rowData = data;
    });

  }

  openJobDialog(): void {
    const jobDialog = this.jobDialog.open(AddmodalComponent);
    jobDialog.afterClosed().subscribe(result => {
      console.log('Job Details added in Dashboard');
      this.jobData.push(result);
      this.rowData = this.jobData;
      this.saveData = JSON.stringify(this.rowData);
      localStorage.setItem('selectedData', this.saveData);
      console.log(this.rowData);
      this.agGrid.api.setRowData(this.rowData);
    });
  }

  // deleteData(): void {
  //   let selectedRow = [];
  //   selectedRow = this.agGrid.api.getSelectedRows();
  //   console.log(selectedRow);
  //   let index = this.rowData.indexOf(selectedRow);
  //   this.rowData.splice(index, 1);
  //   console.log(this.rowData);
  //   this.agGrid.api.setRowData(this.rowData);
  // }

  updateData() {
   
   
    
  }






}
