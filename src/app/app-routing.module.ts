import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { PhotosComponent } from './photos/photos.component';
import { RecentPhotosComponent } from './recent-photos/recent-photos.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RecentPhotosComponent },
  { path:'groups', component: GroupsComponent  },
  { path:'photos', component: PhotosComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
