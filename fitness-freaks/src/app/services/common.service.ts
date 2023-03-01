import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('http://localhost:3000/user');
  }

  addUser(data: any){
    return this.http.post('http://localhost:3000/user', data);
  }


}
