package com.quiz.repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.quiz.onlinetest.controllers.OnlineTestController;
//import com.quiz.onlinetest.vo.Employee;
import com.quiz.onlinetest.vo.User;
import com.quiz.onlinetest.vo.UserCredentials;

@Repository
public class UserRepository {
	
	@Autowired
	private JdbcTemplate quizJdbcTemplate;
	
	final String INSERT_QUERY_USER = "insert into USERS (EMAIL, NAME, USER_ID, ENABLED, ROLE) values (?,?,?,?,?)";
	final String INSERT_QUERY_USER_CREDENTIALS = "insert into USER_CREDENTIALS (EMAIL, PASSWORD, LOCKED) values (?,?,?)";
	final String GET_NEXT_USER_ID = "select SYSTEM.USER_SEQ.nextval from dual";
	Logger logger = LogManager.getLogger(UserRepository.class);

	private Long getNewUserId() {
		return quizJdbcTemplate.query(GET_NEXT_USER_ID, (rs,i) -> {
			// TODO Auto-generated method stubEMAIL
			return rs.getLong(1);			
		}).get(0);
	}
	
	public int saveUser(User user) {
		this.saveUserCredentials(user);
		return quizJdbcTemplate.update(INSERT_QUERY_USER, user.getEmailAddress(), user.getName(), this.getNewUserId(), "Y", "EMPLOYER");
	}
	
	private int saveUserCredentials(User user) {
		return quizJdbcTemplate.update(INSERT_QUERY_USER_CREDENTIALS, user.getEmailAddress(), user.getPassword(), "N");
	}
	
	
	
	public User authenticate(UserCredentials userCredentials) {
		String query = "SELECT US.* FROM USERS US JOIN USER_CREDENTIALS UC ON US.EMAIL=UC.EMAIL WHERE UC.EMAIL=? AND UC.PASSWORD=?";
		User user = quizJdbcTemplate.queryForObject(query, new RowMapper<User>() {

			@Override
			public User mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
				User user = new User();
				user.setEmailAddress(rs.getString("EMAIL"));
				user.setFirstName(rs.getString("NAME"));
				user.setUserId(rs.getLong("USER_ID"));
				user.setEnabled(rs.getString("ENABLED"));
				user.setRole(rs.getString("ROLE"));
//				User user = new UserCredentials(rs.getString("EMAIL"), rs.getString("PASSWORD"));
				return user;
			}
			
		},new Object[] {userCredentials.getEmailAddress(),userCredentials.getPassword()});
		return user;
	}
	
	//Token contains UserId & emailAddress(Login). UserId to be replaced with randomId
	public User findUserByToken(Long userId, String login) {
		String query = "SELECT * FROM USERS WHERE EMAIL=? AND USER_ID=?";
		User user = quizJdbcTemplate.queryForObject(query, new RowMapper<User>() {

			@Override
			public User mapRow(ResultSet rs, int rowNum) throws SQLException {
				return getUserFromResultSet(rs);
			}
			
		},new Object[] {login,userId});
		logger.info("UserRepository::findUserByToken " + user.getEmailAddress());
		return user;
	}	
	
	private static User getUserFromResultSet(ResultSet rs) throws SQLException {
		User user = new User();
		user.setEmailAddress(rs.getString("EMAIL"));
		user.setFirstName(rs.getString("NAME"));
		user.setUserId(rs.getLong("USER_ID"));
		user.setEnabled(rs.getString("ENABLED"));
		user.setRole(rs.getString("ROLE"));
		return user;
	}
	
}
