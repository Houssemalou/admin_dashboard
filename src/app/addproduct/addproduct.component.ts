import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FoodProduct } from '../services/models/food-product';
import { CategoryControllerService, FoodProductControllerService } from '../services/services';
import { Category } from '../services/models/category';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadService } from '../services/file/file-upload-service.service';

@Component({
  standalone:true,
  imports:[RouterLink,RouterOutlet,CommonModule,FormsModule],
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
  
})
export class AddproductComponent implements OnInit {
  foodProducts: FoodProduct[] = [];
   foodItem: FoodProduct = {
    allergens: undefined,
    delivery_price: 0,
    description: '',
    id: 1,
    imageUrl: '',
    itemType: undefined,
    name: '',
    pickup_price: 0,
    supplement: undefined,
  };
  categories: Category[] = []; 

constructor(private foodservice: FoodProductControllerService,private categoryService:CategoryControllerService ,private fileuploadservice: FileUploadService){}
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
addfoodProduct() {
  if (this.foodItem.name) { 
   
    this.foodservice.createFoodProduct({ body: this.foodItem }).subscribe(
      foodItem => {
        console.log(foodItem)
        this.foodProducts.push(foodItem);
        this.foodItem = {}; 
      },
   
    );
  } else {
    console.error('Category name is required.');
 
  }
}
submit(){
  console.log(this.foodItem)
}
onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length) {
    const file = input.files[0];
    this.fileuploadservice.upload(file).subscribe({
      next: (response: string) => {
        this.foodItem.imageUrl = response; 
      },
      error: (err: any) => {
        console.error('Error uploading file', err);
      }
    });
  }
}
getfile() {
  if (this.foodItem.imageUrl) {
    this.fileuploadservice.getFile(this.foodItem.imageUrl);
  } else {
    console.error('foodItem.imageUrl is undefined or null.');
  }
}

}
