package com.ecommerce.Ecommerce_APP.Service;

import com.ecommerce.Ecommerce_APP.domain.USER_ROLE;
import com.ecommerce.Ecommerce_APP.request.LoginRequest;
import com.ecommerce.Ecommerce_APP.responce.AuthResponce;
import com.ecommerce.Ecommerce_APP.responce.SignupRequest;

public interface AuthService {


    void sentLoginOtp(String email,USER_ROLE role);
    String createUser(SignupRequest req);
    AuthResponce Signin(LoginRequest req);

    
}
