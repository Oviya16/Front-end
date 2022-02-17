import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Types/User';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  root_url = "http://localhost:9090/";

  getUser() {
    return this.http.get<User>(this.root_url + "User");
  }

  postUser(user: User) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.http.post<User>(this.root_url + "User", body, { 'headers': headers, 'observe': 'response' });
  }

  login(user: User) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      userId: user.userId,
      password: user.password
    }
    const body = JSON.stringify(request);
    return this.http.put<any>(this.root_url + "login", body, { 'headers': headers, 'observe': 'response' });
  }
}
