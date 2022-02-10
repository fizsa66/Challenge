import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IParam_outputModel, Param_outputModel} from "../../../structure/model/param_output.model";
import {ADD, EDIT, VIEW} from "../../../structure/constants/formMode.constant";
import {TranslateService} from "@ngx-translate/core";
import {IUserModel, UserModel} from "../../../structure/model/user.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IRoleModel, RoleModel} from "../../../structure/model/role.model";
import {RoleService} from "../../../structure/api/role.service";
import {UserService} from "../../../structure/api/user.service";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  @Input() display: boolean = false;

  @Input() paramInput: IParam_outputModel = new Param_outputModel();
  @Output() closeDialog = new EventEmitter<void>();
  title: string = null;
  isVisibleForm: boolean = false;
  user: IUserModel = new UserModel();
  formUserDialog: FormGroup;
  roleList: IRoleModel[] = [new RoleModel()];

  constructor(private translateService: TranslateService, private fb: FormBuilder, private roleService: RoleService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.formUserDialog = this.fb.group({
      'name': new FormControl('', Validators.required),
      'familyName': new FormControl('', Validators.required)
    })
  }

  onHide() {
    this.closeDialog.emit(null);
  }

  async onShow() {
    await this.getRoleList();
    switch (this.paramInput.formMode) {
      case ADD: {
        this.title = this.translateService.instant("ADD");
        break;
      }
      case EDIT: {
        this.title = this.translateService.instant("EDIT");
        this.getUserDetail();
        break;
      }
      case VIEW: {
        this.title = this.translateService.instant("VIEW");
        this.getUserDetail();
        break;
      }
    }

    this.isVisibleForm = this.paramInput.formMode != VIEW;
  }

  getUserDetail() {
    this.userService.getUserList(this.paramInput.model).subscribe((info) => {
      this.user = info[0];
    })
  }

  getRoleList() {
    this.roleService.getRoleList().subscribe((info) => {
      this.roleList = info;
    })
  }

  save() {

    //TODO: CREATE OR UPDATE USER USING FORM MODE
    debugger
  }

}
