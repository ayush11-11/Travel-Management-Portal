import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {AdminTicketService} from '../shared/admin-ticket.service'

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  constructor(public service: AdminTicketService,public dialogRef: MatDialogRef<TicketDetailsComponent>) { }

  ngOnInit(): void {
  }
  onClose() {
    
    this.dialogRef.close();
  }

}
