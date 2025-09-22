import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  endpoint = "http://localhost:8080/Auth/";

  form: any = {
    data: {}
  }

  constructor(private httpService: HttpServiceService, private router: Router) { }

  isLogin() {
    let check = localStorage.getItem('fname');
    if (check != "null" && check != null) {
      this.form.data.fname = localStorage.getItem("fname");
      this.form.data.role = localStorage.getItem("role");
      return true;
    } else {
      return false;
    }
  }

  logout() {
    var _self = this;
    this.httpService.get(this.endpoint + 'logout', function (res: any) {
      localStorage.clear();
      _self.router.navigateByUrl('login')
    });
  }
}
