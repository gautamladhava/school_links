import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MySchoolComponent } from './my-school/my-school.component';
import { CommonAlertComponent } from './common-alert/common-alert.component';
import { MessageComponent } from './message/message.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersRolesComponent } from './users-roles/users-roles.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent, MySchoolComponent, CommonAlertComponent, MessageComponent, GroupsComponent, UsersRolesComponent, SchoolDetailsComponent, DataManagementComponent, AccountComponent, ContactComponent],
  imports: [CommonModule, PageRoutingModule, SharedModule],
})
export class PageModule {}
