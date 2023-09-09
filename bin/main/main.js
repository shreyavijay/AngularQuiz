(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accordion.service.ts":
/*!**************************************!*\
  !*** ./src/app/accordion.service.ts ***!
  \**************************************/
/*! exports provided: AccordionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionService", function() { return AccordionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionService = /** @class */ (function () {
    function AccordionService() {
    }
    AccordionService.prototype.initializeAccordion = function () {
        $(document).ready(function () {
            // jQuery methods go here...
            console.log('IExecuted document.ready');
            //Initialize docucment.ready
            $(this).removeClass("active");
            //   $("button.accordion + div.accordion-container").css("display","block");
            $("button.accordion").unbind().click(function () {
                $(this).toggleClass("active");
                console.log('Display accordion ', $(this).css("display"));
                console.log('Display accordion ', $(this));
                $(this).next().toggle().css("display");
                //   if($(this).css("display") === "block"){
                //       console.log($(this).next());
                //       $("this").next().toggle();
                //   } else {
                //       $(this).next().toggle().css("display")
                //   }
            });
        });
    };
    AccordionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AccordionService);
    return AccordionService;
}());



/***/ }),

/***/ "./src/app/action.ts":
/*!***************************!*\
  !*** ./src/app/action.ts ***!
  \***************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action = /** @class */ (function () {
    function Action() {
    }
    return Action;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-registration/user-registration.component */ "./src/app/user-registration/user-registration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _view_test_view_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-test/view-test.component */ "./src/app/view-test/view-test.component.ts");
/* harmony import */ var _manage_questions_manage_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-questions/manage-questions.component */ "./src/app/manage-questions/manage-questions.component.ts");
/* harmony import */ var _candidate_directory_candidate_directory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./candidate-directory/candidate-directory.component */ "./src/app/candidate-directory/candidate-directory.component.ts");
/* harmony import */ var _developer_disclosure_developer_disclosure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./developer-disclosure/developer-disclosure.component */ "./src/app/developer-disclosure/developer-disclosure.component.ts");
/* harmony import */ var _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assessment/assessment.component */ "./src/app/assessment/assessment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'register/:userId', component: _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"] },
    { path: 'viewtests', component: _view_test_view_test_component__WEBPACK_IMPORTED_MODULE_4__["ViewTestComponent"] },
    { path: 'managequestions', component: _manage_questions_manage_questions_component__WEBPACK_IMPORTED_MODULE_5__["ManageQuestionsComponent"] },
    { path: 'candidatedirectory', component: _candidate_directory_candidate_directory_component__WEBPACK_IMPORTED_MODULE_6__["CandidateDirectoryComponent"] },
    { path: 'devdisclosure', component: _developer_disclosure_developer_disclosure_component__WEBPACK_IMPORTED_MODULE_7__["DeveloperDisclosureComponent"] },
    { path: 'assessment', component: _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_8__["AssessmentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skin\">\r\n\r\n    <app-header (toggleNavPanel)=\"toggleDisplayOfNavPanel($event)\"></app-header>\r\n    <!-- app-vertical-navbar     -->\r\n    <app-vertical-navbar></app-vertical-navbar>\r\n    <router-outlet></router-outlet>\r\n    <!-- <app-home></app-home>     -->\r\n    \r\n    <app-footer></app-footer>\r\n</div>\r\n\r\n\r\n<!-- <script src=\"accordion.js\"></script>\r\n<script src=\"modal.js\"></script> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vertical_navbar_vertical_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical-navbar/vertical-navbar.component */ "./src/app/vertical-navbar/vertical-navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var appComponent = this;
        $(document).ready(function () {
            var width = $(window).width();
            var menubarDisplayFlag = width <= 768 ? true : false;
            appComponent.setMenuBarFlag(menubarDisplayFlag);
            $(window).resize(function () {
                var txt = "";
                txt += "Document width/height: " + $(document).width();
                txt += "x" + $(document).height() + "\n";
                txt += "Window width/height: " + $(window).width();
                txt += "x" + $(window).height();
                console.log(txt);
                width = $(window).width() + 17;
                var menubarDisplayFlag = width <= 768 ? true : false;
                appComponent.setMenuBarFlag(menubarDisplayFlag);
            });
        });
    };
    AppComponent.prototype.setMenuBarFlag = function (flag) {
        this.headerComponent.setMenubarBtnFlag(flag);
    };
    AppComponent.prototype.toggleDisplayOfNavPanel = function (flag) {
        this.verticaNavbarComponent.toggleDisplayOfNavPanel(flag);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_vertical_navbar_vertical_navbar_component__WEBPACK_IMPORTED_MODULE_1__["VerticalNavbarComponent"]),
        __metadata("design:type", _vertical_navbar_vertical_navbar_component__WEBPACK_IMPORTED_MODULE_1__["VerticalNavbarComponent"])
    ], AppComponent.prototype, "verticaNavbarComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]),
        __metadata("design:type", _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"])
    ], AppComponent.prototype, "headerComponent", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: XhrInterceptor, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptor", function() { return XhrInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vertical_navbar_vertical_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical-navbar/vertical-navbar.component */ "./src/app/vertical-navbar/vertical-navbar.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _phone_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phone-validator.directive */ "./src/app/phone-validator.directive.ts");
/* harmony import */ var _phone_number_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phone-number.directive */ "./src/app/phone-number.directive.ts");
/* harmony import */ var _validate_email_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validate-email.directive */ "./src/app/validate-email.directive.ts");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-registration/user-registration.component */ "./src/app/user-registration/user-registration.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _view_test_view_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-test/view-test.component */ "./src/app/view-test/view-test.component.ts");
/* harmony import */ var _manage_questions_manage_questions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manage-questions/manage-questions.component */ "./src/app/manage-questions/manage-questions.component.ts");
/* harmony import */ var _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-test/create-test.component */ "./src/app/create-test/create-test.component.ts");
/* harmony import */ var _delete_question_delete_question_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./delete-question/delete-question.component */ "./src/app/delete-question/delete-question.component.ts");
/* harmony import */ var _modify_question_modify_question_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modify-question/modify-question.component */ "./src/app/modify-question/modify-question.component.ts");
/* harmony import */ var _candidate_directory_candidate_directory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./candidate-directory/candidate-directory.component */ "./src/app/candidate-directory/candidate-directory.component.ts");
/* harmony import */ var _modify_candidate_modify_candidate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modify-candidate/modify-candidate.component */ "./src/app/modify-candidate/modify-candidate.component.ts");
/* harmony import */ var _developer_sign_in_developer_sign_in_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./developer-sign-in/developer-sign-in.component */ "./src/app/developer-sign-in/developer-sign-in.component.ts");
/* harmony import */ var _developer_disclosure_developer_disclosure_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./developer-disclosure/developer-disclosure.component */ "./src/app/developer-disclosure/developer-disclosure.component.ts");
/* harmony import */ var _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assessment/assessment.component */ "./src/app/assessment/assessment.component.ts");
/* harmony import */ var _question_assessment_question_assessment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./question-assessment/question-assessment.component */ "./src/app/question-assessment/question-assessment.component.ts");
/* harmony import */ var _exit_test_exit_test_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./exit-test/exit-test.component */ "./src/app/exit-test/exit-test.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        console.log('intercept headers');
        return next.handle(xhr);
    };
    XhrInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _vertical_navbar_vertical_navbar_component__WEBPACK_IMPORTED_MODULE_4__["VerticalNavbarComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                _phone_validator_directive__WEBPACK_IMPORTED_MODULE_7__["PhoneValidatorDirective"],
                _phone_number_directive__WEBPACK_IMPORTED_MODULE_8__["PhoneNumberDirective"],
                _validate_email_directive__WEBPACK_IMPORTED_MODULE_9__["ValidateEmailDirective"],
                _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_10__["UserRegistrationComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _view_test_view_test_component__WEBPACK_IMPORTED_MODULE_15__["ViewTestComponent"],
                _manage_questions_manage_questions_component__WEBPACK_IMPORTED_MODULE_16__["ManageQuestionsComponent"],
                _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_17__["CreateTestComponent"],
                _delete_question_delete_question_component__WEBPACK_IMPORTED_MODULE_18__["DeleteQuestionComponent"],
                _modify_question_modify_question_component__WEBPACK_IMPORTED_MODULE_19__["ModifyQuestionComponent"],
                _candidate_directory_candidate_directory_component__WEBPACK_IMPORTED_MODULE_20__["CandidateDirectoryComponent"],
                _modify_candidate_modify_candidate_component__WEBPACK_IMPORTED_MODULE_21__["ModifyCandidateComponent"],
                _developer_sign_in_developer_sign_in_component__WEBPACK_IMPORTED_MODULE_22__["DeveloperSignInComponent"],
                _developer_disclosure_developer_disclosure_component__WEBPACK_IMPORTED_MODULE_23__["DeveloperDisclosureComponent"],
                _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_24__["AssessmentComponent"],
                _question_assessment_question_assessment_component__WEBPACK_IMPORTED_MODULE_25__["QuestionAssessmentComponent"],
                _exit_test_exit_test_component__WEBPACK_IMPORTED_MODULE_26__["ExitTestComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HTTP_INTERCEPTORS"], useClass: XhrInterceptor, multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assessment/assessment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/assessment/assessment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/assessment/assessment.component.html":
/*!******************************************************!*\
  !*** ./src/app/assessment/assessment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container-wrapper\">\r\n  <div class=\"form-container\">\r\n    <!-- <div id=\"section_form1\" class=\"section\"> -->\r\n    <app-question-assessment #questionComponent *ngIf=\"displayQuestion\" [question]=\"question\" (moveToNextQuestion)=\"next($event)\"></app-question-assessment>\r\n    <app-exit-test *ngIf=\"exitTest\"></app-exit-test>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/assessment/assessment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/assessment/assessment.component.ts ***!
  \****************************************************/
/*! exports provided: AssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidate.service */ "./src/app/candidate.service.ts");
/* harmony import */ var _question_assessment_question_assessment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question-assessment/question-assessment.component */ "./src/app/question-assessment/question-assessment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssessmentComponent = /** @class */ (function () {
    function AssessmentComponent(loginSrvc, questionSrvc, candidateSrvc) {
        this.loginSrvc = loginSrvc;
        this.questionSrvc = questionSrvc;
        this.candidateSrvc = candidateSrvc;
        this.index = 0;
        this.displayQuestion = true;
        this.exitTest = false;
    }
    AssessmentComponent.prototype.ngOnInit = function () {
        var developer = this.loginSrvc.getUserSignedIn();
        this.questions = this.questionSrvc.getQuestions(developer.testName);
        this.next(true);
    };
    AssessmentComponent.prototype.next = function (moveNext) {
        if (!moveNext) {
            return;
        }
        if (this.index < this.questions.length) {
            // this.question = (this.index + 1) < this.questions.length ? this.questions[] :]  
            this.question = this.questions[this.index];
            if (this.index > 0) {
                this.questionComponent.populateChoice(this.question);
            }
            // this.displayQuestion = !this.displayQuestion; 
            // this.displayQuestion = !this.displayQuestion;
        }
        else {
            this.displayQuestion = !this.displayQuestion;
            this.exitTest = true;
            this.candidateSrvc.evaluateAssessement(this.loginSrvc.getUserSignedIn());
        }
        this.index++;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_question_assessment_question_assessment_component__WEBPACK_IMPORTED_MODULE_4__["QuestionAssessmentComponent"]),
        __metadata("design:type", _question_assessment_question_assessment_component__WEBPACK_IMPORTED_MODULE_4__["QuestionAssessmentComponent"])
    ], AssessmentComponent.prototype, "questionComponent", void 0);
    AssessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assessment',
            template: __webpack_require__(/*! ./assessment.component.html */ "./src/app/assessment/assessment.component.html"),
            styles: [__webpack_require__(/*! ./assessment.component.css */ "./src/app/assessment/assessment.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"],
            _candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"]])
    ], AssessmentComponent);
    return AssessmentComponent;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.credentials = { username: '', password: '' };
        this.authenticated = false;
        http.get('token').subscribe(function (data) {
            var token = data['token'];
            http.get('http://localhost:8080', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('X-Auth-Token', token) })
                .subscribe(function (response) { return _this.greeting = response; });
        }, function () { });
    }
    AuthService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        this.http.get('user', { headers: headers }).subscribe(function (response) {
            if (response['name']) {
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
            return callback && callback();
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/candidate-directory/candidate-directory.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/candidate-directory/candidate-directory.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/candidate-directory/candidate-directory.component.html":
/*!************************************************************************!*\
  !*** ./src/app/candidate-directory/candidate-directory.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container-wrapper\">\r\n  <div class=\"form-container\">\r\n      <div id=\"section_form1\" class=\"section\">\r\n          <h2 class=\"section-heading\"> Candidate Directory</h2>\r\n          <div id=\"section1\" class=\"section \">\r\n              <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                      <label for=\"firstName\">First Name</label>\r\n                      <input type=\"text\" id=\"cdFirstName\" name=\"firstName\" class=\"form-control\" placeholder=\"First Name\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label for=\"lastName\">Last Name</label>\r\n                      <input type=\"text\" id=\"cdLastName\" name=\"lastName\" class=\"form-control\" placeholder=\"Last Name\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                      <label for=\"email\">Email</label>\r\n                      <input type=\"text\" id=\"cdEmail\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <div class=\"button-group-center\">\r\n                      <button class=\"button save-button search-button\" onclick=\"window.open('Registration.html')\">Search</button>\r\n                  </div>\r\n              </div>\r\n\r\n          </div>\r\n          <div class=\"section\">\r\n              <div>\r\n                  <button class=\"button create\" (click)=\"addEditCandidate()\">Add New Candidate</button>                            \r\n                  <app-modify-candidate *ngIf=\"addNewCandidate\" [action]=\"action\" (closeModifyQuestionModal)=\"oncloseModal($event)\"></app-modify-candidate>\r\n              </div>\r\n              <div style=\"overflow-x:auto;white-space: nowrap\">\r\n                <table>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Email</th>\r\n                        <th>Test</th>\r\n                        <th>Edit</th>\r\n                        <th style=\"margin-right: 10px;\">Delete</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let dev of developers;let i=index\">\r\n                        <td class=\"format\">{{dev.firstName}} {{dev.lastName}}</td>\r\n                        <td class=\"format\">{{dev.email}}</td>\r\n                        <td class=\"format\">{{dev.testName}}</td>\r\n                        <td>\r\n                            <div class=\"tooltip\">\r\n                                <i class=\"fa fa-edit fa-lg\" (click)=\"addEditCandidate(dev)\" style=\"color:green;\"></i>\r\n                                <span class=\"tooltiptext\">Edit</span>\r\n                            </div>\r\n                                <app-modify-candidate *ngIf=\"modifyCandidate\" [action]=\"action\" (closeModifyQuestionModal)=\"oncloseModal($event)\"></app-modify-candidate>  \r\n                        </td>\r\n                        <td style=\"margin-right: 10px;\">\r\n                                <div class=\"tooltip\">\r\n                                    <i class=\"fa fa-trash fa-lg\" style=\"color:green;\"></i>\r\n                                    <span class=\"tooltiptext\">Delete</span>\r\n                                </div>\r\n                        </td>    \r\n\r\n                    </tr>\r\n            \r\n\r\n                </table>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/candidate-directory/candidate-directory.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/candidate-directory/candidate-directory.component.ts ***!
  \**********************************************************************/
/*! exports provided: CandidateDirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateDirectoryComponent", function() { return CandidateDirectoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _developer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../developer */ "./src/app/developer.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action */ "./src/app/action.ts");
/* harmony import */ var _candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidate.service */ "./src/app/candidate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidateDirectoryComponent = /** @class */ (function () {
    function CandidateDirectoryComponent(candidateSrvc) {
        this.candidateSrvc = candidateSrvc;
        this.developers = [];
    }
    CandidateDirectoryComponent.prototype.ngOnInit = function () {
        this.action = new _action__WEBPACK_IMPORTED_MODULE_2__["Action"]();
    };
    CandidateDirectoryComponent.prototype.addEditCandidate = function (developer) {
        if (developer) {
            this.modifyCandidate = true;
            this.action.developerEmail = developer.email;
        }
        else {
            this.addNewCandidate = true;
        }
    };
    CandidateDirectoryComponent.prototype.populateCandidateList = function () {
        this.developers = this.candidateSrvc.getAllDevelopers();
    };
    CandidateDirectoryComponent.prototype.getCandidate = function (name) {
        return (this.developers.length > 0 && name) ?
            this.developers.filter(function (dev) { return (dev.firstName.trim() + dev.lastName.trim()) == name.trim(); })[0] : null;
    };
    CandidateDirectoryComponent.prototype.getNewCandidate = function () {
        return new _developer__WEBPACK_IMPORTED_MODULE_1__["Developer"]();
    };
    CandidateDirectoryComponent.prototype.oncloseModal = function (close) {
        this.addNewCandidate = !close;
        this.modifyCandidate = !close;
        this.action.developerEmail = null;
        this.populateCandidateList();
        // this.loadQuestions();
    };
    CandidateDirectoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-directory',
            template: __webpack_require__(/*! ./candidate-directory.component.html */ "./src/app/candidate-directory/candidate-directory.component.html"),
            styles: [__webpack_require__(/*! ./candidate-directory.component.css */ "./src/app/candidate-directory/candidate-directory.component.css")]
        }),
        __metadata("design:paramtypes", [_candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"]])
    ], CandidateDirectoryComponent);
    return CandidateDirectoryComponent;
}());



