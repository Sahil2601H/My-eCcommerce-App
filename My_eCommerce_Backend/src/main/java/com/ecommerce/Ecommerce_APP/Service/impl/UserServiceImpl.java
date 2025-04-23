package com.ecommerce.Ecommerce_APP.Service.impl;

import org.springframework.stereotype.Service;

import com.ecommerce.Ecommerce_APP.Service.UserService;
import com.ecommerce.Ecommerce_APP.config.JWT_provider;
import com.ecommerce.Ecommerce_APP.model.User;
import com.ecommerce.Ecommerce_APP.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    
    private final UserRepository userRepository;
    private final JWT_provider jwt_provider;

    
    
    
    @Override
    public User findUserByJwtToken(String jwt)  {

        String email = jwt_provider.getEmailFromToken(jwt);

        User user = this.findUserByEmail(email);

        if (user==null) {

            throw new IllegalArgumentException("User Not Found"+email);
        }
        
    
       return user;
    }

    @Override
    public User findUserByEmail(String email) {
       User user = this.userRepository.findByEmail(email);

        
       if (user==null) {
        throw new IllegalArgumentException("user not valid email");
        
       }
        

        return user;
    }

    


    
}
