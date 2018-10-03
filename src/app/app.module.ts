  import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
/*import { ExcelService } from './viewpage/excel.service';
*/
import { FileUploadModule } from 'ng2-file-upload';


import { LoginComponent } from './login/login.component';

import { LoginService } from './login/login.service';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { ViewpageService } from './viewpage/viewpage.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FileUploadModule

  ],
  entryComponents: [ViewpageComponent],
  providers: [LoginService,ViewpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
