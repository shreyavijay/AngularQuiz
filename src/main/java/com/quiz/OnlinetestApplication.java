package com.quiz;

import java.util.Arrays;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

import com.quiz.repository.TestRepository;

@SpringBootApplication
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class, SecurityAutoConfiguration.class })
@EnableConfigurationProperties
@ComponentScan(basePackages = "com.quiz.*")
@Controller
public class OnlinetestApplication {
    Logger logger = LogManager.getLogger(OnlinetestApplication.class);	
	public static void main(String[] args) {
		SpringApplication.run(OnlinetestApplication.class, args);
	}


	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {

			logger.info("--0=");

			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for (String beanName : beanNames) {
				logger.info(beanName);
			}

		};
	}	
  
  @Bean
  HeaderHttpSessionStrategy sessionStrategy() {
    return new HeaderHttpSessionStrategy();
  }
  

  
  @GetMapping(value = "/{path:[^\\.]*}")
  public String redirect() {
      return "forward:/";
  }
		
//  @RequestMapping("/")
//  @CrossOrigin(origins = "http://localhost:8080", maxAge = 3600,
//      allowedHeaders={"x-auth-token", "x-requested-with", "x-xsrf-token"})
//  public RedirectView home() {
//	  logger.info("Hello World");
//	  return new RedirectView("index.html",true);
//	}
  
  
  //start
//  @Configuration
//  @EnableWebSecurity
//  @EnableAutoConfiguration
//  protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//	  
//	  @Autowired
//	private UserDetailsService userDetailsService;
//
//	@Autowired  
//	private DataSource dataSource; 
//	
//    @Autowired
//    private QuizBasicAuthenticationEntrypoint authenticationEntryPoint;	
//		
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
////        .httpBasic()
////        .authenticationEntryPoint(authenticationEntryPoint)
////      .and()	
//      	.cors()
//      .and()	
//        .authorizeRequests()
//          .antMatchers("/index.html", "/", "/home", "/login","/user","/land","/token").permitAll()
//          .antMatchers("/*.css","/*.js","/*.jsp","/app/**").permitAll()
//          .anyRequest().authenticated()
//          .and().csrf().disable()
////          .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
//          ;    	
//
//    }
//    
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/user").allowedOrigins("http://localhost:8081");
//			}
//		};
//	}
//    
//////    @Override
////    public void configureGlobal(AuthenticationManagerBuilder builder) throws Exception {
//////      builder.jdbcAuthentication().dataSource(dataSource).withUser("dave")
//////        .password("secret").roles("USER");
////    	logger.info("configureGlobal");
////    	builder.jdbcAuthentication()
////        .dataSource(dataSource)
////        .usersByUsernameQuery("select email,password,enabled "
////          + "from USER_CREDENTIALS "
////          + "where 	email = ?")
////        .authoritiesByUsernameQuery("select email,authority "
////          + "from authorities "
////          + "where email = ?");
////    }
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//     
//    @Bean
//    public DaoAuthenticationProvider authenticationProvider() {
//        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//        authProvider.setUserDetailsService(userDetailsService);
//        authProvider.setPasswordEncoder(passwordEncoder());
//         
//        return authProvider;
//    }
// 
//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//    	auth.eraseCredentials(false);
//        auth.authenticationProvider(authenticationProvider());
//       
//    }
// 	
//	
//  }  
  //end
}
