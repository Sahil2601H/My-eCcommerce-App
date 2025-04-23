package com.ecommerce.Ecommerce_APP.Service.impl;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.Ecommerce_APP.Service.SellerService;
import com.ecommerce.Ecommerce_APP.config.JWT_provider;
import com.ecommerce.Ecommerce_APP.domain.AccountStatus;
import com.ecommerce.Ecommerce_APP.domain.USER_ROLE;
import com.ecommerce.Ecommerce_APP.model.Adress;
import com.ecommerce.Ecommerce_APP.model.Seller;
import com.ecommerce.Ecommerce_APP.model.Verification_Code;
import com.ecommerce.Ecommerce_APP.repository.AddressRepository;
import com.ecommerce.Ecommerce_APP.repository.SellerRepositry;
import com.ecommerce.Ecommerce_APP.repository.VerificationCodeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SellerServiceimpl implements SellerService {

    private final SellerRepositry sellerRepositry;
    private final JWT_provider jwt_provider;
    private final PasswordEncoder passwordEncoder;
    private final AddressRepository addressRepository;
    private final VerificationCodeRepository verificationCodeRepository;

    @Override
    public Seller getSellerProfile(String jwt) {

        String email = jwt_provider.getEmailFromToken(jwt);

        return this.getSellerByEmail(email);
    }

    @Override
    public Seller createSeller(Seller seller) {
        Seller sellerExist = sellerRepositry.findByEmail(seller.getEmail());
        if (sellerExist != null) {
            throw new IllegalArgumentException("Choose another email, this one already exists");
        }
    
        Adress savedAddress = addressRepository.save(seller.getAddress());
        Seller newSeller = new Seller();
        newSeller.setEmail(seller.getEmail());
        newSeller.setPassword(passwordEncoder.encode(seller.getPassword()));
        newSeller.setAddress(savedAddress);
        newSeller.setGSTIN(seller.getGSTIN());
        newSeller.setRole(USER_ROLE.ROLE_SELLER);
        newSeller.setMobile(seller.getMobile());
        newSeller.setBankDetail(seller.getBankDetail());
        newSeller.setBussinessDetail(seller.getBussinessDetail());
        newSeller.setAccountStatus(AccountStatus.PENDING_VERIFICATION); // Initial status
        
        return sellerRepositry.save(newSeller);
    }

    
    @Override
    public Seller getSellerById(Long id) {
        return sellerRepositry.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Seller not found with id: " + id));
    }

    @Override
    public Seller getSellerByEmail(String email) {
        Seller seller = sellerRepositry.findByEmail(email);
        if (seller == null) {
            throw new IllegalArgumentException("Seller Not found");
        }
        return seller;
    }
    

    @Override
    public List<Seller> getAllSellers(AccountStatus status) {
        if (status != null) {
            return sellerRepositry.findByAccountStatus(status);
        } else {
            return sellerRepositry.findAll();
        }
    }

    @Override
    public Seller updatSeller(Long id, Seller seller) {

        Seller exsitSeller = this.getSellerById(id);

        if (seller.getSellerName() != null) {

            exsitSeller.setSellerName(seller.getSellerName());

        }

        if (seller.getSellerName() != null) {

            exsitSeller.setSellerName(seller.getSellerName());
        }

        if (seller.getMobile() != null) {

            exsitSeller.setMobile(seller.getMobile());
        }

        if (seller.getEmail() != null) {

            exsitSeller.setEmail(seller.getEmail());

        }

        if (seller.getBussinessDetail() != null && seller.getBussinessDetail().getBussinessName() != null

        ) {

            exsitSeller.getBussinessDetail().setBussinessName(seller.getBussinessDetail().getBussinessName());

        }

        if (seller.getBankDetail() != null
                && seller.getBankDetail().getAccountHolderName() != null
                && seller.getBankDetail().getIfscCode() != null
                && seller.getBankDetail().getAccountNumber() != null

        ) {

            exsitSeller.getBankDetail().setAccountHolderName(seller.getBankDetail().getAccountHolderName());

            exsitSeller.getBankDetail().setIfscCode(seller.getBankDetail().getIfscCode());

            exsitSeller.getBankDetail().setAccountNumber(seller.getBankDetail().getAccountNumber());

        }
  
        if (exsitSeller.getAddress().getAddress()!=null&&
            exsitSeller.getAddress().getMobile()!=null
            && exsitSeller.getAddress().getCity()!=null
            && exsitSeller.getAddress().getState()!=null
            
        
        
        
        ) {
 

            exsitSeller.getAddress().setAddress(seller.getAddress().getAddress());
            exsitSeller.getAddress().setCity(seller.getAddress().getCity());
            exsitSeller.getAddress().setMobile(seller.getAddress().getMobile());
            exsitSeller.getAddress().setState(seller.getAddress().getState());            
        }




        if (seller.getGSTIN() != null) {

            exsitSeller.setGSTIN(seller.getGSTIN());

        }

        return sellerRepositry.save(exsitSeller);
    }

    @Override
    public void deleteSeller(Long id) {
        Seller seller = getSellerById(id);
        sellerRepositry.delete(seller);
    }

    public Seller verifyEmail(String email, String otp) {
        // Find the verification code
        Verification_Code verificationCode = verificationCodeRepository.findByEmail(email);
        
        if (verificationCode == null) {
            throw new IllegalArgumentException("No verification request found for this email");
        }
        
        if (!verificationCode.getOtp().equals(otp)) {
            throw new IllegalArgumentException("Invalid OTP");
        }
        
        // Find the seller
        Seller seller = sellerRepositry.findByEmail(email);
        if (seller == null) {
            throw new IllegalArgumentException("Seller not found");
        }
        
        // Update account status
        seller.setAccountStatus(AccountStatus.ACTIVE);
        sellerRepositry.save(seller);
        
        // Delete the used OTP
        verificationCodeRepository.delete(verificationCode);
        
        return seller;
    }
    
    @Override
    public Seller updateSellerAccountStatus(Long sellerId, AccountStatus status) {
       
         
        Seller seller = getSellerById(sellerId);
        seller.setAccountStatus(status);
        return sellerRepositry.save(seller);

    }

}
