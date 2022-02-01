import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteComponent } from 'angular-routing';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';


@Component({
  selector:'app-login',
  templateUrl: 'login.component.html',
  styleUrls:['login.component.css']
})
export class LoginComponent  {
   isLoginMode = true;
   isLoading = false;
   error: string = null;

   constructor(private authService: AuthService, private router: Router) {}

    onSwitchMode() {
      this.isLoginMode= !this.isLoginMode
    }

    onSubmit(form: NgForm) {
      if (!form.valid) {
        return;
      }
      const email = form.value.email;
      const password = form.value.password;

      let authObs: Observable<AuthResponseData>;

      this.isLoading = true;

      if (this.isLoginMode) {
        authObs = this.authService.login(email, password)
      } else {
        authObs = this.authService.signup(email, password)
      }

      authObs.subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );

      form.reset();
    }
}
