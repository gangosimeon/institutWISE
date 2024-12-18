import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url="http://localhost:3000/contact";
  registerUrl="http://localhost:3000/auth/login";

  constructor(
    private httpClient:HttpClient,
    private auth:AuthService
  ){}

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `JWT ${this.auth.getToken()}`
    })
  }

  getContacts(){
    return this.httpClient.get(this.url, this.httpOptions)
  }
  addContact(value:any){
    let body={
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          company: value.company,
          phone: parseInt(value.phone),
        }
    return this.httpClient.post(this.url,body, this.httpOptions)
  }

  login(payload:any){
    return this.httpClient.post(this.registerUrl, payload);
  }
}
