import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInUrl = '/v1/signIn';
  private signOutUrl = '/v1/signOut';
  credentials = { username: '', password: '' };
  authenticated = false;
  greeting: any;
  token: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  authenticate(credentials) {
    return this.http.post<User>(this.signInUrl, credentials, this.httpOptions);
  }

  logout(user) {
    return this.http.post<any>(this.signOutUrl, user, this.httpOptions);
  }

}
