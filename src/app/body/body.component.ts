import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, OnDestroy {


  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  displayMenu() {}

  hideMenu() {
    this.menuService.MenuGlobal = !this.menuService.MenuGlobal
  }
}
