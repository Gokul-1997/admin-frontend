import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ViewpageService {

  constructor(public http:HttpClient) { }

user_list(){
  return this.http.get('http://192.168.1.79:4021/users/user_admin_api');
}

user_detail(user_id){
  return this.http.get('http://192.168.1.79:4021/emails/admin_panel.'+user_id);
}

}