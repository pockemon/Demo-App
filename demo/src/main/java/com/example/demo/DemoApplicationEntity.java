package com.example.demo;

import javax.persistence.Entity;

@Entity
public class DemoApplicationEntity {
	
	private String username;
	private String password;
	
	public DemoApplicationEntity() {
		
	}
	
	public DemoApplicationEntity(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "DemoApplicationEntity [username=" + username + ", password=" + password + "]";
	}
	
}
