import {IBaseModel} from "./base.model";

export interface IMenuModel extends IBaseModel {
  menuName?: string;
  menuKey?:string;
  role?: string[];
}

export class MenuModel implements IMenuModel {
  constructor(menuName?: string,menuKey?:string, role?: string[]) {
  }
}
