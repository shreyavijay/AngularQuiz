package com.quiz.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.quiz.auth.CookieAuthenticationFilter;
import com.quiz.auth.UserAuthenticationEntryPoint;
import com.quiz.auth.UsernamePasswordAuthFilter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
//	Logger logger = LoggerFactor.getLogger(LoggingController.class);
	@Autowired
	private UserAuthenticationEntryPoint userAuthenticationEntryPoint;
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .exceptionHandling().authenticationEntryPoint(userAuthenticationEntryPoint)
                .and()
                .addFilterBefore(new UsernamePasswordAuthFilter(), BasicAuthenticationFilter.class)
                .addFilterBefore(new CookieAuthenticationFilter(), UsernamePasswordAuthFilter.class)
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().logout().deleteCookies(CookieAuthenticationFilter.COOKIE_NAME)
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/v1/signIn", "/v1/signUp", "/v1/user/createTest").permitAll()
                .antMatchers(HttpMethod.POST, "/v1/user/createTest", "/v1/signOut").authenticated()
//                .antMatchers(HttpMethod.GET, "/v1/user/alltests").authenticated()
                .antMatchers(HttpMethod.GET,"/home","/index.html","/","/*.js","/*.js.map","/*.ico", "/v2/testforuser*").permitAll()
                .anyRequest().authenticated();
    }
}
