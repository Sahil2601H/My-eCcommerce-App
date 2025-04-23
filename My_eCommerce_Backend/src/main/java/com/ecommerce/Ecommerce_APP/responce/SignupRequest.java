package com.ecommerce.Ecommerce_APP.responce;

import lombok.Data;

@Data
public class SignupRequest {
    
    private String email;
    private String otp;
    private String fullName;
}
