import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from './user';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendUrl = '/v1/signUp';
  // users: User[] = [];
  user: User;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http : HttpClient) { }
/** Session storage to be implemented in future */
  // getUser1(userId: string): User {
  //   console.log('user service', JSON.stringify(this.users));
  //   return this.users.length > 0 ? this.users.filter(user => user.emailAddress.indexOf(userId) > -1)[0] : null;
    // return this.users.length > 0 ? this.users.filter(user => userId == user.companyEmail)[0] : null;
  // }

  getUser(): User {
    console.log('user service', JSON.stringify(this.user));
    return this.user;
    // return this.users.length > 0 ? this.users.filter(user => userId == user.companyEmail)[0] : null;
  }

  getNewUser(): User {
    return new User();
  }

  signUpUser(user: User): Observable<any> {
    console.log('Inside SignUp user');
    return this.http.post<User>(this.backendUrl, user, this.httpOptions)
                    .pipe(tap((user:User) => console.log('print Hero'))); 
  }

  addUser(user: User): void {
    console.log('User Added',user);
    this.user = user;
    // this.users.push(user);
  }

  authenticateUser(username: string, passwd: string): Boolean {
    //Username of the Candidate is nothing but email 
    let user:User = this.getUser();
    return user && user.passwd == passwd;
  }

}
