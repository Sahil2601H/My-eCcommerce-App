package com.ecommerce.Ecommerce_APP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.Ecommerce_APP.model.Adress;

public interface AddressRepository extends JpaRepository<Adress,Long> {
    
}
