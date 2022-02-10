import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterModule} from "./footer/footer.module";
import {HeaderModule} from "./header/header.module";
import {MainModule} from "./main/main.module";
import {LoginModule} from "./login/login.module";
import {SidebarModule} from "./sidebar/sidebar.module";
import {CookieService} from "ngx-cookie-service";
import { UserCardComponent } from './global-cmp/user-card/user-card.component';
import {SharedModule} from "primeng/api";
import {CardModule} from "primeng/card";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    UserCardComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    SharedModule,
    CardModule
  ],
  exports: [
    UserCardComponent
  ],
  providers: [CookieService]
})
export class StructureModule { }
