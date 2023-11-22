import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LegalComponent } from './legal/legal.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: "legal", component: LegalComponent},
  {path: 'privacyPolicy', component: PrivacyComponent},
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
