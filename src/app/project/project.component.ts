import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { AnimationListenerService } from '../animation-listener.service';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnDestroy {
  @ViewChild('picture') picture: ElementRef;
  @Input() index: number;
  @Input() projects;

  scrollSubscription;
  pictureOnScreen: boolean = false;
  isHoveringOverPicture = false;
  screenwidth: any;

  constructor(private animationListener: AnimationListenerService) {
    this.screenwidth = window.innerWidth;
  }

  /**
   * Checks distance between the top of the page and the element in question
   * @param element HTML Element
   * @returns distance between the top of the page and the element in question
   */
  private getTotalOffset(element: HTMLElement): number {
    let totalOffset = element.offsetTop;
    let parent = element.offsetParent as HTMLElement;

    while (parent !== null) {
      totalOffset += parent.offsetTop;
      parent = parent.offsetParent as HTMLElement;
    }

    return totalOffset;
  }

  /**
   * subscribes to a @ hostlistener that checks every tme someone scrolls and throttles it.
   * Checks the viewport and the scrollposition to see if an elemet is in view or not
   */
  ngAfterViewInit() {
    this.scrollSubscription = this.animationListener.scrollObservable
      .pipe(throttleTime(100))
      .subscribe((scrollPosition) => {
        const pictureTop = this.getTotalOffset(this.picture.nativeElement);
        const pictureHeight = this.picture.nativeElement.offsetHeight;
        const viewportHeight = window.innerHeight;

        if (
          scrollPosition + viewportHeight / 1.5 >= pictureTop &&
          scrollPosition <= pictureTop + pictureHeight
        ) {
          this.pictureOnScreen = true;
        } else this.pictureOnScreen = false;
      });
  }

  /**
   * listens to a screenchange and then sets the current screenwidth
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenwidth = window.innerWidth;
  }

  /**
   * 
   * @returns true if mobile device is detected
   */
  isMobileDevice(): boolean {
    const userAgent = window.navigator.userAgent;

    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    return mobileRegex.test(userAgent);
  }

  /**
   * Sets true if mouse is hovering over certain element
   */
  mouseEnter() {
    this.isHoveringOverPicture = true;
  }

  /**
   * sets false if mouse no longer hovers over the project textside
   */
  mouseLeave(event: MouseEvent) {
    const projectDescription = (event.relatedTarget as HTMLElement)?.closest(
      '.textside'
    );
    if (!projectDescription) {
      this.isHoveringOverPicture = false;
    }
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
