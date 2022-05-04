import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  checkoutForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({
      emailAddr: new FormControl(),
      quantity: new FormControl(),
      terms: new FormControl(),
  })

  }

  ngOnInit(): void {
  }

}
