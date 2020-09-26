package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.HomeEntity;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.Homeservice;

@RestController
@CrossOrigin
public class DemoApplicationController {

	@Autowired
	private Homeservice homeservice;
	
	@RequestMapping("/users/login")
    public ResponseEntity<Boolean> getLogin(@RequestBody DemoApplicationEntity Dae) throws Exception{
		boolean isValid = false;
		if(Dae.getUsername().toString().equals("admin") && Dae.getPassword().toString().equals("admin"))
		{
			   isValid = true;
		}
		return new ResponseEntity<Boolean>(isValid, HttpStatus.OK);
    }


	@GetMapping("/users/home")
	public List<HomeEntity> getHome(){
		return homeservice.findAll();
	}
}
