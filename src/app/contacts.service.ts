import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

  // get contact by id
  getContactById() {
    // 使用 Object 傳 query 參數
    const httpParams = new HttpParams({
      fromObject: {
        id: ['2','3'],
        lastName: ['Wang','333']
      }
    });
    // 也可以用字串傳
    // http://localhost:3000/contacts?param1=value1&param2=value2
    /* const httpParams = new HttpParams({
      formString: `param1=${var1}&param2=${var2}`
    }); */
    // http://localhost:3000/contacts?query=mark
    return this.httpClient.get('http://localhost:3000/contacts', {
      params: httpParams
    });

  }

  callingFromTemplate() {
    console.log('Calling From Template Directly.');
  }

}
