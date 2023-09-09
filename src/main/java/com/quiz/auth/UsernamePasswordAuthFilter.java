package com.quiz.auth;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.quiz.onlinetest.vo.UserCredentials;

public class UsernamePasswordAuthFilter extends OncePerRequestFilter{
	private static final ObjectMapper MAPPER = new ObjectMapper();
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		// TODO Auto-generated method stub
        if (Constants.SIGNIN_URL.equals(request.getServletPath())
                && HttpMethod.POST.matches(request.getMethod())) {
            UserCredentials userCredentials = MAPPER.readValue(request.getInputStream(), UserCredentials.class);

            SecurityContextHolder.getContext().setAuthentication(
                    new UsernamePasswordAuthenticationToken(userCredentials.getEmailAddress(), userCredentials.getPassword()));
        }

        filterChain.doFilter(request, response);
	}

}
