import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { MenuService } from '../menu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    public menuService: MenuService,
    public router: Router,
    public route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.screenwidth = window.innerWidth;
  }

  screenwidth: any;

  /**
   * listens to a screenchange and then sets the current screenwidth
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenwidth = window.innerWidth; // Update on window resize
  }

  currentRoute;

  contactForm: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    message: FormControl<string>;
    policy: FormControl<boolean>;
  }>;
  disabled: boolean = true;
  policy: boolean = false;

  /**
   * sets current route and FormGroup for email form
   */
  ngOnInit(): void {
    this.currentRoute = this.route.snapshot.url.join('/');
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
      policy: new FormControl(false, Validators.requiredTrue),
    });
  }

  /**
   * toggles the privacy policy in lieu of a checkbox, which would have been more convenient, yet significantly harder to design
   */
  togglePolicy() {
    let currentValue = this.contactForm.get('policy').value;
    this.contactForm.get('policy').setValue(!currentValue);
  }

  /**
   * Formspree function adjusted to redirect to success page and append three values to be sent
   */
  async sendMail() {
    console.log('email sent');

    let data = new FormData();
    data.append('name', this.contactForm.get('name').value);
    data.append('message', this.contactForm.get('message').value);
    data.append('email', this.contactForm.get('email').value);

    fetch('https://formspree.io/f/xqkvorkj', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        this.router.navigateByUrl('success');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * smooth scrolling back to top
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  /**
   * toggles the burger menu to display the basic page, timeout set to allow for loading, then simply href's to the desired location
   * @param id id of an HTML Element
   */
  goTo(selector) {
    this.menuService.MenuGlobal = false;
    this.waitForElementToDisplay(selector, 50)

  }

  /**
   * Sets and interval that repeatedly asks if the element that needs to be refernced is actually there. Shuts off the interva and hrefs to its location a soon as its found
   * 
   * @param selector string the name of the element id (without the #)
   * @param time numberof how how long the interval should be
   */
  waitForElementToDisplay(selector, time) {
    const intervalId = setInterval(function() {
      const element = document.getElementById(selector);
      if (element) {

        clearInterval(intervalId);
        window.location.href = '#' + selector;
      }
    }, time);
  }
}
