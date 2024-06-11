import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { Role, User } from '../models/user';
import { CommonModule } from '@angular/common';
import { AdminDeleteComponent } from '../admin-delete/admin-delete.component';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule,MatCardModule, CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  users : User[]=[{
    firstName : "alouka",
    lastName:"denidoph",
    email:"aloukadenidoph@gmail.com",
    role:Role.ADMIN,
    creationDate: new Date(24-2-2024)
  },
  {
    firstName : "yasmina",
    lastName:"poliakov",
    email:"yasminapoliakov@gmail.com",
    role:Role.USER,
    creationDate: new Date(24-2-2024)
  },
  {
    firstName : "jozeph",
    lastName:"kali",
    email:"lozephkali@gmail.com",
    role:Role.USER,
    creationDate: new Date(24-2-2024)
  },
  {
    firstName : "amiroph",
    lastName:"teny",
    email:"tenyamiroph@gmail.com",
    role:Role.USER,
    creationDate: new Date(24-2-2024)
  }
];

  displayedColumns: string[] = ["firstName", "lastName", "email", "role","creationDate","action"];
  dataSource = new MatTableDataSource<User>(this.users);
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
    constructor(private dialog : MatDialog){}
    
    ngOnInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }

    Filterchange(data: Event) {
      const value = (data.target as HTMLInputElement).value;
      this.dataSource.filter = value;
    }
    deleteStudent( code:number){
      this.Openpopup(code, AdminDeleteComponent );
    }
    Openpopup(code: number,component:any) {
      
      var _popup = this.dialog.open(component, {
        width: "200px",
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1000ms',
        data: {
          code: code
        }
      });
      _popup.afterClosed().subscribe(item => {
        // console.log(item)
      })
    }

   
}
