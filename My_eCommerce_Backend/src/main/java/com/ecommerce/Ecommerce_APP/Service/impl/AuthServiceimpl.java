// package com.ecommerce.Ecommerce_APP.Service.impl;

// import java.util.ArrayList;
// import java.util.List;

// import org.springframework.security.core.Authentication;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.ecommerce.Ecommerce_APP.Service.AuthService;
// import com.ecommerce.Ecommerce_APP.Service.EmailService;
// import com.ecommerce.Ecommerce_APP.config.JWT_provider;
// import com.ecommerce.Ecommerce_APP.domain.USER_ROLE;
// import com.ecommerce.Ecommerce_APP.model.Cart;
// import com.ecommerce.Ecommerce_APP.model.User;
// import com.ecommerce.Ecommerce_APP.model.Verification_Code;
// import com.ecommerce.Ecommerce_APP.repository.CartRepository;
// import com.ecommerce.Ecommerce_APP.repository.UserRepository;
// import com.ecommerce.Ecommerce_APP.repository.VerificationCodeRepository;
// import com.ecommerce.Ecommerce_APP.responce.SignupRequest;
// import com.ecommerce.Ecommerce_APP.utils.OtpUtil;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class AuthServiceimpl implements AuthService{

//     private final UserRepository userRepository;
//     private final PasswordEncoder passwordEncoder;
//     private final CartRepository cartRepository;
//     private final JWT_provider jwt_provider;
//     private final VerificationCodeRepository verificationCodeRepository;
//     private final EmailService emailService;

//     @Override
//     public String createUser(SignupRequest req) 
//     {
//         Verification_Code verification_Code =verificationCodeRepository.findByEmail(req.getEmail());

//         if (verification_Code == null || !verification_Code.getOtp().equals(req.getOtp())) {
//             throw new IllegalArgumentException("Wrong OTP");
//         }

//         User user = userRepository.findByEmail(req.getEmail());

//         if(user==null)
//         {
//             User createUser= new User();
//             createUser.setEmail(req.getEmail());
//             createUser.setFullName(req.getFullName());
//             createUser.setRole(USER_ROLE.ROLE_CUSTOMER);
//             createUser.setMobile("6351108442");
//             createUser.setPassword(passwordEncoder.encode(req.getOtp()));

//             user=userRepository.save(createUser);

//             Cart cart = new Cart();
//             cart.setUser(user);
//             cartRepository.save(cart);
//         }

//         List<GrantedAuthority> authorities=new ArrayList<>();
//         authorities.add(new SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));

//        Authentication authentication = new UsernamePasswordAuthenticationToken( req.getEmail(),null,authorities);

//        SecurityContextHolder.getContext().setAuthentication(authentication);

//         return jwt_provider.generateToken(authentication);
//     }

//     @Override
//     public void sentLoginOtp(String email) {

//         String SIGNING_PREFIX="signin_";
//         if (email.startsWith(SIGNING_PREFIX)) {

//             email=email.substring(SIGNING_PREFIX.length());
//             User user=userRepository.findByEmail(email);
//             if(user==null){

//              throw new IllegalArgumentException("user not exist with provided email");

//             }

//             Verification_Code isExsist=verificationCodeRepository.findByEmail(email);
//             if (isExsist!=null) {

//                 verificationCodeRepository.delete(isExsist);
//             }

//             String otp = OtpUtil.genrateotp();

//             Verification_Code verification_Code = new Verification_Code();
//             verification_Code.setOtp(otp);
//             verification_Code.setEmail(email);
//             verificationCodeRepository.save(verification_Code);

//              String subject ="MY eCommerce LOGIN/SIGNUP OTP";

//             String text = "YOUR LOGIN OTP IS "+otp;

//             try {
//                 emailService.sendVerificationOtpEmail(email, otp, subject, text);
//             } catch (Exception e) {
//                 throw new RuntimeException("Failed to send OTP email");
//             }

//         }

//     }

// }

package com.ecommerce.Ecommerce_APP.Service.impl;

