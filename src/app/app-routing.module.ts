import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./structure/login/login.component";
import {AuthGuardGuard} from "./auth-guard.guard";
import {MainComponent} from "./structure/main/main.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: MainComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
