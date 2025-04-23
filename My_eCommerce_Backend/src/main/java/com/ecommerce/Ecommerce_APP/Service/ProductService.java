package com.ecommerce.Ecommerce_APP.Service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.ecommerce.Ecommerce_APP.model.Product;
import com.ecommerce.Ecommerce_APP.model.Seller;
import com.ecommerce.Ecommerce_APP.request.CreateProductRequest;

public interface ProductService {
    
    public Product createProuct(CreateProductRequest req,Seller seller);
    public void deleteProduct(Long productId);
    public Product updateProduct(Long peoductId,Product product);
    Product findProductById(Long productId);
    List<Product>searchProduct(String query);
    public Page<Product>getAllProducts(

          String category,
          String brand,
          String color,
          String sizes,
          Integer minPrice,
          Integer maxPrice,
          Integer minDiscount,
          String sort,
          String stock,
          Integer pageNumber
    );

   List<Product>getProductBySellerId(Long sellerId);
   
}
