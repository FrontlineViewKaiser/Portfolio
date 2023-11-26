import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MenuService } from '../menu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor(public menuService: MenuService, public router: Router, public route: ActivatedRoute) {
    this.screenwidth = window.innerWidth;
  }

  screenwidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenwidth = window.innerWidth; // Update on window resize
  }


  currentRoute;

  contactForm: FormGroup<{
    name: FormControl<string>,
    email: FormControl<string>,
    message: FormControl<string>,
    policy: FormControl<boolean>;
  }>;
  disabled: boolean = true;
  policy: boolean = false;


  ngOnInit(): void {
    this.currentRoute = this.route.snapshot.url.join('/')
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
      policy: new FormControl(false, Validators.requiredTrue),
    });
  }

  togglePolicy() {
    let currentValue = this.contactForm.get('policy').value
    this.contactForm.get('policy').setValue(!currentValue)
  }

  async sendMail() {
    console.log('email sent')

    let data = new FormData()
    data.append('name', this.contactForm.get('name').value)
    data.append('message' ,this.contactForm.get('message').value)
    data.append('email' ,this.contactForm.get('email').value)

    fetch("https://formspree.io/f/xqkvorkj", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
      this.router.navigateByUrl('success')
    }).catch((error) => {
        console.log(error);
    });

    //jonas-kratzenberg.developerakademie.net/send_mail/send_mail.php
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}















