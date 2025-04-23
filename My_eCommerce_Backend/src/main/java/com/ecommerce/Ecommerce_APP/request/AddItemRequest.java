package com.ecommerce.Ecommerce_APP.request;

import lombok.Data;

@Data
public class AddItemRequest {
    
    private String Size;
    private int quantity;
    private Long ProductId;
}
