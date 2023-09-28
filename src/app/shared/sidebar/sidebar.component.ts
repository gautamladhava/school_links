import { Component } from '@angular/core';
import { LogOutComponent } from '../log-out/log-out.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(LogOutComponent);
  }
}
