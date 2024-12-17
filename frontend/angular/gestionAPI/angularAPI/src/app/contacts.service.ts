import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {


  constructor(private httpClient:HttpClient){}

  getContacts(){
    return this.httpClient.get('http://localhost:3000/contact')
  }
  addContact(value:any){
    let body={
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          company: value.company,
          phone: parseInt(value.phone),
        }
    return this.httpClient.post('http://localhost:3000/contact',body)
  }
}
