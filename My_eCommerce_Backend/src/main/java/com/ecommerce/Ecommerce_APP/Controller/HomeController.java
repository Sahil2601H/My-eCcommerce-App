package com.ecommerce.Ecommerce_APP.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Ecommerce_APP.responce.Apiresponce;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class HomeController {
 
    @GetMapping
    public Apiresponce HomeControllerHandler(){

        Apiresponce apiresponce = new Apiresponce();
        apiresponce.setMessage("Welcome My Application ");
        return apiresponce;
    }  
    
}
