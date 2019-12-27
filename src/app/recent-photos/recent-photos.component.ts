import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecentPhotosService } from './recent-photos.service';
import { element } from 'protractor';
import { IRecentPics } from '../app.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recent-photos',
  templateUrl: './recent-photos.component.html',
  styleUrls: ['./recent-photos.component.scss']
})
export class RecentPhotosComponent implements OnInit, OnDestroy {

  recentPhotos: IRecentPics[] = [];
  public recentPhotoServiceSub: Subscription;

  constructor(
    public recentPhotosService: RecentPhotosService
  ) { }

  ngOnInit() {
     this.recentPhotoServiceSub = this.recentPhotosService.getRecentPhotos().subscribe(res => {
        console.log('the response is ', res.photo);
         if(res  && res.photo){
              res.photo.forEach((element) => {
                   element.imgUrl = `https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`;
              });
              this.recentPhotos = res.photo;
         }
     })
  }

   ngOnDestroy(){
       if(this.recentPhotoServiceSub){
          this.recentPhotoServiceSub.unsubscribe();
       }
   }

}
