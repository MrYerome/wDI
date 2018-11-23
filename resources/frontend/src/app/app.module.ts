import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { DinersComponent } from './components/diners/diners.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ReponseResetComponent } from './components/password/reponse-reset/reponse-reset.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
 import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageNotFoundComponent,
    DinersComponent,
    InscriptionComponent,
    NavbarComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ReponseResetComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
