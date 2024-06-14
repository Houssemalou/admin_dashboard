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

  constructor(private categoryService: CategoryControllerService,) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(
      categories => {
        this.categories = categories;
      },
  
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
     
      );
    } else {
      console.error('Category name is required.');
   
    }
  }



  onSubmit(){
    console.log(this.newCategory)
  }
}
