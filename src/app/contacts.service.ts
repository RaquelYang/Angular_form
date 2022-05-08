import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts() {
    return this.httpClient.get('http://localhost:3000/contacts');
  }

  createContact(createResource: any) {
    const httpHeader = new HttpHeaders();
    httpHeader.append('content-type', 'application/json')
    return this.httpClient.post('http://localhost:3000/contacts', createResource, { headers: httpHeader })
  }

  callingFromTemplate() {
    console.log('Calling From Template Directly.');
  }
}
