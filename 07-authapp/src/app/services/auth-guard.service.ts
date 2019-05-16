import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);
    console.log(state);
    if (this.auth.isAuthenticated()) {
      console.log('Permitido por el AuthGuard');
      return true;
    } else {
      console.error('Bloqueado por el guard');
      return false;
    }
  }
}
