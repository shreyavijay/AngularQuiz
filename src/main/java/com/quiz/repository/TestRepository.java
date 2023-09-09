package com.quiz.repository;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.quiz.onlinetest.vo.Option;
import com.quiz.onlinetest.vo.Question;
import com.quiz.onlinetest.vo.Test;

@Repository
public class TestRepository {
    final String retrieveAllTestsQuery = "select * from tests where created_by=?";
    final String retrieveAllQuestionsForATestQuery = "select * from QUESTIONS_TESTS where TEST_ID=?";
    final String retrieveAllOptionsForAQuestion = "select * from OPTIONS_QUESTIONS where QUESTION_ID=?";
    final String INSERT_TEST = "insert into TESTS (TEST_ID, NAME, CATEGORY, ENABLED, DURATION,CREATED_BY) values (?,?,?,?,?,?)";
    final String INSERT_QUESTION = "Insert into QUESTIONS_TESTS (QUESTION_ID,TEST_ID,QUESTION,ENABLED,CREATED_BY,DISPLAY_ORDER,QUESTION_TYPE) values (?,?,?,?,?,?,?)";
    final String UPDATE_QUESTION = "Update QUESTIONS_TESTS set QUESTION=? where QUESTION_ID=?";
    final String DELETE_QUESTION = "Delete from QUESTIONS_TESTS where TEST_ID=? AND QUESTION_ID=?";
    final String DELETE_ALLOPTIONS_QUESTION = "Delete from OPTIONS_QUESTIONS where QUESTION_ID=?";
    final String INSERT_OPTION = "Insert into OPTIONS_QUESTIONS (OPTION_ID,QUESTION_ID,OPTION_DESC,ENABLED,DISPLAY_ORDER,CREATED_BY,ANSWER) values (?,?,?,?,?,?,?)";
    final String UPDATE_OPTION = "Update OPTIONS_QUESTIONS set OPTION_DESC=?,ANSWER=? where OPTION_ID=?";
    final String DELETE_OPTION = "Delete from OPTIONS_QUESTIONS where OPTION_ID=?";
    final String GET_NEXT_TEST_ID = "select SYSTEM.TEST_SEQ.nextval from dual";
    final String GET_NEXT_QUESTION_ID = "select SYSTEM.QUESTION_SEQ.nextval from dual";
    final String GET_NEXT_OPTION_ID = "select SYSTEM.OPTION_SEQ.nextval from dual";

    Logger logger = LogManager.getLogger(TestRepository.class);

    @Autowired
    private JdbcTemplate quizJdbcTemplate;

    public List<Test> getAllTestsForUser(String userEmail) {
        logger.info("Print Email getAllTestsForUser " + userEmail);
        List<Test> tests = quizJdbcTemplate.query(retrieveAllTestsQuery,

                (rs, rowNum) -> {
                    Test test = new Test();
                    test.setTestId(rs.getLong("TEST_ID"));
                    test.setName(rs.getString("NAME"));
                    test.setCategory(rs.getString("CATEGORY"));
//					test.set(rs.getString("ENABLED"));
                    test.setDuration(rs.getLong("DURATION"));
                    test.setCreatedBy(rs.getString("CREATED_BY"));
                    return test;
                },
                new Object[] { userEmail });
        return tests;
    }

    public List<Question> getAllQuestionsForATest(Long testId) {
        logger.info("Print testId getAllQuestionsForATest" + testId);
        List<Question> questions = quizJdbcTemplate.query(retrieveAllQuestionsForATestQuery,
                (rs, rowNum) -> {
                    Question question = new Question();
                    question.setQuestionId(rs.getLong("QUESTION_ID"));
                    question.setTestId(rs.getLong("TEST_ID"));
                    question.setQuestion(rs.getString("QUESTION"));
                    question.setEnbled(rs.getString("ENABLED"));
                    question.setCreatedBy(rs.getString("CREATED_BY"));
                    question.setDisplayOrder(rs.getInt("DISPLAY_ORDER"));
                    question.setQuestionType(rs.getString("QUESTION_TYPE"));
                    return question;
                },
                new Object[] { testId });
        return questions;
    }

