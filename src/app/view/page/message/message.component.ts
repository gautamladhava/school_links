import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeletDraftComponent } from 'src/app/shared/delet-draft/delet-draft.component';
import { SentMessageComponent } from 'src/app/shared/sent-message/sent-message.component';
import { UpdateDetailsComponent } from 'src/app/shared/update-details/update-details.component';




export interface PeriodicElement {
  title:string;
  content:string;
  no:number
}

export interface PeriodicElement2 {
  title:string;
  content:string;

}
export interface PeriodicElements {
  content:string;
  no:number
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  colorControl = new FormControl('one' as ThemePalette);
  _liveAnnouncer: any;

  announceSortChange(sortState: Sort) {    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  openDialogs() {
    const dialogRef = this.dialog.open(DeletDraftComponent);
  }
  openDialoges() {
    const dialogRef = this.dialog.open(SentMessageComponent);
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(public dialog: MatDialog) {}
  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
  
  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
  ELEMENT_DATA: PeriodicElement[] = [    
    {title:" Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:881},       
    {title:"Soccer Training Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:882},       
    {title:"Soccer Training  ",content:"Hi team, soccer training is cancelled for today.",no:883},       
    {title:"Soccer  Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:884},      
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:885},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:886},    
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:887},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:888},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:889},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8820},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8811},      
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8812},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8813},    
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8814},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8815},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8816},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8817},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8819},      
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8820},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:8821},    
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:88},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:88},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:88},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:88},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:88},      
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:88},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",no:88}
  ];
  displayedColumns: string[] = ['title', 'content','delivery', 'create','sent', 'no','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  ELEMENT_DATAs: PeriodicElements[] = [    
    {content:"Hi team, soccer training is cancelled for today.",no:881},       
    {content:"Hi team, soccer training is cancelled for today.",no:882},       
    {content:"Hi team, soccer training is cancelled for today.",no:883},       
    {content:"Hi team, soccer training is cancelled for today.",no:884},      
    {content:"Hi team, soccer training is cancelled for today.",no:885},       
    {content:"Hi team, soccer training is cancelled for today.",no:886},    
    {content:"Hi team, soccer training is cancelled for today.",no:887},       
    {content:"Hi team, soccer training is cancelled for today.",no:888},       
    {content:"Hi team, soccer training is cancelled for today.",no:889},       
    {content:"Hi team, soccer training is cancelled for today.",no:8820},       
    {content:"Hi team, soccer training is cancelled for today.",no:8811},      
    {content:"Hi team, soccer training is cancelled for today.",no:8812},       
    {content:"Hi team, soccer training is cancelled for today.",no:8813},    
    {content:"Hi team, soccer training is cancelled for today.",no:8814},       
    {content:"Hi team, soccer training is cancelled for today.",no:8815},       
    {content:"Hi team, soccer training is cancelled for today.",no:8816},       
    {content:"Hi team, soccer training is cancelled for today.",no:8817},       
    {content:"Hi team, soccer training is cancelled for today.",no:8819},      
    {content:"Hi team, soccer training is cancelled for today.",no:8820},       
    {content:"Hi team, soccer training is cancelled for today.",no:8821},    
    {content:"Hi team, soccer training is cancelled for today.",no:88},       
    {content:"Hi team, soccer training is cancelled for today.",no:88},       
    {content:"Hi team, soccer training is cancelled for today.",no:88},       
    {content:"Hi team, soccer training is cancelled for today.",no:88},       
    {content:"Hi team, soccer training is cancelled for today.",no:88},      
    {content:"Hi team, soccer training is cancelled for today.",no:88},       
    {content:"Hi team, soccer training is cancelled for today.",no:88}
  ];
  displayedColumn: string[] = ['title1', 'content1', 'create1',];
  dataSource1 = new MatTableDataSource<PeriodicElements>(this.ELEMENT_DATAs);
  ELEMENT_DATA2: PeriodicElement2[] = [    
    {title:" Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",},       
    {title:"Soccer Training Training Cancelled ",content:"Hi team, soccer training is cancelled for today.",},       
    {title:"Soccer Training  ",content:"Hi team, soccer training is cancelled for today.",},      
    {title:"Soccer  Cancelled ",content:"Hi team, soccer training is cancelled for today.",},     
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},    
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},      
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},    
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},      
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},    
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},      
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."},       
    {title:"Soccer Training Cancelled ",content:"Hi team, soccer training is cancelled for today."}
  ];
  displayedColumns2: string[] = ['title2', 'content2','delivery2', 'create2','sent2', 'no2','action2'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(this.ELEMENT_DATA2);
  @ViewChild(MatSort) sort: MatSort | any;
@ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
ngAfterViewInit() { 
  this.dataSource.paginator = this.paginator.toArray()[0];
  this.dataSource1.paginator = this.paginator.toArray()[1];
  this.dataSource2.paginator = this.paginator.toArray()[2];
  this.dataSource.sort = this.sort;
} 
}
