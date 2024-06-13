import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Categorie, Product } from '../models/product';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  standalone:true,
  imports: [CommonModule,TagModule,RatingModule,ButtonModule,TableModule,RouterOutlet,RouterLink],
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categoriesList: Categorie[] = [
    {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
   
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
 
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
       
    },
    {
        id: 4,
        name: "Product 4",
        description: "Description for Product 4",
   
    },
    {
        id: 5,
        name: "Product 5",
        description: "Description for Product 5",
       
    },
    {
        id: 6,
        name: "Product 6",
        description: "Description for Product 6",
    
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
