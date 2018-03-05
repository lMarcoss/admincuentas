import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeComponent } from '../pages/home/home';
import { CuentasPorCobrarComponent } from "../pages/accounts/cobrar/cuentasporcobrar";
import { ContactsComponent } from "../pages/contacts/contacts";
import { CuentasporpagarComponent } from "../pages/accounts/pagar/cuentasporpagar";
import { AddaccountComponent } from "../pages/accounts/addaccount/addaccount";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeComponent;

  pages: Array<{title: string, icon:string, md_icon:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'ios-home-outline', md_icon:'ios-home', component: HomeComponent },
      { title: 'Contactos', icon: 'ios-contacts-outline', md_icon:'md-contacts', component: ContactsComponent },
      { title: 'Cuentas por cobrar', icon: 'ios-cash-outline', md_icon:'md-card', component: CuentasPorCobrarComponent },
      { title: 'Cuentas por pagar', icon: 'ios-card', md_icon:'md-cash', component: CuentasporpagarComponent },
      { title: 'Registrar', icon: 'ios-add-circle-outline', md_icon:'md-add-circle', component: AddaccountComponent }
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
