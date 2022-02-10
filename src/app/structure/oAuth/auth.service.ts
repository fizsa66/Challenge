import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {IUserModel, UserModel} from "../model/user.model";
import {UserService} from "../api/user.service";
import {Observable, of, delay, Subject} from 'rxjs';
import {MessageService} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated: boolean = false;
  private user: IUserModel = new UserModel();
  private subjectUser = new Subject();

  isAuthenticated(): Observable<boolean> {
    return of(this._isAuthenticated);
  }

  constructor(private cookieService: CookieService, private route: Router, private userService: UserService, private messageService: MessageService, private translateService: TranslateService) {
  }

  checkLogin() {
    if (this.cookieService.get("token")) {
      this._isAuthenticated = true;
    } else {
      this._isAuthenticated = false;
    }
    this.route.navigate(['/home']);
  }

  checkUser(model: IUserModel) {
    this.userService.getUserList(model).pipe(delay(750)).subscribe((item) => {
      if (item.length > 0) {
        this._isAuthenticated = true;
        this.user = item[0];
        //this.subjectUser.next(this.user);
        this.route.navigate(["/home"]);
      } else {
        this._isAuthenticated = false;
        this.messageService.add({
          severity: 'error',
          summary: this.translateService.instant('LOGIN_ERROR'),
          detail: 'USERNAME/PASSWORD_IS_NOT_CORRECT'
        });
      }
    });
  }

  getUser(): Observable<any> {
    return of({
      user: this.user,
      isAuthenticated: this._isAuthenticated
    });
  }
}
