import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {

   public photosServiceSub: Subscription;
   public photosData = [];

  constructor(
    public route:ActivatedRoute,
    public photosService: PhotosService
  ) { }

  ngOnInit() {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(res => {
         if(res && res.searchKey){
            this.photosServiceSub = this.photosService.getPhotos(res.searchKey).subscribe(res => {
                 this.photosData = res.photo;
            });
            
         }
      });
    }
  }

  ngOnDestroy(){
    if(this.photosServiceSub){
       this.photosServiceSub.unsubscribe();
    }

  }

}