/***/ }),

/***/ "./src/app/candidate.service.ts":
/*!**************************************!*\
  !*** ./src/app/candidate.service.ts ***!
  \**************************************/
/*! exports provided: CandidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateService", function() { return CandidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.service */ "./src/app/test.service.ts");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions.service */ "./src/app/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CandidateService = /** @class */ (function () {
    function CandidateService(testSrvc, questionSrvc) {
        this.testSrvc = testSrvc;
        this.questionSrvc = questionSrvc;
        this.developers = [];
    }
    //PErforms ADD/EDIT operation
    CandidateService.prototype.addCandidate = function (developer) {
        //Add Scenario
        if (!this.developerExists(developer)) {
            this.developers.push(developer);
        }
        else {
            //Edit Scenario
            var slctdDeveloper = (developer.email) ?
                this.developers.filter(function (dev) { return dev.email == developer.email; })[0] : null;
            slctdDeveloper.firstName = developer.firstName;
            slctdDeveloper.lastName = developer.lastName;
            slctdDeveloper.mobile = developer.mobile;
            slctdDeveloper.testName = developer.testName;
        }
        this.testSrvc.addDeveloperToTest(developer);
    };
    CandidateService.prototype.getCandidate = function (email) {
        var candidate = this.developers.filter(function (dev) { return dev.email == email; });
        return candidate.length > 0 ? candidate[0] : null;
    };
    CandidateService.prototype.developerExists = function (developer) {
        // let exists = this.developers.findIndex(dev => dev.firstName == developer.firstName 
        //                               && dev.lastName == developer.lastName);
        var exists = this.developers.findIndex(function (dev) { return dev.email == developer.email; });
        if (exists == -1) {
            return false;
        }
        return true;
    };
    CandidateService.prototype.getAllDevelopers = function () {
        return this.developers;
    };
    CandidateService.prototype.authenticateCandidate = function (username, passwd) {
        //Username of the Candidate is nothing but email & passwd is nothing but mobile number
        var developer = this.getCandidate(username);
        return developer && developer.mobile == passwd;
    };
    CandidateService.prototype.captureResponse = function (devResponse, candidate) {
        var developer = candidate && candidate.email ? this.getCandidate(candidate.email) : null;
        var add = developer
            && devResponse
            && devResponse.questionId
            && devResponse.answer
            && candidate.testName == developer.testName
            && developer
            && developer.developerResponse
            && developer.developerResponse.findIndex(function (dev) { return dev.questionId == devResponse.questionId; }) == -1;
        if (add) {
            //Filter -1
            devResponse.answer = devResponse.answer.filter(function (ans) { return ans != -1; });
            developer.developerResponse.push(devResponse);
        }
    };
    CandidateService.prototype.evaluateAssessement = function (candidate) {
        var developer = candidate && candidate.email ? this.getCandidate(candidate.email) : null;
        var questions = developer.testName ? this.questionSrvc.getQuestions(developer.testName) : null;
        var proceedWithEvaluation = (developer && developer.developerResponse && developer.developerResponse.length > 0)
            && (questions && questions.length > 0);
        var score = 0;
        if (proceedWithEvaluation) {
            questions.forEach(function (question) {
                //Check If developer has answered Question
                var devResponseQuestionArray = developer.developerResponse.filter(function (devRes) { return devRes.questionId == question.id; });
                var devResponseQuestion;
                if (devResponseQuestionArray.length >= 1) {
                    devResponseQuestion = devResponseQuestionArray[0];
                }
                var correctAnswer = true;
                question.answer.forEach(function (answer) {
                    if (answer > -1) {
                        if (devResponseQuestion.answer.findIndex(function (item) { return item == answer; }) == -1) {
                            correctAnswer = false;
                        }
                    }
                });
                if (devResponseQuestion.answer.length != question.answer.filter(function (ans) { return ans != -1; }).length) {
                    correctAnswer = false;
                }
                if (correctAnswer) {
                    score++;
                }
            });
        }
        developer.developerResponse = [];
        var finalScore = (score / questions.length) * 100;
        developer.score = finalScore;
        return finalScore;
    };
    CandidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"],
            _questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]])
    ], CandidateService);
    return CandidateService;
}());



/***/ }),

/***/ "./src/app/create-test/create-test.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-test/create-test.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-test/create-test.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-test/create-test.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIGNUP modal start -->\r\n<form #createTestForm=\"ngForm\">\r\n\r\n  <div class=\"modal\" [ngClass]=\"{'active':activateModal}\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"close\" (click)=\"closeModal()\">&times;</div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label for=\"tname\">Name of Test</label>\r\n          <input type=\"text\" id=\"tname\" name=\"testname\" class=\"form-control\" #testname=\"ngModel\" [(ngModel)]=\"test.name\"\r\n            required maxlength=\"40\" placeholder=\"Name of test..\">\r\n          <div *ngIf=\"testname.invalid && (testname.dirty || testname.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"testname.errors?.required\">\r\n              TestName is required.\r\n            </div>\r\n            <div *ngIf=\"testname.errors?.maxlength\">\r\n              TestName exceeds 40 characters.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label for=\"testcategory\">Choose appropriate test category</label>\r\n          <select id=\"testcategory\" name=\"testcategory\" class=\"form-control\" #testcategory=\"ngModel\" [(ngModel)]=\"test.category\">\r\n            <option value=\"IT\">Online Code Assessment</option>\r\n            <option value=\"Accountancy\">Math Quiz</option>\r\n            <option value=\"Manufacturing\">General Knowledge Quiz</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group offset-by-3\">\r\n          <label for=\"testduration\">Duration</label>\r\n          <input type=\"text\" id=\"testduration\" name=\"testduration\" class=\"form-control\" #testduration=\"ngModel\"\r\n            [(ngModel)]=\"test.duration\" placeholder=\"in Minutes\">\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input [(ngModel)]=\"user.password\" type=\"text\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"confirmpassword\">Confirm Password</label>\r\n          <input [(ngModel)]=\"user.confirmPassword\" type=\"text\" id=\"confirmpassword\" name=\"password\" class=\"form-control\"\r\n            placeholder=\"Confirm your password\">\r\n        </div>\r\n      </div> -->\r\n\r\n      <button class=\"button signup-button\" [disabled]=\"!createTestForm.form.valid\" (click)=\"onSubmit()\">Submit</button>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/create-test/create-test.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-test/create-test.component.ts ***!
  \******************************************************/
/*! exports provided: CreateTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTestComponent", function() { return CreateTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test.service */ "./src/app/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateTestComponent = /** @class */ (function () {
    function CreateTestComponent(testService) {
        this.testService = testService;
        this.didClose = false;
        this.closeCreateTestModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CreateTestComponent.prototype.ngOnInit = function () {
        this.test = this.testService.getNewTest();
        this.activateModal = true;
    };
    CreateTestComponent.prototype.closeModal = function () {
        // this.activateModal = false;
        this.closeCreateTestModal.emit(true);
        this.didClose = true;
    };
    CreateTestComponent.prototype.onSubmit = function () {
        console.log('Printing Signup User ', JSON.stringify(this.test));
        this.testService.addTest(this.test);
        this.closeModal();
        // this.route.navigateByUrl('/register/' + this.user.companyEmail);
        // window.open('Registration.html')
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateTestComponent.prototype, "closeCreateTestModal", void 0);
    CreateTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-test',
            template: __webpack_require__(/*! ./create-test.component.html */ "./src/app/create-test/create-test.component.html"),
            styles: [__webpack_require__(/*! ./create-test.component.css */ "./src/app/create-test/create-test.component.css")]
        }),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
    ], CreateTestComponent);
    return CreateTestComponent;
}());



