import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {TranslateModule} from "@ngx-translate/core";
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {KeyFilterModule} from "primeng/keyfilter";
import {MessageModule} from "primeng/message";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    FormsModule,
    KeyFilterModule,
    ReactiveFormsModule,
    MessageModule
  ]
})
export class LoginModule { }
