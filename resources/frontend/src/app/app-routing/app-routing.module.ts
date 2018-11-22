import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from '../accueil/accueil.component';
import {AppComponent} from "../app.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
const ROUTES: Routes = [
  {path:'', component : AppComponent  },
  // {path : '**' , component : PageNotFoundComponent},
  {path:'accueil', component : AccueilComponent  }
]

@NgModule({
  imports: [
RouterModule.forRoot(ROUTES),

  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
