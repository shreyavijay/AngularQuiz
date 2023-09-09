package com.quiz.onlinetest.controllers;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

import com.quiz.onlinetest.vo.Employee;
import com.quiz.onlinetest.vo.User;
import com.quiz.repository.EmployeeRepository;

@Controller
@RequestMapping("/")
public class LandingController {
    Logger logger = LogManager.getLogger(LandingController.class);
	@Autowired
	private EmployeeRepository userRepository;

	@RequestMapping(value = "/onlinetest/user", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public ResponseEntity<?> get(@RequestParam Map<String, String> allRequestParams,
			@RequestHeader Map<String, String> httpHeaders, HttpServletRequest req) {
		logger.info("Inside Controller");
		User user = new User();
//		user.setName("Vijay");
		user.setEmployerName("Scotiabank");
		user.setEmailAddress("vijay.nagarajan@scotiabank.com");
		user.setRole("Employer");
		List<Employee> employees = userRepository.listUsers();
		return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);

	}

	@RequestMapping("/home")
	@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600, allowedHeaders = { "x-auth-token",
			"x-requested-with", "x-xsrf-token" })
	public RedirectView home() {
		
		return new RedirectView("/", true);
	}

}
