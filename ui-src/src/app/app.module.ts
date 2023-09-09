import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PhoneValidatorDirective } from './phone-validator.directive';
import { PhoneNumberDirective } from './phone-number.directive';
import { ValidateEmailDirective } from './validate-email.directive';
import { EmailValidatorService } from './email-validator.service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { ModifyQuestionComponent } from './modify-question/modify-question.component';
import { CandidateDirectoryComponent } from './candidate-directory/candidate-directory.component';
import { ModifyCandidateComponent } from './modify-candidate/modify-candidate.component';
import { DeveloperSignInComponent } from './developer-sign-in/developer-sign-in.component';
import { DeveloperDisclosureComponent } from './developer-disclosure/developer-disclosure.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { QuestionAssessmentComponent } from './question-assessment/question-assessment.component';
import { ExitTestComponent } from './exit-test/exit-test.component';
import { HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpClientModule} from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';

// import { HttpClient} from '@angular/common/http';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    console.log('intercept headers');
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    VerticalNavbarComponent,
    SignInComponent,
    SignUpComponent,
    PhoneValidatorDirective,
    PhoneNumberDirective,
    ValidateEmailDirective,
    UserRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ViewTestComponent,
    ManageQuestionsComponent,
    CreateTestComponent,
    DeleteQuestionComponent,
    ModifyQuestionComponent,
    CandidateDirectoryComponent,
    ModifyCandidateComponent,
    DeveloperSignInComponent,
    DeveloperDisclosureComponent,
    AssessmentComponent,
    QuestionAssessmentComponent,
    ExitTestComponent
 ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
    // ,    CookieService
      
  ],

  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
    // ,CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


