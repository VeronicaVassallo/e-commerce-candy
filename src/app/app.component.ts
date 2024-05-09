import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataProductsService } from './services/data-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private serviceDataProduct: DataProductsService) {}
  productFiltered: {
    _id: number;
    nameProduct: string;
    price: number;
    description: string;
    img: string;
  }[] = this.serviceDataProduct.products;
  /*The getDataEvent() function utilizes the value from the search bar, 
  which is passed from the navigation bar, to filter the products array. 
  The filtered products are then passed to the main and card components to 
  display them on the browser*/
  getDataEvent(value: string) {
    this.productFiltered = this.serviceDataProduct.products.filter((word) => {
      return word.nameProduct.toLowerCase().includes(value.toLowerCase());
    });
    console.log('Dati dal children', this.productFiltered);
  }

  counter: number = 0;
  onGetDataCounterFromMain(value: number) {
    this.counter = value;
    console.log('Dati dal Main inviati:', this.counter, value);
  }
}
