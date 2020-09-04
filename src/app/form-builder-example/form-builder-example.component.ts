import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';

interface FormBuilderI {
  formBuilderTitle:string;
  submitFormBuilder:()=>void
}

@Component({
  selector: 'app-form-builder-example',
  templateUrl: './form-builder-example.component.html',
  styleUrls: ['./form-builder-example.component.scss']
})

export class FormBuilderExampleComponent implements OnInit, FormBuilderI {
  formBuilderTitle:string = "Form builder example"

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
  }

formGroupExample = this._formBuilder.group({
  city:['',[Validators.required,Validators.minLength(3)]],
  contactNo:[],
  status:[]
})

/* submited form value and call api */
  submitFormBuilder() {

  }

  /* @ set api data */
  getApiData() {
    this.formGroupExample = this._formBuilder.group({
      city:['Los Angalis'],
      contactNo:['9094393409'],
      status:["Completed"]
    })
  }  

}
