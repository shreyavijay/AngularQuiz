package com.quiz.onlinetest.vo;

import java.util.List;

public class Answer {
    private long questionId;
    private long testId;
    private List<Integer> selectedOptions;
    
    public long getQuestionId() {
        return questionId;
    }
    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
    public long getTestId() {
        return testId;
    }
    public void setTestId(long testId) {
        this.testId = testId;
    }
    public List<Integer> getSelectedOptions() {
        return selectedOptions;
    }
    public void setSelectedOptions(List<Integer> selectedOptions) {
        this.selectedOptions = selectedOptions;
    }
    
}
