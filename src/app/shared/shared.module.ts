import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogOutComponent } from './log-out/log-out.component';
import { MtrialModule } from './material/material.module';
import { DeletDraftComponent } from './delet-draft/delet-draft.component';
import { SentMessageComponent } from './sent-message/sent-message.component';
import { SentComponent } from './sent/sent.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LogOutComponent,
    DeletDraftComponent,
    SentMessageComponent,
    SentComponent,
    AddUserComponent,
    UpdateDetailsComponent
  ],
  imports: [
    CommonModule,
    MtrialModule,
    
    RouterModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LogOutComponent,
    MtrialModule,
    RouterModule,
    DeletDraftComponent,
    SentMessageComponent,
    AddUserComponent
  ]
})
export class SharedModule { }
