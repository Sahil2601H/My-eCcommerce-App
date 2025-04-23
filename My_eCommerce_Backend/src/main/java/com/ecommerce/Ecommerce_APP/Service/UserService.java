package com.ecommerce.Ecommerce_APP.Service;

import com.ecommerce.Ecommerce_APP.model.User;

public interface UserService {
    
    User findUserByJwtToken(String jwt);
    User findUserByEmail(String email);


}
