import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterModule} from "./footer/footer.module";
import {HeaderModule} from "./header/header.module";
import {MainModule} from "./main/main.module";
import {LoginModule} from "./login/login.module";
import {SidebarModule} from "./sidebar/sidebar.module";
import {CookieService} from "ngx-cookie-service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    MainModule,
    LoginModule,
    SidebarModule
  ],
  providers:[CookieService]
})
export class StructureModule { }
