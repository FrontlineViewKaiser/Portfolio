import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private burgerMenuSource = new BehaviorSubject<boolean>(false);

  burgerMenuState = this.burgerMenuSource.asObservable()

  changeBurgerMenuState(state: boolean) {
    this.burgerMenuSource.next(state)
  }

  constructor() {}
}
