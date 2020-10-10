import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor() { }
  isAdminLoggedIn(){
    
    let user = sessionStorage.getItem('authAdmin');
    return !(user === null);
  }
}
