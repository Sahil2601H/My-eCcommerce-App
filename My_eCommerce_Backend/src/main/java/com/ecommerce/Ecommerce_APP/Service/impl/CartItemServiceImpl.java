package com.ecommerce.Ecommerce_APP.Service.impl;

import org.springframework.stereotype.Service;

import com.ecommerce.Ecommerce_APP.Service.CartItemService;
import com.ecommerce.Ecommerce_APP.model.CartItem;
import com.ecommerce.Ecommerce_APP.model.User;
import com.ecommerce.Ecommerce_APP.repository.CartItemRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    @Override
    public CartItem upCartItem(Long userId, Long id, CartItem cartItem) {


        CartItem item=fiCartItemById(id);

        User cartItemUser=item.getCart().getUser();
       
        if (cartItemUser.getId().equals(userId)) {

            item.setQuantity(item.getQuantity()+cartItem.getQuantity());
            item.setMrpPrice(item.getQuantity()*item.getProduct().getMrpPrice());
            item.setSellingPrice(item.getQuantity()*item.getProduct().getSellingPrice());

            return cartItemRepository.save(item);
        
        }

         throw new IllegalArgumentException("You Can't Update This Cart");
        
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) {
        
        CartItem item = fiCartItemById(cartItemId);

        User cartItemUser = item.getCart().getUser();
        if (cartItemUser.getId().equals(userId)) {

            cartItemRepository.delete(item);
        }
        else throw new IllegalArgumentException("you CantFind Item");

    }

    @Override
    public CartItem fiCartItemById(Long id) {


        return cartItemRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("cart Item not found"));
       
    }


    
    
}
