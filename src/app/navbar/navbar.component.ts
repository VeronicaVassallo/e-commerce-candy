import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() sendDataEvent = new EventEmitter<string>();
  searchValue = ''; //Questo dato deve essere tirato fuori nel parent
  onInputChange(e: any) {
    console.log((<HTMLInputElement>e.target).value);
    this.searchValue = (<HTMLInputElement>e.target).value;
  }

  sendData() {
    this.sendDataEvent.emit(this.searchValue);
  }
}
