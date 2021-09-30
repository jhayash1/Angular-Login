import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector:'app-login',
  templateUrl: 'login.component.html',
  styleUrls:['login.component.css']
})
export class LoginComponent  {
   isLoginMode = true;
   isLoading = false;
   error: string = null;

   constructor(private authService: AuthService) {}

    onSwitchMode() {
      this.isLoginMode= !this.isLoginMode
    }

    onSubmit(form: NgForm) {
      if (!form.valid) {
        return;
      }
      const email = form.value.email;
      const password = form.value.password;
      this.isLoading = true;
  
      if (this.isLoginMode) {
        // ...
      } else {
        this.authService.signup(email, password).subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false;
          },
          errorMessage => {
            console.log(errorMessage);
            switch (errorMessage.error.error.message) {
              case 'EMAIL_EXISTS':
              this.error = 'This email is exist already'
            }
            this.isLoading = false;
          }
        );
      }
  
      form.reset();
    }
}
