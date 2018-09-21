import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailspopupComponent } from '../detailspopup/detailspopup.component';

export interface Dummydata {
  name: string;
  claim_id: number;
  status: string;
  date : string;
  for_button: string;
}

const Claimdata: Dummydata[] = [
  {claim_id: 1143235436, name: 'ADANI MINING',status: 'pending', date:'Sep 18 2018', for_button:'hghfnhf'},
  {claim_id: 2654235354, name: 'OZMINERALS', status: 'pending', date:'Sep 18 2018', for_button:''},
  {claim_id: 3876235336, name: 'GLOUCESTER', status: 'pending', date:'Sep 18 2018', for_button:''},
  {claim_id: 4384758235, name: 'RIO TINTO',  status: 'pending', date:'Sep 18 2018', for_button:''},
  {claim_id: 5437532676, name: 'CUESTA GOLD', status: 'pending', date:'Sep 18 2018', for_button:''},
  {claim_id: 6863824255, name: 'TINKLER GROUP',  status: 'pending', date:'Sep 18 2018', for_button:''},
  {claim_id: 7824756435, name: 'NEWMOUNT', status: 'pending', date:'Sep 18 2018', for_button:''},
  {claim_id: 8283746332, name: 'YANCOAL',  status: 'pending', date:'Sep 18 2018', for_button:''},
  {claim_id: 9239874347, name: 'XSTRATA',  status: 'pending', date:'Sep 18 2018', for_button:''},
  {claim_id: 1028698386, name: 'GVK', status: 'pending', date:'Sep 18 2018', for_button:''},
];

@Component({
  selector: 'app-ministry-finance',
  templateUrl: './ministry-finance.component.html',
  styleUrls: ['./ministry-finance.component.css']
})
export class MinistryFinanceComponent implements OnInit {

    constructor(public dialog: MatDialog) { }
    selected = true;
    selectRow(row) {
      this.selected = false;
    console.log(row['name'],"  ",row['status']);
    const dialogRef = this.dialog.open(DetailspopupComponent,{
      width:'400px',
      data:{date:row['date'], claim_id:row['claim_id'], name:row['name'], status:row['status']}
    });
    }
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    displayedColumns: string[] = ['date','claim_id','name','status','for_button'];
    dataSource = new MatTableDataSource(Claimdata);
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

}
