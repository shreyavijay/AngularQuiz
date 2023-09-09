import { Injectable } from '@angular/core';
import { Test } from './test';
import { Developer } from './developer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private getAllTestsUrl = '/v1/user/alltests';
  private createTestUrl = '/v1/user/createTest';

  tests1: Test[] = [ 
    {testId:101, name:'Java8 Online Assessment', category: 'Online Code Assessment' , duration: 45, createdBy: 'Vijay Nagarajan', developers: []},
    {testId: 102,name: 'Javascript ES6 Fundamentals Assessment' , category: 'Online Code Assessment' , duration: 45, createdBy: 'Vijay Nagarajan', developers: []},
    {testId: 103,name: 'HTML CSS3 and Javascript' , category: 'Online Code Assessment' , duration: 45,createdBy: 'Vijay Nagarajan', developers: []},
    {testId: 104,name: 'AngularJS Assessment' , category: 'Online Code Assessment' , duration: 45,createdBy: 'Vijay Nagarajan', developers: []},
    {testId: 105,name: 'Angular Material Assessment' , category: 'Online Code Assessment' , duration: 45,createdBy: 'Vijay Nagarajan', developers: []},
    {testId: 106,name: 'React Assessment' , category: 'Online Code Assessment' , duration: 45,createdBy: 'Vijay Nagarajan', developers: []}
];
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http: HttpClient,
              private userSrvc: UserService) { }

  getTest(testName: string) {
    return this.tests1.length > 0 ? this.tests1.filter(test => test.name.indexOf(testName) > -1)[0] : null;
  }

  getAllTests() {
    return this.http.get(this.getAllTestsUrl,this.httpOptions);
  }

  getNewTest() {
    let test = new Test();
    test.createdBy = this.userSrvc.getUser().emailAddress;
    return test;
  }

  // addTest(test: Test): void {
  //   console.log('Test Added',test);
  //   this.tests1.push(test);
  // }


  //Backend API
  // addTest(test: Test): void {
  //   this.http.post(this.createTestUrl, test, this.httpOptions).subscribe((response:any) => console.log(response));
  // }
  addTest(test: Test){
    return this.http.post(this.createTestUrl, test, this.httpOptions);
  }  

  //For Now it allows editing Developers only
  addDeveloperToTest(developer: Developer): void {
    let test: Test = this.getTest(developer.testName);
    // let match = test && test.developers ? test.developers.findIndex(dev => dev.firstName == developer.firstName && 
    //                                   dev.lastName == developer.lastName) : null;
    let match = test && test.developers ? test.developers.findIndex(dev => dev.email == developer.email) : null;                                      
    if(match == -1) {
      test.developers.push(developer);
    }                                      
  }

}



