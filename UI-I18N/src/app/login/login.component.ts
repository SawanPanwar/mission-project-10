import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  endpoint = "http://localhost:8080/Auth/login";

  form: any = {
    error: false,
    message: '',
    data: { id: null },
    inputerror: {},
  };

  constructor(private httpService: HttpServiceService, private router: Router) {
  }

  signIn() {
    var _self = this;
    this.httpService.post(this.endpoint, this.form.data, function (res: any) {

      _self.form.message = '';
      _self.form.inputerror = {};

      if (res.result.message) {
        _self.form.message = res.result.message;
      }

      _self.form.error = !res.success;
      if (_self.form.error && res.result.inputerror) {
        _self.form.inputerror = res.result.inputerror;
      }

      if (res.success) {
        localStorage.setItem("loginId", res.result.loginId);
        localStorage.setItem("role", res.result.role);
        localStorage.setItem("fname", res.result.fname);
        localStorage.setItem("lname", res.result.lname);
        localStorage.setItem("userId", res.result.data.id);

         _self.router.navigateByUrl('dashboard');
      }
    });
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }
}
