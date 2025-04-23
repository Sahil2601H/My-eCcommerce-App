package com.ecommerce.Ecommerce_APP.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Ecommerce_APP.Service.CartItemService;
import com.ecommerce.Ecommerce_APP.Service.CartService;
import com.ecommerce.Ecommerce_APP.Service.ProductService;
import com.ecommerce.Ecommerce_APP.Service.UserService;
import com.ecommerce.Ecommerce_APP.model.Cart;
import com.ecommerce.Ecommerce_APP.model.CartItem;
import com.ecommerce.Ecommerce_APP.model.Product;
import com.ecommerce.Ecommerce_APP.model.User;
import com.ecommerce.Ecommerce_APP.request.AddItemRequest;
import com.ecommerce.Ecommerce_APP.responce.Apiresponce;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cart")
public class CartController {


private final CartService cartService;
private final CartItemService cartItemService;
private final UserService userService;
private final ProductService productService;

@GetMapping
public ResponseEntity<Cart> findUserCartHandler(@RequestHeader("Authorization")String jwt ) {
    
    User user=userService.findUserByJwtToken(jwt);

    Cart cart=cartService.findUserCart(user);


    return new ResponseEntity<Cart>(cart,HttpStatus.OK);
}

@PutMapping("/add")
    public ResponseEntity<CartItem> addItemToCart(
            @RequestBody AddItemRequest req,
            @RequestHeader("Authorization") String jwt) {

        User user = userService.findUserByJwtToken(jwt);
        Product product = productService.findProductById(req.getProductId());

        CartItem item = cartService.addCartItem(user, product, req.getSize(), req.getQuantity());

        // Optionally use this if you want to return a message along with item
         Apiresponce res = new Apiresponce();
         res.setMessage("Item Added to Cart Successfully");
        return new ResponseEntity<>(item, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/item/{cartItemId}")
    public ResponseEntity<Apiresponce> deleteCartItemHandler(
        @PathVariable Long cartItemId,
        @RequestHeader("Authorization") String jwt) {
        
        User user = userService.findUserByJwtToken(jwt);
        cartItemService.removeCartItem(user.getId(), cartItemId);
    
        Apiresponce response = new Apiresponce();
        response.setMessage("Item removed");
    
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    




    
}
