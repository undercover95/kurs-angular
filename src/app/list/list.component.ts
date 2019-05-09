import { Component, OnInit } from '@angular/core';
import User from '../User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  users = new Array<User>();
  constructor() {
    this.users.push(new User('Kuba', 25));
    this.users.push(new User('Paulina', 31));
    this.users.push(new User('Konrad', 17));
  }

  ngOnInit() {}
}
