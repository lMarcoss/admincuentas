import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// servicios
import { CONSTANTS } from "./services/CONSTANTES";
import { ContactsService } from "./services/contacts.service";
import { DetailContactService} from "./services/detail.contact.service";


//componentes
import { HomeComponent } from '../pages/home/home';
import { CuentasPorCobrarComponent } from "../pages/accounts/cobrar/cuentasporcobrar";
import { ContactsComponent } from "../pages/contacts/contacts";
import { CuentasporpagarComponent } from "../pages/accounts/pagar/cuentasporpagar";
import { AddaccountComponent } from "../pages/accounts/addaccount/addaccount";
import { DetailContactComponent} from "../pages/contacts/detailcontact/detail.contact";


@NgModule({
  declarations: [
    MyApp,
    HomeComponent,
    ContactsComponent,
    DetailContactComponent,
    CuentasPorCobrarComponent,
    CuentasporpagarComponent,
    AddaccountComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeComponent,
    ContactsComponent,
    DetailContactComponent,
    CuentasPorCobrarComponent,
    CuentasporpagarComponent,
    AddaccountComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CONSTANTS,
    ContactsService,
    DetailContactService
  ]
})
export class AppModule {}
