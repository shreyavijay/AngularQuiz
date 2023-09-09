import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { CandidateDirectoryComponent } from './candidate-directory/candidate-directory.component';
import { DeveloperDisclosureComponent } from './developer-disclosure/developer-disclosure.component';
import { AssessmentComponent } from './assessment/assessment.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register/:userId', component: UserRegistrationComponent },
  { path: 'viewtests', component: ViewTestComponent},
  { path: 'managequestions', component: ManageQuestionsComponent},
  { path: 'candidatedirectory', component: CandidateDirectoryComponent},
  { path: 'devdisclosure', component: DeveloperDisclosureComponent},
  { path: 'assessment', component: AssessmentComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})


export class AppRoutingModule { 


}
