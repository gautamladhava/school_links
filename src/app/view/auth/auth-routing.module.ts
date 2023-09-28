import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { PagesComponent } from '../page/pages.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'login',component:LoginComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  // {path:'pages',component:PagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
