import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularAPI';
  contacts:any
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    return this.httpClient.get('http://localhost:3000/contact').subscribe((contacts)=>{
      this.contacts=contacts
    });
    
  }
}
