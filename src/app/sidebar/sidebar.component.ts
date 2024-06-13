import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListFoodComponent } from '../list-food/list-food.component';
import { CategoriesComponent } from '../categories/categories.component';
import { AddproductComponent } from '../../../admin_dashboard-main/src/app/addproduct/addproduct.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,HomeComponent,ListFoodComponent,CategoriesComponent,AddproductComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  title = 'admin_dashboard';
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
}
