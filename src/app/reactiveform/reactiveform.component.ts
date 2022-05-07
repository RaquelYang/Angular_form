import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

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
      // FormArray 包一個 FormGroup
      items: this.formBuilder.array([
        this.formBuilder.group({
          itemId: ['1'],
          itemName: ['2'],
          itemDesc: ['3'],
          itemDone: ['', Validators.requiredTrue]
        })
      ])
    })
    // items 格式，較符合實際開發資料形式
    /*  [
          {itemId: '1', itemName: '2', itemDesc: '3', itemDone: ''},
          {itemId: '1', itemName: '2', itemDesc: '3', itemDone: ''},
          {itemId: '1', itemName: '2', itemDesc: '3', itemDone: ''},
          {itemId: '1', itemName: '2', itemDesc: '3', itemDone: ''},
        ]
    */
  }
  // 呼叫此函數他會回傳整個 FormArray 它可以使用 Array 的方法， push, pop, split
  get itemsForm(){
    return this.checkoutForm.get('items') as FormArray
  }
  ngOnInit(): void {
    // get FormArray data
    console.log(this.itemsForm.value.length);
    console.log(this.itemsForm.value);
    console.log(this.itemsForm.value[0]);
    console.log(this.itemsForm.value[0].itemDesc);
    // set FormArray data
    this.itemsForm.setValue([
      {
        itemId: ['4'],
        itemName: ['9'],
        itemDesc: ['8'],
        itemDone: ['', Validators.requiredTrue]
      }
    ])
    // 只重置 itemsForm 的部分
    this.itemsForm.reset()

    /*
    // valueChanges 偵測 checkoutForm 的 emailAddr 的值
    this.checkoutForm.get('emailAddr')?.valueChanges.subscribe(data => {
      this.valueChangeTracked = data;
    })
    */
    // valueChanges 偵測整個 checkoutForm
    /*
    const value = this.checkoutForm.valueChanges.subscribe( data => {
      console.log(data);
    })
    */

    // statusChanges 判斷 emailAddr 是否合法
    /*this.checkoutForm.get('emailAddr')?.statusChanges.subscribe( data => {
      console.log(data);
    })*/
    // statusChanges 判斷整個 checkoutForm 是否合法
    /*
    this.checkoutForm.statusChanges.subscribe( data => {
      console.log(data);
    })
    */

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
  // 當使用者觸發這格方法會新增一個 item 到 formArray 裡
  addNewItem(){
    const itemLength = this.itemsForm.length;
    const newItem = this.formBuilder.group({
      itemId: [itemLength + 1],
      itemName: [''],
      itemDesc: [''],
      itemDone: ['', Validators.requiredTrue]
    });
    console.log(itemLength);
    this.itemsForm.push(newItem);
  }
  removeItem(itemId: number){
    console.log(itemId);
    this.itemsForm.removeAt(itemId);
  }
}


