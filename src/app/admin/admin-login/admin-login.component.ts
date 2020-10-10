import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminForm: FormGroup;
  massage: string;
  Error = false;
  constructor(private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.adminForm = this.formbuilder.group({
      adminName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

    onSubmit(){
      let name=this.adminForm.value.adminName;
      let pass=this.adminForm.value.password;
      if (name=="ayush" && pass=="12345"){
        sessionStorage.setItem('authAdmin',name);
       this.router.navigate(['admindashboard']);
      }
      else{
        this.Error=true;
        this.massage="Wrong Username/Password";
      }

       
    }
  


}
