import {IBaseModel} from "./base.model";

export interface IRoleModel extends IBaseModel {
  title?: string;
}

export class RoleModel implements IRoleModel {
  constructor(title ?: string) {
  }
}
