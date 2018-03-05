export class Contact {
  idContact: number;
  name: string;
  tel: string;
  mail: string;

  constructor(idContact:number, name: string, tel:string, mail:string){
    this.idContact = idContact;
    this.name = name;
    this.tel= tel;
    this.mail = mail;
  }
}
