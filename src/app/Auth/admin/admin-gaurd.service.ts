import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGaurdService implements CanActivate{

  constructor(private authentication:AdminAuthService) { }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
    if (this.authentication.isAdminLoggedIn()) {
      
      return true
    } else {
      
      return false
    }
  }
}
