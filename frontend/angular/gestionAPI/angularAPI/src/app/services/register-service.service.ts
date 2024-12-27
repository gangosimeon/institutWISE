import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private httpClient:HttpClient) { }

  postRegister(value:any){
    this.httpClient.post(`http://localhost:3000/auth/register`,value).subscribe(res=>{
      console.log(res);
    });
  }
}
