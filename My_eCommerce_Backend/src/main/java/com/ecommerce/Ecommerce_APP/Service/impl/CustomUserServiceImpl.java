package com.ecommerce.Ecommerce_APP.Service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ecommerce.Ecommerce_APP.domain.USER_ROLE;
import com.ecommerce.Ecommerce_APP.model.Seller;
import com.ecommerce.Ecommerce_APP.model.User;
import com.ecommerce.Ecommerce_APP.repository.SellerRepositry;
import com.ecommerce.Ecommerce_APP.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;  // Changed to final
    private final SellerRepositry sellerRepositry;  // Changed to final
    private static final String SELLER_PREFIX = "seller_"; 

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username.startsWith(SELLER_PREFIX)) {
            String actualUsername = username.substring(SELLER_PREFIX.length());
            Seller seller = sellerRepositry.findByEmail(actualUsername);

            if (seller != null) {  // Fixed the null check logic
                return buildUserDetails(seller.getEmail(), seller.getPassword(), seller.getRole());
            }
        } else {
            User user = userRepository.findByEmail(username);
            if (user != null) {
                return buildUserDetails(user.getEmail(), user.getPassword(), user.getRole());
            }
        }

        throw new UsernameNotFoundException("user not Found Error : " + username);
    }

    private UserDetails buildUserDetails(String email, String password, USER_ROLE role) {
        if (role == null) {
            role = USER_ROLE.ROLE_CUSTOMER;
        }

        List<GrantedAuthority> authorityLists = new ArrayList<>();
        authorityLists.add(new SimpleGrantedAuthority(role.toString()));

        return new org.springframework.security.core.userdetails.User(email, password, authorityLists);
    }
}
