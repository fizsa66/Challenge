import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserManagementComponent} from "./user-management.component";
import {AuthGuardGuard} from "../../auth-guard.guard";
import {RouterModule} from "@angular/router";

const route = [{path :"", component: UserManagementComponent, canActivate:[AuthGuardGuard]}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ]
})
export class UserManagementRoutingModule { }
