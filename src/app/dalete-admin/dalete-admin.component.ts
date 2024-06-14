import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dalete-admin',
  standalone: true,
  imports: [ConfirmDialogModule,ToastModule,ButtonModule],
  templateUrl: './dalete-admin.component.html',
  styleUrl: './dalete-admin.component.css',
  providers:[MessageService,ConfirmationService]
})
export class DaleteAdminComponent {
    
  constructor(private confirmationService : ConfirmationService,private messageService: MessageService ){}

  deleteAdmin(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this Admin?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Admin deleted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}
}
