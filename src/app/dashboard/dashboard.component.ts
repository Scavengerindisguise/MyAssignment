import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmodalComponent } from '../addmodal/addmodal.component';
import { jobData } from '../interfaces/jobData';
import { AgGridAngular } from 'ag-grid-angular';
import { DataServiceService } from '../services/data-service.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as JobListActions from '../job-list.actions'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  jobListState: Observable<{ jobList: jobData[] }>;
  rowData: any;
  columnDefs = [
    { headerName: 'Job Id', field: 'id' },
    {
      headerName: 'Job Title',
      field: 'title',
      editable: true
    },
    { headerName: 'Job Type', field: 'type', editable: true },
    { headerName: 'Job Description', field: 'description', editable: true },
    { headerName: 'Job Created Date', field: 'createdDate', editable: true }
  ];


  constructor(private jobDialog: MatDialog, private dataService: DataServiceService,
    private store: Store<{ jobListData: { jobList: jobData[] } }>) {
    }

  ngOnInit() {
    this.jobListState = this.store.select('jobListData');
    this.rowData = this.jobListState;
  }

  openJobDialog(): void {
    const jobDialog = this.jobDialog.open(AddmodalComponent);
    jobDialog.afterClosed().subscribe(result => {
      this.rowData.push(result);
      this.agGrid.api.setRowData(this.rowData);
    });
  }

  deleteData() {
    let selectedIndex = this.agGrid.api.getSelectedNodes();
    console.log(selectedIndex[0].rowIndex);
    this.store.dispatch(new JobListActions.DeleteJob(selectedIndex[0].rowIndex));
    console.log(this.rowData);
    this.agGrid.api.setRowData(this.rowData);
  }

  updateData() {
    // let selectedIndex = this.agGrid.api.getSelectedNodes();
    // let selectedRow = this.agGrid.api.getSelectedRows();
    // console.log(selectedRow);
    // const newRow = new jobData(selectedRow[0].id, selectedRow[0].title, selectedRow[0].type, selectedRow[0].description, selectedRow[0].createdDate);
    // console.log(selectedIndex[0].rowIndex);
    // this.store.dispatch(new JobListActions.UpdateJob({index: selectedIndex[0].rowIndex, jobData: newRow}));
    // let selectedRow: IjobData[];
    // selectedRow = this.agGrid.api.getSelectedRows();
    // console.log(selectedRow);
    // this.dataService.updateJobData(selectedRow[0].id, selectedRow[0]).subscribe(data => {
    //   console.log(data);
    // });
    // this.ngOnInit();
    // this.agGrid.api.setRowData(this.rowData);
  }





}
