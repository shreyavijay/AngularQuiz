package com.quiz.auth;

import java.util.Collection;
import java.util.Collections;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import com.quiz.onlinetest.controllers.OnlineTestController;
import com.quiz.onlinetest.service.AuthenticationService;
import com.quiz.onlinetest.vo.User;
import com.quiz.onlinetest.vo.UserCredentials;

@Component
public class UserAuthenticationProvider implements AuthenticationProvider  {
    Logger logger = LogManager.getLogger(UserAuthenticationProvider.class);
	@Autowired
	private AuthenticationService authenticationService;
	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		User user = null;
		if(authentication instanceof UsernamePasswordAuthenticationToken) {	
			 // authentication by username and password
			user = authenticationService.authenticate(new UserCredentials((String)authentication.getPrincipal(),(String)authentication.getCredentials()));
		} else if(authentication instanceof PreAuthenticatedAuthenticationToken) {
			// authentication by Cookie
			logger.info("UserAuthenticationProvider::authenticate::PreAuthenticatedAuthenticationToken");
			user = authenticationService.findByToken((String)authentication.getPrincipal());
			
	        if (user == null) {
	            logger.info("UserAuthenticationProvider::authenticate::PreAuthenticatedAuthenticationToken" + user);
	            return null;
	        }
		}

		
		return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
		
	}

	@Override
	public boolean supports(Class<?> authentication) {
		// TODO Auto-generated method stub
		logger.info("Print Supports " + UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
		return true;
	}

}
