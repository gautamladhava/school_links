import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { LogOutComponent } from 'src/app/shared/log-out/log-out.component';
import { MySchoolComponent } from './my-school/my-school.component';
import { CommonAlertComponent } from './common-alert/common-alert.component';
import { MessageComponent } from './message/message.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersRolesComponent } from './users-roles/users-roles.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'myschool', component: MySchoolComponent },
      {path:'common-alert',component:CommonAlertComponent},
      {path:'message',component:MessageComponent},
      {path:'groups',component:GroupsComponent},
      {path:'user-role',component:UsersRolesComponent},
      {path:'school-details',component:SchoolDetailsComponent},
      {path:'data-management',component:DataManagementComponent},
      {path:'account',component:AccountComponent},
      {path:'contact',component:ContactComponent}
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
