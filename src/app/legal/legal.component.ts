import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent {

  constructor(public menuService: MenuService) {}

}
