import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Product } from '../models/product';

@Component({
  selector: 'app-list-food',
  standalone: true,
  imports: [CommonModule,TagModule,RatingModule,ButtonModule,TableModule],
  templateUrl: './list-food.component.html',
  styleUrl: './list-food.component.css'
})
export class ListFoodComponent {

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

  constructor() {}

  

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
}