/***/ }),

/***/ "./src/app/delete-question/delete-question.component.css":
/*!***************************************************************!*\
  !*** ./src/app/delete-question/delete-question.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/delete-question/delete-question.component.html":
/*!****************************************************************!*\
  !*** ./src/app/delete-question/delete-question.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  delete-question works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/delete-question/delete-question.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/delete-question/delete-question.component.ts ***!
  \**************************************************************/
/*! exports provided: DeleteQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQuestionComponent", function() { return DeleteQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteQuestionComponent = /** @class */ (function () {
    function DeleteQuestionComponent() {
    }
    DeleteQuestionComponent.prototype.ngOnInit = function () {
    };
    DeleteQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-question',
            template: __webpack_require__(/*! ./delete-question.component.html */ "./src/app/delete-question/delete-question.component.html"),
            styles: [__webpack_require__(/*! ./delete-question.component.css */ "./src/app/delete-question/delete-question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteQuestionComponent);
    return DeleteQuestionComponent;
}());



/***/ }),

/***/ "./src/app/developer-disclosure/developer-disclosure.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/developer-disclosure/developer-disclosure.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/developer-disclosure/developer-disclosure.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/developer-disclosure/developer-disclosure.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container-wrapper\">\r\n  <div class=\"form-container\">\r\n    <div id=\"section1\" class=\"section disclaimer\">\r\n      <h2 class=\"section-heading\"> Accept Terms and Conditions before proceeding with Test</h2>\r\n      <div class=\"section disclosure disclosureFont\">\r\n        Disclaimers have a long legal history. They generally have two purposes: To warn To limit liability A warning\r\n        sign is likely\r\n        the earliest and easiest manifestation of a disclaimer. “No trespassing” alerts passing individuals\r\n        that they are near a private land boundary and also excuses the landowner of some liability if people\r\n        visit uninvited. Sometimes, the warning and limitation of liability are based on statutory law. For\r\n        example, the state of Washington in the United States has a law that prevents people injured at equestrian\r\n        facilities from pursuing legal damages. Any business that boards, trains or allows the riding of\r\n        horses has to have a specific sign to enjoy this protection from liability. This sign acts as a disclaimer\r\n        much like a “No trespassing” sign in that it informs and specifies limits on facility responsibilities:\r\n        To warn To limit liability A warning sign is likely the earliest and easiest manifestation of a disclaimer.\r\n        “No trefdgdf Any business that boards, trains or allows the riding of horses has to have a specific\r\n        sign to enjoy this protection from liability. This sign acts as a disclaimer much like a “No trespassing”\r\n        sign in that it informs and specifies limits on facility responsibilities: To warn To limit liability\r\n        A warning sign is likely the earliest and easiest manifestation of a disclaimer.\r\n        <br> This sign acts as a disclaimer much like a “No trespassing” sign in that it informs and specifies\r\n        limits on facility responsibilities: To warn To limit liability A warning sign is likely the earliest\r\n        and easiest manifestation of a disclaimer.\r\n        <br> W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve\r\n        reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid\r\n        errors, but we cannot warrant full correctness of all content. While using this site, you agree to\r\n        have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2018 by Refsnes\r\n        Data. All Rights Reserved.\r\n      </div>\r\n      <div class=\"acceptDisclosure disclosureFont\">\r\n        <input type=\"checkbox\" id=\"acceptDisclosure\" name=\"acceptDisclosure\" value=\"true\">\r\n        <label for=\"acceptDisclosure\">I agree to Shreyavs Technologies Inc terms and conditions</label>\r\n      </div>\r\n      <div class=\"button-group-center\">\r\n        <button class=\"button save-button\" (click)=\"onSubmit()\">Start Test</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/developer-disclosure/developer-disclosure.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/developer-disclosure/developer-disclosure.component.ts ***!
  \************************************************************************/
/*! exports provided: DeveloperDisclosureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperDisclosureComponent", function() { return DeveloperDisclosureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeveloperDisclosureComponent = /** @class */ (function () {
    function DeveloperDisclosureComponent(route) {
        this.route = route;
    }
    DeveloperDisclosureComponent.prototype.ngOnInit = function () {
    };
    DeveloperDisclosureComponent.prototype.onSubmit = function () {
        this.route.navigateByUrl('/assessment');
    };
    DeveloperDisclosureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-developer-disclosure',
            template: __webpack_require__(/*! ./developer-disclosure.component.html */ "./src/app/developer-disclosure/developer-disclosure.component.html"),
            styles: [__webpack_require__(/*! ./developer-disclosure.component.css */ "./src/app/developer-disclosure/developer-disclosure.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DeveloperDisclosureComponent);
    return DeveloperDisclosureComponent;
}());



/***/ }),

/***/ "./src/app/developer-sign-in/developer-sign-in.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/developer-sign-in/developer-sign-in.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/developer-sign-in/developer-sign-in.component.html":
/*!********************************************************************!*\
  !*** ./src/app/developer-sign-in/developer-sign-in.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIGNIN modal start -->\r\n<form [formGroup]=\"developerSignInForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"modal\" [ngClass]=\"{'active':activateModal}\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"close\" (click)=\"closeModal()\">&times;</div>\r\n      <!-- <form> -->\r\n      <div *ngIf=\"invalidCredentials\" class=\"alert alert-danger\">\r\n        Invalid Username/MobileNumber\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" id=\"username\" name=\"username\" formControlName=\"userName\" required class=\"form-control\"\r\n            placeholder=\"Username..\">\r\n        </div>\r\n        <!-- <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"lname\">Last Name</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"lname\" name=\"lastname\" class=\"form-control\" placeholder=\"Your last name..\">\r\n\t\t\t\t\t\t</div> -->\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label for=\"mobile\">Mobile</label>\r\n          <input type=\"text\" id=\"mobile\" name=\"mobile\" formControlName=\"mobile\" required class=\"form-control\"\r\n            placeholder=\"mobile\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <button class=\"button signup-button\" type=\"submit\">Sign In</button>\r\n\r\n      <!-- </form> -->\r\n    </div>\r\n\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/developer-sign-in/developer-sign-in.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/developer-sign-in/developer-sign-in.component.ts ***!
  \******************************************************************/
/*! exports provided: DeveloperSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperSignInComponent", function() { return DeveloperSignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeveloperSignInComponent = /** @class */ (function () {
    function DeveloperSignInComponent(fb, route, loginSrvc) {
        this.fb = fb;
        this.route = route;
        this.loginSrvc = loginSrvc;
        this.invalidCredentials = false;
        this.closeDeveloprSignInModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.developerSignInForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    DeveloperSignInComponent.prototype.ngOnInit = function () {
        this.activateModal = true;
    };
    DeveloperSignInComponent.prototype.closeModal = function () {
        this.activateModal = false;
        this.closeDeveloprSignInModal.emit(true);
    };
    DeveloperSignInComponent.prototype.onSubmit = function () {
        if (this.loginSrvc.signIn(this.developerSignInForm.value.userName, this.developerSignInForm.value.mobile, true)) {
            console.log('Authentication Success');
            this.closeModal();
            this.route.navigateByUrl('/devdisclosure');
        }
        else {
            this.invalidCredentials = true;
            console.log('Authentication Failure');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeveloperSignInComponent.prototype, "closeDeveloprSignInModal", void 0);
    DeveloperSignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-developer-sign-in',
            template: __webpack_require__(/*! ./developer-sign-in.component.html */ "./src/app/developer-sign-in/developer-sign-in.component.html"),
            styles: [__webpack_require__(/*! ./developer-sign-in.component.css */ "./src/app/developer-sign-in/developer-sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], DeveloperSignInComponent);
    return DeveloperSignInComponent;
}());



/***/ }),

/***/ "./src/app/developer.ts":
/*!******************************!*\
  !*** ./src/app/developer.ts ***!
  \******************************/
/*! exports provided: Developer, DeveloperResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Developer", function() { return Developer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperResponse", function() { return DeveloperResponse; });
var Developer = /** @class */ (function () {
    function Developer() {
        this.developerResponse = [];
    }
    return Developer;
}());

var DeveloperResponse = /** @class */ (function () {
    function DeveloperResponse() {
    }
    return DeveloperResponse;
}());



/***/ }),

/***/ "./src/app/email-validator.service.ts":
/*!********************************************!*\
  !*** ./src/app/email-validator.service.ts ***!
  \********************************************/
/*! exports provided: EmailValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidatorService", function() { return EmailValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailValidatorService = /** @class */ (function () {
    function EmailValidatorService() {
    }
    EmailValidatorService.prototype.emailValidator = function (nameRe) {
        return function (control) {
            var forbidden = !nameRe.test(control.value);
            console.log('emailValidator');
            return forbidden ? { 'forbiddenEmail': { value: control.value } } : null;
        };
    };
    EmailValidatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EmailValidatorService);
    return EmailValidatorService;
}());



/***/ }),

/***/ "./src/app/exit-test/exit-test.component.css":
/*!***************************************************!*\
  !*** ./src/app/exit-test/exit-test.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/exit-test/exit-test.component.html":
/*!****************************************************!*\
  !*** ./src/app/exit-test/exit-test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container-wrapper\">\r\n  <div class=\"form-container\">\r\n    <div id=\"section1\" class=\"section disclaimer\">\r\n      <h2 class=\"section-heading\"> You have Completed Test and Score details are below</h2>\r\n      <p>Score: {{retrieveScore()}}</p>\r\n      <div class=\"button-group-center\">\r\n        <button class=\"button save-button\" (click)=\"onSubmit()\">Exit Test</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/exit-test/exit-test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/exit-test/exit-test.component.ts ***!
  \**************************************************/
