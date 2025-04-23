package com.ecommerce.Ecommerce_APP.config;

import java.nio.charset.StandardCharsets;
import java.util.HashSet;

import javax.crypto.SecretKey;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Service
public class JWT_provider {

     private static final SecretKey keys = Keys.hmacShaKeyFor(JWT_CONSTANT.SECRATE_KEY.getBytes());
     
    private static final long EXPIRATION_TIME = 86400000; // 1 day

    public String generateToken(Authentication auth) {
        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
        String roles = populateAuthorities(authorities);

        return Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .claim("email", auth.getName())
                .claim("authorities", roles)
                .signWith(keys)
                .compact();
    }

    public String getEmailFromToken(String jwt) {
        try {
            jwt = jwt.substring(7); // Remove "Bearer " prefix
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(keys)
                    .build()
                    .parseClaimsJws(jwt)
                    .getBody();

            return claims.get("email", String.class);
        } catch (Exception e) {
            throw new IllegalArgumentException("Invalid or expired JWT token", e);
        }
    }

    private String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
        Set<String> auths = new HashSet<>();
        for (GrantedAuthority authority : authorities) {
            auths.add(authority.getAuthority());
        }
        return String.join(",", auths);
    }
    
}
