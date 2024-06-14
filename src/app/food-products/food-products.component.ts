import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


@Component({
  standalone:true,
  selector: 'app-food-products',
  imports:[ConfirmDialogModule, ButtonModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './food-products.component.html',
  styleUrl: './food-products.component.css'
})
export class FoodProductsComponent {
  constructor() {}

}
