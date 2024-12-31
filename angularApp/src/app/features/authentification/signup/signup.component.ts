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

  error:string="";
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
    this.dataAccessService.getRegisterData()
  }

  registerValueSubmit(){
    if(this.registerData.get('pwd')?.value!=this.registerData.get('pwdConfirm')?.value){
      this.error="Les mots de passe ne sont pas identique!"
    }else{
      const userRegisterData :User = {
        firstName: this.registerData.get('fName')?.value,
        lastName:  this.registerData.get('lName')?.value,
        gender:  this.registerData.get('gender')?.value,
        birthDate: this.registerData.get('birthDate')?.value,
        login: this.registerData.get('log')?.value,
        password: this.registerData.get('pwd')?.value,
        companyName: this.registerData.get('company')?.value
      }
      this.dataAccessService.postRegisterData(userRegisterData).subscribe({
        // attente de reponse du webservice
        next: (result) => {
          console.log(result);
          if(result.status == 200){
            this.error ='';
            this.registerData.reset();
          } else if(result.status==202){
            this.error=  result.comment;
          }
        },
        error: (err) => {
          this.error = 'Une erreur système est survenue lors de votre enrégistrement';
        },
        complete: () => {
          
        }
    });
    }

   
  }
}
