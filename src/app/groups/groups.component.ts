import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from './groups.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnDestroy {

  public groups = [];
   public groupServiceSub: Subscription;

  constructor(
    public route: ActivatedRoute,
    public groupsService: GroupsService
  ) { }

  ngOnInit() {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(res => {
         if(res && res.searchKey){
            this.groupServiceSub = this.groupsService.getGroups(res.searchKey).subscribe(res => {
                  console.log("the res is ", res.group);
                 this.groups = res.group;
            });
            
         }
      });
    }
  }

  ngOnDestroy(){
    if(this.groupServiceSub){
       this.groupServiceSub.unsubscribe();
    }
  }
}
