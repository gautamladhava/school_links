import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SentComponent } from '../sent/sent.component';

@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.scss']
})
export class SentMessageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(SentComponent);
  }
  
}
