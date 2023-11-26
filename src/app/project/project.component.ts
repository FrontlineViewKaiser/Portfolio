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

  scrollSubscription
  pictureOnScreen: boolean = false;
  isHoveringOverPicture = false;
  screenwidth: any;

  constructor(private animationListener: AnimationListenerService) {
    this.screenwidth = window.innerWidth;
  }

  private getTotalOffset(element: HTMLElement): number {
    let totalOffset = element.offsetTop;
    let parent = element.offsetParent as HTMLElement;

    while (parent !== null) {
      totalOffset += parent.offsetTop;
      parent = parent.offsetParent as HTMLElement;
    }

    return totalOffset;
  }

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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenwidth = window.innerWidth;
  }

  isMobileDevice(): boolean {
    const userAgent = window.navigator.userAgent;

    // Regular expressions for mobile User Agents
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    return mobileRegex.test(userAgent);
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

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
