import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route,
  CanActivate
} from '@angular/router';

@Injectable()
export class IsLogged implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let userInfo: any;
    userInfo = window.localStorage.getItem('userInfo');
    if (!userInfo) return true;
    this.router.navigate(['/menu']);
    return false;
  }
}
