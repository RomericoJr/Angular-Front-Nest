import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login, register, updateUser } from '../interface/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient
  ) { }

  login(login: login):Observable<Request>{
    return this.http.post<Request>(`${this.api}user/login`, login);
    // return this.http.post<Request>(this.api + 'user/login', login)
  }

  register(register: register):Observable<Request>{
    return this.http.post<Request>(`${this.api}user/register`, register);
  }

  validarToken(token: string):Observable<Request>{
    return this.http.post<Request>(`${this.api}user/token`, {token});
  }

  updateUser(id:number, updateUser : updateUser){
    return this.http.put(`${this.api}user/${id}`, updateUser);
  }
}
