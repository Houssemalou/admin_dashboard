import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-admin-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-delete.component.html',
  styleUrl: './admin-delete.component.css'
})
export class AdminDeleteComponent implements OnInit {
  
  inputData : any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<AdminDeleteComponent>) {

}
  ngOnInit(): void {
    this.inputData= this.data;
  }


  closepopup() {
  this.ref.close('Closed using function');
  }
  
  deleteUser(id :number){
    /*this.userService.deleteUser(id).subscribe(res => {
      
    })
    this.closepopup();*/
  }

}
