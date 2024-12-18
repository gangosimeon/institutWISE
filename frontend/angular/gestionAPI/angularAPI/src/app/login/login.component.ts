import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public token:any;

  email='';
  username='';
  password='';

  constructor(
    private api : ContactsService,
    private auth: AuthService
  ){}

  ngOnInit(): void {
    
  }
  loginForm(value:any){
    const payload={
      email: value.email,
      username:value.username,
      password:value.password
    }

    this.api.login(payload).subscribe((data:any) =>{
      this.token = data['token'];
      this.auth.setToken(this.token);
    });
  }

}
