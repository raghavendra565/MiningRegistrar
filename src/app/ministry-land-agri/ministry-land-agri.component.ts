import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailspopupComponent } from '../detailspopup/detailspopup.component';
export interface Dummydata {
  claim_id: number;
  name: string;
  status: string;
  date : string;
  for_button: string;
}

const Claimdata: Dummydata[] = [
  {claim_id: 1143235436, name: 'ADANI MINING',status: 'approved', date:'Sep 18 2018', for_button:''},
  {claim_id: 2654235354, name: 'OZMINERALS', status: 'approved', date:'Sep 18 2018', for_button:''},
  {claim_id: 3876235336, name: 'GLOUCESTER', status: 'approved', date:'Sep 18 2018', for_button:''},
  {claim_id: 4384758235, name: 'RIO TINTO',  status: 'approved', date:'Sep 18 2018', for_button:''},
  {claim_id: 5437532676, name: 'CUESTA GOLD', status: 'approved', date:'Sep 18 2018', for_button:''},
  {claim_id: 6863824255, name: 'TINKLER GROUP',  status: 'approved', date:'Sep 18 2018', for_button:''},
  {claim_id: 7824756435, name: 'NEWMOUNT', status: 'approved', date:'Sep 19 2018', for_button:''},
  {claim_id: 8283746332, name: 'YANCOAL',  status: 'pending', date:'Sep 21 2018', for_button:''},
  {claim_id: 9239874347, name: 'XSTRATA',  status: 'pending', date:'Sep 21 2018', for_button:''},
  {claim_id: 1028698386, name: 'GVK', status: 'pending', date:'Sep 21 2018', for_button:''},
];
@Component({
  selector: 'app-ministry-land-agri',
  templateUrl: './ministry-land-agri.component.html',
  styleUrls: ['./ministry-land-agri.component.css']
})
export class MinistryLandAgriComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  selected = true;

  selectRow(row) {
    this.selected = false;
    console.log(row['name'],"  ",row['status']);
    const dialogRef = this.dialog.open(DetailspopupComponent,{
    width:'400px',
    data:{date:row['date'], claim_id:row['claim_id'], name:row['name'], status:row['status']} });
  }

  displayedColumns: string[] = ['claim_id','name','status','date','for_button'];
  dataSource = new MatTableDataSource(Claimdata);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }

}
