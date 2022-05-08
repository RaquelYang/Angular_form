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

  ngOnInit(): void {
    // this.contactList = this.contactsService.getContacts()
    this.contactsService.getContacts().subscribe( data => {
      this.contactList = data;
    });
  }

}
