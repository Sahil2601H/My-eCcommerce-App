package com.ecommerce.Ecommerce_APP.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Ecommerce_APP.Service.UserService;
import com.ecommerce.Ecommerce_APP.model.User;
import com.ecommerce.Ecommerce_APP.responce.AuthResponce;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
   
    @GetMapping("/user/profile")
    public ResponseEntity<User> createUserHandler(@RequestHeader("Authorization") String jwt)throws Exception 
    {
  
          
        User user = userService.findUserByJwtToken(jwt);

        
        return ResponseEntity.ok(user);
    }

}