import java.util.*;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.Ecommerce_APP.Service.AuthService;
import com.ecommerce.Ecommerce_APP.Service.EmailService;
import com.ecommerce.Ecommerce_APP.config.JWT_provider;
import com.ecommerce.Ecommerce_APP.domain.AccountStatus;
import com.ecommerce.Ecommerce_APP.domain.USER_ROLE;
import com.ecommerce.Ecommerce_APP.model.Cart;
import com.ecommerce.Ecommerce_APP.model.Seller;
import com.ecommerce.Ecommerce_APP.model.User;
import com.ecommerce.Ecommerce_APP.model.Verification_Code;
import com.ecommerce.Ecommerce_APP.repository.CartRepository;
import com.ecommerce.Ecommerce_APP.repository.SellerRepositry;
import com.ecommerce.Ecommerce_APP.repository.UserRepository;
import com.ecommerce.Ecommerce_APP.repository.VerificationCodeRepository;
import com.ecommerce.Ecommerce_APP.request.LoginRequest;
import com.ecommerce.Ecommerce_APP.responce.AuthResponce;
import com.ecommerce.Ecommerce_APP.responce.SignupRequest;
import com.ecommerce.Ecommerce_APP.utils.OtpUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceimpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CartRepository cartRepository;
    private final SellerRepositry sellerRepositry;
    private final JWT_provider jwt_provider;
    private final VerificationCodeRepository verificationCodeRepository;
    private final EmailService emailService;
    private final CustomUserServiceImpl customUserServiceImpl;

    // @Override
    // public String createUser(SignupRequest request) {
    // try {
    // String email = request.getEmail();
    // String otp = request.getOtp();
    // String fullName = request.getFullName();

    // Verification_Code verificationCode =
    // verificationCodeRepository.findByEmail(email);
    // if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
    // throw new RuntimeException("Invalid or expired OTP.");
    // }

    // User user = userRepository.findByEmail(email);
    // if (user == null) {
    // User newUser = new User();
    // newUser.setEmail(email);
    // newUser.setFullName(fullName);
    // newUser.setPassword(passwordEncoder.encode(otp));
    // newUser.setRole(USER_ROLE.ROLE_CUSTOMER);
    // newUser.setMobile("0000000000");
    // userRepository.save(newUser);
    // System.out.println("✅ User created: " + email);
    // }

    // List<GrantedAuthority> authorities = new ArrayList<>();
    // authorities.add(new
    // SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));
    // Authentication auth = new UsernamePasswordAuthenticationToken(email, null,
    // authorities);
    // SecurityContextHolder.getContext().setAuthentication(auth);

    // String token = jwt_provider.generateToken(auth);

    // System.out.println("✅ Signup completed with token: " + token);
    // return token;

    // } catch (Exception e) {
    // e.printStackTrace();
    // throw new RuntimeException("❌ Signup failed: " + e.getMessage());
    // }
    // }

    // orignal
    // @Override
    // public String createUser(SignupRequest req) {
    // Verification_Code verification_Code =
    // verificationCodeRepository.findByEmail(req.getEmail());

    // if (verification_Code == null ||
    // !verification_Code.getOtp().equals(req.getOtp())) {
    // throw new IllegalArgumentException("Wrong OTP");
    // }

    // User user = userRepository.findByEmail(req.getEmail());
    // if (user == null) {
    // User createUser = new User();
    // createUser.setEmail(req.getEmail());
    // createUser.setFullName(req.getFullName());
    // createUser.setRole(USER_ROLE.ROLE_CUSTOMER);
    // createUser.setMobile("6351108442");
    // createUser.setPassword(passwordEncoder.encode(req.getOtp()));
    // user = userRepository.save(createUser);

    // Cart cart = new Cart();
    // cart.setUser(user);
    // cartRepository.save(cart);
    // }

    // List<GrantedAuthority> authorities = new ArrayList<>();
    // authorities.add(new
    // SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));
    // Authentication authentication = new
    // UsernamePasswordAuthenticationToken(req.getEmail(),null,authorities);
    // SecurityContextHolder.getContext().setAuthentication(authentication);

    // return jwt_provider.generateToken(authentication);
    // }

    // 2nd
    // @Override
    // public String createUser(SignupRequest req) {
    // Verification_Code verificationCode =
    // verificationCodeRepository.findByEmail(req.getEmail());
    // if (verificationCode == null ||
    // !verificationCode.getOtp().equals(req.getOtp())) {
    // throw new IllegalArgumentException("Wrong OTP");
    // }

    // // Check if the user already exists
    // User user = userRepository.findByEmail(req.getEmail());
    // if (user == null) {
    // user = new User();
    // user.setEmail(req.getEmail());
    // user.setFullName(req.getFullName());
    // user.setRole(USER_ROLE.ROLE_CUSTOMER);
    // user.setMobile("6351108442");
    // user.setPassword(passwordEncoder.encode(req.getOtp())); // Use a hashed
    // password or a better field
    // userRepository.save(user);

    // // Create a cart for the new user
    // Cart cart = new Cart();
    // cart.setUser(user);
    // cartRepository.save(cart);
    // } else {
    // throw new IllegalArgumentException("User already exists with this email.");
    // }

    // // Set authentication context
    // Authentication auth = new UsernamePasswordAuthenticationToken(
    // req.getEmail(), null, Collections.singleton(new
    // SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.name()))
    // );
    // SecurityContextHolder.getContext().setAuthentication(auth);

    // // Return the JWT token
    // return jwt_provider.generateToken(auth);
    // }

    // @Override
    // public String createUser(SignupRequest request) {
    // try {
    // String email = request.getEmail();
    // String otp = request.getOtp();
    // String fullName = request.getFullName();

    // Verification_Code verificationCode =
    // verificationCodeRepository.findByEmail(email);
    // if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
    // throw new RuntimeException("Invalid or expired OTP.");
    // }

    // User user = userRepository.findByEmail(email);
    // if (user == null) {
    // User newUser = new User();
    // newUser.setEmail(email);
    // newUser.setFullName(fullName);
    // newUser.setPassword(passwordEncoder.encode(otp));
    // newUser.setRole(USER_ROLE.ROLE_CUSTOMER);
    // newUser.setMobile("0000000000");
    // userRepository.save(newUser);
    // System.out.println("✅ User created: " + email);
    // }

    // List<GrantedAuthority> authorities = new ArrayList<>();
    // authorities.add(new
    // SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));
    // Authentication auth = new UsernamePasswordAuthenticationToken(email, null,
    // authorities);
    // SecurityContextHolder.getContext().setAuthentication(auth);

    // String token = jwt_provider.generateToken(auth);
    // verificationCodeRepository.delete(verificationCode);
    // System.out.println("✅ Signup completed with token: " + token);
    // return token;

    // } catch (Exception e) {
    // e.printStackTrace();
    // throw new RuntimeException("❌ Signup failed: " + e.getMessage());
    // }
    // }

    // working Email saved Databases

    // @Override
    // public void sentLoginOtp(String email) {
    // System.out.println("📧 Sending OTP to email: " + email);

    // // Remove "signin_" check so direct email works
    // User user = userRepository.findByEmail(email);
    // if (user == null) {
    // throw new IllegalArgumentException("❌ User not found with email: " + email);
    // }

    // Verification_Code existingCode =
    // verificationCodeRepository.findByEmail(email);
    // if (existingCode != null) {
    // verificationCodeRepository.delete(existingCode);
    // }

    // String otp = OtpUtil.genrateotp();

    // Verification_Code newCode = new Verification_Code();
    // newCode.setEmail(email);
    // newCode.setOtp(otp);
    // verificationCodeRepository.save(newCode);

    // String subject = "MY eCommerce LOGIN/SIGNUP OTP";
    // String text = "YOUR LOGIN OTP IS: " + otp;

    // try {
    // emailService.sendVerificationOtpEmail(email, otp, subject, text);
    // } catch (Exception e) {
    // e.printStackTrace(); // Logs full error
    // throw new RuntimeException("❌ Failed to send OTP email: " + e.getMessage());
    // }
    // }

    // new WOrking code
    // @Override
    // public void sentLoginOtp(String email,USER_ROLE role) {
    // System.out.println("📧 Sending OTP to email: " + email);

    // // Delete any existing OTP entry
    // Verification_Code existingCode =
    // verificationCodeRepository.findByEmail(email);
    // if (existingCode != null) {
    // verificationCodeRepository.delete(existingCode);
    // }

    // // Generate new OTP and save it
    // String otp = OtpUtil.genrateotp();
    // Verification_Code newCode = new Verification_Code();
    // newCode.setEmail(email);
    // newCode.setOtp(otp);
    // verificationCodeRepository.save(newCode);

    // // Email content
    // String subject = "MY eCommerce LOGIN/SIGNUP OTP";
    // String text = "YOUR OTP IS: " + otp;

    // try {
    // emailService.sendVerificationOtpEmail(email, otp, subject, text);
    // } catch (Exception e) {
    // e.printStackTrace();
    // throw new RuntimeException("❌ Failed to send OTP email: " + e.getMessage());
    // }
    // }

    // new Working Code

    @Override
    public String createUser(SignupRequest request) {
        try {
            String email = request.getEmail();
            String otp = request.getOtp();
            String fullName = request.getFullName();

            Verification_Code verificationCode = verificationCodeRepository.findByEmail(email);
            if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
                throw new RuntimeException("Invalid or expired OTP.");
            }

            User user = userRepository.findByEmail(email);
            if (user != null) {
                throw new RuntimeException("User already exists with this email.");
            }

            // Create and save user
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setFullName(fullName);
            newUser.setPassword(passwordEncoder.encode(otp)); // Use a proper password in production
            newUser.setRole(USER_ROLE.ROLE_CUSTOMER);
            newUser.setMobile("0000000000");
            user = userRepository.save(newUser);

            // Create and assign cart
            Cart cart = new Cart();
            cart.setUser(user);
            cartRepository.save(cart);

            // Authenticate and generate JWT
            List<GrantedAuthority> authorities = Collections.singletonList(
                    new SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));
            Authentication auth = new UsernamePasswordAuthenticationToken(email, null, authorities);
            SecurityContextHolder.getContext().setAuthentication(auth);

            // Delete OTP after use
            verificationCodeRepository.delete(verificationCode);

            // Return token
            String token = jwt_provider.generateToken(auth);
            System.out.println("✅ Signup completed with token: " + token);
            return token;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("❌ Signup failed: " + e.getMessage());
        }
    }

    @Override
    public AuthResponce Signin(LoginRequest req) {

        String username = req.getEmail();
        String otp = req.getOtp();

        Authentication authentication = authenticate(username, otp);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwt_provider.generateToken(authentication);

        AuthResponce authResponce = new AuthResponce();
        authResponce.setJwt(token);
        authResponce.setMessage("Login Success");

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

        String roleName = authorities.isEmpty() ? null : authorities.iterator().next().getAuthority();

        authResponce.setRole(USER_ROLE.valueOf(roleName));

        return authResponce;

    }

    // private Authentication authenticate(String username, String otp) {


    //     String SELLER_PREFIX = "seller_";

    //     if (username.startsWith(SELLER_PREFIX)) {

    //         username=username.substring(SELLER_PREFIX.length());
            
    //     }

        

    //     UserDetails userDetails = customUserServiceImpl.loadUserByUsername(username);
    //     if (username == null) {
    //         throw new BadCredentialsException("Invalid Password");

    //     }

    //     Verification_Code verification_Code = verificationCodeRepository.findByEmail(username);

    //     if (verification_Code == null || !verification_Code.getOtp().equals(otp)) {

    //         throw new BadCredentialsException("wrong otp");

    //     }
    //     return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    // }



    private Authentication authenticate(String username, String otp) {
        String SELLER_PREFIX = "seller_";
        String email = username;
    
        if (username.startsWith(SELLER_PREFIX)) {
            email = username.substring(SELLER_PREFIX.length());
            
            // Verify OTP first
            Verification_Code verificationCode = verificationCodeRepository.findByEmail(email);
            if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
                throw new BadCredentialsException("Invalid OTP");
            }
    
            // Check seller exists and is active
            Seller seller = sellerRepositry.findByEmail(email);
            if (seller == null) {
                throw new BadCredentialsException("Seller not found");
            }
            if (seller.getAccountStatus() != AccountStatus.ACTIVE) {
                throw new BadCredentialsException("Seller account not active. Current status: " + seller.getAccountStatus());
            }
        } else {
            // Regular user OTP verification
            Verification_Code verificationCode = verificationCodeRepository.findByEmail(email);
            if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
                throw new BadCredentialsException("Invalid OTP");
            }
        }
    
        UserDetails userDetails = customUserServiceImpl.loadUserByUsername(username);
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

