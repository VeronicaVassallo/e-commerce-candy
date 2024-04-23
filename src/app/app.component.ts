import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products = [
    {
      _id: 1234,
      nameProduct: 'chewy rainbow',
      price: 10,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
      img: 'https://angolodolce.net/cdn/shop/products/chewy_rainbow_candy_gommosi_zuccherati_fini_4_1024x1024.jpg?v=1607166950',
    },
    {
      _id: 5678,
      nameProduct: 'Candy Corn',
      price: 8,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
    ea commodo consequat`,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Candy-Corn.jpg/1200px-Candy-Corn.jpg',
    },
    {
      _id: 91011,
      nameProduct: 'jelly belly',
      price: 11,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat`,
      img: 'https://www.ohnuts.com/noapp/showImage.cfm/zoom/_MG_5491.jpg',
    },
    {
      _id: 1213,
      nameProduct: 'Candy Bear',
      price: 9,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
     consequat`,
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Oursons_g%C3%A9latine_march%C3%A9_Rouffignac.jpg',
    },
    {
      _id: 1415,
      nameProduct: 'Lollipops',
      price: 9,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
      img: 'https://m.media-amazon.com/images/I/51zayXv469L._SL500_.jpg',
    },
    {
      _id: 1617,
      nameProduct: 'Marshmallow',
      price: 6.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
      img: 'https://burst.shopifycdn.com/photos/marshmallow-candy-texture.jpg?exif=0&iptc=0',
    },
  ];

  productFiltered: {
    _id: number;
    nameProduct: string;
    price: number;
    description: string;
    img: string;
  }[] = this.products;
  /*The getDataEvent() function utilizes the value from the search bar, 
  which is passed from the navigation bar, to filter the products array. 
  The filtered products are then passed to the main and card components to 
  display them on the browser*/
  getDataEvent(value: string) {
    this.productFiltered = this.products.filter((word) => {
      return word.nameProduct.toLowerCase().includes(value.toLowerCase());
    });
    console.log('Dati dal children', this.productFiltered);
  }
}
