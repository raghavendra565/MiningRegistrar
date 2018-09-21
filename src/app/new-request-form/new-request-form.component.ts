import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup,FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { DetailspopupComponent } from '../detailspopup/detailspopup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.css']
})
export class NewRequestFormComponent implements OnInit {
  newRequestForm: FormGroup;
  submitted = false;
  result :any;
  constructor(private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog, private http: Http) { }

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
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = JSON.stringify(this.newRequestForm.value);
    console.log(data);
    var url = "http://localhost:8080/api/post/claim/new/";
    this.http.post(url, data, options).map((res:Response) => res.json()).subscribe(data => {console.log(data)}, error => {alert("Error"); console.log("error ::::")});
    this.submitted = true;
    if (this.newRequestForm.invalid) {
        return;
    }
    const dialogRef = this.dialog.open(DetailspopupComponent,{
    width:'400px',
    data:null });
    this.router.navigate(['mining-company'])
    }
}
