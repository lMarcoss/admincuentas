import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomeComponent } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CuentasPorCobrarComponent } from "../pages/accounts/cobrar/cuentasporcobrar";
import { ContactosComponent } from "../pages/contactos/contactos";
import { CuentasporpagarComponent } from "../pages/accounts/pagar/cuentasporpagar";
import { AddaccountComponent } from "../pages/accounts/addaccount/addaccount";

@NgModule({
  declarations: [
    MyApp,
    HomeComponent,
    ContactosComponent,
    CuentasPorCobrarComponent,
    CuentasporpagarComponent,
    AddaccountComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeComponent,
    ContactosComponent,
    CuentasPorCobrarComponent,
    CuentasporpagarComponent,
    AddaccountComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
