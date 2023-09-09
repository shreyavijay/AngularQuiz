package com.quiz.onlinetest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.quiz.onlinetest.vo.Question;
import com.quiz.onlinetest.vo.Test;
import com.quiz.repository.TestRepository;


@Service
public class TestService {
	
	@Autowired
	private TestRepository testRepository;

	public List<Test> getAllTestsForUser(String userEmail) {
		return testRepository.getAllTestsForUser(userEmail);
	}
	
    public List<Question> getAllQuestionsForATest(Long testId) {
        List<Question> questions = testRepository.getAllQuestionsForATest(testId);
        questions.forEach(question ->           
            question.setOptions(testRepository.getAllOptionsForAQuestion(question.getQuestionId()))
        );
        return questions;
    }
    
	public int createTest(Test newTest) {
		return testRepository.saveTest(newTest);
	}
	
	@Transactional
	public int createQuestion(Question question) {
	    return testRepository.saveQuestion(question);
	}
	
	@Transactional
	public int deleteQuestion(Long testId, Long questionId) {
	    return testRepository.deleteQuestion(testId, questionId);
	}
	
	
}
