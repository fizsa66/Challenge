import {Component, Input, OnInit} from '@angular/core';
import {IUserModel, UserModel} from "../../model/user.model";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: IUserModel = new UserModel();

  constructor() {
  }

  ngOnInit(): void {
  }

}
