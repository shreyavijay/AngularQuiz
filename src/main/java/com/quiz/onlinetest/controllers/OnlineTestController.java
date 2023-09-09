package com.quiz.onlinetest.controllers;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.PathParam;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.onlinetest.service.TestService;
import com.quiz.onlinetest.util.Validator;
import com.quiz.onlinetest.vo.Question;
import com.quiz.onlinetest.vo.Test;
import com.quiz.onlinetest.vo.User;

@RestController
@RequestMapping("/v1")
public class OnlineTestController {
    Logger logger = LogManager.getLogger(OnlineTestController.class);

    @Autowired
    private TestService testSrvc;

    @RequestMapping(value = "/user/alltests", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<Test> getAllTestsForAUser(
            @RequestParam Map<String, String> allRequestParams,
            @RequestHeader Map<String, String> httpHeaders,
            @AuthenticationPrincipal User user,
            HttpServletRequest req) throws Exception {
        logger.info("Started getAllTestsForAUser");
        Validator.validateUser(user);
//		if(user == null) {
//			throw new Exception("User Not Found. Invalid session");
//		}
        return testSrvc.getAllTestsForUser(user.getEmailAddress());
    }

    @RequestMapping(value = "/user/allQuetionsInTest/{testId}", produces = "application/json")
    @ResponseBody
    public List<Question> getAllQuestionsForATest(
            @PathVariable Long testId,
            @RequestHeader Map<String, String> httpHeaders,
            @AuthenticationPrincipal User user) throws Exception {
        logger.info("allQuetionsInTest" + testId);
        Validator.validateUser(user);
//        if(user == null) {
//            throw new Exception("User Not Found. Invalid session");
//        }
        return testSrvc.getAllQuestionsForATest(testId);
    }

    @PostMapping(value = "/user/createTest", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public int createTest(
            @RequestHeader Map<String, String> httpHeaders,
            @RequestBody Test test,
            @AuthenticationPrincipal User user) throws Exception {
        logger.info("createTest");
        Validator.validateUser(user);
        Validator.validateTest(user, test);
//		if(user == null || (user != null && test != null && user.getEmailAddress() != null && !user.getEmailAddress().equals(test.getCreatedBy()))) {
//			throw new Exception("User Not Found. Invalid session");
//		}
        return testSrvc.createTest(test);
    }

    @PostMapping(value = "/user/createQuestion", consumes = "application/json", produces = "application/json")
    @ResponseBody
    public int createQuestion(
            @RequestHeader Map<String, String> httpHeaders,
            @RequestBody Question question,
            @AuthenticationPrincipal User user) throws Exception {
        logger.info("Inside createQuestion");
        Validator.validateUser(user);
        Validator.validateQuestion(user, question);
        
//        if (user == null || (user != null && question != null && user.getEmailAddress() != null
//                && !user.getEmailAddress().equals(test.getCreatedBy()))) {
//            throw new Exception("User Not Found. Invalid session");
//        }
        question.setCreatedBy(user.getEmailAddress());
        return testSrvc.createQuestion(question);
    }
    
    @DeleteMapping(value = "/user/deleteQuestion/{testId}/{questionId}", produces = "application/json")
    @ResponseBody
    public int deleteQuestion(
            @PathVariable Long testId,
            @PathVariable Long questionId,
            @RequestHeader Map<String, String> httpHeaders,
            @AuthenticationPrincipal User user) throws Exception {
        logger.info("Inside DeleteQuestion");
        Validator.validateUser(user);
        return testSrvc.deleteQuestion(testId, questionId);
    }

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value = "name", required = false, defaultValue = "world") String name) {
        return "Hello World";
    }

}
