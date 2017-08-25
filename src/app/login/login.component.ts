import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { MenuDataService } from '../../providers/menu-data/menu-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  userInfo: any = {
    isAdmin: ''
  };


  constructor(
    public menuData: MenuDataService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }


  /*
    - This function is responsible for logging the user
    - It takes one parameter isAdmin that determine if the user is admin ot normal user
    - Depends on the isAdmin value it assign the isAdmin flag and push the userInfo to the      localStorage
    - And Finally it naviagte to the menu page
  */
  login(isAdmin: string): void {
    if (isAdmin == 'admin') {
      this.userInfo.isAdmin = true;
    } else {
      this.userInfo.isAdmin = false;
    }
    window.localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    this.router.navigateByUrl('menu');
  }

}
