import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  storageKey: string ='contacts-jwt';

  setToken(token:string){
    localStorage.setItem(this.storageKey, token);
  }
  getToken(){
    return localStorage.getItem(this.storageKey);
  }
  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem(this.storageKey);
  }
}
