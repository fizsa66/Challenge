import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUserModel, UserModel} from "../model/user.model";
import {Subscription} from "rxjs";
import {AuthService} from "../oAuth/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnDestroy {

  user: IUserModel = new UserModel();
  isAuthenticated: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.subscription = this.authService.getUser().subscribe((info) => {
      this.user = info.user;
      this.isAuthenticated = info.isAuthenticated;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
