import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector:'app-login',
  templateUrl: 'login.component.html',
  styleUrls:['login.component.css']
})
export class LoginComponent  {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  answer = '';
  user = {
    email: '',
    password: '',
  };
   submitted = false;

    onSubmit() {
      this.submitted = true;
      this.user.email = this.signupForm.value.userData.email;
      this.user.password = this.signupForm.value.userData.password;
      this.signupForm.reset();
    }
}
