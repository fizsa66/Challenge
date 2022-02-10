import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../oAuth/auth.service";
import {IUserModel, UserModel} from "../model/user.model";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  user: IUserModel = new UserModel();
  formLogin: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      'userName': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {

  }

  loginProject() {
    this.authService.checkUser(this.user);
  }

}
