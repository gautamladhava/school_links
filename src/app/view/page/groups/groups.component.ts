import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatStepperIntl } from '@angular/material/stepper';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement3 {
  group: string;
  create: string;
  update: string;
  member: number;
  
}

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
name:string;
email:string;

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
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  // panelOpenState = false;
  showShortDesciption = true
  open=false
  alterDescriptionText() {
    this. showShortDesciption = !this. showShortDesciption;
    this.open=!this.open
 }

 ELEMENT_DATA3: PeriodicElement3[] = [
    {group:"Caregivers",create:"16/12/2022 11:32:55",update:"16/12/2022 11:32:55",member:12},
    {group:"Staff",create:"16/12/2022 11:32:55",update:"16/12/2022 11:32:55",member:10},
    {group:"All student",create:"16/12/2022 11:32:55",update:"16/12/2022 11:32:55",member:7},
    {group:"P&C",create:"16/12/2022 11:32:55",update:"16/12/2022 11:32:55",member:17},
    {group:"Year 1",create:"16/12/2022 11:32:55",update:"16/12/2022 11:32:55",member:2},
    {group:"Admin",create:"16/12/2022 11:32:55",update:"16/12/2022 11:32:55",member:21},
    ];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog,private _liveAnnouncer: LiveAnnouncer, private _matStepperIntl: MatStepperIntl) {}
  displayedColumns3: string[] = ['group', 'create', 'update', 'member','action'];
  dataSource3 = new MatTableDataSource(this.ELEMENT_DATA3);

 

  @ViewChild(MatSort) sort: MatSort | any;

 

  announceSortChange(sortState: Sort) {
   
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });



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
    {name:"Jerome Bell",email:"jeromebell21@gmail.com"},
    {name:"Kathryn Murphy",email:"kmurphy@gmail.com"},
    {name:"Kristin Watson",email:"kristinw@gmail.com"},
    {name:"Jenny Wilson",email:"jennnyw@gmail.com "},
    {name:"Jenny Wilson",email:"jennnyw@gmail.com "},
  {name:"Arlene McCoy",email:"arlencem@gmail.com"},
  {name:"Annette Black",email:"annetteb@gmail.com"},
  {name:"Cody Fisher",email:"fcody261@gmail.com"},
  {name:"Leslie Alexander",email:"lesliea@gmail.com"},
  {name:"Leslie Alexander",email:"lesliea@gmail.com"},
  {name:"Leslie Alexander",email:"lesliea@gmail.com"},
  {name:"Jerome Bell",email:"jeromebell21@gmail.com"},
  {name:"Kathryn Murphy",email:"kmurphy@gmail.com"},
  {name:"Kristin Watson",email:"kristinw@gmail.com"},
  {name:"Jenny Wilson",email:"jennnyw@gmail.com "},
  {name:"Arlene McCoy",email:"arlencem@gmail.com"},
  {name:"Annette Black",email:"annetteb@gmail.com"},
  {name:"Cody Fisher",email:"fcody261@gmail.com"},
  {name:"Leslie Alexander",email:"lesliea@gmail.com"},
  {name:"Leslie Alexander",email:"lesliea@gmail.com"},
  {name:"Leslie Alexander",email:"lesliea@gmail.com"},
  ];

 


  displayedColumns2: string[] = ['id', 'title','status', 'created'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(this.ELEMENT_DATA2);
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
ngAfterViewInit() { 
  // this.dataSource.paginator = this.paginator.toArray()[0];
  this.dataSource2.paginator = this.paginator.toArray()[0];
  this.dataSource3.sort = this.sort;
}


}
