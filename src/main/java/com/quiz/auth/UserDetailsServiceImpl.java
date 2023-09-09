//	package com.quiz.auth;
//
//import java.util.Collections;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.util.CollectionUtils;
//
//import com.quiz.onlinetest.vo.User;
//import com.quiz.repository.UserRepository;
//
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService{
//
//	@Autowired
//	private UserRepository userRepository;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		List<User> users = userRepository.getUserByEmail(username);
//		User user = null;
//		if(!CollectionUtils.isEmpty(users)) {
//			user = users.get(0);
//		}
//		
//		// TODO Auto-generated method stub
//		return new MyUserDetails(user);
//	}
//
//}
