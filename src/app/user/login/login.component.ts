import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { UserService } from '../shared/userservice';
import { Loginuser } from './loginuser';
import { Router } from '@angular/router';
import {User} from '../shared/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  massage: string;
  Error = false;
  constructor( private userservice:UserService, private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit(){
    let name=this.loginForm.value.username;
    let password=this.loginForm.value.password;
    this.login(name,password);
  }
  public user:any;
  login(loginuser,password) {
    this.userservice.loginuser(loginuser).subscribe(
      (user) => {
        this.user=user;
        var id=this.user.userId;
        var succ = user;
        if(succ){
          var username=this.user.eMail;
          var pass=this.user.password;
          if(pass==password){
            sessionStorage.setItem('authUser',username);
        this.loginForm.reset();
  //      this.userservice.communicate(user);
          }else{
            this.Error = true;
          this.massage = "User ID/Password Wrong";
          }
          
        this.router.navigate(['userdashboard',id]);

        } else {
          this.Error = true;
          this.massage = "User ID/Password Wrong";
        }
      }
    )
  }
}