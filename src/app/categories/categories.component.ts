import { Component, OnInit } from '@angular/core';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Categorie, Product } from '../models/product';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryControllerService } from '../services/services';
import { Category } from '../services/models';
@Component({
  standalone:true,
  imports: [CommonModule,TagModule,RatingModule,ButtonModule,TableModule,RouterOutlet,RouterLink],
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent  implements OnInit{
    categories: Category[] = [];
  categoriesList: Categorie[] = [
    {
        id: 1,
        name: "categorie 1",
        description: "Description for categorie 1",
   
    },
    {
        id: 2,
        name: "categorie 2",
        description: "Description for categorie 2",
 
    },
    {
        id: 3,
        name: "categorie 3",
        description: "Description for categorie 3",
       
    },
    {
        id: 4,
        name: "categorie 4",
        description: "Description for categorie 4",
   
    },
    {
        id: 5,
        name: "categorie 5",
        description: "Description for categorie 5",
       
    },
    {
        id: 6,
        name: "categorie 6",
        description: "Description for categorie 6",
    
    }];

  constructor(private categoryService: CategoryControllerService) {}
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
  updateCategory(updatedCategory: Category) {
    if (updatedCategory.id!=null){
    this.categoryService.updateCategory({ id: updatedCategory.id, body: updatedCategory }).subscribe(
      updated => {
        const index = this.categories.findIndex(c => c.id === updated.id);
        if (index !== -1) {
          this.categories[index] = updated;
        }
      },
 
    );
  }}

  deleteCategory(category: Category) {
    if (category.id!=null){
    this.categoryService.deleteCategory({ id: category.id }).subscribe(
      () => {
        this.categories = this.categories.filter(c => c.id !== category.id);
      },
  
    );
  }}
  

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
