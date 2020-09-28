package com.example.demo;

import javax.persistence.Entity;

@Entity
public class AuthenticationBean {

    private String message;

    public AuthenticationBean(){

    }

    public AuthenticationBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
