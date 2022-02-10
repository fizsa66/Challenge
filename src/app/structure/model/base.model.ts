export interface IBaseModel {
  id?: number
}

export class BaseModel implements IBaseModel {
  constructor(id?: number) {
  }
}
