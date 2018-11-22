import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from '../accueil/accueil.component';
import {AppComponent} from "../app.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {TestComponent} from "../test/test.component";
const ROUTES: Routes = [
  {path:'', component : AppComponent  },
  // {path : '**' , component : PageNotFoundComponent},
  {path:'accueil', component : AccueilComponent  },
  {path:'test', component : TestComponent  }
]

@NgModule({
  imports: [
RouterModule.forRoot(ROUTES),

  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
