package com.ecommerce.Ecommerce_APP.Service;

import java.util.List;

import com.ecommerce.Ecommerce_APP.domain.AccountStatus;
import com.ecommerce.Ecommerce_APP.model.Seller;

public interface SellerService {

    Seller getSellerProfile(String jwt);
    Seller createSeller(Seller seller);
    Seller getSellerById(Long id);
    Seller getSellerByEmail(String email);

    List<Seller>getAllSellers(AccountStatus status);
    Seller updatSeller(Long id,Seller seller);
    void deleteSeller(Long id);
    Seller verifyEmail(String email,String otp);

    Seller updateSellerAccountStatus(Long sellerId,AccountStatus status);
    
}
