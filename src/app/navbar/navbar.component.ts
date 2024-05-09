import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() sendDataEvent = new EventEmitter<string>();
  searchValue = ''; //il valore dell'input della ricerca viene passato fuori nel app-component
  onInputChange(e: any) {
    console.log((<HTMLInputElement>e.target).value);
    this.searchValue = (<HTMLInputElement>e.target).value;
  }
  //all' click del bottone della barra di ricerca il dato viene inviato all' app-component
  sendData() {
    this.sendDataEvent.emit(this.searchValue);
  }
}
