package com.ecommerce.Ecommerce_APP.responce;

import com.ecommerce.Ecommerce_APP.domain.USER_ROLE;

import lombok.Data;

@Data
public class AuthResponce {

    private String jwt;
    private String message;
    private USER_ROLE role;

    
}