//     private Authentication authenticate(String username, String otp) {
//     String SELLER_PREFIX = "seller_";
//     String email = username;

//     if (username.startsWith(SELLER_PREFIX)) {
//         email = username.substring(SELLER_PREFIX.length());
//     }

//     // Verify OTP first
//     Verification_Code verificationCode = verificationCodeRepository.findByEmail(email);
//     if (verificationCode == null || !verificationCode.getOtp().equals(otp)) {
//         throw new BadCredentialsException("Invalid OTP");
//     }

//     // Check account status for sellers
//     if (username.startsWith(SELLER_PREFIX)) {
//         Seller seller = sellerRepositry.findByEmail(email);
//         if (seller == null) {
//             throw new BadCredentialsException("Seller not found");
//         }
//         if (seller.getAccountStatus() != AccountStatus.ACTIVE) {
//             throw new BadCredentialsException("Seller account not active");
//         }
//     }

//     UserDetails userDetails = customUserServiceImpl.loadUserByUsername(username);
//     return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
// }

    // @Override
    // public void sentLoginOtp(String email, USER_ROLE role) {
    //     System.out.println("📧 Sending OTP to email: " + email);

    //     String SIGNING_PREFIX = "signing_";

    //     if (email.startsWith(SIGNING_PREFIX)) {

    //         email = email.substring(SIGNING_PREFIX.length());

    //         if (role.equals(USER_ROLE.ROLE_SELLER)) {


    //             Seller seller = sellerRepositry.findByEmail(email);
    //              if (seller==null) {

    //                 throw new IllegalArgumentException("Seller is Not Present With This Email");
                    
    //              }

                

    //         }
    //         else{

    //             User user = userRepository.findByEmail(email);
    //             if (user == null) {

    //                 throw new IllegalArgumentException("user not exsist email");

    //             }
                
    //         }

    //     }

    //     // Delete any existing OTP entry
    //     Verification_Code existingCode = verificationCodeRepository.findByEmail(email);
    //     if (existingCode != null) {
    //         verificationCodeRepository.delete(existingCode);
    //     }

    //     // Generate new OTP and save it
    //     String otp = OtpUtil.genrateotp();
    //     Verification_Code newCode = new Verification_Code();
    //     newCode.setEmail(email);
    //     newCode.setOtp(otp);
    //     verificationCodeRepository.save(newCode);

    //     // Email content
    //     String subject = "MY eCommerce LOGIN/SIGNUP OTP";
    //     String text = "YOUR OTP IS: " + otp;

    //     try {
    //         emailService.sendVerificationOtpEmail(email, otp, subject, text);
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //         throw new RuntimeException("❌ Failed to send OTP email: " + e.getMessage());
    //     }
    // }



