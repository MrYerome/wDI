
import {RouterModule, Routes} from "@angular/router";
import {InscriptionComponent} from "../../inscription/inscription.component";
import {NgModule} from "@angular/core";


const ROUTES: Routes = [
  {path:'inscription', component : InscriptionComponent  },
  // {path : '' , component : AccueilComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: []
})
export class AccueilRoutingModule { }



