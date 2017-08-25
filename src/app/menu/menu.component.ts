import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { MenuDataService } from '../../providers/menu-data/menu-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public menuData: MenuDataService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.menuData.test().subscribe(data => {
      console.log(data);
    })
  }

  logOut() {

  }
}
