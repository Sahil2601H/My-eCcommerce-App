package com.ecommerce.Ecommerce_APP.Service.impl;

import org.springframework.stereotype.Service;

import com.ecommerce.Ecommerce_APP.Service.CartService;
import com.ecommerce.Ecommerce_APP.model.Cart;
import com.ecommerce.Ecommerce_APP.model.CartItem;
import com.ecommerce.Ecommerce_APP.model.Product;
import com.ecommerce.Ecommerce_APP.model.User;
import com.ecommerce.Ecommerce_APP.repository.CartItemRepository;
import com.ecommerce.Ecommerce_APP.repository.CartRepository;
import com.ecommerce.Ecommerce_APP.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService{

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final CartItemRepository cartItemRepository;


    @Override
    public CartItem addCartItem(User user, Product product, String size, int quantity) {
        
        Cart cart=findUserCart(user);
        CartItem isPresent=cartItemRepository.findByCartAndProductAndSize(cart, product, quantity);

        if (isPresent == null) {

            CartItem cartItem=new CartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
            cartItem.setUserId(user.getId());
            cartItem.setSize(size);

            int totalPrice=quantity*product.getSellingPrice();
            cartItem.setSellingPrice(totalPrice);

            cart.getCartItems().add(cartItem);
            cartItem.setCart(cart);
                
            return cartItemRepository.save(cartItem);

            
        }

        return isPresent;
    }
    @Override
    public Cart findUserCart(User user) {
       
        Cart cart = cartRepository.findByUserId(user.getId());

        int totalPrice=0;
        int totalDiscountedPrice=0;
        int totalItem=0;

        for(CartItem cartItem:cart.getCartItems())
        {
            totalPrice+=cartItem.getMrpPrice();
            totalDiscountedPrice+=cartItem.getSellingPrice();
            totalItem+=cartItem.getQuantity();
        }

        cart.setTotalmrpPrice(totalPrice);
        
        cart.setTotalSellingPrice(totalDiscountedPrice);
        cart.setDiscount(calculateDiscountPercentage( totalPrice, totalDiscountedPrice));
        cart.setTotalItems(totalItem);



        throw new UnsupportedOperationException("Unimplemented method 'findUserCart'");
    }
    private int calculateDiscountPercentage(int totalPrice, int totalDiscountedPrice) {
        
        throw new UnsupportedOperationException("Unimplemented method 'calculateDiscountPercentage'");
    }



    
}
