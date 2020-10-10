import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { UserService } from '../shared/userservice';
import { User } from '../shared/user'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  datasaved = false;
  massage1: string;
  massage2:string
  error:false;
  userid=null;
  username='';
  changestate:false;
  edit=false;
  submited=false;
  homepage=false;
  print=false;
  def=true;
   
 // @Output() formChange = new EventEmitter<regForm>(); 
  Country: Array<any> = [
    { name: 'Germany', states: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', states: ['Barcelona'] },
    { name: 'USA', states: ['Downers Grove'] },
    { name: 'Mexico', states: ['Puebla'] },
    { name: 'China', states: ['Beijing'] },
  ];
  State: Array<any>;
  changeCountry(count) {
    this.State = this.Country.find(con => con.name == count).states;
  }
  Pass:String;

   
  constructor(private formbuilder: FormBuilder, private userservice: UserService ,private router:Router) { }

  ngOnInit() {
    //this.makeRandom();
    this.setFormState();
     
    

  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      businessUnit: ['', [Validators.required]],
      title: ['', [Validators.required]],
      eMail:['',[Validators.required]],
      phone:['',[Validators.required]],
      addressOne: ['', [Validators.required]],
      addressTwo: [''],
      country:['',[Validators.required]],
      state:['Up'],
      zip:['',[Validators.required]],
      city:['',[Validators.required]],
      password:[''],
      userId:[this.userid]
      
     
     
    })
  }
  makeRandom() {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
  const lengthOfCode = 8;
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      this.Pass=text;
  }
  

  onSubmit() {
 
    if(this.submited && !this.edit){
      
      this.def=false;
      let user = this.regForm.value;
      this.makeRandom();
     user.password=this.Pass;
       this.createuser(user);
 //   this.regForm.reset();
      this.regForm.disable();  
  }
  else if(this.edit && this.submited){
    this.def=false;
    let user = this.regForm.value;
    user.userId=this.userid;
    this.updateuser(user,this.userid);
    this.regForm.disable(); 
  } 
  else if(this.print){}
  else {
    this.router.navigate(['userdashboard']);
  }
  
} 
  createuser(user: User) {
  
    this.userservice.createuser(user).subscribe(
      (user) => {
        this.datasaved = true;
        this.userid=user.userId;
        this.username=user.eMail;
         console.log(this.userid)
        this.massage1 = `Registration Confirmation`
         this.massage2= `Thankyou for Registring.The admin will you contact you Shortly`;
       this.userservice.communicate(user);
      }
    )
  }
  getting(){
    this.userservice.dummy().subscribe(
      (user) => {
  })}
  updateuser(user:User,userid){
    
    this.userservice.updateuser(user,userid).subscribe(
      (user) => {
        this.datasaved = true;
        this.userid=user.userId;
        this.username=user.eMail;
        this.massage1 = `Update Successfully`
         this.massage2= `Thankyou  `;
       this.userservice.communicate(user);
      }
    )
  }
  onSubmitClick(){
    this.submited=true;
    console.log('buttonclick');
    console.log(this.submited)
  }
  onUpdateClick(){
    
    this.edit=true;
    this.submited=false;
    this.def=true;
    this.datasaved=false;
    this.regForm.enable();
    
  }
  onPrintClick(){
    this.print=true;
    window.print();
  }
  onHomepageClick(){
    
    this.userservice.forget(this.username);
    this.router.navigate(['login'])
  }
   
}
