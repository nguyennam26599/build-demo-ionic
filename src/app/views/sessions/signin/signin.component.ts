import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  public loginForm: FormGroup;
  public user: any; // sorry do not have access to the actual type

  constructor(public fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      savePass: []
    });
  }

  ngOnInit() {
    this.user = {
      username: null,
      password: null,
      savePass: null
    }
  }

  saveUser() {
    console.log("saveUserCalled");
    console.log(this.loginForm.value);

    this.user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      savePass: this.loginForm.value.savePass
    }
  }

  get username() {
    return this.loginForm.value.username;
  }

  get password() {
    return this.loginForm.value.password;
  }
}
