import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  username: string;
  date: Date;
  piValue: number;
  toggle: boolean;

  constructor() {
    this.username = "Michał";
    this.date = new Date();
    this.piValue = Math.PI;
    this.toggle = true;
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleDateFormat() {
    this.toggle = !this.toggle;
  }

  ngOnInit() {
  }

}
