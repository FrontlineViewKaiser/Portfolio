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
      'Kanban-inspired task-management system hooked up to a fully functioning backend. Create, assign and edit tasks. With dynamic contacts and drag-drop function on computer and mobile',
      ['JS |', 'CSS |', 'HTML |', 'API |', 'SCRUM'],
      '/assets/img/join.PNG',
      'https://github.com/FrontlineViewKaiser/ringoffire'
    ),
    new ProjectClass(
      'Pokedex',
      'A dynamic and colorful PokedDex based on the free PokeAPI. Fully responsive on every device',
      ['JS |', 'CSS |', 'HTML |', 'API'],
      '/assets/img/pkdx.PNG',
      'https://github.com/FrontlineViewKaiser/PokeDex'
    ),
    new ProjectClass(
      'Sharkie',
      'A Videogame done entirely through JavaScript, comes with music, touch-controls and of course a final Boss-Fight',
      ['JS |', 'CSS |', 'HTML |', 'Git'],
      '/assets/img/sharkie.png',
      'https://github.com/FrontlineViewKaiser/Sharkie-Videogame-with-JS'
    ),
  ]


  constructor() {

  }



}
