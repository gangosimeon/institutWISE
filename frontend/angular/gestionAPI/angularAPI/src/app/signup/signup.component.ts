import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  email='';
  username='';
  password='';

  constructor(
    private registerService:RegisterServiceService,
    private router:Router){}


  ngOnInit(): void {
      
  }

  registerForm(value:any){
    const payload={
      email: value.email,
      username:value.username,
      password:value.password
    }
    this.registerService.postRegister(payload);
  }

  loginRoute(){
    this.router.navigate(['login']);
  }
}
