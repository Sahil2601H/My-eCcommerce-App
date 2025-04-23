package com.ecommerce.Ecommerce_APP.Service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.ecommerce.Ecommerce_APP.Service.ProductService;
import com.ecommerce.Ecommerce_APP.model.Category;
import com.ecommerce.Ecommerce_APP.model.Product;
import com.ecommerce.Ecommerce_APP.model.Seller;
import com.ecommerce.Ecommerce_APP.repository.CategoryRepository;
import com.ecommerce.Ecommerce_APP.repository.ProductRepository;
import com.ecommerce.Ecommerce_APP.request.CreateProductRequest;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.domain.Page;







@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService


{
    private final ProductRepository productRepository;
     private final CategoryRepository categoryRepository;

    @Override
    public Product createProuct(CreateProductRequest req, Seller seller) {
     
        Category category1 = categoryRepository.findByCategoryId(req.getCategory());

       if (category1==null) {

        Category category = new Category();
        category.setCategoryId(req.getCategory());
        category.setLevel(1);
        category1=categoryRepository.save(category);
        

        
       }
        Category category2=categoryRepository.findByCategoryId(req.getCategory2());

        if (category2==null) {
            Category category = new Category();
            category.setCategoryId(req.getCategory2());
            category.setLevel(2);
            category.setPerentCategory(category1);
            category2=categoryRepository.save(category);

            
        }

        Category category3=categoryRepository.findByCategoryId(req.getCategory3());

        if (category3==null) {
            Category category = new Category();
            category.setCategoryId(req.getCategory3());
            category.setLevel(3);
            category.setPerentCategory(category2);
            category3=categoryRepository.save(category);
            
        }

      int discountpercentage = calculatediscountPercentage(req.getMrpPrice(),req.getSellerPrice());
      


      Product product = new Product();
      product.setSeller(seller);
      product.setCategory(category3);
      product.setDescription(req.getDescription());
      product.setCreatedAt(LocalDateTime.now());
      product.setTitle(req.getTitle());
      product.setColor(req.getColor());
      product.setMrpPrice(req.getMrpPrice());
      product.setSellingPrice(req.getSellerPrice());
      product.setImages(req.getImages());

      product.setSizes(req.getSizes());
      

      

     product.setDiscountPercent(discountpercentage);
    

       return productRepository.save(product);
    }

    private int calculatediscountPercentage(int mrpPrice, int sellerPrice) {
        
        if (mrpPrice<=0) {

            throw new IllegalArgumentException("Actual price must greter than zero");

            
        }

        double discount=mrpPrice-sellerPrice;
        double discountpercentage=(discount/mrpPrice)*100;

        return  (int)discountpercentage;
    }

    @Override
    public void deleteProduct(Long productId) {
        Product product = findProductById(productId);
        productRepository.delete(product);
       
    }

    @Override
    public Product updateProduct(Long peoductId, Product product) {
        return productRepository.findById(peoductId).orElseThrow(()->
        new IllegalArgumentException("product not found")
        );
    }

    @Override
    public Product findProductById(Long productId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findProductById'");
    }

    @Override
    public List<Product> searchProduct(String query) {
        return productRepository.searchProduct(query);
    }

    @Override
    public Page<Product> getAllProducts(String category, String brand, String color, String sizes, Integer minPrice,
                                        Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber) {

        Specification<Product> spec = (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (category != null) {
                Join<Product, Category> categoryJoin = root.join("category");
                predicates.add(criteriaBuilder.equal(categoryJoin.get("categoryId"), category));
            }

            if (brand != null) {
                predicates.add(criteriaBuilder.equal(root.get("brand"), brand));
            }

            if (color != null) {
                predicates.add(criteriaBuilder.equal(root.get("color"), color));
            }

            if (sizes != null) {
                predicates.add(criteriaBuilder.equal(root.get("size"), sizes));
            }

            if (minPrice != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), minPrice));
            }

            if (maxPrice != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), maxPrice));
            }

            if (minDiscount != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("discount"), minDiscount));
            }

            if (stock != null) {
                if (stock.equalsIgnoreCase("in_stock")) {
                    predicates.add(criteriaBuilder.greaterThan(root.get("stock"), 0));
                } else if (stock.equalsIgnoreCase("out_of_stock")) {
                    predicates.add(criteriaBuilder.equal(root.get("stock"), 0));
                }
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };

        // Default to page 0 if null
        int currentPage = (pageNumber != null) ? pageNumber : 0;

        // Sorting logic
        Sort sortObj = Sort.by("id").descending(); // Default sort

        if (sort != null) {
            switch (sort) {
                case "price_low":
                    sortObj = Sort.by("price").ascending();
                    break;
                case "price_high":
                    sortObj = Sort.by("price").descending();
                    break;
                case "discount":
                    sortObj = Sort.by("discount").descending();
                    break;
                default:
                    sortObj = Sort.by("sellingPrice").ascending(); // Fallback sort
                    break;
            }
        }

        Pageable pageable = PageRequest.of(currentPage, 10, sortObj);

        return productRepository.findAll(spec, pageable);
    }
    @Override
    public List<Product> getProductBySellerId(Long sellerId) {
        
       return productRepository.findBysellerId(sellerId);

    }

}
