package com.ecommerce.Ecommerce_APP.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.Ecommerce_APP.domain.AccountStatus;
import com.ecommerce.Ecommerce_APP.model.Seller;

public interface SellerRepositry extends JpaRepository<Seller, Long> {



    Seller findByEmail(String email);
    List<Seller>findByAccountStatus(AccountStatus status);
}
