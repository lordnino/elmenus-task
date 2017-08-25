import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//import our menu data service class
import { MenuDataService } from '../providers/menu-data/menu-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userInfo: any;

  constructor(public menuData: MenuDataService, public router: Router) {
    this.userInfo = window.localStorage.getItem('userInfo');
  }

  ngOnInit() {
    this.menuData.getMenuData().subscribe(data => {
      console.log(data);
    })
  }


  logout() {
    this.userInfo = window.localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
