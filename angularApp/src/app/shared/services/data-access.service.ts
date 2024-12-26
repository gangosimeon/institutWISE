import { Injectable, OnInit } from '@angular/core';
import { Credential } from '../models/credentiel.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService implements OnInit{


  constructor() { }

  ngOnInit(): void {
    
  }


  postLoginData(credentiel:Credential):void{
    console.log('credentiel in service',credentiel)
  }


  postRegisterData(user:User):void{
    console.log('register in service',user)
  }
}
