import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  // 如果要在 Template 直接呼叫 service 的話需要改成 public (原本為 private)
  constructor(public contactsService: ContactsService) { }

  contactList: any;
  msgTrue: boolean = false

  ngOnInit(): void {
    // this.contactList = this.contactsService.getContacts()
    this.contactsService.getContacts().subscribe( data => {
      this.contactList = data;
    });
  }

  addNewContact() {
    // 建立一個靜態資料的 form data
    const newFormData = { id:6, firstName: 'Raj', lastName: 'Zan'}
    this.contactsService.createContact(newFormData).subscribe( data => {
      console.log(data);
      this.msgTrue = true;
    });
  }

  // 建立一個動態資料的 form data



  addNewContact2(form: any) {

    const newDynamicFormData = {
      id: form.value.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName
    }
    this.contactsService.createContact(newDynamicFormData).subscribe( data => {
      console.log(data);
    });
  }

}
