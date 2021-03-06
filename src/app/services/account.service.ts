import { Account } from './../models/account';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const urlAPIAccount = "http://localhost:3000/account"
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }
  addItem(data:Account){
    return this.http.post(urlAPIAccount,data)
  }
  getAll():Observable<Account[]>{
    return this.http.get<Account[]>(urlAPIAccount);
  }
  getItem(id:number):Observable<Account>{
    return this.http.get<Account>(`${urlAPIAccount}/${id}`)
  }
  deleteItem(id:number){
    return this.http.delete(`${urlAPIAccount}/${id}`)
  }
  editItem(id:number, data:Account){
    return this.http.put(`${urlAPIAccount}/${id}`,data);
  }
}
