import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
//import 'rxjs/add/operator/catch';
//import {catchError} from 'rxjs/operators';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data.json";
  constructor(private http: HttpClient) { }

   getEmployee(): Observable<IEmployee[]>{
     return this.http.get<IEmployee[]>(this._url);
  //  .pipe(catchError(this.errorHandler));
   }

  // errorHandler(error : HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error")
  // }
}
