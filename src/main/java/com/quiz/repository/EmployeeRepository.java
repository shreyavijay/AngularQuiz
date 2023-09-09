package com.quiz.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.quiz.onlinetest.vo.Employee;
import com.quiz.onlinetest.vo.User;

@Repository
public class EmployeeRepository {
	@Autowired
	private JdbcTemplate quizJdbcTemplate;
	
	
	public List<Employee> listUsers() {
		String query = "select * from EMPLOYEES";
		return quizJdbcTemplate.query(query, (rs, i)  -> {
				// TODO Auto-generated method stub
			      Employee user = new Employee();
			      user.setEmployeeId(rs.getString("EMPLOYEE_ID"));
			      user.setFirstName(rs.getString("FIRST_NAME"));
			      user.setLastName(rs.getString("LAST_NAME"));
			      user.setSalary(rs.getLong("SALARY"));
		
				return user;
			
		});
		
	}

}
