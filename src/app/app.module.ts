import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AddmodalComponent } from './addmodal/addmodal.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { jobListReducer } from './job-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddmodalComponent
  ],
  entryComponents: [
    AddmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    StoreModule.forRoot({jobListData: jobListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


