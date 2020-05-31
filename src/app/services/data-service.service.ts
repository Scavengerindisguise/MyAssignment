import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getJobList(){
    return this.http.get(environment.API_BASE);
  }

  addJobData(payload){
   return this.http.post(environment.API_BASE, payload).pipe(
      map((response) => {
        return response;
      }),
     );
  }

  deleteJobData(id){
    return this.http.delete(environment.API_BASE + '/' + id);
  }

  updateJobData(id, payload){
    return this.http.put(environment.API_BASE + '/' + id, payload);
  }



}
