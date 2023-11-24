import { Injectable, HostListener } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimationListenerService {
  unsubscribe() {
    throw new Error('Method not implemented.');
  }
  private scrollSubject = new Subject<number>();

  constructor() {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  get scrollObservable() {
    return this.scrollSubject.asObservable();
  }

  private onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollSubject.next(scrollPosition);
  }
}
