import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup,FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailspopupComponent } from '../detailspopup/detailspopup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.css']
})
export class NewRequestFormComponent implements OnInit {
  newRequestForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
        this.newRequestForm = this.formBuilder.group({
            comp_name: ['', Validators.required],
            cord: ['', Validators.required],
            ore:['', Validators.required],
            start_time:['', Validators.required],
            end_time:['',Validators.required],
            value:['',Validators.required]
            //email: ['', [Validators.required, Validators.email]],
            //password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
  get f() { return this.newRequestForm.controls; }
  onSubmit() {
        this.submitted = true;
        if (this.newRequestForm.invalid) {
            return;
        }
        console.log(JSON.stringify(this.newRequestForm.value));
        const dialogRef = this.dialog.open(DetailspopupComponent,{
        width:'400px',
        data:null });
        this.router.navigate(['mining-company'])
    }
}
