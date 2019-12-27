import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

   public photoUrl = `https://www.flickr.com/services/rest`;
  constructor(
    public http: HttpClient
  ) { }

   getPhotos(text: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('extras', 'datecreate,date_activity,eighteenplus,invitation_only,needs_interstitial,non_members_privacy,pool_pending_count,privacy,member_pending_count,icon_urls,date_activity_detail,use_vespa,membership_info,has_pending_invite,secure_rules');
    params = params.append('method', 'flickr.photos.search');
    params = params.append('api_key', 'ab831807fd2add93717857452592c498');
    params = params.append('text', text);
    params = params.append('lang', 'en-US');
    params = params.append('per_page', '100');
    params = params.append('page', '1');
    params = params.append('format', 'json');
    params = params.append('nojsoncallback', '1');
    return this.http.get<any>(this.photoUrl, { params: params }).pipe(
      map(res => {
        return res.photos;
      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }
}
