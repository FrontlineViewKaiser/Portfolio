import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ATFComponent } from './atf/atf.component';
import { BodyComponent } from './body/body.component';
import { HeadComponent } from './head/head.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { LegalComponent } from './legal/legal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivacyComponent } from './privacy/privacy.component';
import { SuccessComponent } from './success/success.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ATFComponent,
    BodyComponent,
    HeadComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    LegalComponent,
    PrivacyComponent,
    SuccessComponent,
    BurgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
