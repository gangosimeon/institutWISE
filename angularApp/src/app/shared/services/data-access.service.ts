import { Injectable, OnInit } from '@angular/core';
import { Credential ,User, WsResponse} from '../models/data.model';
import { HttpClient } from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService implements OnInit{

  public url="http://localhost:3000/user";
  private readonly newProperty = `http://localhost:3000`;
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


  // postRegisterData(user:User):void{
  //   console.log('register in service',user)
  //   this.httpClient.post(`http://localhost:3000/user`,user).subscribe((res)=>{
  //     console.log('res dans services',res);
  //   });
  // }
  public postRegisterData(user:User): Observable<WsResponse> {
    return this.httpClient.post<WsResponse>(this.newProperty + '/user', user).pipe(
        tap((data) => console.log('Result', data)),
        catchError((error) => throwError(error))
    );
  }

  getRegisterData(){
    console.log('register in service')
    return this.httpClient.get(`http://localhost:3000/user`);
  }
}
