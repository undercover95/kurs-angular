import { Component, OnInit, Input } from '@angular/core';
import User from '../User';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {
  @Input() user: User;
  @Input() idx: number;
  constructor() {}

  ngOnInit() {}
}
