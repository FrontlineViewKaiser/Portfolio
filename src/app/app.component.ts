import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh()
    }, 500);
  }

}
