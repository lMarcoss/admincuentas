import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  user: string = 'Leonardo Marcos Santiago';

  constructor(public navCtrl: NavController) {

  }

}
