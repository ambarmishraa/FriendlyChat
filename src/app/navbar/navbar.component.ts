import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isVisible=false;
moreButton(){
  this.isVisible =!this.isVisible;
  console.log(this.isVisible)
}
}
