import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts() {
    return this.httpClient.get('http://localhost:3000/contacts');
  }

  callingFromTemplate() {
    console.log('Calling From Template Directly.');
  }
}
