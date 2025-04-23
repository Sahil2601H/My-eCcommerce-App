package com.ecommerce.Ecommerce_APP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.Ecommerce_APP.model.User;

public interface UserRepository  extends JpaRepository<User, Long>{

    User findByEmail(String email);
    
}
