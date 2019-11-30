import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { UnderHeaderComponent } from './under-header/under-header.component';
import { AddChangesComponent } from './add-changes/add-changes.component';
import { ChangeTableComponent } from './change-table/change-table.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ DemoMaterialModule} from './material-module';
import { CalendarComponent } from './calendar/calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { IncomePipe } from './pipes/income.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnderHeaderComponent,
    AddChangesComponent,
    ChangeTableComponent,
    FilterPipe,
    CalendarComponent,
    AboutComponent,
    MainBodyComponent,
    UsersListComponent,
    UserDetailsComponent,
    IncomePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
