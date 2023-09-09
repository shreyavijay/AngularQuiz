package com.quiz.onlinetest.service;


import java.util.Optional;
import javax.transaction.Transactional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.quiz.onlinetest.controllers.TestController_Remove;
import com.quiz.onlinetest.vo.User;
import com.quiz.onlinetest.vo.UserCredentials;
import com.quiz.repository.UserRepository;

@Service
public class AuthenticationService {
    Logger logger = LogManager.getLogger(AuthenticationService.class);
	@Autowired
	private UserRepository userRepository;

    public User authenticate(UserCredentials credentialsDto) {
//        String encodedMasterPassword = passwordEncoder.encode(CharBuffer.wrap("the-password"));
    	User user = userRepository.authenticate(credentialsDto);
    	
    	if(!(Optional.ofNullable(user).isPresent() && Optional.ofNullable(user.getEmailAddress()).isPresent())) {
    		throw new RuntimeException("Invalid Username/password");
    	}
    	
    	return user;    	
        
    } 

    public User findByLogin(Long userId, String login) {
        logger.info("");
        return userRepository.findUserByToken(userId, login);

    }

    public String createToken(User user) {
        return user.getUserId() + "&" + user.getEmailAddress();
//    	UUID uuid = UUID.randomUUID();
//        return uuid.toString() + "&" +  userCredentials.getEmailAddress();
    }

	public User findByToken(String token) {
	    logger.info("findByToken " + token);
		User user = null;
		if(StringUtils.hasText(token)) {
			String[] parts = token.split("&");
			if(parts != null && parts.length > 0) {
				try {
					Long userId = Long.valueOf(parts[0]);
					String emailAddress = parts[1];	
					logger.info("AuthenticationService::findByToken " + userId + ":" +  emailAddress);
					user = findByLogin(userId, emailAddress);
				}catch (Exception e) {
				    logger.info("AuthenticationService::findByToken :Error Message " + e.getMessage()); 
					throw new RuntimeException("Invalid Cookie value" + e.getMessage());
				}
			}
		}
		return user;
	}
    
    @Transactional
    public void signUp(User user) {
    	userRepository.saveUser(user);
    }
    
}
