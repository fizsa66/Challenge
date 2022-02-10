import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IUserModel} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserList(user?:IUserModel): Observable<IUserModel[]> {
    return this.http.get<IUserModel[]>("./assets/data/user.data.json").pipe(
      map(result =>
        user == undefined? result : result.filter(item => (item.id === user.id) || (item.userName === user.userName && item.password === user.password))
      )
    )
  }
}
