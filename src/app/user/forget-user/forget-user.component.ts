import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../shared/userservice'

@Component({
  selector: 'app-forget-user',
  templateUrl: './forget-user.component.html',
  styleUrls: ['./forget-user.component.css']
})
export class ForgetUserComponent implements OnInit {
  forgetForm:FormGroup;
  //submit=true
  submit=false;
  message:string;
  //message="Please Enter Your User Name ";

  constructor(private formbuilder:FormBuilder,private router:Router,private userservice :UserService) { }

  ngOnInit() {
    
    this.forgetForm = this.formbuilder.group({
      username: ['', [Validators.required]],
    })
  }

  Error=false;
  success=false;
  onSubmit(){
    this.submit=true;
   
    let name=this.forgetForm.value;
    this.userservice.forget(name.username).subscribe((data)=>{
      console.log(data)
      if (data){
        
        this.success=true;
        this.message="You Will Recieve Username And Password Shortly!!!"
      }
      else{
        this.Error=true;
        this.message=" Username is not Valid. Please Enter Correct Username!!!"
    }});   
    this.forgetForm = this.formbuilder.group({
      username: ['', [Validators.required]],
    })
   
  }
  

}
