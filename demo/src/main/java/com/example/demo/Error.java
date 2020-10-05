package com.example.demo;

import javax.persistence.Entity;

@Entity
public class Error {

    private String message = " ";

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
