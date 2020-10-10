import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/userservice';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { Ticket } from '../ticket/ticket';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  title = 'List of Tickets';
  // Some array of things.
  public ticketdata :any;
  // Pagination parameters.
  public raiseticket=true;
  userid=null;

  p= 1;
  count = 5;
  ngOnInit() {
    this.route.params.subscribe((params) =>  this.userid=params['id']);
    this.userservice.getTicketUser(this.userid).subscribe((ticket)=>{
      this.ticketdata=ticket;
      this.route.params.subscribe((params) =>  this.userid=params['id']);
    })
  }
 
  constructor(private userservice: UserService,private route:ActivatedRoute) {
     
  }
}