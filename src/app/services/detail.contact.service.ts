import { Injectable } from "@angular/core";
import { Contact } from "../clases/contacts/contact";

@Injectable()
export class DetailContactService {

  contact: Contact;
  action: string;

  constructor () {
  }

  getContact():Contact {
    return this.contact;
  }

  setContact(contact: Contact ) {
    this.contact = contact;
  }


  getAction(): string {
    return this.action;
  }

  setAction(action: string) {
    this.action = action;
  }
}
