import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authUser');
    return !(user === null);
  }
}
