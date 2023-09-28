import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delet-draft',
  templateUrl: './delet-draft.component.html',
  styleUrls: ['./delet-draft.component.scss']
})
export class DeletDraftComponent {
  constructor(public dialogRef: MatDialogRef<DeletDraftComponent> , public dialog: MatDialog) {}
}
