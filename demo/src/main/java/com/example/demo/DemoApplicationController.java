package com.example.demo;

import com.example.demo.HomeEntity;
import com.example.demo.Homeservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

//	@GetMapping("/")
//	public String loginForm(Model model) {
//		model.addAttribute("demoApplicationEntity", new DemoApplicationEntity());
//		model.addAttribute("error", new Error());
//		return "greeting";
//	}
//
//	@RequestMapping("/login")
//	public String getLogin(@ModelAttribute DemoApplicationEntity demoApplicationEntity, Model model){
//
//		boolean isValid = false;
//		if(demoApplicationEntity.getUsername().toString().equals("admin") && demoApplicationEntity.getPassword().toString().equals("admin"))
//		{
//			   isValid = true;
//		}
//
//		System.out.println(isValid);
//		if(isValid) {
//			System.out.println("Banking page");
//			List<HomeEntity> banks = homeservice.findAll();
//			model.addAttribute("banks", banks);
//			return "banks";
//		}
//		else {
//
//			Error error1 = new Error();
//			error1.setMessage("Please enter correct username or password");
//
//			model.addAttribute("error", error1);
//			return "greeting";
//
//			//System.out.println("Banking page");
//			//model.addAttribute("demoApplicationEntity", demoApplicationEntity);
//			//return "result";
//		}
//	}


//	@GetMapping("/banks")
//	public String getHome(Model model){
//		List<HomeEntity> banks = homeservice.findAll();
//		model.addAttribute("banks", banks);
//		return "banks";
//	}

}
