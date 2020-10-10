import { Component, OnInit ,ViewChild,Inject, Optional} from '@angular/core';
import { AdminServiceService } from '../shared/admin-service.service';
import {FormBuilder,Validators,FormGroup, FormControl} from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {TicketUpdate} from '../shared/ticketUpdate';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { AdminTicketService } from '../shared/admin-ticket.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor( private service:AdminServiceService,private formbuilder:FormBuilder,private dialog: MatDialog,private nservice :AdminTicketService,private router:Router) { }
  
  public tickets:any;
  title = 'List of Tickets';
  listData: MatTableDataSource<any>;
  searchKey: string;
  displayedColumns: string[] = ['ticketId','priority','upperBond','projectName','status','actions'];
  public ticketdata :any;
  // Pagination parameters.
  public raiseticket=true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isupdated=true;
  detailform=new FormGroup({
    name:new FormControl()
  });
  

  p= 1;
  count = 5;
  ngOnInit() {
    this.service.getTickets().subscribe((tickets)=>{
  
      this.tickets=tickets;
      this.listData = new MatTableDataSource(this.tickets);
   //   this.listDate.filterPredicate = (data, filter) => (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1);
      this.detailform.disable();
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    
    })
  }
  
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
 
  public fil:any
  public userid;
  ticketupdate=new TicketUpdate();
  changeStatus(id){
    this.fil=this.tickets.filter(function(ticket){
      return ticket.ticketId==id
        })
        
   this.ticketupdate.ticketId=this.fil[0].ticketId;
    this.ticketupdate.endtDate=this.fil[0].endtDate;
    this.ticketupdate.expectedDuration=this.fil[0].expectedDuration;
    this.ticketupdate.expenseBorne=this.fil[0].expenseBorne;
    this.ticketupdate.passport=this.fil[0].passport;
    this.ticketupdate.priority=this.fil[0].priority;
    this.ticketupdate.projectName=this.fil[0].priority;
    this.ticketupdate.startDate=this.fil[0].startDate;
    this.ticketupdate.travelApproverBy=this.fil[0].travelApproverBy;
    this.ticketupdate.typeRequest=this.fil[0].typeRequest;
    this.ticketupdate.upperBond=this.fil[0].upperBond;
    if(this.fil[0].upperBond=="submitted"){
      this.ticketupdate.status="processing";
    }
    else{
      this.ticketupdate.status="done";
    }
    
    this.ticketupdate.cityTravelFrom=this.fil[0].cityTravelFrom;
    this.ticketupdate.cityTravelTo=this.fil[0].cityTravelTo;
    this.ticketupdate.additionalDetails=this.fil[0].additionalDetails;

   this.userid= this.fil[0].user.userId;
        console.log(this.ticketupdate);
        this.service.updateTicket(this.userid,id,this.ticketupdate).subscribe((ticket)=>{
          
        });
  }
  ticketdetails=new TicketUpdate();
  showDetails(id){
    this.fil=this.tickets.filter(function(ticket){
      return ticket.ticketId==id
        })
    this.ticketdetails.ticketId=this.fil[0].ticketId;
    this.ticketdetails.endtDate=this.fil[0].endtDate;
    this.ticketdetails.expectedDuration=this.fil[0].expectedDuration;
    this.ticketdetails.expenseBorne=this.fil[0].expenseBorne;
    this.ticketdetails.passport=this.fil[0].passport;
    this.ticketdetails.priority=this.fil[0].priority;
    this.ticketdetails.projectName=this.fil[0].priority;
    this.ticketdetails.startDate=this.fil[0].startDate;
    this.ticketdetails.travelApproverBy=this.fil[0].travelApproverBy;
    this.ticketdetails.typeRequest=this.fil[0].typeRequest;
    this.ticketdetails.upperBond=this.fil[0].upperBond;
    this.ticketdetails.status=this.fil[0].status; 
    this.ticketdetails.cityTravelFrom=this.fil[0].cityTravelFrom;
    this.ticketdetails.cityTravelTo=this.fil[0].cityTravelTo;
    this.ticketdetails.additionalDetails=this.fil[0].additionalDetails;

    const dialogConfig = new MatDialogConfig();
    this.nservice.populateForm(this.ticketdetails);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height="100%";
    this.dialog.open(TicketDetailsComponent,dialogConfig);
    
     
  }
   
  logout(){
    sessionStorage.clear()  ;
    this.router.navigate(["adminlogin"])
  }
    


}
