import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route,
  CanActivate
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let userInfo: any;
    userInfo = window.localStorage.getItem('userInfo');
    if (userInfo) return true;
    console.log('user not logged in');
    this.router.navigate(['/login']);
    return false;
  }
}
