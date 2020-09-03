import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

interface UserRegister {
  formTitle: string;
  getRegisterUser: () => void;
  submitRegisterUser:()=> any;
}

@Component({
  selector: 'app-form-group-example',
  templateUrl: './form-group-example.component.html',
  styleUrls: ['./form-group-example.component.scss']
})
export class FormGroupExampleComponent implements OnInit,UserRegister {
  public formTitle: string = 'Registration form (FormGroup)';

  constructor() { }
  /* calling api */
  ngOnInit(): void {

  }

  registerUser: FormGroup = new FormGroup({
    username: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl('')
  })

  /* get data from api and set value */

  getRegisterUser(): void {
    //this.register.pathchValue() // use for if you dont want all form value to set
    this.registerUser.setValue({
      username: "Nikhil",
      lastname:"sonwane",
      password: "abcabc",
      confirmpassword: "abcabc"
    });
  }

  submitRegisterUser() {
    console.log("form Submited value",this.registerUser.value);
    
  }

}
