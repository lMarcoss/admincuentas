import { Component } from '@angular/core';
import { Contact } from "../../../app/clases/contacts/contact";
import { NavController, AlertController } from "ionic-angular";
import { ContactsComponent } from "../contacts";
import { CONSTANTS } from "../../../app/services/CONSTANTES";
import { ContactsService } from "../../../app/services/contacts.service";
import { DetailContactService } from "../../../app/services/detail.contact.service";

@Component({
  selector: 'app-detailcontact',
  templateUrl: 'detail.contact.html',
})
export class DetailContactComponent {

  contact: Contact;
  action:string;

  constructor(private _CONSTANTS: CONSTANTS,
              private _contactsService: ContactsService,
              private _detailContactService: DetailContactService,
              private navController: NavController,
              public alertController: AlertController
              ) {
    this.contact = _detailContactService.getContact();
    this.action = _detailContactService.getAction();
  }

  addContact(){
    if(this.action === this._CONSTANTS.ADD){

      this._contactsService.addContact(this.contact);
      console.log('add ',this.contact);

    } else {
      console.log('edit ',this.contact);
    }

    //mostrar la pantalla de contactos
    this.navController.push(ContactsComponent);
  }

  deleteContact(){
    let confirm = this.alertController.create({
      title: 'Eliminar contacto',
      message: '¿Estás seguro de eliminar este contacto?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this._contactsService.deleteContact(this.contact);
            //mostrar la pantalla de contactos
            this.navController.push(ContactsComponent);
          }
        }
      ]
    });
    confirm.present();
  }
}
