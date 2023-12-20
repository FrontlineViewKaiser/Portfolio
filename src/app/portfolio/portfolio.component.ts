import { Component } from '@angular/core';
import { ProjectClass } from 'src/classes/project-class';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects = [
    new ProjectClass(
      'Join',
      'Kanban-inspired task-management system hooked up to a fully functioning backend. Create, assign and edit tasks. With dynamic contacts and drag-drop function on computer and mobile',
      ['JS |', 'CSS |', 'HTML |', 'API |', 'SCRUM'],
      'assets/img/join.PNG',
      'https://github.com/FrontlineViewKaiser/Kanban-Board',
      'http://jonas-kratzenberg.developerakademie.net/Join/index.html'
    ),
    new ProjectClass(
      'Pokedex',
      'A dynamic and colorful PokedDex based on the free PokeAPI. Fully responsive on every device',
      ['JS |', 'CSS |', 'HTML |', 'API'],
      'assets/img/pkdx.PNG',
      'https://github.com/FrontlineViewKaiser/PokeDex',
      'http://jonas-kratzenberg.developerakademie.net/PokeDex/index.html'
    ),
    new ProjectClass(
      'Sharkie',
      'A Videogame done entirely through JavaScript, comes with music, touch-controls and of course a final Boss-Fight',
      ['JS |', 'CSS |', 'HTML |', 'Git'],
      'assets/img/sharkie.png',
      'https://github.com/FrontlineViewKaiser/Sharkie-Videogame-with-JS',
      'http://jonas-kratzenberg.developerakademie.net/Sharkie/index.html'
    ),
    new ProjectClass(
      'To Kyiv with Love',
      'An Angular app that matches drivers and humanitarian workers to help people find a way to bring supplies to Ukraine. Built with a FireBase backend and authentification',
      ['TS |', 'SCSS |', 'HTML |', 'Git |', 'Angular |', 'FireBase'],
      'assets/img/kiyvScreen.PNG',
      'https://github.com/FrontlineViewKaiser/transport-app',
      'https://jonas-kratzenberg.developerakademie.net/angular-projects/transport-app/'
    ),
  ];

  constructor() {}
}
