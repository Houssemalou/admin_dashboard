import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Product } from '../models/product';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { AllergensModalComponent } from '../../../admin_dashboard-main/src/app/allergens-modal/allergens-modal.component';
import { FoodProductControllerService } from '../services/services';
import { FoodProduct } from '../services/models/food-product';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-list-food',
  standalone: true,
  imports: [CommonModule,TagModule,RatingModule,ButtonModule,TableModule,RouterOutlet,RouterLink,AddproductComponent,AllergensModalComponent,ConfirmDialogModule, ButtonModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './list-food.component.html',
  styleUrl: './list-food.component.css'
})
export class ListFoodComponent implements OnInit  {
    foodProducts: FoodProduct[] = [];
  products: Product[] = [ 
    {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        image: "bamboo-watch.jpg",
        pickup_price: 10.99,
        delivery_price: 12.99,
        category: "Category A"
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        image: "bamboo-watch.jpg",
        pickup_price: 15.49,
        delivery_price: 17.49,
        category: "Category B"
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        image: "bamboo-watch.jpg",
        pickup_price: 8.99,
        delivery_price: 10.99,
        category: "Category A"
    },
    {
        id: 4,
        name: "Product 4",
        description: "Description for Product 4",
        image: "bamboo-watch.jpg",
        pickup_price: 20.00,
        delivery_price: 22.00,
        category: "Category C"
    },
    {
        id: 5,
        name: "Product 5",
        description: "Description for Product 5",
        image: "bamboo-watch.jpg",
        pickup_price: 9.99,
        delivery_price: 11.99,
        category: "Category B"
    },
    {
        id: 6,
        name: "Product 6",
        description: "Description for Product 6",
        image: "bamboo-watch.jpg",
        pickup_price: 18.49,
        delivery_price: 20.49,
        category: "Category C"
    }];

  constructor(private foodProductService : FoodProductControllerService,private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.foodProductService.getAllFoodProducts().subscribe({
      next: (products) => {
        this.foodProducts = products;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
  confirm(foodtodelete: FoodProduct) {
    this.confirmationService.confirm({
        header: 'Are you sure?',
        message: 'Please confirm to proceed.',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            this.deleteFoodProduct(foodtodelete);
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
}


  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
            return 'NULL';
      }
  }
  deleteFoodProduct(foodtodelete: FoodProduct) {
    if (foodtodelete.id!=null){
    this.foodProductService.deleteFoodProduct({ id: foodtodelete.id }).subscribe(
      () => {
        this.foodProducts = this.foodProducts.filter(c => c.id !== foodtodelete.id);
      },
  
    );
  }}
  updateCategory(foodtoupdate: FoodProduct) {
    if (foodtoupdate.id!=null){
    this.foodProductService.updateFoodProduct({ id: foodtoupdate.id, body: foodtoupdate }).subscribe(
      updated => {
        const index = this.foodProducts.findIndex(c => c.id === updated.id);
        if (index !== -1) {
          this.foodProducts[index] = updated;
        }
      },
 
    );
  }}
}
