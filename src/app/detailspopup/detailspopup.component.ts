import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Dummydata {
  name: string;
  claim_id: number;
  status: string;
  date : string;
  for_button: string;
}

@Component({
  selector: 'app-detailspopup',
  templateUrl: './detailspopup.component.html',
  styleUrls: ['./detailspopup.component.css']
})
export class DetailspopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailspopupComponent>,@Inject(MAT_DIALOG_DATA) public data: Dummydata) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
