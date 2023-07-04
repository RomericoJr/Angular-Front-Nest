import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    LogoutComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports: [
    LoginComponent,
    RegisterComponent

  ]
})
export class AuthModule { }
