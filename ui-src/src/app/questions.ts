import { Answer } from "./answer";
import { Developer } from "./developer";
import { Option } from "./option";

export class Question {
    testName: string;
    testId: number;
    question: string;
    questionType: string;
    // answers: string[];
    choice: string[];
    options: Option[];
    optionsToBeRemoved: Option[];
    answer: number[];
    response: Answer
    questionId: string;

    constructor(testName: string,questionDescription: string,answers: string[],id: string ){
        this.testName = testName;
        this.question = questionDescription;
        // this.answers = [];
        // this.choice = [];
        this.options = [];
        this.questionId = id;
    }

    // mobile: string;
    // password: string;
    // confirmPassword: string;
    // companyname: string;
    // websiteurl: string;
    // industry: string;
    // country: string;
    // companyaddress: string;
    // city: string;
    // postalcode: string;
    // nameoncard: string;
    // cardnumber: string;
    // cardmonthofexpiry: string;
    // cardyearofexpiry: string;

}
