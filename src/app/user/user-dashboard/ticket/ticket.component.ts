import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { UserService } from '../../shared/userservice';
import { Ticket } from './ticket';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticketForm:FormGroup;
  requesttype:String[]=["Travel Tickets","Hotel Stay","Visa","WorkPermit"]
  priority:String[]=["Normal", "Urgent", "Immediate" ]
  city:String[] = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham"]
  datasaved = false;
  massage1: string;
  massage2:string
  error:false;
  userid=null;
  tick:any;
  ticketid=null
  changestate:false;
  edit=false;
  submited=false;
  homepage=false;
  print=false;
  def=true;
  constructor(private formbuilder: FormBuilder, private userservice: UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.setFormState();
    this.route.params.subscribe((params) =>  {this.userid=params['id']});
  }
  setFormState() {
    this.ticketForm = this.formbuilder.group({
      typeRequest:['', [Validators.required]],
      priority:['', [Validators.required]],
      cityTravelTo:['', [Validators.required]],
      cityTravelFrom:['', [Validators.required]],
      startDate:['', [Validators.required]],
      endtDate:['', [Validators.required]],
      passport:['', [Validators.required]],
      projectName:['', [Validators.required]],
      expenseBorne:['', [Validators.required]],
      travelApproverBy:[''],
      expectedDuration:[''],
      upperBond:[''],
      additionalDetails:[''],
      status:['submitted'],
      ticketId:[this.ticketid]
     
    })
  }
  onSubmit() {
    
        if(this.submited && !this.edit){
          this.def=false;
          let ticket = this.ticketForm.value;
          this.createticket(ticket,this.userid);

     //   this.regForm.reset();
          this.ticketForm.disable();  
      }
      else if(this.edit && this.submited){
        this.def=false;
        
         
        
         let ticket = this.ticketForm.value;
         ticket.ticketId=this.ticketid;
          
        
        this.updateticket(ticket,this.ticketid,this.userid);
        this.ticketForm.disable(); 
      } 
      else if(this.print){}
      else {
        this.router.navigate(['userdashboard']);
      }
      
    } 
      createticket(ticket :Ticket,userid) {
        this.userservice.createticket(ticket,userid).subscribe(
          (data) => {
            this.datasaved = true;
           
            this.tick=data;
            this.ticketid=this.tick.ticketId;
            this.massage1 = `Registration Confirmation`
             this.massage2= `Thankyou for Registring.The admin will you contact you Shortly`;
 //          this.userservice.communicate();
            
          }
        )
      }
      updateticket(ticket:Ticket,ticketid,userid){
        this.userservice.updateticket(ticket,ticketid,userid).subscribe(
          (ticket) => {
            this.datasaved = true;
    //        this.userid=user.id;
            this.massage1 = `Update Successfully`
             this.massage2= `Thankyou  `;
 //          this.userservice.communicate(user);
           
          }
        )
      }
      onSubmitClick(){
        this.submited=true;
      
      }
      onUpdateClick(){
        
        this.edit=true;
        this.submited=false;
        this.def=true;
        this.datasaved=false;
        this.ticketForm.enable();
        
      }
      onPrintClick(){
        this.print=true;
        window.print();
      }
       
       
    }


