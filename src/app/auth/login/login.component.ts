import { Component } from '@angular/core';
import { login, rdata } from '../../interface/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route : Router
  ) { }

  formLogin : FormGroup = this.fb.group({
    email : ['',[Validators.required, Validators.email]],
    password : ['',[Validators.required, Validators.minLength(6)]],
  });

  login(){
    this.auth.login(this.formLogin.value).subscribe((data: any) =>{
      console.log(data);

      if(data.status == true){
        localStorage.setItem('token', data.token);
        localStorage.setItem('idUser', (data.id));
        localStorage.setItem('user', JSON.stringify(data));
        this.route.navigateByUrl('/home');
        this.formLogin.reset();

      }

    }, error => {
      console.log(error);
    })
  }
}
