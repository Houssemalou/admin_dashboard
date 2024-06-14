import { Component, OnInit} from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { Role, UserOr } from '../models/user';
import { UserControllerService } from '../services/services';
import { User } from '../services/models';
import { DaleteAdminComponent } from '../dalete-admin/dalete-admin.component';
import { AddAdminComponent } from '../add-admin/add-admin.component';

@Component({
  selector: 'app-admin-details',
  standalone: true,
  imports: [AddAdminComponent,DaleteAdminComponent, HttpClientModule, CommonModule, TableModule, TagModule, IconFieldModule, InputIconModule, InputTextModule,MultiSelectModule,DropdownModule],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css',
  providers:[UserControllerService]
})
export class AdminDetailsComponent {

  users : UserOr[]=[{
    id: 100244,
    firstName : "alouka",
    lastName:"denidoph",
    email:"aloukadenidoph@gmail.com",
    role:Role.USER,
    creationDate: new Date(24-2-2024).getFullYear()
  },
  {
    id: 100245,
    firstName : "yasmina",
    lastName:"poliakov",
    email:"yasminapoliakov@gmail.com",
    creationDate: new Date(24-2-2024).getFullYear()
  },
  {
    id: 100246,
    firstName : "jozeph",
    lastName:"kali",
    email:"lozephkali@gmail.com",
    creationDate: new Date(24-2-2024).getFullYear()
  },
  {
    id: 100247,
    firstName : "amiroph",
    lastName:"teny",
    email:"tenyamiroph@gmail.com",
    creationDate: new Date(24-2-2024).getFullYear()
  }
    ];

    loading: boolean = false;

    customers!: User[];


    constructor(private customerService: UserControllerService){}

    ngOnInit(): void {
      
      /*this.customerService.getAllUsers().subscribe(customers =>{
        this.customers = customers;
        this.loading=false;
        this.customers.forEach((customer) => (customer.creationDate = new Date(<Date>customer.creationDate)));
      })*/
      
      
    }

    clear(table: Table) {
      table.clear();
  }

  getSeverity(status: string) {
      switch (status) {
          case 'unqualified':
              return 'danger';

          case 'qualified':
              return 'success';

          case 'new':
              return 'info';

          case 'negotiation':
              return 'warning';

          case 'renewal':
              return null;
          default: 
              return null;
      }
  }



}
