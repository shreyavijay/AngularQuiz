import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, AbstractControl } from '@angular/forms';

import { QuestionsService } from '../questions.service';
import { Question } from '../questions';
import { Test } from '../test';
import { Action } from '../action';
import { Option } from '../option';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-modify-question',
  templateUrl: './modify-question.component.html',
  styleUrls: ['./modify-question.component.css']
})
export class ModifyQuestionComponent implements OnInit {
  // question: Question;
  activateModal: Boolean;
  editAction: Boolean;
  // @Input('test') testName: string;
  // @Input('question') questionId: string;
  @Input() action: Action;
  @Input() question: Question;
  @Output() closeModifyQuestionModal = new EventEmitter<boolean>();
  constructor(private questionsService: QuestionsService,
    private fb: FormBuilder) { }

  questionForm = this.fb.group({
    question: ['question'],

    aliases: this.fb.array([
      this.fb.group({
        choice: [''],
        answer: [''],
        optionId: [-1],
        deleteButton: ['Delete']
      })
    ])
  });

  get aliases() {
    return this.questionForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.group({
      choice: [''],
      answer: [''],
      optionId: [-1],
      deleteButton: ['Delete']
    }));
  }



  ngOnInit() {
    console.log('ModifyQuestionComponent print testName11', this.action.testName + ' ' + this.action.questionId);
    this.editAction = this.action.testName && this.action.questionId ? true : false;
    console.log('ModifyQuestionComponent ', this.question);
    // TBD To fetch the questions from server. For Now questions are retrieved from the getQuestions service
    // invoked from ManageQuestions (Parent) component
    if (this.action.testName && this.action.questionId) {
      this.populateQuestion();
    }
    this.activateModal = true;
  }

  populateQuestion() {
    let question = this.question;
    //Remove Default selections for Edit scenario
    if (this.aliases.length > 0) {
      for (let count = this.aliases.length - 1; count >= 0; count--) {
        this.aliases.removeAt(count);
      }
    }
    this.questionForm.controls.question.setValue(question.question);
    let index = 0;
    question.options.map(option => {
      this.aliases.push(this.fb.group({
        choice: [option.name],
        answer: [option.selected],
        optionId: [option.optionId],
        deleteButton: ['Delete']
      }));
    });
    //TODO uncomment later
    // if(question && question.options && question.options.length > 0) {
    //   question.options.forEach
    // }
    // if(question.answer && question.answer.length > 0  ) {
    //   question.answer.forEach(answer => {
    //     if(answer < question.choice.length) {
    //       // this.aliases[answer].answer.setValue(true);
    //       if(answer >= 0) {
    //         // console.log('this.aliases.at(answer)',this.aliases.at(answer).controls.answer.setValue(true));
    //         let fg:FormGroup = <FormGroup>this.aliases.at(answer);
    //         fg.controls.answer.setValue(true);
    //       }
    //     }
    //   }); 
    //   this.questionForm.controls.question.setValue(question.questionDescription);
    //  }
    // question.choice = this.questionForm.value.aliases.map(alias => alias.choice);
  }

  closeModal(): void {
    this.closeModifyQuestionModal.emit(true);
  }


  onDelete(optionIndex: number): void {
    console.log('Modify Question ', optionIndex);
    console.log('Modify Question ', optionIndex);
    console.log('Modify Question Aliases ',);
    this.aliases.removeAt(optionIndex);

  }

  onSubmit(): void {
    console.log('Printing Question ', this.questionForm.value.question);
    console.log('Printing Answer ', this.questionForm.value.aliases[1]);
    console.log('Printing Answer ', this.questionForm.controls.aliases as FormArray);

    // let answer: string[];
    // optionId and answer
    // let answer: [number,boolean];
    //New Option to existing question
    // question.options.filter(e=>e.)
    let question: Question;
    if (this.action.questionId) {
      question = this.question;
      question.question = this.questionForm.value.question;
    } else {
      //Action = Add
      question = this.questionsService.getNewQuestion();
      question.testName = this.action.testName;
      question.testId = this.action.testId;
    }

    //If user enters a new choice
    let newOptions = this.questionForm.value.aliases.filter(alias => alias.optionId == -1);

    if (newOptions && newOptions.length > 0) {
      question.question = this.questionForm.value.question;
      newOptions.forEach(element => {
        let option = new Option();
        option.optionId = element.optionId;
        // option.questionId = question.;
        option.name = element.choice;
        option.selected = element.answer && element.answer.length > 0 ? element.answer : false;
        question.options.push(option);
      });
    }
    let optionsToBeRemoved = [];
    let itemPositionsArray = [];
    //Edit existing options
    if (question
      && question.options
      && question.options.length > 0) {

      question.options.forEach(option => {
        // this.questionForm.value.aliases.forEach(alias => {
        //   if(option.optionId == alias.optionId) {
        //     option.name = alias.choice;
        //   }
        // });
        let index = this.questionForm.value.aliases.findIndex(item => item.optionId == option.optionId && option.optionId > -1);
        if (index > -1) {
          // let optionForm = this.questionForm.value.aliases.get(index);
          let optionForm = this.questionForm.value.aliases[index];
          option.name = optionForm.choice;
          option.selected = optionForm.answer;
        } else {
          //options to be removed
          // itemPositionsArray.push(index);
          optionsToBeRemoved.push(option);
        }
      });

      //Removed the deleted items before sending it to the server
      // question.options.forEach((deletedOption,index) => {
      //   optionsToBeRemoved.push(question.options[index]);
      // });
      optionsToBeRemoved.forEach(optionsToBeRemoved => {
        let deleteIndex = question.options.findIndex(option => option.optionId == optionsToBeRemoved.optionId);
        if(deleteIndex > -1) {
          question.options.splice(deleteIndex, 1);
        }
      });
 
    }
    question.optionsToBeRemoved = optionsToBeRemoved;
    console.log('Printing complete Question Saved ', question);
    //Action = Edit

    question.questionId = this.action.questionId ? this.action.questionId : null;
    this.questionsService.saveQuestion(question).subscribe((response: any) => question = response);

    this.closeModal();

  }
}
