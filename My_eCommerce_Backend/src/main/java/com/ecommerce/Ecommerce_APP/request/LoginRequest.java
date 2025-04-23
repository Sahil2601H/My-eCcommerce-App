package com.ecommerce.Ecommerce_APP.request;

import lombok.Data;

@Data
public class LoginRequest {
    
    private String email;
    private String otp;
}
