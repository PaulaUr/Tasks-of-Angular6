import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-server',
  templateUrl: './task-server.component.html',
  styles: [`
  .mayor{
    color:white;
  }
  `]
})
export class TaskServerComponent implements OnInit {
  secretPassword = '';
  togglePassword: boolean = false;
  counter: number = 0;
  clicksArray = [];

  constructor() {
  }

  ngOnInit() {
  }

  onShowContent() {
    this.togglePassword = true;
    this.counter++;
    // this.clicksArray.push(this.counter);
    this.clicksArray.push(new Date());
    console.log(this.clicksArray);
    this.secretPassword = Math.random() > 0.5 ? 'Tuna' : '';
    console.log(this.secretPassword);
    return this.secretPassword;
  }
  getColor(count) {
    return count >= 4 ? 'blue' : 'transparent';
  }


}
