import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { DataAccessService } from 'src/app/shared/services/data-access.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  registerData : FormGroup = new FormGroup({
    fName: new FormControl(''),
    lName:  new FormControl(''),
    gender:  new FormControl(''),
    birthDate: new FormControl(''),
    log: new FormControl(''),
    pwd: new FormControl(''),
    pwdConfirm: new FormControl(''),
    company: new FormControl('')
})

  constructor(private dataAccessService: DataAccessService){}

  ngOnInit(): void {
    
  }

  registerValueSubmit(){
    const userRegisterData :User = {
      firstName: this.registerData.get('fName')?.value,
      lastName:  this.registerData.get('lName')?.value,
      gender:  this.registerData.get('gender')?.value,
      birthDate: this.registerData.get('birthDate')?.value,
      login: this.registerData.get('log')?.value,
      password: this.registerData.get('pwd')?.value,
      passwordConfirm:this.registerData.get('pwdConfirm')?.value,
      companyName: this.registerData.get('company')?.value
    }
    this.dataAccessService.postRegisterData(userRegisterData)
  }
}
