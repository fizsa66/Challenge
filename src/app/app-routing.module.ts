import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./structure/login/login.component";
import {AuthGuardGuard} from "./auth-guard.guard";
import {MainComponent} from "./structure/main/main.component";
import {PageNotFoundComponent} from "./structure/page-not-found/page-not-found.component";
import {HomeComponent} from "./structure/home/home.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {
    path: '', component: MainComponent,
    children: [
      {path: "home", component: HomeComponent, canActivate: [AuthGuardGuard]},
      {path: "userManagement", loadChildren: ()=>import('./project/user-management/user-management-routing.module').then(m=> m.UserManagementRoutingModule)},
      {path: '**', component: PageNotFoundComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
