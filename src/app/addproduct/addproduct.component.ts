import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  imports:[RouterLink,RouterOutlet],
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
  
})
export class AddproductComponent {
constructor(){}

}
