import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MinistryMiningComponent } from './ministry-mining/ministry-mining.component';
import { MinistryLandAgriComponent } from './ministry-land-agri/ministry-land-agri.component';
import { MinistryFinanceComponent } from './ministry-finance/ministry-finance.component';
import { MiningCompanyComponent } from './mining-company/mining-company.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DetailspopupComponent } from './detailspopup/detailspopup.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import { NewRequestFormComponent } from './new-request-form/new-request-form.component';
import { HttpModule }    from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MinistryMiningComponent,
    MinistryLandAgriComponent,
    MinistryFinanceComponent,
    MiningCompanyComponent,
    HomepageComponent,
    DetailspopupComponent,
    NewRequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetailspopupComponent,MiningCompanyComponent]
})
export class AppModule { }
