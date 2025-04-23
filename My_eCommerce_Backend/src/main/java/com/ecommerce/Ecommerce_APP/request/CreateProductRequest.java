package com.ecommerce.Ecommerce_APP.request;

import java.util.List;

import lombok.Data;

@Data
public class CreateProductRequest {
    private String title;
    private String description;
    private String color;
    private int mrpPrice;
    private int sellerPrice;
    private List<String>images;
    private String category;
    private String category2;
    private String category3;
    private String sizes;

    

    
}
