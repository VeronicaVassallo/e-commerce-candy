import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  @Input() dataProducts: any;

  counter = 0;

  onGetCounter(value: number) {
    console.log('Counter:', value);
    this.counter = value;
  }
}
