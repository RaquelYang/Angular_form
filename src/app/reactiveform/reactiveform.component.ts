import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  checkoutForm: FormGroup;
  valueChangeTracked = ''
  constructor(private formBuilder: FormBuilder) {
    /*this.checkoutForm = formBuilder.group({
      emailAddr: new FormControl(),
      quantity: new FormControl(),
      terms: new FormControl(),
    })*/
  this.checkoutForm = formBuilder.group({
    emailAddr: ['',[Validators.required, Validators.email, Validators.minLength(5)]],
    quantity: ['',Validators.required],
    terms: [false,Validators.requiredTrue],
  })

  }

  ngOnInit(): void {
    /*
    // valueChanges 偵測 checkoutForm 的 emailAddr 的值
    this.checkoutForm.get('emailAddr')?.valueChanges.subscribe(data => {
      this.valueChangeTracked = data;
    })
    */
    // valueChanges 偵測整個 checkoutForm
    const value = this.checkoutForm.valueChanges.subscribe( data => {
      console.log(data);
    })

    // statusChanges 判斷 emailAddr 是否合法
    /*this.checkoutForm.get('emailAddr')?.statusChanges.subscribe( data => {
      console.log(data);
    })*/
    // statusChanges 判斷整個 checkoutForm 是否合法
    this.checkoutForm.statusChanges.subscribe( data => {
      console.log(data);
    })

    /* setValue 需要輸入整個表單的值，若有少一個則會 error
    this.checkoutForm.setValue({
      emailAddr: 'text@abc.com',
      quantity: 10,
      terms: true
    })*/

    // patchValue 只需要輸入自己想要的數值就好
    this.checkoutForm.patchValue({
      emailAddr: 'text@abc.com',
      quantity: 10
    })
  }
  postData(){
    console.log('FormGroup object', this.checkoutForm);
    console.log('Entire Form Value', this.checkoutForm.value);
    console.log('Email Address', this.checkoutForm.value.emailAddr);
    console.log(this.checkoutForm.get('emailAddr'));
    this.resetForm()
  }
  resetForm(){
    // 清除整個表單
    this.checkoutForm.reset();
  }
}
