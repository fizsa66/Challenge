import {Injectable} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {Route, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated : boolean = false;

  isAuthenticated() : Observable<boolean>{
    return of(this._isAuthenticated);
  }

  constructor(private cookieService: CookieService, private route: Router) {
  }

  checkLogin() {
    if(this.cookieService.get("token")){
      this._isAuthenticated = true;
    } else {
      this._isAuthenticated = false;
    }
    this.route.navigate(['/home']);
  }
}
