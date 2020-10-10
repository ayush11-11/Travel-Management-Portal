import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import {Router} from '@angular/router'
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  @Output() ticketShow = new EventEmitter();
  @Output() ticketListFunc = new EventEmitter();
  @Output() dashBoardShow = new EventEmitter();

    ticketshowvalue=false;
    ticketshowlistvalue=false;
    dashboardshow=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ticketRequest(){
     
    this.ticketshowvalue=true;
    this.ticketshowlistvalue=false;
    this.dashboardshow=false;
     
        this.ticketShow.emit(this.ticketshowvalue);
        this.ticketListFunc.emit(this.ticketshowlistvalue);
        this.dashBoardShow.emit(this.dashboardshow)
  }
  ticketList(){
     
    this.ticketshowvalue=false;
    this.ticketshowlistvalue=true;
    this.dashboardshow=false;
     
        this.ticketShow.emit(this.ticketshowvalue);
        this.ticketListFunc.emit(this.ticketshowlistvalue);
        this.dashBoardShow.emit(this.dashboardshow)
  }
  dashboard(){
     
    this.ticketshowvalue=false;
    this.ticketshowlistvalue=false;
    this.dashboardshow=true;
     
        this.ticketShow.emit(this.ticketshowvalue);
        this.ticketListFunc.emit(this.ticketshowlistvalue);
        this.dashBoardShow.emit(this.dashboardshow)
  }
  logout(){
    this.router.navigate(["/login"]);
    sessionStorage.clear()    
  }
//routerLink="/ticket" routerLinkActive="active"
}
