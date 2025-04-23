package com.ecommerce.Ecommerce_APP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.Ecommerce_APP.model.Cart;
import com.ecommerce.Ecommerce_APP.model.Category;
import com.ecommerce.Ecommerce_APP.model.User;

import java.util.List;


public interface CartRepository extends JpaRepository<Cart, Long>{
    

   Category findCategoryById(Long categoryId);
   Cart findByUserId(Long id);
    

}
