package com.quiz.onlinetest.vo;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User implements Serializable{
	private static final long serialVersionUID = 1L;
	private String firstName;
	private String lastName;
	private String password;
	private String enabled;
	private Long userId;
	private String emailAddress;
	private String employerName;
	private String role;
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getName() {
		return new StringBuilder(this.getFirstName()).append(" ").append(this.getLastName()).toString();
	}
	
	public String getEnabled() {
		return enabled;
	}

	public void setEnabled(String enabled) {
		this.enabled = enabled;
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
	
	public String getEmployerName() {
		return employerName;
	}
	
	public void setEmployerName(String employerName) {
		this.employerName = employerName;
	}
	
	public String getRole() {
		return role;
	}
	
	public void setRole(String role) {
		this.role = role;
	}
	
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public static User getMockUser1() {
    	User user = new User();
    	user.setEmailAddress("vijay.nagarajan4283@gmail.com");
    	user.setEmployerName("Shreyavs Technologies INC");
    	user.setEnabled("1");
//    	user.setName("Vijay Nagarajan");
    	user.setPassword("");
    	user.setRole("Developer");
    	user.setUserId(1L);
    	return user;
	}

}
