package com.ecommerce.Ecommerce_APP.Service;

import com.ecommerce.Ecommerce_APP.model.CartItem;

public interface CartItemService {
    
    CartItem upCartItem(Long userId,Long id,CartItem cartItem);
    void removeCartItem(Long userId,Long cartItemId);
    CartItem fiCartItemById(Long id);
    
}
