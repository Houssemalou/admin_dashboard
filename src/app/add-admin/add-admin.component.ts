import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [DialogModule,ButtonModule,InputTextModule, ToastModule],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css',
  providers:[MessageService]
})
export class AddAdminComponent {

  visible: boolean = false;

  constructor(private messageService: MessageService){}

  showDialog() {
      this.visible = true;
  }
  addAdmin(){
    this.visible = false;
    this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'User Add Succefully'})
  }
}
