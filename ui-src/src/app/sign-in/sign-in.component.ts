import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  credentials = { username: '', password: '' };
  activateModal: Boolean;
  invalidCredentials: Boolean = false;
  @Output() closeSignInModal = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder,
    private route: Router,
    public loginSrvc: LoginService,
    public authSrvc: AuthService,
    private userSrvc: UserService) { }

  userSignInForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
    this.activateModal = true;
  }

  closeModal(): void {
    this.activateModal = false;
    this.closeSignInModal.emit(true);
  }

  onSubmit(): void {
    // Local Authentiction  
    // if(this.loginSrvc.signIn(this.userSignInForm.value.userName,
    //   this.userSignInForm.value.password,false)) {
    //     this.closeModal();
    //     this.login();
    //     this.route.navigateByUrl('/viewtests');
    // } else {
    //   this.invalidCredentials = true;
    // }
    let authStatus: Boolean = this.login();
    this.invalidCredentials = !authStatus;
  }

  login() {
    let authStatus = false;
    const user: User = this.userSrvc.getNewUser();
    user.emailAddress = this.userSignInForm.value.userName;
    user.passwd = this.userSignInForm.value.password;
    this.authSrvc.authenticate(user)
      .subscribe(response => {
        if (response['firstName']) {
          authStatus = true;
          this.loginSrvc.addSignedInUserToSession(response);
          this.closeModal();
          this.userSrvc.addUser(response);
          this.route.navigateByUrl('/viewtests');
        }
        return authStatus;
      });
    return authStatus;
  }

}
