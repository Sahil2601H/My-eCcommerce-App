package com.ecommerce.Ecommerce_APP.Service;

import com.ecommerce.Ecommerce_APP.model.Cart;
import com.ecommerce.Ecommerce_APP.model.CartItem;
import com.ecommerce.Ecommerce_APP.model.Product;
import com.ecommerce.Ecommerce_APP.model.User;

public interface CartService {

    public CartItem addCartItem(

      User user,
      Product product,
      String size,
      int quantity
    );
    public Cart findUserCart(User user);
}
