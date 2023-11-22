import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-atf',
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss'],
})
export class ATFComponent implements OnInit {
  public burgerMenu: boolean = false;

  constructor(private menuService: MenuService) {

  }

  ngOnInit() {}

  toggleDisplayMenu() {
    this.burgerMenu = !this.burgerMenu;
    this.menuService.changeBurgerMenuState(this.burgerMenu)
  }
}
