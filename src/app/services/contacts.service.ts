import { Injectable } from "@angular/core";
import { Contact } from "../clases/contacts/contact";

@Injectable()
export class ContactsService{

  contacts: Contact[] = [];

  constructor () {
    this.getContactOfLocalStorage();
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
    this.saveContactInLocalStorage();
  }

  deleteContact(contact: Contact){
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);

    this.saveContactInLocalStorage();
  }

  saveContactInLocalStorage(){
    localStorage.setItem('contactos', JSON.stringify(this.contacts));
  }

  getContactOfLocalStorage(){
    if(localStorage.getItem('contactos')){
      this.contacts = JSON.parse(localStorage.getItem('contactos'));
    }

  }
}
