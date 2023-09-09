import { Injectable } from '@angular/core';
import { User } from './user';
import { Developer } from './developer';
import { CandidateService } from './candidate.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  developer: Developer;
  user: User;
  constructor(private candidateSrvc: CandidateService,
              private userSrvc: UserService,
              private authSrvc: AuthService,
              // private cookieSrvc: CookieService,
              private route: Router  ) { }

  userSignedIn(): Boolean {
    return (this.developer || this.user) ? true : false; 
  }

  signIn(userName: string, passwd: string, userIsDeveloper: Boolean): Boolean {

    if(userIsDeveloper && this.candidateSrvc.authenticateCandidate(userName,passwd)) {
      this.developer = this.candidateSrvc.getCandidate(userName);
      this.user = null;
      return true;     
    } else if(!userIsDeveloper && this.userSrvc.authenticateUser(userName,passwd)){
      this.user = this.userSrvc.getUser();
      this.developer = null;
      return true;
    } 
    return false;
  }


  addSignedInUserToSession(user: User) {
    this.user = user.role == "EMPLOYER" ? user : null ;
  }


  getUserSignedIn(): any {
    return this.developer ? this.developer : this.user ? this.user : null;
  }

  signOut(): void {
    this.developer = null;
    this.user = null;
    // this.cookieSrvc.delete('auth_by_cookie');
    this.authSrvc.logout(this.getUserSignedIn())
      .subscribe(response => {
        this.route.navigateByUrl('/');
      });

  }
}
