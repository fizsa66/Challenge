import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUserModel, UserModel} from "../../../structure/model/user.model";
import {UserService} from "../../../structure/api/user.service";
import {TranslateService} from "@ngx-translate/core";
import {ConfirmationService} from "primeng/api";
import {IParam_outputModel, Param_outputModel} from "../../../structure/model/param_output.model";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: IUserModel[] = [new UserModel()];
  cols: any[] = [];
  @Output() showDialog = new EventEmitter<IParam_outputModel>();

  constructor(private userService: UserService, private translateService: TranslateService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.cols = [
      {field: 'name', header: this.translateService.instant('NAME')},
      {field: 'familyName', header: this.translateService.instant('FAMILY_NAME')},
      {field: 'userName', header: this.translateService.instant('USER_NAME')},
      {field: 'roleTitle', header: this.translateService.instant('ROLE')}
    ];

    this.userService.getUserList().subscribe((info) => {
      info.map(
        (i) =>
          i.roleTitle = i.role.title
      )
      this.userList = info;
    })
  }

  showItem(row, formMode) {
    let param: IParam_outputModel = new Param_outputModel();
    param.id = row?.id;
    param.formMode = formMode;
    param.model = row;
    this.showDialog.emit(param);
  }

  deleteItem(id) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      key: "deleteUser",
      accept: () => {
        //Actual logic to perform a confirmation
      }
    });
  }

}
