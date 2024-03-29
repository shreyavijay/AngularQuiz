package com.quiz.auth;

import java.io.IOException;
import java.util.Optional;
import java.util.stream.Stream;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;
import org.springframework.web.filter.OncePerRequestFilter;

import com.quiz.onlinetest.controllers.OnlineTestController;



public class CookieAuthenticationFilter extends OncePerRequestFilter {
    Logger logger = LogManager.getLogger(CookieAuthenticationFilter.class);
	public static final String COOKIE_NAME = "auth_by_cookie";
	 
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		Optional<Cookie> cookieAuth = Stream.of(Optional.ofNullable(request.getCookies()).orElse(new Cookie[0]))
				.filter(cookie -> COOKIE_NAME.equals(cookie.getName())).findFirst();

		if (cookieAuth.isPresent()) {
		    logger.info("CookieAuthenticationFilter: " + cookieAuth.get().getValue());
			SecurityContextHolder.getContext()
					.setAuthentication(new PreAuthenticatedAuthenticationToken(cookieAuth.get().getValue(), null));
		}
		filterChain.doFilter(request, response);
	}

}
