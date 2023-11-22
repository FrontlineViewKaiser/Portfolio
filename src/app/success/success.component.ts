import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {

  constructor(public menuService: MenuService) {}

}
