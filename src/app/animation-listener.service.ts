import { Injectable, HostListener } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimationListenerService {
  [x: string]: any;
  private scrollSubject = new Subject<number>();

  constructor() {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  get scrollObservable() {
    return this.scrollSubject.asObservable();
  }

  /**
   * sets scroll position, determined by distance to top of the page
   */
  private onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollSubject.next(scrollPosition);
  }
}
