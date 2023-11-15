import { Component } from '@angular/core';
import { ProjectClass } from 'src/classes/project-class';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects = [
    new ProjectClass(
      'Join',
      'Kanban-inspired task-management system. Create, assign and edit tasks. With dynamic contacts and drag-drop function on computer and mobile',
      'JS, CSS, HTML, API',
      '/assets/img/kaiser.jpg'
    ),
    new ProjectClass(
      'Join',
      'Kanban-inspired task-management system. Create, assign and edit tasks. With dynamic contacts and drag-drop function on computer and mobile',
      'JS, CSS, HTML, API',
      '/assets/img/kaiser.jpg'
    ),
    new ProjectClass(
      'Join',
      'Kanban-inspired task-management system. Create, assign and edit tasks. With dynamic contacts and drag-drop function on computer and mobile',
      'JS, CSS, HTML, API',
      '/assets/img/kaiser.jpg'
    ),
    new ProjectClass(
      'Join',
      'Kanban-inspired task-management system. Create, assign and edit tasks. With dynamic contacts and drag-drop function on computer and mobile',
      'JS, CSS, HTML, API',
      '/assets/img/kaiser.jpg'
    ),
  ]


  constructor() {

  }



}