/*! exports provided: ExitTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitTestComponent", function() { return ExitTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidate.service */ "./src/app/candidate.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExitTestComponent = /** @class */ (function () {
    function ExitTestComponent(candidateSrvc, loginSrvc) {
        this.candidateSrvc = candidateSrvc;
        this.loginSrvc = loginSrvc;
    }
    ExitTestComponent.prototype.ngOnInit = function () {
    };
    ExitTestComponent.prototype.retrieveScore = function () {
        var userLoggedIn = this.loginSrvc.getUserSignedIn();
        var dev = this.candidateSrvc.getCandidate(userLoggedIn.email);
        return dev && dev.score ? dev.score : 0;
    };
    ExitTestComponent.prototype.onSubmit = function () {
        this.loginSrvc.signOut();
    };
    ExitTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exit-test',
            template: __webpack_require__(/*! ./exit-test.component.html */ "./src/app/exit-test/exit-test.component.html"),
            styles: [__webpack_require__(/*! ./exit-test.component.css */ "./src/app/exit-test/exit-test.component.css")]
        }),
        __metadata("design:paramtypes", [_candidate_service__WEBPACK_IMPORTED_MODULE_1__["CandidateService"],
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], ExitTestComponent);
    return ExitTestComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <ul class=\"footer\">\r\n      <li class=\"footer\">\r\n          <a href=\"#\" target=\"_blank\">About Us</a>\r\n      </li>\r\n      <li class=\"footer\">\r\n          <a href=\"#\" target=\"_blank\">Solutions</a>\r\n      </li>\r\n      <li class=\"footer\">\r\n          <a href=\"#\" target=\"_blank\">Question Contributor</a>\r\n      </li>\r\n  </ul>\r\n  <ul class=\"footer\">\r\n      <li class=\"footer\">\r\n          <a href=\"#\" target=\"_blank\">Contact Us</a>\r\n      </li>\r\n      <li class=\"footer\">\r\n          <a href=\"#\" target=\"_blank\">vijay.nagarajan4283@gmail com\r\n          </a>\r\n      </li>\r\n      <li class=\"footer\">\r\n          <a href=\"#\" target=\"_blank\">Question Contributor</a>\r\n      </li>\r\n  </ul>\r\n  <ul class=\"footer\">\r\n      <li class=\"footer\">\r\n          <a href=\"#\" target=\"_blank\">Privacy Policy</a>\r\n      </li>\r\n      <li class=\"footer\">\r\n          <a href=\"#\" target=\"_blank\">Terms of Service\r\n          </a>\r\n      </li>\r\n      <li class=\"footer\">\r\n          <a href=\"#\" target=\"_blank\">Cookie Policy</a>\r\n      </li>\r\n  </ul>\r\n  <div>\r\n      <div class=\"logo\">\r\n          MeritTracker\r\n      </div>\r\n      <div class=\"copyrighttext\">\r\n          <a href=\"#\" class=\"fa fa-copyright\"></a>2018-2022 Shreyvs Technologies INC\r\n      </div>\r\n      <div class=\"icons\">\r\n          <a href=\"#\" class=\"fa fa-facebook\"></a>\r\n          <a href=\"#\" class=\"fa fa-twitter\"></a>\r\n          <a href=\"#\" class=\"fa fa-linkedin\"></a>\r\n          <a href=\"#\" class=\"fa fa-instagram\"></a>\r\n      </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i.menuicon {\r\n    font-size:24px;\r\n    margin-right: 5px;\r\n    border: none;\r\n    display: inline-block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    /* top: -19px;\r\n    left:-11px; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sign-in *ngIf=\"signIn\" (closeSignInModal)=\"onCloseModal($event)\"></app-sign-in>\r\n<app-sign-up *ngIf=\"signUp\" (closeSignUpModal)=\"onCloseModal($event)\"></app-sign-up>\r\n<app-developer-sign-in *ngIf=\"developerSignIn\" (closeDeveloprSignInModal)=\"onCloseModal($event)\"></app-developer-sign-in>\r\n<ul class=\"horizontal\">\r\n<li class=\"vertical\" *ngIf=\"menubarFlag\">\r\n    <!-- <a href=\"#manageTests\" id=\"manageTests\">Manage Tests</a> -->\r\n    <a id=\"menu\" class=\"menubar\" (click)=\"toggleDisplayOfNavPanel()\">\r\n        <!-- <i class=\"fa fa-bars\" aria-hidden=\"true\">Menu</i> -->\r\n        <!-- <i class=\"fas fa-bars\" style=\"font-size:24px;color:white\">f0c9</i> -->\r\n        <i class=\"fa menuicon\">&#xf0c9;&nbsp;</i>\r\n    </a>\r\n\r\n</li>\r\n  <li class=\"horizontal\">\r\n      <a href=\"#home\">Home</a>\r\n  </li>\r\n  <li class=\"horizontal\">\r\n      <a href=\"#news\">News</a>\r\n  </li>\r\n  <li class=\"horizontal\">\r\n      <a href=\"#contact\">Contact</a>\r\n  </li>\r\n  <li class=\"horizontal\">\r\n      <a routerLink=\"/register\" href=\"#about\">About</a>\r\n  </li>\r\n  <li *ngIf=\"!loginSrvc.userSignedIn()\" class=\"horizontal\">\r\n      <a (click)=\"signUpFn(true)\" >\r\n          SignUp\r\n      </a>\r\n  </li>\r\n  <li *ngIf=\"!loginSrvc.userSignedIn()\" class=\"horizontal\" style=\"float:right\">\r\n      <a (click)=\"developerSignIn=true\">\r\n          Developer SignIn\r\n      </a>\r\n  </li>\r\n  <li *ngIf=\"!loginSrvc.userSignedIn()\" class=\"horizontal\" style=\"float:right\">\r\n    <a (click)=\"signIn=true\" >\r\n        Employer SignIn\r\n    </a>\r\n  </li>\r\n  <li *ngIf=\"loginSrvc.userSignedIn()\" class=\"horizontal\" style=\"float:right\">\r\n        <a (click)=\"loginSrvc.signOut()\">\r\n            SignOut\r\n        </a>\r\n      </li>    \r\n</ul>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _menubar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menubar.service */ "./src/app/menubar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginSrvc, menubarSvc, cdr) {
        var _this = this;
        this.loginSrvc = loginSrvc;
        this.menubarSvc = menubarSvc;
        this.cdr = cdr;
        this.menubarFlag = true;
        this.signUp = false;
        this.signIn = false;
        this.developerSignIn = false;
        this.displayNavPanel = true;
        this.toggleNavPanel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscription = this.menubarSvc.displayNavPanel$.subscribe(function (displayNavPanel) {
            console.log('Confirm Subscription in Header');
            if (!displayNavPanel) {
                //Hide NavBar Panel on MouseDown event
                _this.toggleDisplayOfNavPanel();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log('HeaderComponent ngOnInit', this.menubarFlag);
    };
    HeaderComponent.prototype.signUpFn = function (flag) {
        this.signUp = flag;
    };
    HeaderComponent.prototype.onCloseModal = function (close) {
        this.signIn = !close;
        this.developerSignIn = !close;
        this.signUp = !close;
    };
    HeaderComponent.prototype.setMenubarBtnFlag = function (flag) {
        this.menubarFlag = flag;
        this.cdr.detectChanges();
        this.toggleDisplayOfNavPanel();
    };
    HeaderComponent.prototype.toggleDisplayOfNavPanel = function () {
        this.displayNavPanel = this.menubarFlag ? !this.displayNavPanel : true;
        this.toggleNavPanel.emit(this.displayNavPanel);
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleNavPanel", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _menubar_service__WEBPACK_IMPORTED_MODULE_2__["MenubarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-screen\" class=\"main-screen\">\r\n\r\n  <div class=\"form-container-wrapper\">\r\n\r\n    <div class=\"form-container\">\r\n\r\n      <div id=\"section1\" class=\"section\">\r\n        <h2 class=\"section-heading\"> Online Assessement </h2>\r\n        <p class=\"question challengeFont\">\r\n          1. Given an array of Player objects, write a comparator that sorts them in order of decreasing score; if or\r\n          more players\r\n          have the same score, sort those players alphabetically by name. To do this, you must create a Checker\r\n          class that implements the Comparator interface, then write an int compare(Player a, Player b) method\r\n          implementing the Comparator.compare(T o1, T o2) method.\r\n\r\n        </p>\r\n        <p class=\"question challengeFont\">\r\n          1. Given an array of Player objects, write a comparator that sorts them in order of decreasing score; if or\r\n          more players\r\n          have the same score, sort those players alphabetically by name. To do this, you must create a Checker\r\n          class that implements the Comparator interface, then write an int compare(Player a, Player b) method\r\n          implementing the Comparator.compare(T o1, T o2) method.\r\n\r\n        </p>\r\n        <div class=\"button-group-right\">\r\n          <button class=\"button save-button\">Next</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-container\">\r\n\r\n      <div id=\"section1\" class=\"section\">\r\n        <h2 class=\"section-heading\"> Online Assessement </h2>\r\n        <p class=\"question challengeFont\">\r\n          1. Given an array of Player objects, write a comparator that sorts them in order of decreasing score; if or\r\n          more players\r\n          have the same score, sort those players alphabetically by name. To do this, you must create a Checker\r\n          class that implements the Comparator interface, then write an int compare(Player a, Player b) method\r\n          implementing the Comparator.compare(T o1, T o2) method.\r\n\r\n        </p>\r\n        <p class=\"question challengeFont\">\r\n          1. Given an array of Player objects, write a comparator that sorts them in order of decreasing score; if or\r\n          more players\r\n          have the same score, sort those players alphabetically by name. To do this, you must create a Checker\r\n          class that implements the Comparator interface, then write an int compare(Player a, Player b) method\r\n          implementing the Comparator.compare(T o1, T o2) method.\r\n\r\n        </p>\r\n        <div class=\"button-group-right\">\r\n          <button class=\"button save-button\">Next</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>    \r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candidate.service */ "./src/app/candidate.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(candidateSrvc, userSrvc, route) {
        this.candidateSrvc = candidateSrvc;
        this.userSrvc = userSrvc;
        this.route = route;
    }
    LoginService.prototype.userSignedIn = function () {
        return (this.developer || this.user) ? true : false;
    };
    LoginService.prototype.signIn = function (userName, passwd, userIsDeveloper) {
        if (userIsDeveloper && this.candidateSrvc.authenticateCandidate(userName, passwd)) {
            this.developer = this.candidateSrvc.getCandidate(userName);
            this.user = null;
            return true;
        }
        else if (!userIsDeveloper && this.userSrvc.authenticateUser(userName, passwd)) {
            this.user = this.userSrvc.getUser(userName);
            this.developer = null;
            return true;
        }
        return false;
    };
    LoginService.prototype.getUserSignedIn = function () {
        return this.developer ? this.developer : this.user ? this.user : null;
    };
    LoginService.prototype.signOut = function () {
        this.developer = null;
        this.user = null;
        this.route.navigateByUrl('/');
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_candidate_service__WEBPACK_IMPORTED_MODULE_1__["CandidateService"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/manage-questions/manage-questions.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/manage-questions/manage-questions.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addQuestionButton {\r\n    margin-left: 2%;\r\n}"

/***/ }),

/***/ "./src/app/manage-questions/manage-questions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/manage-questions/manage-questions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container-wrapper\">\r\n  <div class=\"form-container\">\r\n      <div id=\"section_manageQuestions\" class=\"section\">\r\n          \r\n          <h2 class=\"section-heading\"> {{testName}} </h2>\r\n          <button class=\"button save-button addQuestionButton\" (click)=\"addEditQuestion()\">Add New Question</button>\r\n          <app-modify-question *ngIf=\"addQuestion\" [action]=\"action\" (closeModifyQuestionModal)=\"oncloseModal($event)\"></app-modify-question>\r\n          <div *ngFor=\"let question of loadQuestions(); let i=index\" class=\"section accordion-wrapper\">\r\n              <button class=\"accordion\" id=\"questionButton\">{{question.questionDescription}}</button>\r\n              <div class=\"accordion-container\">\r\n                  <p class=\"answer\" *ngFor=\"let option of question.choice; let j=index\">{{j+1}}. {{option}}</p>\r\n                  <div class=\"button-group-right\">\r\n                      <button class=\"button save-button\" (click)=\"addEditQuestion(question)\">Edit</button>\r\n                      <app-modify-question *ngIf=\"modifyQuestion\" [action]=\"action\" (closeModifyQuestionModal)=\"oncloseModal($event)\"></app-modify-question>\r\n                      <button class=\"button save-button\" onclick=\"openModal(this)\">Delete hero</button>\r\n                      <div id=\"deleteModal\"></div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n</div>    "

/***/ }),

/***/ "./src/app/manage-questions/manage-questions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manage-questions/manage-questions.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageQuestionsComponent", function() { return ManageQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _accordion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../accordion.service */ "./src/app/accordion.service.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action */ "./src/app/action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageQuestionsComponent = /** @class */ (function () {
    function ManageQuestionsComponent(route, questionService, accordionService) {
        this.route = route;
        this.questionService = questionService;
        this.accordionService = accordionService;
    }
    ManageQuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordionService.initializeAccordion();
        this.action = new _action__WEBPACK_IMPORTED_MODULE_4__["Action"]();
        this.route.queryParams.subscribe(function (params) {
            return _this.action.testName = params['testName'];
        });
    };
    ManageQuestionsComponent.prototype.loadQuestions = function () {
        return this.questionService.getQuestions(this.action.testName ? this.action.testName : '');
    };
    ManageQuestionsComponent.prototype.addEditQuestion = function (question) {
        if (question) {
            this.modifyQuestion = true;
            this.action.questionId = question.id;
        }
        else {
            this.action.questionId = null;
            this.addQuestion = true;
        }
        console.log('Question', question);
    };
    ManageQuestionsComponent.prototype.oncloseModal = function (close) {
        this.addQuestion = !close;
        this.modifyQuestion = !close;
        this.accordionService.initializeAccordion();
        this.loadQuestions();
    };
    ManageQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-questions',
            template: __webpack_require__(/*! ./manage-questions.component.html */ "./src/app/manage-questions/manage-questions.component.html"),
            styles: [__webpack_require__(/*! ./manage-questions.component.css */ "./src/app/manage-questions/manage-questions.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"],
            _accordion_service__WEBPACK_IMPORTED_MODULE_3__["AccordionService"]])
    ], ManageQuestionsComponent);
    return ManageQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/menubar.service.ts":
/*!************************************!*\
  !*** ./src/app/menubar.service.ts ***!
  \************************************/
/*! exports provided: MenubarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarService", function() { return MenubarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenubarService = /** @class */ (function () {
    function MenubarService() {
        // OBservable String
        this.displayNavPanel = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.displayNavPanel$ = this.displayNavPanel.asObservable();
    }
    //toggledisplay
    MenubarService.prototype.hideVerticalNavPanel = function (displayPanel) {
        this.displayNavPanel.next(displayPanel);
    };
    MenubarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MenubarService);
    return MenubarService;
}());