    public List<Option> getAllOptionsForAQuestion(Long questionId) {
        logger.info("Print questionId getAllOptionsForAQuestion" + questionId);
        List<Option> options = quizJdbcTemplate.query(retrieveAllOptionsForAQuestion,

                (rs, rowNum) -> {
                    Option option = new Option();
                    option.setOptionId(rs.getLong("OPTION_ID"));
                    option.setQuestionId(rs.getLong("QUESTION_ID"));
                    option.setOption(rs.getString("OPTION_DESC"));
                    option.setEnabled(rs.getString("ENABLED"));
                    option.setDisplayOrder(rs.getInt("DISPLAY_ORDER"));
                    option.setCreatedBy(rs.getString("CREATED_BY"));
                    option.setSelected(("Y".equals(rs.getString("ANSWER"))));
                    return option;
                },
                new Object[] { questionId });
        return options;
    }
    
    public int deleteQuestion(Long testId, Long questionId) {
        logger.info("Print deleteQuestion" + questionId);
        quizJdbcTemplate.update(DELETE_ALLOPTIONS_QUESTION, questionId);
        return quizJdbcTemplate.update(DELETE_QUESTION, testId, questionId);
    }
    
    

    public int saveTest(Test newTest) {
        return quizJdbcTemplate.update(INSERT_TEST, this.getNewTestId(), newTest.getName(), newTest.getCategory(), "Y",
                newTest.getDuration(), newTest.getCreatedBy());
    }

    private Long getNewTestId() {
        return quizJdbcTemplate.query(GET_NEXT_TEST_ID, (rs, i) -> {
            // TODO Auto-generated method stubEMAIL
            return rs.getLong(1);
        }).get(0);
    }

    public int saveQuestion(Question question) {
        logger.info("saveQuestion : " + question.getQuestionId());
        if(question.getQuestionId() > 0) {
            logger.info("saveQuestion " + question.getQuestionId());
            quizJdbcTemplate.update(UPDATE_QUESTION, question.getQuestion(), question.getQuestionId()); 
        } else {
            question.setQuestionId(this.getNewQuestionId());
            quizJdbcTemplate.update(INSERT_QUESTION, question.getQuestionId(), question.getTestId(),
                    question.getQuestion(), "Y", question.getCreatedBy(), question.getDisplayOrder(),
                    question.getQuestionType());
        }

        question.getOptions().forEach(option -> {
            if (option.getOptionId() > 0) {
                //Ideal practice Do an update and then save
                this.updateOption(option);
            } else {
                option.setCreatedBy(question.getCreatedBy());
                option.setQuestionId(question.getQuestionId());
                this.saveOption(option);
            }
        });
        
        //Delete the options removed by user
        if(question.getOptionsToBeRemoved() != null && !question.getOptionsToBeRemoved().isEmpty()) {
            question.getOptionsToBeRemoved().forEach(option -> this.deleteOption(option));
        }
        return 1;
    }

    private int saveOption(Option option) {
        return quizJdbcTemplate.update(INSERT_OPTION, this.getNewOptionId(), option.getQuestionId(),
                option.getOption(), "Y", option.getDisplayOrder(),
                option.getCreatedBy(), option.isSelected() ? "Y" : "N");
    }

    private int updateOption(Option option) {
        return quizJdbcTemplate.update(UPDATE_OPTION, option.getOption(), option.isSelected() ? "Y" : "N", option.getOptionId());
    }

    private int deleteOption(Option option) {
        return quizJdbcTemplate.update(DELETE_OPTION, option.getOptionId());
    }

    private Long getNewQuestionId() {
        return quizJdbcTemplate.query(GET_NEXT_QUESTION_ID, (rs, i) -> {
            // TODO Auto-generated method stubEMAIL
            return rs.getLong(1);
        }).get(0);
    }

    private Long getNewOptionId() {
        return quizJdbcTemplate.query(GET_NEXT_OPTION_ID, (rs, i) -> {
            // TODO Auto-generated method stubEMAIL
            return rs.getLong(1);
        }).get(0);
    }

   
}
