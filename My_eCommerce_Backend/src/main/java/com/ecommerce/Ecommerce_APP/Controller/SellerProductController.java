package com.ecommerce.Ecommerce_APP.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Ecommerce_APP.Service.ProductService;
import com.ecommerce.Ecommerce_APP.Service.SellerService;
import com.ecommerce.Ecommerce_APP.model.Product;
import com.ecommerce.Ecommerce_APP.model.Seller;
import com.ecommerce.Ecommerce_APP.request.CreateProductRequest;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sellers/products")
public class SellerProductController {

    private final ProductService productService;
    private final SellerService sellerService;

    @GetMapping
    public ResponseEntity<List<Product>>getProductbySellerId(@RequestHeader("Authorization") String jwt) {

        Seller seller = sellerService.getSellerProfile(jwt);
        List<Product>products= productService.getProductBySellerId(seller.getId());
        return new ResponseEntity<>(products,HttpStatus.OK);
        
        
       
    }

    @PostMapping
    public ResponseEntity<Product> createproduct(@RequestBody CreateProductRequest request, @RequestHeader("Authorization")String jwt) {
        
        Seller seller = sellerService.getSellerProfile(jwt);
        Product product = productService.createProuct(request, seller);


       
        return  new ResponseEntity<>(product,HttpStatus.OK);
    }
    
   
    
}