/***/ }),

/***/ "./src/app/modify-candidate/modify-candidate.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modify-candidate/modify-candidate.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modify-candidate/modify-candidate.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modify-candidate/modify-candidate.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modify Candidate modal start -->\r\n<form [formGroup]=\"candidateForm\" (ngSubmit)=\"onSubmit()\">\r\n\t<div class=\"modal\" [ngClass]=\"{'active':activateModal}\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"close\" (click)=\"closeModal()\">&times;</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"fname\">First Name</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"fname\" name=\"firstname\" class=\"form-control\" formControlName=\"firstName\" required placeholder=\"Your name..\">\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"lname\">Last Name</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"lname\" name=\"lastname\" class=\"form-control\" formControlName=\"lastName\" required placeholder=\"Your last name..\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"companyemail\">Email</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"companyemail\" name=\"companyemail\" class=\"form-control\"\r\n          \t\t\t\t\tformControlName=\"email\" required placeholder=\"vijay.nagarajan4283@gmail.com\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"mobile\">Phone/Mobile</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"mobile\" name=\"mobile\" class=\"form-control\" formControlName=\"mobile\" placeholder=\"647-891-4283\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"mobile\">Select the Test</label>\r\n\t\t\t\t\t<select id=\"test\" name=\"testName\" class=\"form-control\" formControlName=\"testName\">\r\n\t\t\t\t\t\t<option *ngFor=\"let test of testSrvc.getAllTests()\" [value]=\"test.name\">\r\n\t\t\t\t\t\t\t{{test.name}}\r\n\t\t\t\t\t\t</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button type=\"submit\" class=\"button signup-button\" [disabled]=\"!candidateForm.valid\" (click)=\"onSubmit()\">Submit</button>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</form>"

/***/ }),

/***/ "./src/app/modify-candidate/modify-candidate.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modify-candidate/modify-candidate.component.ts ***!
  \****************************************************************/
/*! exports provided: ModifyCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyCandidateComponent", function() { return ModifyCandidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action */ "./src/app/action.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _candidate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidate.service */ "./src/app/candidate.service.ts");
/* harmony import */ var _developer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../developer */ "./src/app/developer.ts");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test.service */ "./src/app/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModifyCandidateComponent = /** @class */ (function () {
    function ModifyCandidateComponent(fb, candidateSrvc, testSrvc) {
        this.fb = fb;
        this.candidateSrvc = candidateSrvc;
        this.testSrvc = testSrvc;
        this.closeModifyQuestionModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.candidateForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: [''],
            testName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ModifyCandidateComponent.prototype.ngOnInit = function () {
        this.activateModal = true;
        if (this.action && this.action.developerEmail) {
            this.loadCandidate(this.action.developerEmail);
        }
    };
    ModifyCandidateComponent.prototype.closeModal = function () {
        this.closeModifyQuestionModal.emit(true);
    };
    ModifyCandidateComponent.prototype.loadCandidate = function (candidateEmail) {
        console.log('candidateEmail loadCandidate ', candidateEmail);
        var dev = this.candidateSrvc.getCandidate(candidateEmail);
        this.candidateForm.controls.firstName.setValue(dev.firstName);
        this.candidateForm.controls.lastName.setValue(dev.lastName);
        this.candidateForm.controls.email.setValue(dev.email);
        this.candidateForm.controls.mobile.setValue(dev.mobile);
        this.candidateForm.controls.testName.setValue(dev.testName);
    };
    ModifyCandidateComponent.prototype.onSubmit = function () {
        var candidate = new _developer__WEBPACK_IMPORTED_MODULE_4__["Developer"]();
        candidate.firstName = this.candidateForm.value.firstName;
        candidate.lastName = this.candidateForm.value.lastName;
        candidate.email = this.candidateForm.value.email;
        candidate.mobile = this.candidateForm.value.mobile;
        candidate.testName = this.candidateForm.value.testName;
        this.candidateSrvc.addCandidate(candidate);
        this.closeModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _action__WEBPACK_IMPORTED_MODULE_1__["Action"])
    ], ModifyCandidateComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModifyCandidateComponent.prototype, "closeModifyQuestionModal", void 0);
    ModifyCandidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-candidate',
            template: __webpack_require__(/*! ./modify-candidate.component.html */ "./src/app/modify-candidate/modify-candidate.component.html"),
            styles: [__webpack_require__(/*! ./modify-candidate.component.css */ "./src/app/modify-candidate/modify-candidate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _candidate_service__WEBPACK_IMPORTED_MODULE_3__["CandidateService"],
            _test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"]])
    ], ModifyCandidateComponent);
    return ModifyCandidateComponent;
}());



/***/ }),

/***/ "./src/app/modify-question/modify-question.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modify-question/modify-question.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".repeat-button {\r\n\twidth: 100%;\r\n\tpadding: 10px 5px;\r\n\tborder-radius: 5px;\r\n\ttext-align: center;\r\n\tmargin:10px 5px;\r\n}"

/***/ }),

/***/ "./src/app/modify-question/modify-question.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modify-question/modify-question.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Manage Questions modal start -->\r\n<form [formGroup]=\"questionForm\">\r\n\r\n\t<div class=\"modal\" [ngClass]=\"{'active':activateModal}\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"close\" (click)=\"closeModal()\">&times;</div>\r\n\t\t\t<!-- Question -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group offset-1\">\r\n\t\t\t\t\t<label for=\"question\">Question</label>\r\n\t\t\t\t\t<textarea  rows=\"4\" cols=\"100\" id=\"question\" name=\"question\" formControlName=\"question\" class=\"form-control\" placeholder=\"Question name..\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- Answer -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<!-- <label for=\"answer\">&nbsp;</label> -->\r\n\t\t\t\t\t<button class=\"button repeat-button\" (click)=\"addAlias()\">Add</button>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div formArrayName=\"aliases\" *ngFor=\"let option of aliases.controls; let i=index\">\r\n\t\t\t\t<div class=\"row\" [formGroupName]=\"i\">\r\n\t\t\t\t\t<div class=\"form-group offset-1\">\r\n\t\t\t\t\t\t<label for=\"option\">Option</label>\r\n\t\t\t\t\t\t<textarea rows=\"4\" cols=\"50\" id=\"option\" name=\"option\" formControlName=\"choice\" class=\"form-control\" placeholder=\"Enter possible choices..\"></textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group offset-by-5\">\r\n\t\t\t\t\t\t<label class=\"container\" style=\"--container-left-pos:2px\">Answer\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" value=\"selected\" formControlName=\"answer\">\r\n\t\t\t\t\t\t\t<span class=\"checkmark\" style=\"--checkmark-left-pos:10px;--checkmark-top-pos:20px\"></span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group offset-by-4\">\r\n\t\t\t\t\t\t<label for=\"answer\">&nbsp;</label>\r\n\t\t\t\t\t\t<button class=\"button repeat-button\" routerLink=\"/register\" (click)=\"onDelete()\">Delete</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div><!-- </div> -->\r\n\t\t\t</div>\r\n\t\t\t<button class=\"button signup-button\" [disabled]=\"!questionForm.valid\" (click)=\"onSubmit()\">Submit</button>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/modify-question/modify-question.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modify-question/modify-question.component.ts ***!
  \**************************************************************/
/*! exports provided: ModifyQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyQuestionComponent", function() { return ModifyQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action */ "./src/app/action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModifyQuestionComponent = /** @class */ (function () {
    function ModifyQuestionComponent(questionsService, fb) {
        this.questionsService = questionsService;
        this.fb = fb;
        this.closeModifyQuestionModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.questionForm = this.fb.group({
            question: ['question'],
            aliases: this.fb.array([
                this.fb.group({
                    choice: [''],
                    answer: [''],
                    deleteButton: ['Delete']
                })
            ])
        });
    }
    Object.defineProperty(ModifyQuestionComponent.prototype, "aliases", {
        get: function () {
            return this.questionForm.get('aliases');
        },
        enumerable: true,
        configurable: true
    });
    ModifyQuestionComponent.prototype.addAlias = function () {
        this.aliases.push(this.fb.group({
            choice: [''],
            answer: [''],
            deleteButton: ['Delete']
        }));
    };
    ModifyQuestionComponent.prototype.ngOnInit = function () {
        console.log('ModifyQuestionComponent print testName11', this.action.testName + ' ' + this.action.questionId);
        this.editAction = this.action.testName && this.action.questionId ? true : false;
        if (this.action.testName && this.action.questionId) {
            this.populateQuestion();
        }
        this.activateModal = true;
    };
    ModifyQuestionComponent.prototype.populateQuestion = function () {
        var _this = this;
        var question = this.questionsService.getQuestion(this.action.testName, this.action.questionId);
        //Remove Default selections for Edit scenario
        if (this.aliases.length > 0) {
            for (var count = this.aliases.length - 1; count >= 0; count--) {
                this.aliases.removeAt(count);
            }
        }
        this.questionForm.controls.question.setValue(question.questionDescription);
        var index = 0;
        question.choice.map(function (choiceDesc) {
            _this.aliases.push(_this.fb.group({
                choice: [choiceDesc],
                answer: [false],
                deleteButton: ['Delete']
            }));
        });
        if (question.answer && question.answer.length > 0) {
            question.answer.forEach(function (answer) {
                if (answer < question.choice.length) {
                    // this.aliases[answer].answer.setValue(true);
                    if (answer >= 0) {
                        // console.log('this.aliases.at(answer)',this.aliases.at(answer).controls.answer.setValue(true));
                        var fg = _this.aliases.at(answer);
                        fg.controls.answer.setValue(true);
                    }
                }
            });
            this.questionForm.controls.question.setValue(question.questionDescription);
        }
        question.choice = this.questionForm.value.aliases.map(function (alias) { return alias.choice; });
    };
    ModifyQuestionComponent.prototype.closeModal = function () {
        this.closeModifyQuestionModal.emit(true);
    };
    ModifyQuestionComponent.prototype.onDelete = function () {
    };
    ModifyQuestionComponent.prototype.onSubmit = function () {
        console.log('Printing Question ', this.questionForm.value.question);
        console.log('Printing Answer ', this.questionForm.value.aliases[1]);
        var question = this.questionsService.getNewQuestion();
        var answers;
        question.testName = this.action.testName;
        question.questionDescription = this.questionForm.value.question;
        question.choice = this.questionForm.value.aliases.map(function (alias) { return alias.choice; });
        var index = 0;
        question.answer = this.questionForm.value.aliases.map(function (alias) {
            index++;
            if (alias.answer) {
                return (index - 1);
            }
            return -1;
        });
        this.questionForm.value.aliases.map(function (alias) {
            console.log('Anwer Choice', alias.answer);
        });
        console.log('Printing complete Question Saved ', question);
        //Action = Edit
        if (this.action.questionId) {
            question.id = this.action.questionId;
            this.questionsService.editQuestion(question);
        }
        else {
            //Action = Add
            this.questionsService.addQuestion(question);
        }
        this.closeModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _action__WEBPACK_IMPORTED_MODULE_3__["Action"])
    ], ModifyQuestionComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModifyQuestionComponent.prototype, "closeModifyQuestionModal", void 0);
    ModifyQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-question',
            template: __webpack_require__(/*! ./modify-question.component.html */ "./src/app/modify-question/modify-question.component.html"),
            styles: [__webpack_require__(/*! ./modify-question.component.css */ "./src/app/modify-question/modify-question.component.css")]
        }),
        __metadata("design:paramtypes", [_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ModifyQuestionComponent);
    return ModifyQuestionComponent;
}());



/***/ }),

/***/ "./src/app/phone-number.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/phone-number.directive.ts ***!
  \*******************************************/
/*! exports provided: PhoneNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberDirective", function() { return PhoneNumberDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhoneNumberDirective = /** @class */ (function () {
    function PhoneNumberDirective() {
    }
    PhoneNumberDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appPhoneNumber]'
        }),
        __metadata("design:paramtypes", [])
    ], PhoneNumberDirective);
    return PhoneNumberDirective;
}());



/***/ }),

/***/ "./src/app/phone-validator.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/phone-validator.directive.ts ***!
  \**********************************************/
