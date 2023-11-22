import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  private burgerMenuSubscription: Subscription

  constructor(private MenuService: MenuService) {}


  ngOnInit(): void {
    this.burgerMenuSubscription = this.MenuService.burgerMenuState.subscribe(state => {
      if(state) {
        this.displayMenu()
      } else {
        this.hideMenu()
      }
    })
  }


  ngOnDestroy(): void {
    this.burgerMenuSubscription.unsubscribe();
  }

  displayMenu() {

  }

  hideMenu() {

  }




}

