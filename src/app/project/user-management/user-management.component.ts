import {Component, OnInit} from '@angular/core';
import {IParam_outputModel, Param_outputModel} from "../../structure/model/param_output.model";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  display: boolean = false;
  paramOutput: IParam_outputModel = new Param_outputModel();

  constructor() {
  }

  ngOnInit(): void {
  }

  displayDialog(param) {
    this.display = !this.display;
    this.paramOutput = param;
  }
}
