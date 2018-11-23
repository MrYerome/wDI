import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diners intéressants';


  constructor(private router: Router) { }

  login() {
    console.log("rert");
    this.router.navigate(['login']);
  }

}
