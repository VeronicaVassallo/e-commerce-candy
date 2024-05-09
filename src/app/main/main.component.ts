import { Component, EventEmitter, Input } from '@angular/core';
import { DataProductsService } from '../services/data-products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  @Input() dataProducts: any;

  constructor(private serviceDataProducts: DataProductsService) {}

  products = this.serviceDataProducts.products;
  counter = 0;

  onGetCounter(value: number) {
    console.log('Counter:', value);
    this.counter = value;
  }
}
