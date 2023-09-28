import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddUserComponent } from 'src/app/shared/add-user/add-user.component';
import { DeletDraftComponent } from 'src/app/shared/delet-draft/delet-draft.component';
import { UpdateDetailsComponent } from 'src/app/shared/update-details/update-details.component';

export interface PeriodicElement {
  img?: string;
  name: string;
  no: number;
  email: string;
  role: string;
  status: string;
  time: number;
}
export interface PeriodicElement2 {
 id:number;
 title:string;
 status:string

}

const ELEMENT_DATA: PeriodicElement[] | any  = [
  {
    img: 'p_img_1.svg',
    name: 'Jerome Bell',
    no: 61092156867,
    email: 'jeromebell21@gmail.com',
    role: 'Admin',
    status: 'Active',
    time: 2,
  },
  {
    img: 'p_img_2.svg',
    name: 'Kathryn Murphy',
    no: 61488805460,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 1,
  },
  {
    name: 'Kristin Watson ',
    no: 61488827086,
    email: 'jeromebell21@gmail.com',
    role: 'Admin',
    status: 'Active',
    time: 1,
  },
  {
    img: 'p_img_3.svg',
    name: 'Jenny Wilson',
    no: 61480025873,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Inactive',
    time: 3,
  },
  {
    name: 'Arlene McCoy',
    no: 61488850430,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 5,
  },
  {
    name: 'Annette Black',
    no: 61480026121,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 10,
  },
  {
    img: 'p_img_4.svg',
    name: 'Cody Fisher',
    no: 61480028671,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Inactive',
    time: 2,
  },
  {
    img: 'p_img_5.svg',
    name: 'Leslie Alexander',
    no: 61480013910,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 1,
  },
  {
    img: 'p_img_1.svg',
    name: 'Jerome Bell',
    no: 61092156867,
    email: 'jeromebell21@gmail.com',
    role: 'Admin',
    status: 'Active',
    time: 2,
  },
  {
    img: 'p_img_2.svg',
    name: 'Kathryn Murphy',
    no: 61488805460,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 1,
  },
  {
    name: 'Kristin Watson ',
    no: 61488827086,
    email: 'jeromebell21@gmail.com',
    role: 'Admin',
    status: 'Active',
    time: 1,
  },
  {
    img: 'p_img_1.svg',
    name: 'Jerome Bell',
    no: 61092156867,
    email: 'jeromebell21@gmail.com',
    role: 'Admin',
    status: 'Active',
    time: 2,
  },
  {
    img: 'p_img_3.svg',
    name: 'Jenny Wilson',
    no: 61480025873,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Inactive',
    time: 3,
  },
  {
    name: 'Arlene McCoy',
    no: 61488850430,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 5,
  },
  {
    img: 'p_img_1.svg',
    name: 'Jerome Bell',
    no: 61092156867,
    email: 'jeromebell21@gmail.com',
    role: 'Admin',
    status: 'Active',
    time: 2,
  },
  {
    name: 'Annette Black',
    no: 61480026121,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 10,
  },
  {
    img: 'p_img_4.svg',
    name: 'Cody Fisher',
    no: 61480028671,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Inactive',
    time: 2,
  },
  {
    img: 'p_img_5.svg',
    name: 'Leslie Alexander',
    no: 61480013910,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 1,
  },
  {
    img: 'p_img_1.svg',
    name: 'Jerome Bell',
    no: 61092156867,
    email: 'jeromebell21@gmail.com',
    role: 'Admin',
    status: 'Active',
    time: 2,
  },
  {
    img: 'p_img_1.svg',
    name: 'Jerome Bell',
    no: 61092156867,
    email: 'jeromebell21@gmail.com',
    role: 'Admin',
    status: 'Active',
    time: 2,
  },
  {
    img: 'p_img_2.svg',
    name: 'Kathryn Murphy',
    no: 61488805460,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 1,
  },
  {
    name: 'Kristin Watson ',
    no: 61488827086,
    email: 'jeromebell21@gmail.com',
    role: 'Admin',
    status: 'Active',
    time: 1,
  },
  {
    name: 'Annette Black',
    no: 61480026121,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 10,
  },
  {
    img: 'p_img_3.svg',
    name: 'Jenny Wilson',
    no: 61480025873,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Inactive',
    time: 3,
  },
  {
    name: 'Arlene McCoy',
    no: 61488850430,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 5,
  },
  {
    name: 'Annette Black',
    no: 61480026121,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 10,
  },

  {
    img: 'p_img_5.svg',
    name: 'Leslie Alexander',
    no: 61480013910,
    email: 'jeromebell21@gmail.com',
    role: 'Staff',
    status: 'Active',
    time: 1,
  },
];

@Component({
  selector: 'app-users-roles',
  templateUrl: './users-roles.component.html',
  styleUrls: ['./users-roles.component.scss']
})
export class UsersRolesComponent {
  private _liveAnnouncer: any;

  constructor(public dialog: MatDialog) {}

  openDialogs() {
    const dialogRef = this.dialog.open(DeletDraftComponent);
  }
  
update(){
  const dialogRef = this.dialog.open(UpdateDetailsComponent);
}

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'weight1',
    'weight2',
    'weight3',
    'symbol',
  ];
  // dataSource = ELEMENT_DATA;
  ELEMENT_DATA2: PeriodicElement2[] = [    
   
    {id:11,title:"Admin",status:"Inactive"},
    {id:12,title:"Admin",status:"Active"},
    {id:14,title:"Staff",status:"Active"},
    {id:14,title:"Admin",status:"Active"},
    {id:156,title:"Admin",status:"Inactive"},
    {id:16,title:"Staff",status:"Active"},
    {id:18,title:"Admin",status:"Active"},
    {id:19,title:"Admin",status:"Inactive"},
    {id:13,title:"Staff",status:"Active"},
    {id:14,title:"Admin",status:"Active"},
    {id:71,title:"Staff",status:"Active"},
    {id:168,title:"Admin",status:"Inactive"},
    {id:14,title:"Staff",status:"Active"},
    {id:15,title:"Admin",status:"Active"},
    {id:1567,title:"Admin",status:"Active"},
    {id:17,title:"Staff",status:"Inactive"},
    {id:17,title:"Admin",status:"Active"},
    {id:17,title:"Staff",status:"Active"},
    {id:15,title:"Staff",status:"Active"},
    {id:13,title:"Admin",status:"Active"},
    {id:15,title:"Admin",status:"Inactive"},
    {id:17,title:"Staff",status:"Active"},
  ];
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }




  displayedColumns2: string[] = ['id', 'title','status', 'created','update'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(this.ELEMENT_DATA2);
  @ViewChild(MatSort) sort: MatSort | any;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
ngAfterViewInit() { 
  this.dataSource.paginator = this.paginator.toArray()[0];
  this.dataSource2.paginator = this.paginator.toArray()[1];
  this.dataSource2.sort = this.sort;

}


adduser() {
  const dialogRef = this.dialog.open(AddUserComponent);
}
}
