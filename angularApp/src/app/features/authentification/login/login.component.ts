import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Credential } from 'src/app/shared/models/credentiel.model';
import { DataAccessService } from 'src/app/shared/services/data-access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData:FormGroup =new FormGroup({
    log: new FormControl(""),
    pwd : new FormControl("")
  })

  constructor( private accessDataService:DataAccessService){}

  ngOnInit(): void {

  }

  loginValueSubmit(){
    console.log(this.loginData)
    const authentificationUser:Credential = {
      login: this.loginData.get('log')?.value,
      password: this.loginData.get('pwd')?.value
    }
    this.accessDataService.postLoginData(authentificationUser)
  }

}
