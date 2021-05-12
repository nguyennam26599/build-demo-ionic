import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public loginForm: FormGroup;
  // public user: any; // sorry do not have access to the actual type

  constructor() {}

  // ngOnInit() {
  //   this.loginForm = this.fb.group({
  //     login: ['', Validators.required],
  //     email: ['', Validators.required],
  //     password: ['', Validators.required],
  //     confirmedPassword: ['', Validators.required]
  //   });
  //   this.user = {
  //     login: null,
  //     email: null,
  //     password: null
  //   }
  // }

  // saveUser() {
  //   console.log("saveUserCalled");
  //   console.log(this.loginForm.value);

  //   /* this.user.login = this.loginForm.value.login;
  //   this.user.eMail = this.loginForm.value.email;
  //   this.user.password = this.loginForm.value.confirmedPassword; */

  //   this.user = {
  //     login: this.loginForm.value.login,
  //     email: this.loginForm.value.email,
  //     password: this.loginForm.value.confirmedPassword
  //   }


  //   console.log(this.loginForm.value, this.user);
  //   /* this.userSevice.saveUser(this.user).subscribe(data => {
  //     console.log(data);
  //   });
  //   this.router.navigateByUrl('/tabs'); */
  // }
}
