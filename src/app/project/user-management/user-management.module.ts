import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementComponent} from './user-management.component';
import {UserListComponent} from "./user-list/user-list.component";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {TranslateModule} from "@ngx-translate/core";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [
    UserManagementComponent,
    UserListComponent,
    UserDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    TableModule,
    TranslateModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ]
})
export class UserManagementModule {
}
