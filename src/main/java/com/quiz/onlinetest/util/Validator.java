package com.quiz.onlinetest.util;

import org.apache.logging.log4j.LogManager;
import com.quiz.onlinetest.vo.Question;
import com.quiz.onlinetest.vo.Test;
import com.quiz.onlinetest.vo.User;

public class Validator {
//    static Logger logger = LogManager.getLogger(Validator.class);
    public static void validateUser(User user) throws Exception {
        if (user == null || (user != null && user.getEmailAddress() == null)) {
            LogManager.getLogger(Validator.class).error("User Not Found. Invalid session");
            throw new Exception("User Not Found. Invalid session");
        }
    }

    public static void validateTest(User user, Test test) throws Exception {
        validateUser(user);
        if (test == null || (test != null && !user.getEmailAddress().equals(test.getCreatedBy()))) {
            LogManager.getLogger(Validator.class).error("Invalid Test");
            throw new Exception("Invalid Test ");

        }
    }

    public static void validateQuestion(User user, Question question) throws Exception {
        validateUser(user);
        if (question == null) {
            LogManager.getLogger(Validator.class).error("Invalid Question");
            throw new Exception("Invalid Question");

        }
    }
}
