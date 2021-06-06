import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/UserLogin';
import { UserRegister } from 'src/app/models/UserRegsiter';
import { RegisterAndLoginResponse } from 'src/app/response/registerAndLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44395/api/auth"
  constructor(private httpClient:HttpClient) { }

  register(userRegister:UserRegister):Observable<RegisterAndLoginResponse>{
    return this.httpClient.post<RegisterAndLoginResponse>(`${this.apiUrl}/register`,userRegister);
  }
  login(userLogin:UserLogin):Observable<RegisterAndLoginResponse>{
    return this.httpClient.post<RegisterAndLoginResponse>(`${this.apiUrl}/login`,userLogin);
  }

}
