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

  toggleDisplayMenu() {
    this.menuService.MenuGlobal = !this.menuService.MenuGlobal
  }
}
