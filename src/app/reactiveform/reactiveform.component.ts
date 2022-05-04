import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  checkoutForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    /*this.checkoutForm = formBuilder.group({
      emailAddr: new FormControl(),
      quantity: new FormControl(),
      terms: new FormControl(),
    })*/
  this.checkoutForm = formBuilder.group({
    emailAddr: ['',[Validators.required, Validators.email, Validators.minLength(5)]],
    quantity: ['',Validators.required],
    terms: ['',Validators.requiredTrue],
  })

  }

  ngOnInit(): void {
  }
  postData(){
    console.log('FormGroup object', this.checkoutForm);
    console.log('Entire Form Value', this.checkoutForm.value);
    console.log('Email Address', this.checkoutForm.value.emailAddr);
    console.log(this.checkoutForm.get('emailAddr'));
  }
}
