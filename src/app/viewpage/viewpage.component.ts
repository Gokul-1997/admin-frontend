import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { ViewpageService } from './viewpage.service';
/*import { ExcelService } from './excel.service';
*/

import swal from 'sweetalert2'


@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {
 panelOpenState = false;

 

 today: number = Date.now();

 
users: any;
user_data: any;

  constructor(private router:Router,private view:ViewpageService) { }

  ngOnInit() {
this.view.user_list().subscribe( res => {
    this.users = res;
   console.log(this.users)
  })
/*
 this.date1 = new Date(2015, 11, 1); 
this.date2 = new Date(2014, 0, 1);
 
this.diff = new DateDiff(date1, date2);
diff.days();*/
}

 open(id){

/*   this.panelOpenState = true
*/  this.user_data = ''
	this.view.user_detail(id).subscribe( res => {
    this.user_data = res;
   console.log(this.user_data)
})
}

/*export():void{
  this.spinner.show();
    this.http.get('http://182.72.104.66:3050/details/export').subscribe(res => {
       this.excel_data = res.json()
       this.excelService.exportAsExcelFile(this.excel_data, 'sample');
       this.spinner.hide();
    });
  }

*/
  }
