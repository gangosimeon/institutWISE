import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    LoginModule,
    SignupModule
  ]
})
export class AuthentificationModule { }
