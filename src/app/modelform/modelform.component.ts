import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.scss']
})
export class ModelformComponent implements OnInit {
  form;
  constructor() { }

  ngOnInit(): void {
  }

}
