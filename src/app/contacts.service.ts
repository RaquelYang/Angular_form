import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }

  getContacts() {
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'RaquelYANG',
      'timeOutSeconds': '3000'
    });

    // custom headers
    // 可以使用 set, append 來新增自定義參數
    httpHeaders = httpHeaders.set('arc-id','110')
    // httpHeaders = httpHeaders.append('arc-id','110')

    let time = httpHeaders.get('timeOutSeconds')
    if(time === '3000'){
      httpHeaders = httpHeaders.set('Authorization','')
    }

    return this.httpClient.get('http://localhost:3000/contacts', { headers: httpHeaders });
  }

  createContact(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json')
    return this.httpClient.post('http://localhost:3000/contacts', createResource, { headers: httpHeaders })
  }

  updateContact(contactId: any, updatedBody: any) {
    const endPoint = 'http://localhost:3000/contacts/' + contactId
    return this.httpClient.put(endPoint , updatedBody)
  }

  deleteContact(contactId: any) {
    const deleteEndpoint = 'http://localhost:3000/contacts/' + contactId
    return this.httpClient.delete(deleteEndpoint);
  }

  callingFromTemplate() {
    console.log('Calling From Template Directly.');
  }

}
