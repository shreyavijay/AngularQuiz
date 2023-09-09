package com.quiz.onlinetest.controllers;

import java.net.URI;
import java.util.Collections;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.auth.CookieAuthenticationFilter;
import com.quiz.auth.UserAuthenticationProvider;
import com.quiz.onlinetest.service.AuthenticationService;
import com.quiz.onlinetest.vo.User;
import com.quiz.onlinetest.vo.UserCredentials;


@RestController
@RequestMapping("/v1")
public class AuthController {
    Logger logger = LogManager.getLogger(AuthController.class);
	@Autowired
	private AuthenticationService authService;
	
	@PostMapping("/signIn")
	@ResponseBody
	public User user(@AuthenticationPrincipal User user, HttpServletResponse servletResponse) {
		Cookie authCookie = new Cookie(CookieAuthenticationFilter.COOKIE_NAME, authService.createToken(user));
        authCookie.setHttpOnly(true);
        authCookie.setSecure(true);
        authCookie.setMaxAge(900);
        authCookie.setPath("/");
		servletResponse.addCookie(authCookie);
		return user;
	}

	@RequestMapping("/token")
	public Map<String, String> token(HttpSession session) {
		return Collections.singletonMap("token", session.getId());
	}
	
	@PostMapping("/signUp")
	@ResponseBody
	// Validation needs to be implemented
	public User signUp(@RequestBody @Validated User user) {
		logger.info("signUp test");
		authService.signUp(user);
		return user;
	}

	private void printCookies(Cookie[] cookies) {
		for (int i = 0; i < cookies.length; i++) {
			logger.info("Print Cookie " + cookies[i]);
		}
		logger.info("");
	}
	
    @PostMapping("/signOut")
	public ResponseEntity<Void> signOut(@AuthenticationPrincipal User user,HttpServletRequest request) {
		SecurityContextHolder.clearContext();
		printCookies(request.getCookies());
		Optional<Cookie> authCookie = Stream.of(Optional.ofNullable(request.getCookies()).orElse(new Cookie[0]))
				.filter(cookie -> CookieAuthenticationFilter.COOKIE_NAME.equals(cookie.getName())).findFirst();
		authCookie.ifPresent(cookie -> {
			cookie.setValue("");
			cookie.setMaxAge(0);
			cookie.setPath("/");
		});

		return ResponseEntity.noContent().build();
	}
}
