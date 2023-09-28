import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js/auto';
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

const ELEMENT_DATA: PeriodicElement[] = [
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
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  colorControl = new FormControl('one' as ThemePalette);
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
  dataSource = ELEMENT_DATA;

  title = 'ng-chart';
  chart: any = [];


  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',

      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            categoryPercentage: 0.6,
            barPercentage: 1,
            label: 'General Text Messages',
            data: [4.4, 3.6, 5.5, 3.2, 2.8, 2.2, 3.6],
            borderWidth: 1,
            borderRadius: Number.MAX_VALUE,
            backgroundColor: '#D8F1FF',
          },
          {
            categoryPercentage: 0.6,
            barPercentage: 1,
            label: 'Absence Messages',
            data: [4.4, 3.6, 5.5, 3.2, 2.8, 2.2, 3.6],
            borderWidth: 1,
            borderRadius: Number.MAX_VALUE,
            backgroundColor: '#FFF2D5',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            yAlign: 'bottom',
            xAlign: 'center',
            backgroundColor: '#ffffff',
            titleColor: 'black',

            bodyColor: 'black',
            borderColor: 'gray',
            borderWidth:1,
          },
        },
        // scales: {
        //   xAxes: [{
        //     gridLines: {
        //       display: false,
        //     },
        //     ticks: {
        //       fontSize: 15,
        //       fontColor: 'lightgrey'
        //     }
        //   }],
        //   yAxes: [{
        //     gridLines: {
        //       drawBorder: false,
        //     },
        //     ticks: {
        //       beginAtZero: true,
        //       fontSize: 15,
        //       fontColor: 'lightgrey',
        //       maxTicksLimit: 5,
        //       padding: 25,
        //     }
        //   }]
        // },
        scales: {
         
          x: {
            grid: {
              display: false,
              color: '#EAEAEA',
            },
       
          },
          y: {
            border:{
              color:"transparant",
              width:0,
            },
            grid: {
              color: '#F8F8F8',
            },
            ticks: {
              // color:'red',
      
              callback: function (value, index, ticks) {
                return value + 'K';
                
              },
            },
          },
        },
      },
    });
  }
}
