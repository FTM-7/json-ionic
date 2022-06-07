import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detils',
  templateUrl: './detils.page.html',
  styleUrls: ['./detils.page.scss'],
})
export class DetilsPage implements OnInit {

  data: any;
  constructor() {}

  ngOnInit() {
    fetch('https://raw.githubusercontent.com/FTM-7/json/main/data.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }
}
