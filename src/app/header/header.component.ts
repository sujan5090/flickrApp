import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   searchTerm;
   showSuggestions = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onChange(event){
  }

  typeOfSearch(item){
    if(item === 'groups'){
      this.router.navigate(['/groups'], { queryParams: { 'searchKey': this.searchTerm } });
    } else if(item === 'photos'){
      this.router.navigate(['/photos'], { queryParams: { 'searchKey': this.searchTerm } });
    }

  }
  search(event){
    if(this.searchTerm.trim().length){
       this.showSuggestions = true;
    } else {
      this.showSuggestions = false;
    }
  }

}
