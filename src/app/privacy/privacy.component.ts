import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {

  constructor(public menuService: MenuService) {}

}
