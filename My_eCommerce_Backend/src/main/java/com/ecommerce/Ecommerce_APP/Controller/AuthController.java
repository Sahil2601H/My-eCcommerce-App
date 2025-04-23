package com.ecommerce.Ecommerce_APP.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Ecommerce_APP.Service.AuthService;
import com.ecommerce.Ecommerce_APP.Service.EmailService;
import com.ecommerce.Ecommerce_APP.domain.USER_ROLE;
import com.ecommerce.Ecommerce_APP.model.User;
import com.ecommerce.Ecommerce_APP.model.Verification_Code;
import com.ecommerce.Ecommerce_APP.repository.UserRepository;
import com.ecommerce.Ecommerce_APP.request.LoginOtpRequest;
import com.ecommerce.Ecommerce_APP.request.LoginRequest;
import com.ecommerce.Ecommerce_APP.responce.Apiresponce;
import com.ecommerce.Ecommerce_APP.responce.AuthResponce;
import com.ecommerce.Ecommerce_APP.responce.SignupRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final AuthService authService;
    private final EmailService emailService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponce> createUserHandler(@RequestBody SignupRequest req) {

        AuthResponce res = new AuthResponce();
        
        try {
            String jwt = authService.createUser(req);
            res.setJwt(jwt);
            res.setMessage("Completed");
            res.setRole(USER_ROLE.ROLE_CUSTOMER);
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
            res.setJwt(null);
            res.setMessage("❌ " + e.getMessage());
            res.setRole(null);
            return ResponseEntity.badRequest().body(res);
        }

    }

    @PostMapping("/sent/login-signup-otp")
    public ResponseEntity<Apiresponce> sentOtpHandler(@RequestBody LoginOtpRequest req) {

        authService.sentLoginOtp(req.getEmail(),req.getRole());
        Apiresponce res = new Apiresponce();

        res.setMessage("Otp Sent SuccesFully");

        return ResponseEntity.ok(res);

    }

    @PostMapping("/test-otp-mail")
    public void testMail() {
        try {
            emailService.sendVerificationOtpEmail("halpatisahil91@gmail.com", "123456", "Subject", "Fuck you");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @PostMapping("/signing")
    public ResponseEntity<AuthResponce> sentLoginHandler(@RequestBody LoginRequest req) {
        
        AuthResponce authResponce = authService.Signin(req);
        Apiresponce res = new Apiresponce();

        res.setMessage("Otp Sent SuccesFully");

        return ResponseEntity.ok(authResponce);

    }
}