/*! exports provided: PhoneValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneValidatorDirective", function() { return PhoneValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhoneValidatorDirective = /** @class */ (function () {
    function PhoneValidatorDirective() {
    }
    PhoneValidatorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appPhoneValidator]'
        }),
        __metadata("design:paramtypes", [])
    ], PhoneValidatorDirective);
    return PhoneValidatorDirective;
}());



/***/ }),

/***/ "./src/app/question-assessment/question-assessment.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/question-assessment/question-assessment.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/question-assessment/question-assessment.component.html":
/*!************************************************************************!*\
  !*** ./src/app/question-assessment/question-assessment.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"assessementForm\">\r\n\r\n<div id=\"section1\" class=\"section\">\r\n    <h2 class=\"section-heading\"> Java Online Assessement </h2>\r\n    <p class=\"question challengeFont\">\r\n      {{question.questionDescription}}\r\n    </p>\r\n    <div *ngIf=\"choicesLoaded\">\r\n    <div formArrayName=\"aliases\" *ngFor=\"let choice of aliases.controls; let i=index\">\r\n      <div class=\"answer challengeFont\" [formGroupName]=\"i\">\r\n        <!-- <input type=\"checkbox\" name=\"optionCheckBox\" checked=\"checked\" value=\"selected\">\r\n                  <label for=\"optionCheckBox\">Option 1</label> -->\r\n        <label class=\"container\">{{choice.get('choiceDesc').value}}\r\n          <input type=\"checkbox\" checked=\"checked\" value=\"selected\" formControlName=\"option\">\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <div class=\"button-group-right\">\r\n      <button class=\"button save-button\" (click)=\"nextQuestion()\">Next</button>\r\n    </div>\r\n  </div>\r\n</form>  "

/***/ }),

/***/ "./src/app/question-assessment/question-assessment.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/question-assessment/question-assessment.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuestionAssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAssessmentComponent", function() { return QuestionAssessmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions */ "./src/app/questions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _developer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../developer */ "./src/app/developer.ts");
/* harmony import */ var _candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../candidate.service */ "./src/app/candidate.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionAssessmentComponent = /** @class */ (function () {
    function QuestionAssessmentComponent(fb, candidateSrvc, loginSrvc) {
        this.fb = fb;
        this.candidateSrvc = candidateSrvc;
        this.loginSrvc = loginSrvc;
        this.moveToNextQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.choicesLoaded = false;
        this.assessementForm = this.fb.group({
            aliases: this.fb.array([
                this.fb.group({
                    choiceDesc: [''],
                    option: [false]
                })
            ])
        });
    }
    Object.defineProperty(QuestionAssessmentComponent.prototype, "aliases", {
        get: function () {
            return this.assessementForm.get('aliases');
        },
        enumerable: true,
        configurable: true
    });
    QuestionAssessmentComponent.prototype.addAliases = function () {
        this.aliases.push(this.fb.group({
            choiceDesc: [''],
            option: [false]
        }));
    };
    QuestionAssessmentComponent.prototype.ngOnInit = function () {
        this.populateChoice(null);
    };
    QuestionAssessmentComponent.prototype.populateChoice = function (question) {
        var _this = this;
        if (question) {
            this.question = question;
        }
        //Remove Default selections for Edit scenario
        if (this.aliases.length > 0) {
            for (var count = this.aliases.length - 1; count >= 0; count--) {
                this.aliases.removeAt(count);
            }
        }
        this.question.choice.map(function (choiceDescription) {
            _this.aliases.push(_this.fb.group({
                choiceDesc: [choiceDescription],
                option: [false]
            }));
        });
        //   if(this.question.answer && this.question.answer.length > 0  ) {
        //     this.question.answer.forEach(answer => {
        //       if(answer < this.question.choice.length) {
        //         // this.aliases[answer].answer.setValue(true);
        //         if(answer >= 0) {
        //           // console.log('this.aliases.at(answer)',this.aliases.at(answer).controls.answer.setValue(true));
        //           this.aliases.at(answer).controls.answer.setValue(true)
        //         }
        //       }
        //     }); 
        //  }  
        this.choicesLoaded = true;
        console.log('PopulateChoice ', this.aliases);
    };
    QuestionAssessmentComponent.prototype.nextQuestion = function () {
        var count = 0;
        var devResponse = new _developer__WEBPACK_IMPORTED_MODULE_3__["DeveloperResponse"]();
        devResponse.questionId = this.question ? this.question.id : null;
        devResponse.answer = this.assessementForm.value.aliases.map(function (alias) {
            var chosenAnswer = alias.option ? count : -1;
            // devResponse.answer.push(chosenAnswer);
            count++;
            return chosenAnswer;
            // return alias.option ? 
        });
        this.candidateSrvc.captureResponse(devResponse, this.loginSrvc.getUserSignedIn());
        this.moveToNextQuestion.emit(true);
    };
    QuestionAssessmentComponent.prototype.captureResponse = function (answer) {
        console.log('Developer Response for Question', answer);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuestionAssessmentComponent.prototype, "moveToNextQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _questions__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], QuestionAssessmentComponent.prototype, "question", void 0);
    QuestionAssessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-assessment',
            template: __webpack_require__(/*! ./question-assessment.component.html */ "./src/app/question-assessment/question-assessment.component.html"),
            styles: [__webpack_require__(/*! ./question-assessment.component.css */ "./src/app/question-assessment/question-assessment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"],
            _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], QuestionAssessmentComponent);
    return QuestionAssessmentComponent;
}());



/***/ }),

