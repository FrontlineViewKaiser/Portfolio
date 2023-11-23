import { Component, HostListener, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ProjectClass } from 'src/classes/project-class';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() index: number;
  @Input() projects;

  isHoveringOverPicture = false;
  screenwidth: any;

  constructor() {
    this.screenwidth = window.innerWidth; // Set initial value
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenwidth = window.innerWidth; // Update on window resize
  }


  mouseEnter() {
    this.isHoveringOverPicture = true;
  }

  mouseLeave(event: MouseEvent) {
    const projectDescription = (event.relatedTarget as HTMLElement)?.closest(
      '.textside'
    );
    if (!projectDescription) {
      this.isHoveringOverPicture = false;
    }
  }
}
