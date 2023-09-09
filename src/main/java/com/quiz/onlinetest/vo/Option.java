package com.quiz.onlinetest.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Option {
    private long questionId;
    private long optionId;
    private String option;
    private boolean selected;
    private String enabled;
    private String createdBy;
    private int displayOrder;
    
    public long getOptionId() {
        return optionId;
    }
    public void setOptionId(long optionId) {
        this.optionId = optionId;
    }
    

    public long getQuestionId() {
        return questionId;
    }
    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
    
    @JsonProperty("name")
    public String getOption() {
        return option;
    }
    public void setOption(String option) {
        this.option = option;
    }
    public boolean isSelected() {
        return selected;
    }
    public void setSelected(boolean selected) {
        this.selected = selected;
    }
    public String getEnabled() {
        return enabled;
    }
    public void setEnabled(String enabled) {
        this.enabled = enabled;
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
    
}
