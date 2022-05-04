import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.scss']
})
export class ModelformComponent implements OnInit {
  form;
  emailPattern = '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      nickName: '',
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
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
