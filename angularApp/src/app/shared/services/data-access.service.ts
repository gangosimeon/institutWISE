import { Injectable, OnInit } from '@angular/core';
import { Credential } from '../models/credentiel.model';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataAccessService implements OnInit{

  public url="http://localhost:3000/user";
  public token:string="";
  constructor( public httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }


  postLoginData(credentiel:Credential):void{
    console.log('credentiel in service',credentiel)
    this.httpClient.post(`http://localhost:3000/user`,credentiel).subscribe((res)=>{
      console.log('res dans services',res);

      
    });
  }


  postRegisterData(user:User):void{
    console.log('register in service',user)
    this.httpClient.post(`http://localhost:3000/user`,user).subscribe((res)=>{
      console.log('res dans services',res);
    });
    
  }
}
