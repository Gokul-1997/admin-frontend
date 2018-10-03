import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
	
import { LoginComponent } from './login/login.component';
import { ViewpageComponent } from './viewpage/viewpage.component';



const routes: Routes = [ 
  { 
  	path: '', 
  component: LoginComponent

  },{
  	path:'viewpage',
  	component:ViewpageComponent
  }

];





@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
