import { Component, OnInit } from '@angular/core';
import User from '../User';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  user: User;
  date: Date;
  piValue: number;
  toggle: boolean;

  constructor() {
    this.user = new User('Michał', 24);
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

  ngOnInit() {}
}
