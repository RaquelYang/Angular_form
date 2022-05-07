import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts() {
    const contactList = [
      { contactId: 1, contactName: 'ABC'},
      { contactId: 2, contactName: 'DEF'},
      { contactId: 3, contactName: 'GHI'},
      { contactId: 4, contactName: 'JKL'},
      { contactId: 5, contactName: 'MNO'},
      { contactId: 6, contactName: 'PQR'},
    ]
    return contactList;
  }

  callingFromTemplate() {
    console.log('Calling From Template Directly.');
  }
}
