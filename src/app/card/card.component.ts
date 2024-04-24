import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Output() sendDataCounter = new EventEmitter<number>();
  @Input() dataParent: any;
  idsSelected: number[] = [];
  cartCounter: number = 0; // To do: I need to bring this data out into the navigation bar. At moment you are stopped to Main
  //
  /*TO DO: 
  1)Create a cart where you can place the selected products
  2)Create a buttun to delete product from cart  */

  /*onAddProduct collects the IDs of the selected products:
  1) inside filteredItem , the product with the ID 
  corresponding to the value passed
  as a parameter is filtered from the list of 
  products (dataParent).  
  2)if it actually returns an id from the list, 
  it is inserted into the list of idsSelected. 
  3)All products whose ids are present in this list will have
  the borderCard class added*/
  onAddProduct(id: number) {
    //1)
    const filteredItem = this.dataParent.filter(
      (item: {
        _id: number;
        nameProduct: string;
        price: number;
        description: string;
        img: string;
      }) => {
        return item._id === id;
      }
    );
    //2)
    if (filteredItem.length > 0) {
      this.idsSelected.push(filteredItem[0]._id);
    }
    //4)the box is updated with the lengths value of array idsSelected
    this.cartCounter = this.idsSelected.length;
    console.log('nel carrello ci sono:', this.cartCounter);
    this.sendDataCounter.emit(this.cartCounter);
  }
}
