import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { CONSTANTS } from "../../app/services/CONSTANTES";
import { ContactsService } from "../../app/services/contacts.service";
import { DetailContactService } from "../../app/services/detail.contact.service";
import { Contact } from "../../app/clases/contacts/contact";
import { DetailContactComponent } from "./detailcontact/detail.contact";


@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsComponent {

  contactos: Contact[] = [];

  constructor(private _CONSTANTS: CONSTANTS,
              private _contactsService: ContactsService,
              private _detailContactService: DetailContactService,
              protected navController: NavController,
              ) {
    this.contactos = _contactsService.getContacts();
    console.log(this.contactos);
  }

  showDetailContact(contact: Contact) {
    this._detailContactService.setAction(this._CONSTANTS.EDIT);
    this._detailContactService.setContact(contact);
    //mostrar la pantalla de detalleContacto
    this.navController.push(DetailContactComponent);
  }

  addContact(){
    this._detailContactService.setAction(this._CONSTANTS.ADD);
    let contact = new Contact(this._contactsService.getNewIdContact(), '', '', '');
    this._detailContactService.setContact(contact);
    this.navController.push(DetailContactComponent);
  }
}
