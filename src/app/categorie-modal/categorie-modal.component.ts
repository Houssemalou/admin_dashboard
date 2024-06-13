import { Component, OnInit } from '@angular/core';
import { CategoryControllerService } from '../services/services';
import { Category } from '../services/models';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-categorie-modal',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './categorie-modal.component.html',
  styleUrls: ['./categorie-modal.component.css']
})
export class CategorieModalComponent implements OnInit {

  categories: Category[] = [];
   newCategory: Category = {
    description: '',
    foodItems: [],
    id: undefined,
    name: ''
  };

  constructor(private categoryService: CategoryControllerService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.error('Error loading categories:', error);
  
      }
    );
  }


  addCategory() {
    if (this.newCategory.name) { 
     
      this.categoryService.createCategory({ body: this.newCategory }).subscribe(
        newCategory => {
          console.log(newCategory)
          this.categories.push(newCategory);
          this.newCategory = {}; 
        },
        error => {
          console.error('Error adding category:', error);
        
        }
      );
    } else {
      console.error('Category name is required.');
   
    }
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
      error => {
        console.error('Error updating category:', error);
   
      }
    );
  }}


  deleteCategory(category: Category) {
    if (category.id!=null){
    this.categoryService.deleteCategory({ id: category.id }).subscribe(
      () => {
        this.categories = this.categories.filter(c => c.id !== category.id);
      },
      error => {
        console.error('Error deleting category:', error);
      
      }
    );
  }}
  onSubmit(){
    console.log(this.newCategory)
  }
}
