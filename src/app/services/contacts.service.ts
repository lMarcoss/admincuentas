import { Injectable } from "@angular/core";
import { Contact } from "../clases/contacts/contact";

@Injectable()
export class ContactsService{

  contacts: Contact[] = [];

  constructor () {
    let contacto1 = new Contact(this.getNewIdContact(), 'Leonardo Marcos', '9512361144', 'marcossleo2@gmail.com');
    this.contacts.push(contacto1);
    let contacto2 = new Contact(this.getNewIdContact() , 'Marcos Santiago', '9512361144', 'marcossleo2@gmail.com');
    this.contacts.push(contacto2);
    let contacto3 = new Contact(this.getNewIdContact(), 'Santiago', '9512361144', 'marcossleo2@gmail.com');
    this.contacts.push(contacto3);

    console.log(this.contacts);
  }

  getNewIdContact(): number{
    return (this.contacts.length + 1);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  deleteContact(contact: Contact){
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

}
