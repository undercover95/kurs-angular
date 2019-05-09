import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinder',
  templateUrl: './databinder.component.html',
  styleUrls: ['./databinder.component.less']
})
export class DatabinderComponent implements OnInit {
  inputText: string;
  inputText2Way: string;
  isDisabled: boolean;
  showMsg: boolean;
  constructor() {
    this.inputText = 'Wpisz coś';
    this.inputText2Way = '';
    this.isDisabled = true;
    this.showMsg = false;
  }

  get msg() {
    return this.showMsg ? 'Button Active!' : 'Button Disabled!';
  }

  focus(event) {
    this.showMsg = !this.showMsg;
    this.isDisabled = !this.isDisabled;
  }

  ngOnInit() {}
}
