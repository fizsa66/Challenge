import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IMenuModel, MenuModel} from "../model/menu.model";

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor(private http: HttpClient) {
  }

  getMenuList(role?: string): Observable<MenuModel[]> {
    return this.http.get<IMenuModel[]>("./assets/data/menu.data.json").pipe(
      map(result =>
        result.filter((meun) => role === meun.role?.find(item => item == role))
      )
    )
  }
}
