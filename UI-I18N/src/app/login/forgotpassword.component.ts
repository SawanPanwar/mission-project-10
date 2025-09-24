import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html'
})
export class ForgotpasswordComponent {

  endpoint = "http://localhost:8080/Auth/forgetPassword";

  form: any = {
    error: false,
    message: '',
    data: { id: null },
    inputerror: {},
  };

  constructor(private httpService: HttpServiceService, private router: Router) {
  }

  submit() {
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
    });
  }

}
