import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login : any = {};

  constructor(private router:Router) { }

  ngOnInit() {
  }

loginsave(){
	  if(this.login.email == 'admin' && this.login.password == 'admin'){ 
        swal  ("Login!", " Login Sucessfully", "success");
          this.router.navigate(['viewpage']);
              }else{
        swal("Not Login!", "Login Failed" , "error");
     }
}

}
