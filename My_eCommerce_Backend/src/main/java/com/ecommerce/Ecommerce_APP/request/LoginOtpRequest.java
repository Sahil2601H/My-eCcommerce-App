package com.ecommerce.Ecommerce_APP.request;

import com.ecommerce.Ecommerce_APP.domain.USER_ROLE;

import lombok.Data;

@Data
public class LoginOtpRequest {
    
   private String email;
   private String otp;
   private USER_ROLE role;
}
