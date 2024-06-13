import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,UserDetailsComponent,RouterOutlet,SidebarComponent] ,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'admin_dashboard';
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
}
