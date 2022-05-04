import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.scss']
})
export class ModelformComponent implements OnInit {
  form;
  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      firstName: '',
      nickName: '',
      email: '',
      phone: '',
      birthday: '',
      interest: this._fb.group({
        movie: '',
        music: '',
        technology: '',
        sports: '',
        games: ''
      }),
      sex: ''
    });
  }

  ngOnInit(): void {
  }

}
