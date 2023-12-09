import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-atf',
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss'],
})
export class ATFComponent implements OnInit {
  burgerMenu: boolean = false;

  constructor(public menuService: MenuService) {}

  ngOnInit() {}

  /**
   * toggles the global variable that controls Burger menu display state
   */
  toggleDisplayMenu() {
    this.menuService.MenuGlobal = !this.menuService.MenuGlobal
    if(this.menuService.MenuGlobal) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
}
