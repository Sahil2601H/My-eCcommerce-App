package com.ecommerce.Ecommerce_APP.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecommerce.Ecommerce_APP.model.Verification_Code;
import java.util.List;




public interface VerificationCodeRepository extends JpaRepository<Verification_Code,Long> {


   


    Verification_Code findByEmail(String email);
    Verification_Code findByOtp(String otp);
    
}
