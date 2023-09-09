import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpInterceptorHandler } from '@angular/common/http/src/interceptor';
import { Injectable } from '@angular/core';
import { Question } from './questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[] = [
    // {testName: 'Java8 Online Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'1111', answer: [1]},
    // {testName: 'Javascript ES6 Fundamentals Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'2222', answer: [1]},
    // {testName: 'HTML CSS3 and Javascript' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'3333',answer: [1]},
    // {testName: 'AngularJS Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'4444',answer: [1]},
    // {testName: 'Angular Material Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'5555',answer: [1]},
    // {testName: 'React Assessment' , questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York','White House', 'Toronto'], id:'6666',answer: [1]}
  ];
  private questionsInTestUrl = '/v1/user/allQuetionsInTest/';
  private saveQuestionUrl = '/v1/user/createQuestion'
  private deleteQuestionUrl = '/v1/user/deleteQuestion';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getQuestions1(testName: string): Question[] {
    return this.questions && this.questions.length > 0 ? this.questions.filter(question => 
          question.testName.indexOf(testName) > -1): null;
  }

  getQuestions(testId: number) {
    return this.http.get(this.questionsInTestUrl + testId, this.httpOptions);
  }

  getQuestion(testName: string, questionId: string): Question {
    let questions: Question[] = this.questions && this.questions.length > 0 ? this.questions.filter(question => 
            question.testName.indexOf(testName) > -1 && question.questionId.indexOf(questionId) > -1) : null ;
    return questions && questions.length > 0 ? questions[0] : null;       
  }

  //Add new question
  addQuestion(question: Question) : void {
    console.log('Question Service ID',new Date().getTime());
    question.questionId = new Date().getTime().toString();
    this.questions.push(question);
  }

  saveQuestion(question: Question)  {
    console.log('Save Question  ');
    return this.http.post(this.saveQuestionUrl, question, this.httpOptions);
  }

  deleteQuestion(testId: number, questionId: number) {
    return this.http.delete(this.deleteQuestionUrl + `/${testId}/${questionId}`, this.httpOptions);
  }

  getNewQuestion(): Question {
    return new Question(' ',' ',[],' ');
  }

  editQuestion(modifiedQuestion: Question) : void {
    let questions: Question[] =  this.questions.filter(question => 
      modifiedQuestion && question.questionId == modifiedQuestion.questionId
    );
    if(questions.length > 0) {
      questions[0].question = modifiedQuestion.question;
      // questions[0].choice = modifiedQuestion.choice;
      if(questions[0].answer && questions[0].answer.length > 0){
        questions[0].answer = modifiedQuestion.answer;        
      }
    }
    
  }
}