/***/ "./src/app/questions.service.ts":
/*!**************************************!*\
  !*** ./src/app/questions.service.ts ***!
  \**************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions */ "./src/app/questions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.questions = [
            { testName: 'Java8 Online Assessment', questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York', 'White House', 'Toronto'], id: '1111', answer: [1] },
            { testName: 'Javascript ES6 Fundamentals Assessment', questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York', 'White House', 'Toronto'], id: '2222', answer: [1] },
            { testName: 'HTML CSS3 and Javascript', questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York', 'White House', 'Toronto'], id: '3333', answer: [1] },
            { testName: 'AngularJS Assessment', questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York', 'White House', 'Toronto'], id: '4444', answer: [1] },
            { testName: 'Angular Material Assessment', questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York', 'White House', 'Toronto'], id: '5555', answer: [1] },
            { testName: 'React Assessment', questionDescription: 'Choose 7 wonders of the world', choice: ['Taj Mahal', 'New York', 'White House', 'Toronto'], id: '6666', answer: [1] }
        ];
    }
    QuestionsService.prototype.getQuestions = function (testName) {
        return this.questions && this.questions.length > 0 ? this.questions.filter(function (question) {
            return question.testName.indexOf(testName) > -1;
        }) : null;
    };
    QuestionsService.prototype.getQuestion = function (testName, questionId) {
        var questions = this.questions && this.questions.length > 0 ? this.questions.filter(function (question) {
            return question.testName.indexOf(testName) > -1 && question.id.indexOf(questionId) > -1;
        }) : null;
        return questions && questions.length > 0 ? questions[0] : null;
    };
    //Add new question
    QuestionsService.prototype.addQuestion = function (question) {
        console.log('Question Service ID', new Date().getTime());
        question.id = new Date().getTime().toString();
        this.questions.push(question);
    };
    QuestionsService.prototype.getNewQuestion = function () {
        return new _questions__WEBPACK_IMPORTED_MODULE_1__["Question"](' ', ' ', [], ' ');
    };
    QuestionsService.prototype.editQuestion = function (modifiedQuestion) {
        var questions = this.questions.filter(function (question) {
            return modifiedQuestion && question.id == modifiedQuestion.id;
        });
        if (questions.length > 0) {
            questions[0].questionDescription = modifiedQuestion.questionDescription;
            questions[0].choice = modifiedQuestion.choice;
            if (questions[0].answer && questions[0].answer.length > 0) {
                questions[0].answer = modifiedQuestion.answer;
            }
        }
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/questions.ts":
/*!******************************!*\
  !*** ./src/app/questions.ts ***!
  \******************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(testName, questionDescription, answers, id) {
        this.testName = testName;
        this.questionDescription = questionDescription;
        // this.answers = [];
        this.choice = [];
        this.id = id;
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/scrollbar.service.ts":
/*!**************************************!*\
  !*** ./src/app/scrollbar.service.ts ***!
  \**************************************/
/*! exports provided: ScrollbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarService", function() { return ScrollbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollbarService = /** @class */ (function () {
    function ScrollbarService() {
    }
    ScrollbarService.prototype.scrollToNextSection = function (index) {
        console.log('printing section1 scrollToNthChild', index);
        var scrollToSection = $("div.section:nth-child(" + index + ")").position();
        console.log('printing section1 scrollToNthChild', scrollToSection);
        $("html, body").animate({
            scrollTop: scrollToSection.top
        }, 1000);
        $(document).ready(function () {
            function scrollToNthChild(index) {
                // console.log('printing section1 scrollToNthChild', index);
                // var scrollToSection = $("div.section:nth-child(" + index + ")").position();
                // console.log('printing section1 scrollToNthChild', scrollToSection);
                // $("html, body").animate({
                //   scrollTop: scrollToSection.top
                // }
                //   , 1000);
            }
            //jQuery methods go here...
            $("li.vertical > a").click(function () {
                var selectedItemIndex = $("li.vertical").index($(this).parent()) + 1;
                console.log('Index of ', selectedItemIndex);
                scrollToNthChild(selectedItemIndex);
            });
        });
    };
    ScrollbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ScrollbarService);
    return ScrollbarService;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIGNIN modal start -->\r\n<form [formGroup]=\"userSignInForm\" (ngSubmit)=\"onSubmit()\">\r\n\t<div class=\"modal\" [ngClass]=\"{'active':activateModal}\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"close\" (click)=\"closeModal()\">&times;</div>\r\n\t\t\t<!-- <form> -->\r\n\t\t\t\t<div *ngIf=\"invalidCredentials\" class=\"alert alert-danger\">\r\n\t\t\t\t\tInvalid Username/Password\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"username\">Username</label>\r\n\t\t\t\t\t\t<input type=\"text\" id=\"username\" name=\"username\" formControlName=\"userName\" required class=\"form-control\" placeholder=\"Username..\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"lname\">Last Name</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"lname\" name=\"lastname\" class=\"form-control\" placeholder=\"Your last name..\">\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"password\">Password</label>\r\n\t\t\t\t\t\t<input type=\"text\" id=\"password\" name=\"password\" formControlName=\"password\" required class=\"form-control\" placeholder=\"password\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<button class=\"button signup-button\" type=\"submit\">Sign In</button>\r\n\r\n\t\t\t<!-- </form> -->\r\n\t\t</div>\r\n\r\n\t</div>\r\n</form>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = /** @class */ (function () {
    function SignInComponent(fb, route, loginSrvc, authSrvc) {
        this.fb = fb;
        this.route = route;
        this.loginSrvc = loginSrvc;
        this.authSrvc = authSrvc;
        this.credentials = { username: '', password: '' };
        this.invalidCredentials = false;
        this.closeSignInModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userSignInForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.activateModal = true;
    };
    SignInComponent.prototype.closeModal = function () {
        this.activateModal = false;
        this.closeSignInModal.emit(true);
    };
    SignInComponent.prototype.onSubmit = function () {
        if (this.loginSrvc.signIn(this.userSignInForm.value.userName, this.userSignInForm.value.password, false)) {
            this.closeModal();
            this.login();
            this.route.navigateByUrl('/viewtests');
        }
        else {
            this.invalidCredentials = true;
        }
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        this.credentials.username = this.userSignInForm.value.userName;
        this.credentials.password = this.userSignInForm.value.password;
        this.authSrvc.authenticate(this.credentials, function () {
            _this.route.navigateByUrl('/');
        });
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SignInComponent.prototype, "closeSignInModal", void 0);
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIGNUP modal start -->\r\n<form #signUpForm=\"ngForm\">\r\n\r\n\t<div class=\"modal\" [ngClass]=\"{'active':activateModal}\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"close\" (click)=\"closeModal()\">&times;</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"fname\">First Name</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"fname\" name=\"firstname\" class=\"form-control\" #firstname=\"ngModel\" [(ngModel)]=\"user.firstName\" required maxlength=\"40\" placeholder=\"Your name..\">\r\n\t\t\t\t\t<div *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div *ngIf=\"firstname.errors?.required\">\r\n\t\t\t\t\t\t\tFirstName is required.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"firstname.errors?.maxlength\">\r\n\t\t\t\t\t\t\tFirstName exceeds 40 characters.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"lname\">Last Name</label>\r\n\t\t\t\t\t<input [(ngModel)]=\"user.lastName\" required maxlength=\"40\" type=\"text\" id=\"lname\" name=\"lastname\" class=\"form-control\" #lastname=\"ngModel\" placeholder=\"Your last name..\">\r\n\t\t\t\t\t<div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div *ngIf=\"lastname.errors?.required\">\r\n\t\t\t\t\t\t\tLastName is required.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"lastname.errors?.maxlength\">\r\n\t\t\t\t\t\t\tLastName exceeds 40 characters.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"companyemail\">Company Email</label>\r\n\t\t\t\t\t<input appValidateEmail required [(ngModel)]=\"user.companyEmail\" type=\"text\" id=\"companyemail\" name=\"companyemail\" class=\"form-control\"\r\n\t\t\t\t\t placeholder=\"vijay.nagarajan4283@gmail.com\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"mobile\">Mobile</label>\r\n\t\t\t\t\t<input [(ngModel)]=\"user.mobile\" type=\"text\" id=\"mobile\" name=\"mobile\" class=\"form-control\" placeholder=\"647-891-4283\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"password\">Password</label>\r\n\t\t\t\t\t<input [(ngModel)]=\"user.password\" type=\"text\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"confirmpassword\">Confirm Password</label>\r\n\t\t\t\t\t<input [(ngModel)]=\"user.confirmPassword\" type=\"text\" id=\"confirmpassword\" name=\"password\" class=\"form-control\"\r\n\t\t\t\t\t placeholder=\"Confirm your password\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<button class=\"button signup-button\" [disabled]=\"!signUpForm.form.valid\" routerLink=\"/register\" (click)=\"onSubmit()\">Sign Up</button>\r\n\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</form>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    // userService: UserService;
    // route: Router;
    function SignUpComponent(userService, loginSrvc, route) {
        this.userService = userService;
        this.loginSrvc = loginSrvc;
        this.route = route;
        this.closeSignUpModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getNewUser();
        this.activateModal = true;
    };
    SignUpComponent.prototype.closeModal = function () {
        this.activateModal = false;
        this.closeSignUpModal.emit(true);
    };
    SignUpComponent.prototype.onSubmit = function () {
        console.log('Printing Signup User ', JSON.stringify(this.user));
        this.userService.addUser(this.user);
        this.loginSrvc.signIn(this.user.companyEmail, this.user.password, false);
        this.closeModal();
        this.route.navigateByUrl('/register/' + this.user.companyEmail);
        // window.open('Registration.html')
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SignUpComponent.prototype, "closeSignUpModal", void 0);
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/test.service.ts":
/*!*********************************!*\
  !*** ./src/app/test.service.ts ***!
  \*********************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ "./src/app/test.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestService = /** @class */ (function () {
    function TestService() {
        this.tests = [
            { name: 'Java8 Online Assessment', category: 'Online Code Assessment', duration: 45, developers: [] },
            { name: 'Javascript ES6 Fundamentals Assessment', category: 'Online Code Assessment', duration: 45, developers: [] },
            { name: 'HTML CSS3 and Javascript', category: 'Online Code Assessment', duration: 45, developers: [] },
            { name: 'AngularJS Assessment', category: 'Online Code Assessment', duration: 45, developers: [] },
            { name: 'Angular Material Assessment', category: 'Online Code Assessment', duration: 45, developers: [] },
            { name: 'React Assessment', category: 'Online Code Assessment', duration: 45, developers: [] },
        ];
    }
    TestService.prototype.getTest = function (testName) {
        return this.tests.length > 0 ? this.tests.filter(function (test) { return test.name.indexOf(testName) > -1; })[0] : null;
    };
    TestService.prototype.getAllTests = function () {
        return this.tests;
    };
    TestService.prototype.getNewTest = function () {
        return new _test__WEBPACK_IMPORTED_MODULE_1__["Test"]();
    };
    TestService.prototype.addTest = function (test) {
        console.log('Test Added', test);
        this.tests.push(test);
    };
    //For Now it allows editing Developers only
    TestService.prototype.addDeveloperToTest = function (developer) {
        var test = this.getTest(developer.testName);
        // let match = test && test.developers ? test.developers.findIndex(dev => dev.firstName == developer.firstName && 
        //                                   dev.lastName == developer.lastName) : null;
        var match = test && test.developers ? test.developers.findIndex(function (dev) { return dev.email == developer.email; }) : null;
        if (match == -1) {
            test.developers.push(developer);
        }
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/test.ts":
/*!*************************!*\
  !*** ./src/app/test.ts ***!
  \*************************/
/*! exports provided: Test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());



/***/ }),

/***/ "./src/app/user-registration/user-registration.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user-registration/user-registration.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-registration/user-registration.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user-registration/user-registration.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- form starts -->\r\n\r\n<div class=\"form-container-wrapper\" (mousedown)=\"hideVerNavbar()\">\r\n  <div class=\"form-container\">\r\n    <form #userRegistrationForm=\"ngForm\">\r\n      <div id=\"section1\" class=\"section\">\r\n        <h2 class=\"section-heading\">Company Information</h2>\r\n        <div class=\"row\">\r\n\r\n          <div class=\"form-group offset-2\">\r\n            <label for=\"fname\">Company Name</label>\r\n            <input type=\"text\" id=\"companyname\" name=\"companyname\" class=\"form-control\" #companyname=\"ngModel\" [(ngModel)]=\"user.companyname\"  required maxlength=\"40\" placeholder=\"Company name..\">\r\n            <div *ngIf=\"companyname.invalid && (companyname.dirty || companyname.touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"companyname.errors?.required\">\r\n                Company is required.\r\n              </div>\r\n              <div *ngIf=\"companyname.errors?.maxlength\">\r\n                Company exceeds 40 characters.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <!-- <div class=\"form-group form-group-offset-2\"> -->\r\n          <div class=\"form-group offset-2\">\r\n            <label for=\"websiteurl\">Website Url</label>\r\n            <input type=\"text\" id=\"websiteurl\" name=\"websiteurl\" class=\"form-control\" #websiteurl=\"ngModel\" [(ngModel)]=\"user.websiteurl\" placeholder=\"wsebsite address..\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label for=\"industry\">Industry</label>\r\n            <select id=\"industry\" name=\"industry\" class=\"form-control\" #industry=\"ngModel\" [(ngModel)]=\"user.industry\">\r\n              <option value=\"IT\">Information Technology</option>\r\n              <option value=\"Accountancy\">Accountancy</option>\r\n              <option value=\"Manufacturing\">Manufacturing</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"button-group-right\">\r\n          <button class=\"button save-button\" (click)=\"scrollBarService.scrollToNextSection(2)\">Next</button>\r\n        </div>\r\n      </div>\r\n      <div id=\"section2\" class=\"section\">\r\n        <h2 class=\"section-heading\">Contact Information</h2>\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label for=\"country\">Country</label>\r\n            <select id=\"country\" name=\"country\" class=\"form-control\" #industry=\"ngModel\" [(ngModel)]=\"user.country\"> \r\n              <option value=\"Canada\">Canada</option>\r\n              <option value=\"US\">United States</option>\r\n            </select>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"companyaddress\">Company Address*</label>\r\n          <input type=\"text\" id=\"companyaddress\" name=\"companyaddress\" class=\"form-control\" #companyaddress=\"ngModel\" [(ngModel)]=\"user.companyaddress\" placeholder=\"93 gatesgill street\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label for=\"city\">City*</label>\r\n            <input type=\"text\" id=\"city\" name=\"city\" class=\"form-control\" #city=\"ngModel\" [(ngModel)]=\"user.city\" placeholder=\"Brampton\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"province\">State/Province*</label>\r\n            <select id=\"province\" name=\"province\" class=\"form-control\">\r\n              <option value=\"ON\">Ontario</option>\r\n              <option value=\"NS\">Nova Scotia</option>\r\n              <option value=\"QC\">Quebec</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"postalzipcode\">PostalCode/ZipCode*</label>\r\n          <input type=\"text\" id=\"postalzipcode\" name=\"postalzipcode\" class=\"form-control\" #postalcode=\"ngModel\" [(ngModel)]=\"user.postalcode\" placeholder=\"L6X 3T1\">\r\n        </div>\r\n        <div class=\"button-group-right\">\r\n          <button class=\"button save-button\" (click)=\"scrollBarService.scrollToNextSection(3)\">Next</button>\r\n        </div>\r\n      </div>\r\n      <div id=\"section3\" class=\"section\">\r\n        <h2 class=\"section-heading\">Choose Your Package</h2>\r\n        <!-- Card starts -->\r\n        <div class=\"card-page\">\r\n\r\n          <div class=\"card package\">\r\n            <div class=\"center_text\">\r\n              <br>\r\n              <h1 class=\"package_info\">Gold Package</h1>\r\n              <p class=\"package_info package_desc\">$100/month</p>\r\n              <p class=\"package_info package_desc\">20 candidates per day</p>\r\n              <p class=\"package_info package_desc detailed_1\">Coding and Objectve type tests</p>\r\n            </div>\r\n            <div class=\"bottom-section\">\r\n              <button class=\"button\" name=\"gold\" (click)=\"selectPackage('gold')\" \r\n                      [ngClass]=\"{ 'selected': user?.package=='gold' }\">Buy Now</button>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card package\">\r\n            <div class=\"center_text\">\r\n              <br>\r\n              <h1 class=\"package_info\">Silver Package</h1>\r\n              <p class=\"package_info package_desc\">$75/month</p>\r\n              <p class=\"package_info package_desc\">15 candidates per day</p>\r\n              <p class=\"package_info package_desc detailed_1\">Coding and Objectve type tests</p>\r\n            </div>\r\n            <div class=\"bottom-section\">\r\n              <button class=\"button\" name=\"silver\" (click)=\"selectPackage('silver')\" \r\n                      [ngClass]=\"{'selected': user?.package=='silver' }\">Buy Now</button>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card package\">\r\n            <div class=\"center_text\">\r\n              <br>\r\n              <h1 class=\"package_info\">Bronze Package</h1>\r\n              <p class=\"package_info package_desc\">$50/month</p>\r\n              <p class=\"package_info package_desc\">10 candidates per day</p>\r\n              <p class=\"package_info package_desc detailed_1\">Coding and Objectve type tests</p>\r\n\r\n            </div>\r\n            <div class=\"bottom-section\">\r\n              <button class=\"button\" name=\"bronze\" (click)=\"selectPackage('bronze')\"\r\n                      [ngClass]=\"{'selected': user?.package=='bronze' }\">Buy Now</button>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- Card Ends -->\r\n      </div>\r\n      <div id=\"section4\" class=\"section\">\r\n        <h2 class=\"section-heading\">Payment Method</h2>\r\n        <!-- <div class=\"row\"> -->\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label for=\"nameoncard\">Name on Card</label>\r\n            <input type=\"text\" id=\"nameoncard\" name=\"nameoncard\" class=\"form-control\" #nameoncard=\"ngModel\" [(ngModel)]=\"user.nameoncard\" placeholder=\"G Raymond\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label for=\"cardnumber\">Card Number</label>\r\n            <input type=\"text\" id=\"cardnumber\" name=\"cardnumber\" class=\"form-control\" #cardnumber=\"ngModel\" [(ngModel)]=\"user.cardnumber\" placeholder=\"3444 4865 4467 4778\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group offset-by-3\">\r\n            <label for=\"validthrough\">Valid Through</label>\r\n            <input type=\"text\" id=\"cardmonthofexpiry\" name=\"cardmonthofexpiry\" class=\"form-control\" #cardmonthofexpiry=\"ngModel\" [(ngModel)]=\"user.cardmonthofexpiry\" placeholder=\"MM\">\r\n          </div>\r\n          <div class=\"form-group offset-by-3\">\r\n            <select id=\"cardyearofexpiry\" name=\"cardyearofexpiry\" ng-control=\"options\" [(ngModel)]=\"user.cardyearofexpiry\" class=\"form-control\">\r\n              <option [value]=\"2018\">2018</option>\r\n              <option [value]=\"2019\">2019</option>\r\n              <option [value]=\"2020\">2020</option>\r\n              <option [value]=\"2021\">2021</option>\r\n              <option [value]=\"2022\">2022</option>\r\n              <option [value]=\"2023\">2023</option>\r\n              <option [value]=\"2024\">2024</option>\r\n              <option [value]=\"2025\">2025</option>\r\n            </select>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"button-group-right\">\r\n          <button class=\"button save-button\" [disabled]=\"!userRegistrationForm.form.valid\" routerLink=\"/viewtests\" (click)=\"onSubmit()\">Next</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n</div>\r\n<!-- </div> -->\r\n\r\n<!-- form Ends -->"

/***/ }),

/***/ "./src/app/user-registration/user-registration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-registration/user-registration.component.ts ***!
  \******************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _scrollbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scrollbar.service */ "./src/app/scrollbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menubar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menubar.service */ "./src/app/menubar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(route, userService, menubarSvc, scrollBarService) {
        this.route = route;
        this.userService = userService;
        this.menubarSvc = menubarSvc;
        this.scrollBarService = scrollBarService;
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // const id = +this.route.snapshot.paramMap.get('id');
        this.route.params.subscribe(function (params) {
            console.log('userreg params', params['userId']);
            _this.user = _this.userService.getUser(params['userId']);
        });
        console.log('UserRegistrationComponent', JSON.stringify(this.user));
    };
    UserRegistrationComponent.prototype.selectPackage = function (testPackage) {
        this.user.package = testPackage;
    };
    UserRegistrationComponent.prototype.onSubmit = function () {
        console.log('Printing Registered User ', JSON.stringify(this.user));
    };
    UserRegistrationComponent.prototype.hideVerNavbar = function () {
        //Set display to false
        this.menubarSvc.hideVerticalNavPanel(false);
    };
    UserRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-registration',
            template: __webpack_require__(/*! ./user-registration.component.html */ "./src/app/user-registration/user-registration.component.html"),
            styles: [__webpack_require__(/*! ./user-registration.component.css */ "./src/app/user-registration/user-registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _menubar_service__WEBPACK_IMPORTED_MODULE_4__["MenubarService"], _scrollbar_service__WEBPACK_IMPORTED_MODULE_2__["ScrollbarService"]])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.getUser = function (userId) {
        console.log('user service', JSON.stringify(this.users));
        return this.users.length > 0 ? this.users.filter(function (user) { return user.companyEmail.indexOf(userId) > -1; })[0] : null;
        // return this.users.length > 0 ? this.users.filter(user => userId == user.companyEmail)[0] : null;
    };
    UserService.prototype.getNewUser = function () {
        return new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    };
    UserService.prototype.addUser = function (user) {
        console.log('User Added', user);
        this.users.push(user);
    };
    UserService.prototype.authenticateUser = function (username, passwd) {
        //Username of the Candidate is nothing but email 
        var user = this.getUser(username);
        return user && user.password == passwd;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/validate-email.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/validate-email.directive.ts ***!
  \*********************************************/
/*! exports provided: ValidateEmailDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateEmailDirective", function() { return ValidateEmailDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _email_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-validator.service */ "./src/app/email-validator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidateEmailDirective = /** @class */ (function () {
    function ValidateEmailDirective(emailValidatorSrvc) {
        this.emailValidatorSrvc = emailValidatorSrvc;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    ValidateEmailDirective_1 = ValidateEmailDirective;
    ValidateEmailDirective.prototype.validate = function (control) {
        console.log('wwe');
        return this.emailRegex ? this.emailValidatorSrvc.emailValidator(new RegExp(this.emailRegex.source, 'i'))(control) : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appValidateEmail'),
        __metadata("design:type", String)
    ], ValidateEmailDirective.prototype, "forbiddenEmail", void 0);
    ValidateEmailDirective = ValidateEmailDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appValidateEmail]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: ValidateEmailDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [_email_validator_service__WEBPACK_IMPORTED_MODULE_2__["EmailValidatorService"]])
    ], ValidateEmailDirective);
    return ValidateEmailDirective;
    var ValidateEmailDirective_1;
}());



