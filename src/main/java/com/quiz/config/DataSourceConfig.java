package com.quiz.config;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.quiz.auth.UserAuthenticationProvider;

//import oracle.jdbc.datasource.OracleDataSource;

@Configuration
@EnableTransactionManagement
public class DataSourceConfig {
    Logger logger = LogManager.getLogger(DataSourceConfig.class);
    
	@Value("${spring.datasource.username}")
	private String dbUserName;
	
	
	@Bean(name="quizDataSource")
	public DataSource dataSource() {
		BasicDataSource dataSource = new BasicDataSource();
		dataSource.setUsername("system");
		dataSource.setPassword("shreya16");
		dataSource.setUrl("jdbc:oracle:thin:@//DESKTOP-M3FGOH5:1521/XEPDB1");
		dataSource.setMinIdle(10);
		dataSource.setMaxIdle(10);
		dataSource.setInitialSize(20);
		dataSource.setMaxActive(20);
		dataSource.setDriverClassName("oracle.jdbc.OracleDriver");
		return dataSource;
	}
	
	@Bean(name="quizJdbcTemplate")
	public JdbcTemplate getJdbcTemplate() {
	    logger.info("In quizJdbcTemplate");
		return new JdbcTemplate(dataSource());
	}
	

}
