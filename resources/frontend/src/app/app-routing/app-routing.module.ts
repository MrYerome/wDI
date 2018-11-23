import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from '../components/accueil/accueil.component';
import {AppComponent} from "../app.component";
import {PageNotFoundComponent} from "../components/page-not-found/page-not-found.component";
import {InscriptionComponent} from "../components/inscription/inscription.component";
import {DinersComponent} from "../components/diners/diners.component";
import { LoginComponent} from "../components/login/login.component";
import { SignupComponent } from '../components/signup/signup.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { RequestResetComponent } from '../components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from '../components/password/response-reset/response-reset.component';
import { BeforeLoginService } from '../services/before-login.service';
import { AfterLoginService } from '../services/after-login.service';


const ROUTES: Routes = [
  {path:'', component : AccueilComponent  },
  {path:'accueil', component : AccueilComponent  },
  {path:'inscription', component : InscriptionComponent  },
  {path:'diners', component : DinersComponent  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  // {path : '' , component : AccueilComponent}
]

@NgModule({
  imports: [
RouterModule.forRoot(ROUTES),

  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
