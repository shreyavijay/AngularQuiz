import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { Test } from '../test';
import { Question } from '../questions';
import { AccordionService } from '../accordion.service';
import { switchMap } from 'rxjs/operators';
import { Action } from '../action';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {
  displayQuestions: Boolean = false;
  questions: Question[];
  addQuestion: Boolean;
  modifyQuestion: Boolean;
  // testName: string;
  action: Action;
  constructor(private route: ActivatedRoute,
              private questionService: QuestionsService,
              private accordionService: AccordionService
              ) { }

  ngOnInit() {    
    this.action = new Action();    
    this.route.queryParams.subscribe(params => {
       this.action.testName = params['testName'];
       this.action.testId = params['testId'];
       this.questions = this.loadQuestions();
    }   
    );
  }

  loadQuestions(): Question[] {
    this.questionService.getQuestions(this.action.testId).subscribe((questions: any) => {
      //Initialize accordion once the questions are loaded
      this.accordionService.initializeAccordion();
      console.log('All Questions in a test ',questions);
      console.log('All Question Description in a test ',questions[0].questionDescription);
      this.questions = questions;
      this.displayQuestions = true;
    });
    return this.questions;
  }

  addEditQuestion(question: any) : void {
    if(question) {
      this.modifyQuestion = true;
      this.action.questionId = question.questionId;
    } else {
      this.action.questionId = null;
      this.addQuestion = true;
    }
    console.log('Question',question);
  }

  deleteQuestion(question: Question) : void {
    this.questionService.deleteQuestion(question.testId, parseInt(question.questionId)).subscribe(
      (response:any) => console.log('Pritning response from Delete' + response));
  }

  oncloseModal(close: boolean) {
    this.addQuestion = !close;
    this.modifyQuestion = !close;
    this.accordionService.initializeAccordion();
    this.loadQuestions();
  }

}
