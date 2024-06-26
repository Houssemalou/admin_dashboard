import { Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieModalComponent } from './categorie-modal/categorie-modal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllergensModalComponent } from '../../admin_dashboard-main/src/app/allergens-modal/allergens-modal.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"", component:LoginComponent},

    {path:"categoriemodal", component:CategorieModalComponent},
    {
        path: 'sidebar',
        component: SidebarComponent,
        children: [
          { path: '', component: HomeComponent },
          {path:'listofcategorie',component:CategoriesComponent},
          {path:"foodproducts", component:ListFoodComponent},
          {path:"addproduct", component:AddproductComponent, },
          {path:"allergene", component:AllergensModalComponent },
          {path:"admin-detail", component:AdminDetailsComponent }
          ]
        }
           
       
      

      ]