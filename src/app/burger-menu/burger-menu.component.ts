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

}
