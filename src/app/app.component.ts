import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { DaleteAdminComponent } from './dalete-admin/dalete-admin.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { SidebarComponent } from '../../admin_dashboard-main/src/app/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent,LoginComponent,DaleteAdminComponent,AdminDetailsComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
