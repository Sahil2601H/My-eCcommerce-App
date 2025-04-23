package com.ecommerce.Ecommerce_APP.model;
import com.ecommerce.Ecommerce_APP.model.Adress;
import com.ecommerce.Ecommerce_APP.domain.AccountStatus;
import com.ecommerce.Ecommerce_APP.domain.USER_ROLE;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String sellerName;
    private String mobile;

    @Column(unique = true, nullable = false)
    private String email;
    private String password;

    @Embedded
    private  BussinessDetail bussinessDetail  = new BussinessDetail();

    @Embedded
    private BankDetail bankDetail = new BankDetail();

    @OneToOne(cascade = CascadeType.ALL)
    private Adress address = new Adress();
    
    
     

    private String GSTIN;

    private USER_ROLE role = USER_ROLE.ROLE_SELLER;

    private boolean isEmailVerified = false;

    private AccountStatus accountStatus = AccountStatus.PENDING_VERIFICATION;








}
