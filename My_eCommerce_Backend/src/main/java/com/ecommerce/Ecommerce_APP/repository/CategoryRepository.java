package com.ecommerce.Ecommerce_APP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.Ecommerce_APP.model.Category;



public interface CategoryRepository extends JpaRepository<Category,Long> {

    Category findByCategoryId(String categoryId);



    
}