//     @Override
// public void sentLoginOtp(String email, USER_ROLE role) {
//     System.out.println("📧 Sending OTP to email: " + email);

//     String SIGNING_PREFIX = "signing_";
//     String cleanEmail = email;

//     if (email.startsWith(SIGNING_PREFIX)) {
//         cleanEmail = email.substring(SIGNING_PREFIX.length());
//     }

//     // Validate user/seller exists
//     if (role.equals(USER_ROLE.ROLE_SELLER)) {
//         Seller seller = sellerRepositry.findByEmail(cleanEmail);
//         if (seller == null) {
//             throw new IllegalArgumentException("Seller not found with this email");
//         }
        
//         // Check if seller is active
//         if (seller.getAccountStatus() != AccountStatus.ACTIVE) {
//             throw new IllegalArgumentException("Seller account not active. Please verify your email first.");
//         }
//     } else {
//         User user = userRepository.findByEmail(cleanEmail);
//         if (user == null) {
//             throw new IllegalArgumentException("User not found with this email");
//         }
//     }

//     // Delete any existing OTP
//     Verification_Code existingCode = verificationCodeRepository.findByEmail(cleanEmail);
//     if (existingCode != null) {
//         verificationCodeRepository.delete(existingCode);
//     }

//     // Generate and save new OTP
//     String otp = OtpUtil.genrateotp();
//     Verification_Code newCode = new Verification_Code();
//     newCode.setEmail(cleanEmail);
//     newCode.setOtp(otp);
//     verificationCodeRepository.save(newCode);

