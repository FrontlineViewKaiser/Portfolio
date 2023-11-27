import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {

  constructor(public menuService: MenuService) {
  }

  /**
   * toggles the burger menu to display the basic page, timeout set to allow for loading, then simply href's to the desired location
   * @param id id of an HTML Element
   */
  goTo(id) {
    this.menuService.MenuGlobal = !this.menuService.MenuGlobal
    setTimeout(() => {
       window.location.href = id
    }, 1000);
   
  }

}
