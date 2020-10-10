import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGaurdService implements CanActivate {
  
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
    if (this.authentication.isUserLoggedIn()) {
      
      return true
    } else {
      
      return false
    }
  }
  constructor(private authentication:UserAuthService) { }
}
