import { Component, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ProjectClass } from 'src/classes/project-class';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() index:number;
  @Input() projects;

}
