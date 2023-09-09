package com.quiz.onlinetest.vo;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserCredentials implements Serializable{
	private static final long serialVersionUID = 1L;
	private String password;
	private String emailAddress;
	
	public UserCredentials() {
		super();
	}

    public UserCredentials(String emailAddress, String password) {
        this.emailAddress = emailAddress;
        this.password = password;
    }
    
	@JsonProperty("passwd")
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailAddress() {
		return emailAddress;
	}
	
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	
}
