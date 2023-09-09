package com.quiz.onlinetest.controllers;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.onlinetest.service.TestService;
import com.quiz.onlinetest.vo.Test;
import com.quiz.repository.TestRepository;
import com.quiz.repository.UserRepository;
//Dummy Class..Can be removed.
@RestController
@RequestMapping("/v2")
public class TestController_Remove {
    Logger logger = LogManager.getLogger(TestController_Remove.class);
	@Autowired
	TestService testSrvc;
	
	@Autowired
	TestRepository testRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@RequestMapping(value = "/testforuser", method = RequestMethod.GET,  produces =  "application/json")
	@ResponseBody
	public List<Test> getAllTestsForAUser(
			@RequestParam Map<String, String> allRequestParams,
			@RequestHeader Map<String, String> httpHeaders,
			HttpServletRequest req) throws Exception {
		logger.info("Inside Controller");
		return testSrvc.getAllTestsForUser("vijay.nagarajan4283@gmail.com");
	}

	@RequestMapping(value = "/testforuser1", method = RequestMethod.POST,  consumes = "application/json", produces =  "application/json")
	@ResponseBody
	public int saveObject(@RequestBody Test test) {
//		testSrvc.
		return testSrvc.createTest(test);
	}
}