/***/ }),

/***/ "./src/app/vertical-navbar/vertical-navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/vertical-navbar/vertical-navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nul.vertical {\r\n    /* top: 6%; */\r\n    /* max-width: 80vw; */\r\n    list-style-type: none;\r\n    margin: 20px 0px;\r\n    padding-top: 1.5vw;\r\n    width: 20%;\r\n    float: left;    \r\n    position: fixed;\r\n    max-height: 80%;\r\n    overflow: auto;    \r\n    height: 100%;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n\r\n/* On screens that are 992px or less, set the background color to blue */\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n    ul.vertical {\r\n        z-index: 9;\r\n        width: 50%;\r\n        padding-top: 10vw;\r\n    }\r\n    ul.vertical li.vertical {\r\n        /* border: 1px solid green; */\r\n        margin-top: 6vw;\r\n        margin-bottom: 6vw;\r\n    }    \r\n\r\n}\r\n\r\n\r\nul.vertical li {\r\n    /* border: 1px solid green; */\r\n    margin: 20px;\r\n    padding: 0;\r\n    border-radius: 5px; \r\n}\r\n\r\n\r\nli.vertical a {\r\n    display: block;\r\n    /* border: 1.25px solid green;  */\r\n    color: green;\r\n    background-color: white;\r\n    text-align: left;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-style: normal;\r\n\tfont-variant: normal;\r\n    font-weight: 700;\r\n    /* border-radius: 5px; */\r\n}\r\n\r\n\r\nli.vertical a:hover {\r\n    background-color: white;\r\n    color: green;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/vertical-navbar/vertical-navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/vertical-navbar/vertical-navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"vertical\" id=\"navigationPanel\" *ngIf=\"varDisplayPanel\">\r\n    <li class=\"vertical\">\r\n        <!-- <a href=\"#manageTests\" id=\"manageTests\">Manage Tests</a> -->\r\n        <a id=\"manageTests\" style=\"cursor: pointer\" (click)=\"navigateTo('viewtests')\">Manage Tests</a>\r\n    </li>\r\n    <li class=\"vertical\">\r\n        <!-- <a href=\"#advancedSearch\" id=\"advancedSearch\">Advanced Search</a> -->\r\n        <a id=\"advancedSearch\">Advanced Search</a>\r\n    </li>\r\n    <li class=\"vertical\">\r\n        <a style=\"cursor: pointer\" id=\"candidateDirectory\" (click)=\"navigateTo('candidatedirectory')\">Candidate\r\n            Directory</a>\r\n    </li>\r\n    <li class=\"vertical\">\r\n        <a style=\"cursor: pointer\" id=\"resultsEvaluation\">Results Evaluation</a>\r\n    </li>\r\n    <li class=\"vertical\">\r\n        <a href=\"#assignTests\" id=\"assignTests\">Assign Tests</a>\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/vertical-navbar/vertical-navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vertical-navbar/vertical-navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: VerticalNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalNavbarComponent", function() { return VerticalNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerticalNavbarComponent = /** @class */ (function () {
    function VerticalNavbarComponent(route, cdr, zone) {
        this.route = route;
        this.cdr = cdr;
        this.zone = zone;
        this.varDisplayPanel = true;
        this.menubarFlag = true;
        this.extras = { skipLocationChange: true };
    }
    VerticalNavbarComponent.prototype.ngOnInit = function () {
    };
    VerticalNavbarComponent.prototype.navigateTo = function (path) {
        var _this = this;
        this.zone.run(function () {
            _this.route.navigate([path], { skipLocationChange: true }).then;
        });
    };
    VerticalNavbarComponent.prototype.toggleDisplayOfNavPanel = function (flag) {
        this.varDisplayPanel = flag;
        this.cdr.detectChanges();
        console.log('VerticalNavbarComponent toggleDisplayOfNavPanel ', this.varDisplayPanel);
    };
    VerticalNavbarComponent.prototype.ngOnDestroy = function () {
    };
    VerticalNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vertical-navbar',
            template: __webpack_require__(/*! ./vertical-navbar.component.html */ "./src/app/vertical-navbar/vertical-navbar.component.html"),
            styles: [__webpack_require__(/*! ./vertical-navbar.component.css */ "./src/app/vertical-navbar/vertical-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], VerticalNavbarComponent);
    return VerticalNavbarComponent;
}());



/***/ }),

/***/ "./src/app/view-test/view-test.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-test/view-test.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-test/view-test.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-test/view-test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"form-container-wrapper\">\r\n  <div class=\"form-container\">\r\n    <div id=\"section_manageTests\" class=\"section\">\r\n      <h2 class=\"section-heading\"> Online Assessment Tests</h2>\r\n      <div id=\"section_searchTests\" class=\"section\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group offset-1\">\r\n            <label for=\"test\">Test Name</label>\r\n            <input type=\"text\" id=\"cdFirstName\" name=\"testName\" class=\"form-control\" placeholder=\"Test Name\">\r\n          </div>\r\n          <div class=\"form-group offset-by-3\">\r\n            <label for=\"test\"> &nbsp; </label>\r\n            <button class=\"button save-button search-button\" routerLink=\"/managequestions\" >Search</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"section_createTest\" class=\"section\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group offset-1\">\r\n            <button class=\"button save-button search-button\" (click)=\"createTest=true\" >Create Test</button>\r\n          </div>\r\n        </div>  \r\n        <app-create-test *ngIf=\"createTest\" (closeCreateTestModal)=\"oncloseModal($event)\"></app-create-test>\r\n\r\n      </div>      \r\n      <div id=\"section_viewTests\" class=\"section\"> \r\n        <!-- Card starts -->\r\n        <!-- <form [formGroup]=\"testForm\" (ngSubmit)=\"onSubmit()\"> -->\r\n            <!-- formArrayName=\"aliases\" -->\r\n          <div  class=\"card-page\">\r\n            <div *ngFor=\"let test of populateTests(); let i=index\">\r\n\r\n              <!-- <div class=\"card-page\"> -->\r\n              <div class=\"card package top-green\">\r\n                <div class=\"center_text\">\r\n                  <br>\r\n                  <h3 class=\"test_info\" (click)=\"openSelectedTest(test)\">{{test.name}}</h3>\r\n                </div>\r\n              </div>\r\n              <!-- Card Ends -->\r\n            </div>\r\n          </div>\r\n        <!-- </form> -->\r\n      </div>\r\n    </div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>  \r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/view-test/view-test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-test/view-test.component.ts ***!
  \**************************************************/
/*! exports provided: ViewTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTestComponent", function() { return ViewTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test.service */ "./src/app/test.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewTestComponent = /** @class */ (function () {
    function ViewTestComponent(fb, testService, route) {
        this.fb = fb;
        this.testService = testService;
        this.route = route;
        this.tests = [];
        this.testForm = this.fb.group({
            aliases: this.fb.array([
                this.fb.control('initial')
            ])
        });
    }
    Object.defineProperty(ViewTestComponent.prototype, "aliases", {
        get: function () {
            return this.testForm.get('aliases');
        },
        enumerable: true,
        configurable: true
    });
    ViewTestComponent.prototype.addAlias = function (name) {
        this.aliases.push(this.fb.control(name));
    };
    ViewTestComponent.prototype.ngOnInit = function () {
        this.populateTests();
    };
    ViewTestComponent.prototype.populateTests = function () {
        return this.testService.getAllTests();
    };
    // populateTest1() {
    //   this.tests =[];
    //   this.tests = this.testService.getAllTests();
    //   this.aliases.removeAt(0);
    //   //Remove initial element
    //   let index = this.aliases.controls.findIndex(e=> e.value == 'initial');
    //   console.log('ViewTestComponent', index,this.tests);
    //   if(index > -1) {
    //     this.aliases.controls.splice(index,1);
    //   }
    //   this.tests.forEach(element => {
    //     this.addAlias(element.name);
    //   });
    // }
    ViewTestComponent.prototype.openSelectedTest = function (selectedTestName) {
        console.log('selectedTestName', selectedTestName);
        this.route.navigate(['/managequestions'], { queryParams: { testName: selectedTestName.name, testCategory: selectedTestName.category } });
    };
    ViewTestComponent.prototype.oncloseModal = function (close) {
        this.createTest = !close;
        this.populateTests();
    };
    ViewTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-test',
            template: __webpack_require__(/*! ./view-test.component.html */ "./src/app/view-test/view-test.component.html"),
            styles: [__webpack_require__(/*! ./view-test.component.css */ "./src/app/view-test/view-test.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewTestComponent);
    return ViewTestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\codebase\onlinetest\ui-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map