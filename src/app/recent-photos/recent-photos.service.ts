import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CommonService } from '../services/common.service';
import { map, catchError } from 'rxjs/operators';
import { IRecentPhotos } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class RecentPhotosService {

    public recentPhotoUrl = `https://www.flickr.com/services/rest`;
    public httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    public commonService: CommonService,
    public http: HttpClient 
  ) { }

   getRecentPhotos(): Observable<IRecentPhotos> {
      // const serviceUrl = `${this.recentPhotoUrl}?method=flickr.photos.getRecent&api_key=ab831807fd2add93717857452592c498&format=json&nojsoncallback=1`;
      let params = new HttpParams();
      params = params.append('method', 'flickr.photos.getRecent');
      params = params.append('api_key', 'bc789ead3cd571263131d62b64350a11');
      params = params.append('format', 'json');
      params = params.append('nojsoncallback', '1');
     return this.http.get<any>(this.recentPhotoUrl, {params: params}).pipe(
       map(res => {
         return res.photos;
       }),
       catchError(err => {
           return throwError(err);
       })
     )

   }


}
