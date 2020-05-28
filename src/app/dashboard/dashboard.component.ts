import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmodalComponent } from '../addmodal/addmodal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  jobData;

  constructor(private jobDialog: MatDialog) { }

  openJobDialog(): void {
    const jobDialog = this.jobDialog.open(AddmodalComponent);
    jobDialog.afterClosed().subscribe(result => {
      console.log('Job Details added in Dashboard');
      this.jobData = result;
    });
    console.log(this.jobData);
  }
  

}
