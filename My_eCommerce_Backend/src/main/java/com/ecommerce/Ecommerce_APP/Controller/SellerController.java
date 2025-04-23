package com.ecommerce.Ecommerce_APP.Controller;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Ecommerce_APP.Service.AuthService;
import com.ecommerce.Ecommerce_APP.Service.EmailService;
import com.ecommerce.Ecommerce_APP.Service.SellerService;
import com.ecommerce.Ecommerce_APP.config.JWT_provider;
import com.ecommerce.Ecommerce_APP.domain.AccountStatus;
import com.ecommerce.Ecommerce_APP.model.Seller;

import com.ecommerce.Ecommerce_APP.model.Verification_Code;
import com.ecommerce.Ecommerce_APP.repository.VerificationCodeRepository;
import com.ecommerce.Ecommerce_APP.request.LoginRequest;
import com.ecommerce.Ecommerce_APP.responce.Apiresponce;
import com.ecommerce.Ecommerce_APP.responce.AuthResponce;
import com.ecommerce.Ecommerce_APP.utils.OtpUtil;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sellers")
public class SellerController {

    private final SellerService sellerService;

    private final AuthService authService;

    private final VerificationCodeRepository verificationCodeRepository;

    private final EmailService emailService;

    private final JWT_provider jwt_provider;

    @PostMapping("/login")
public ResponseEntity<AuthResponce> sellerLogin(@RequestBody LoginRequest req) {
    String email = req.getEmail();
    String otp = req.getOtp();

    // Remove "seller_" prefix if present
    if (email.startsWith("seller_")) {
        email = email.substring("seller_".length());
    }

    // Verify OTP
    Verification_Code verificationCode = verificationCodeRepository.findByEmail(email);
    if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
        throw new IllegalArgumentException("Invalid OTP");
    }

    // Verify seller account is active
    Seller seller = sellerService.getSellerByEmail(email);
    if (seller.getAccountStatus() != AccountStatus.ACTIVE) {
        throw new IllegalArgumentException("Seller account is not active. Please verify your email first.");
    }

    // Add prefix for authentication
    req.setEmail("seller_" + email);
    AuthResponce authResponce = authService.Signin(req);
    return ResponseEntity.ok(authResponce);
}

//----------------------------------

    // @PostMapping("/login")
    // public ResponseEntity<AuthResponce> sellerLogin(@RequestBody LoginRequest req) {

    //     String otp = req.getOtp();
    //     String email = req.getEmail();

    //     Verification_Code verification_Code = verificationCodeRepository.findByEmail(email);
    //     if (verification_Code == null || !verification_Code.getOtp().equals(req.getOtp())) {

    //         throw new IllegalArgumentException("Wrong Otp");

    //     }

    //     req.setEmail("seller_" + email);

    //     AuthResponce authResponce = authService.Signin(req);

    //     return ResponseEntity.ok(authResponce);

    // }

    // @PostMapping("/sent/login-signup-otp")
    // public ResponseEntity<Apiresponce> sentOtpHandler(@RequestBody
    // Verification_Code req) {

    // authService.sentLoginOtp(req.getEmail());
    // Apiresponce res = new Apiresponce();

    // res.setMessage("Otp Sent SuccesFully");

    // return ResponseEntity.ok(res);

    // }

    //----------------------------------------------

    @PatchMapping("/verify/{otp}")
public ResponseEntity<Seller> verifySellerEmail(
    @RequestParam String email,
    @PathVariable String otp
) {
    Seller seller = sellerService.verifyEmail(email, otp);
    return ResponseEntity.ok(seller);
}

    // @PostMapping
    // public ResponseEntity<Seller> createSeller(@RequestBody Seller seller) throws MessagingException {

    //     Seller savedSeller = sellerService.createSeller(seller);

    //     String otp = OtpUtil.genrateotp();
    //     Verification_Code newCode = new Verification_Code();
    //     newCode.setEmail(seller.getEmail());
    //     newCode.setOtp(otp);
    //     verificationCodeRepository.save(newCode);

    //     String subject = "🚀 Welcome to My eCommerce Platform – Become a Seller Today!";

    //     String text = "Dear Seller,\n\n" +
    //             "Thank you for choosing **My eCommerce** to grow your business! We're excited to have you onboard as a seller on our platform.\n\n"
    //             +
    //             "To complete your registration and start listing your products, please verify your email address by clicking the link below:\n\n";

    //     String frontend_url = "http://localhost:3000/verify?otp="; // Append your generated OTP dynamically here

    //     String footer = "\n\nIf you did not register to become a seller on My eCommerce, you can safely ignore this email.\n\n"
    //             +
    //             "Best Regards,\n" +
    //             "The My eCommerce Team";

    //     String emailBody = text + frontend_url + otp + footer;

    //     emailService.sendVerificationOtpEmail(seller.getEmail(), newCode.getOtp(), subject, emailBody);

    //     return new ResponseEntity<>(savedSeller, HttpStatus.CREATED);
    // }


@PostMapping
public ResponseEntity<Seller> createSeller(@RequestBody Seller seller) throws MessagingException {
    Seller savedSeller = sellerService.createSeller(seller);

    String otp = OtpUtil.genrateotp();
    Verification_Code newCode = new Verification_Code();
    newCode.setEmail(seller.getEmail());
    newCode.setOtp(otp);
    verificationCodeRepository.save(newCode);

    String subject = "Verify Your Seller Account";
    String text = "Dear Seller,\n\n" +
            "Thank you for registering! Please verify your email using this OTP: " + otp + 
            "\n\nAfter verification, your account will be activated.";
    
    emailService.sendVerificationOtpEmail(seller.getEmail(), otp, subject, text);

    return new ResponseEntity<>(savedSeller, HttpStatus.CREATED);
}



    @GetMapping("/{id}")
    public ResponseEntity<Seller> getSellerById(@PathVariable Long id) {

        Seller seller = sellerService.getSellerById(id);

        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @GetMapping("/profile")
    public ResponseEntity<Seller> getSellerByjwt(@RequestHeader("Authorization") String jwt) {

        String email = jwt_provider.getEmailFromToken(jwt);

        Seller seller = sellerService.getSellerProfile(jwt);

        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    // @GetMapping("/Report")
    // public ResponseEntity<SellerReport>
    // getSellerReport(@RequestHeader("Authorization")String jwt) {

    // String email = jwt_provider.getEmailFromToken(jwt);

    // Seller seller = sellerService.getSellerReport(jwt);

    // return new ResponseEntity<>(seller,HttpStatus.OK);
    // }

    @GetMapping
    public ResponseEntity<List<Seller>> getallSellers(@RequestParam(required = false) AccountStatus status) {
        List<Seller> sellers = sellerService.getAllSellers(status);

        return ResponseEntity.ok(sellers);
    }

    @PatchMapping()
    public ResponseEntity<Seller> updateseller(@RequestHeader("Authorization") String jwt, @RequestBody Seller seller) {

        Seller profiSeller = sellerService.getSellerProfile(jwt);
        Seller updatSeller = sellerService.updatSeller(profiSeller.getId(), seller);

        return ResponseEntity.ok(updatSeller);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSeller(@PathVariable Long id) {

        sellerService.deleteSeller(id);
        return ResponseEntity.noContent().build();

    }

}
