import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  data: any;
  constructor() {}

  ngOnInit() {
    fetch('https://raw.githubusercontent.com/FTM-7/json/main/data.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }
}
