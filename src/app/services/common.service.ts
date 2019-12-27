import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  static readonly httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  

  constructor(
    public http: HttpClient
  ) { }


   get<T>(url, options?: {}): Observable<T>{
     return this.http.get<T>(url, options || CommonService.httpHeaders).pipe(
       map(res => res)
     )
   }


}
