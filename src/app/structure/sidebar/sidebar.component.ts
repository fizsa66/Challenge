import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUserModel, UserModel} from "../model/user.model";
import {Subscription} from "rxjs";
import {AuthService} from "../oAuth/auth.service";
import {MenuService} from "../api/menu.service";
import {IMenuModel, MenuModel} from "../model/menu.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  user: IUserModel = new UserModel();
  menuList: IMenuModel[] = [new MenuModel()];
  subscription: Subscription = new Subscription();

  constructor(private authService: AuthService, private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.subscription = this.authService.getUser().subscribe((info: any) => {
      this.user = info.user;
      if (this.user != undefined)
        this.menuService.getMenuList(this.user.role?.title).subscribe((info: IMenuModel[]) => {
          this.menuList = info;
        })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
