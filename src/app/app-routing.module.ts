import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',  loadChildren: () => import('./view/auth/auth.module').then(m => m.AuthModule)},
  {path:'pages',  loadChildren: () => import('./view/page/page.module').then(m => m.PageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
