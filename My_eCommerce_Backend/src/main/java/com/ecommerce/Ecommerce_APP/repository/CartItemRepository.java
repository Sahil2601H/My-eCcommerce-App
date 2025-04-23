package com.ecommerce.Ecommerce_APP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.Ecommerce_APP.model.Cart;
import com.ecommerce.Ecommerce_APP.model.CartItem;
import com.ecommerce.Ecommerce_APP.model.Product;

public interface CartItemRepository extends JpaRepository<CartItem,Long>{


    CartItem findByCartAndProductAndSize(Cart cart,Product product,int size);
    
}
