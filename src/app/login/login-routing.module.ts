import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component'
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: "", component: LoginScreenComponent},
  {path: "logout", component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
