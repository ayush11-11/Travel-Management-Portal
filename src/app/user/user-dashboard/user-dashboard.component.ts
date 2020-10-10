import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/userservice';
import {ActivatedRoute} from '@angular/router/';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public raiseticket=false;
  public showticket=false;
  public showdashboard=true;

  constructor(private userservice: UserService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.userservice.sendmessage.subscribe(message=>{
      console.log(message);
      this.route.params.subscribe((params) =>  {console.log(params['id'])});
    })
  
  }
  displayTicket(ticketrequest) {
    console.log("hello"+ticketrequest);
    this.raiseticket=ticketrequest;
}
displayTicketList(ticketrequest) {
  console.log("hello"+ticketrequest);
  this.showticket=ticketrequest;
}
displayDashBoard(ticketrequest) {
   
  this.showdashboard=ticketrequest;
}
 

}
