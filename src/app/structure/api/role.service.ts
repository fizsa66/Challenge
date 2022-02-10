import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IRoleModel} from "../model/role.model";

@Injectable({
  providedIn: 'root'
})

export class RoleService {

  constructor(private http: HttpClient) {
  }

  getRoleList() {
    return this.http.get<IRoleModel[]>("./assets/data/role.data.json");
  }
}
