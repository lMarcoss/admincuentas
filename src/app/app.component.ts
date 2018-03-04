import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeComponent } from '../pages/home/home';
import {CuentasPorCobrarComponent } from "../pages/accounts/cobrar/cuentasporcobrar";
import { ContactosComponent } from "../pages/contactos/contactos";
import {CuentasporpagarComponent} from "../pages/accounts/pagar/cuentasporpagar";
import {AddaccountComponent} from "../pages/accounts/addaccount/addaccount";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeComponent;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomeComponent },
      { title: 'Contactos', component: ContactosComponent },
      { title: 'Cuentas por cobrar', component: CuentasPorCobrarComponent },
      { title: 'Cuentas por pagar', component: CuentasporpagarComponent },
      { title: 'Registrar', component: AddaccountComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
