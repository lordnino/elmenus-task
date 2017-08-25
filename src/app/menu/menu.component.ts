import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { MenuDataService } from '../../providers/menu-data/menu-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // initializing user info
  userInfo: any;

  // initizalizing menu data
  menuData: any;

  // newCategory is the structure of a new category
  newCategory: any = {
    id: 1,
    name: '',
    description: '',
    editable: false,
    items: []
  }

  // new Item is the structure of a new Item
  newItem: any = {
    id: 1,
    name: '',
    description: '',
    price: ''
  }

  constructor(
    public menuService: MenuDataService,
    private router: Router
  ) {
    // getting user info from local storage and assigning it
    this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
    console.log(this.userInfo);
  }

  ngOnInit() {

    // making a call to the json file to get the menu data
    this.menuService.getMenuData().subscribe(data => {
      // assigning menu data from the file json to the menuData variable
      this.menuData = data;
      
      /* 
        - Here we are looping through our categories and assinging editable flag
        - editable flag is used to hide and show collection of input (delete - edit - submit)
        - we have two editable flag one for the categories and the other for the items
      */
      this.menuData.categories.forEach(category => {
        category.editable = false;
        category.items.forEach(item => {
          item.editable = false;
        })
      })
      console.log(this.menuData);
    });
  }

  /*
    - This function is responsible for hiding the input category fields
    - It takes one parameter the category index
  */
  submitEditCategory(index: number): void {
    this.menuData.categories[index].editable = false;
  }

  /*
    - This function is responsible for showing the input category fields
    - It takes one Parameter the category index
  */
  editCategory(index: number): void {
    console.log(this.menuData.categories[index]);
    this.menuData.categories[index].editable = true;
  }

  /*
    - This function is responsible for deleteing the category
    - it Takes one Parameter the category index
  */
  deleteCategory(index: number): void {
    console.log(index);
    this.menuData.categories.splice(index, 1)
  }
  
  /*
    - This function is responsible for hiding an item inputs fields
    - It takes two parameter the category index and the item index
  */
  submitEditItem(categoryIndex: number, itemIndex: number): void {
    this.menuData.categories[categoryIndex].items[itemIndex].editable = false;
  }

  /*
    - This function is responsible for showing an item inputs fields
    - It takes two parameter the category index and the item index
  */
  editItem(categoryIndex: number, itemIndex: number): void {
    this.menuData.categories[categoryIndex].items[itemIndex].editable = true;
  }

  /*
    - This function is responsible for removing an item
    - It takes two parameter the category index and the item index
  */
  deleteItem(categoryIndex: number, itemIndex: number): void {
    this.menuData.categories[categoryIndex].items.splice(itemIndex, 1);
  }

  /*
    - This function is responsible for clearing the local storage and logging out
    - It redirect to the login page after clearing the local storage
  */
  logout(): void {
    this.userInfo = window.localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  /*
    - This function is reponsible for adding New Category
    - It adds category to the menu array
    - It also clears the newCategory object to prepare it for another add operation
  */
  addCategory(): void {
    this.menuData.categories.push(this.newCategory);
    this.newCategory = {
      id: this.newCategory.id + 1,
      name: '',
      description: ''
    }
  }

  /*
    - This is responsible for adding an item
    - It takes one parameter the categoryIndex
    - It also clears the newItem object tp perpare it for another add operation
  */
  addItem(categoryIndex: number): void {
    this.menuData.categories[categoryIndex].items.push(this.newItem);
    this.newItem = {
      id : this.newItem.id + 1,
      description: '',
      price: ''
    }
    console.log(this.menuData.categories[categoryIndex].items);
  }
}