//     // Send email
//     String subject = "Your Login OTP";
//     String text = "Your OTP for login is: " + otp;

//     try {
//         emailService.sendVerificationOtpEmail(cleanEmail, otp, subject, text);
//     } catch (Exception e) {
//         throw new RuntimeException("Failed to send OTP email: " + e.getMessage());
//     }
// }



@Override
public void sentLoginOtp(String email, USER_ROLE role) {
    System.out.println("📧 Sending OTP to email: " + email);

    String SIGNING_PREFIX = "signing_";
    String cleanEmail = email;

    if (email.startsWith(SIGNING_PREFIX)) {
        cleanEmail = email.substring(SIGNING_PREFIX.length());
    }

    // Validate user/seller exists
    if (role.equals(USER_ROLE.ROLE_SELLER)) {
        Seller seller = sellerRepositry.findByEmail(cleanEmail);
        if (seller == null) {
            throw new IllegalArgumentException("Seller not found with this email");
        }
        
        // For new sellers, allow OTP only if in PENDING_VERIFICATION state
        if (seller.getAccountStatus() == AccountStatus.PENDING_VERIFICATION) {
            // This is initial verification OTP
            String otp = OtpUtil.genrateotp();
            
            // Delete any existing OTPs first
            
            
            // Save new OTP
            Verification_Code newCode = new Verification_Code();
            newCode.setEmail(cleanEmail);
            newCode.setOtp(otp);
            verificationCodeRepository.save(newCode);
            
            // Send email
            String subject = "Verify Your Seller Account";
            String text = "Your verification OTP is: " + otp;
            
            try {
                emailService.sendVerificationOtpEmail(cleanEmail, otp, subject, text);
            } catch (Exception e) {
                throw new RuntimeException("Failed to send OTP email: " + e.getMessage());
            }
            return;
        }
        
        // For active sellers, send login OTP
        if (seller.getAccountStatus() != AccountStatus.ACTIVE) {
            throw new IllegalArgumentException("Seller account not active. Please verify your email first.");
        }
    }

    // Rest of the login OTP logic...
    // Delete any existing OTPs first

    
    // Generate and save new OTP
    String otp = OtpUtil.genrateotp();
    Verification_Code newCode = new Verification_Code();
    newCode.setEmail(cleanEmail);
    newCode.setOtp(otp);
    verificationCodeRepository.save(newCode);

    // Send email
    String subject = "Your Login OTP";
    String text = "Your OTP for login is: " + otp;

    try {
        emailService.sendVerificationOtpEmail(cleanEmail, otp, subject, text);
    } catch (Exception e) {
        throw new RuntimeException("Failed to send OTP email: " + e.getMessage());
    }
}

}
