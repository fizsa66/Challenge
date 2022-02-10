import {IRoleModel} from "./role.model";
import {IBaseModel} from "./base.model";

export interface IUserModel extends IBaseModel {
  userName?: string;
  password?: string;
  name?: string;
  familyName?: string;
  img?: string;
  role?: IRoleModel;
  roleTitle?: string;
}

export class UserModel implements IUserModel {
  constructor(name?: string, familyName?: string, img?: string, role?: IRoleModel, roleTitle?: string, userName?: string, password?: string) {
  }
}
