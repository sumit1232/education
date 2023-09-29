import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
url_users = 'http://localhost:3000/users'
url_eventbook = 'http://localhost:3000/eventbook'
url_saveEnquiry = 'http://localhost:3000/saveEnquiry'
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url_users);
  }

  saveusers(data:any){
    return this.http.post(this.url_users,data);
  }
  
  
}
