import { Component } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  posts: any;
  title = "ccc"
  constructor() {}

  ngOnInit() { 
   fetch('https://raw.githubusercontent.com/FTM-7/json/main/data.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }
}
