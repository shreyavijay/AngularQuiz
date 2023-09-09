package com.quiz.onlinetest.vo;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Question {
    private long questionId;
    private long testId;
    private String question;
    private List<Option> options;
    private List<Option> optionsToBeRemoved;
    private boolean singleChoice;
    private String enbled;
    private String createdBy;
    private int displayOrder;
    private String questionType;
    
//    @JsonProperty("id")
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
    
//    @JsonProperty("questionDescription")
    public String getQuestion() {
        return question;
    }
    public void setQuestion(String question) {
        this.question = question;
    }
    
    public List<Option> getOptions() {
        return options == null ? new ArrayList<Option>() : options;
    }
    public void setOptions(List<Option> options) {
        this.options = options;
    }
    public String getEnbled() {
        return enbled;
    }
    public void setEnbled(String enbled) {
        this.enbled = enbled;
    }
    public String getCreatedBy() {
        return createdBy;
    }
    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }
    public int getDisplayOrder() {
        return displayOrder;
    }
    public void setDisplayOrder(int displayOrder) {
        this.displayOrder = displayOrder;
    }
    public String getQuestionType() {
        return questionType;
    }
    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }
    public boolean isSingleChoice() {
        return singleChoice;
    }
    public void setSingleChoice(boolean singleChoice) {
        this.singleChoice = singleChoice;
    }
    public List<Option> getOptionsToBeRemoved() {
        return optionsToBeRemoved == null ? new ArrayList<Option>() : optionsToBeRemoved;
    }
    public void setOptionsToBeRemoved(List<Option> optionsToBeRemoved) {
        this.optionsToBeRemoved = optionsToBeRemoved;
    }
    
}
