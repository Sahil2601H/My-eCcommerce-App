package com.ecommerce.Ecommerce_APP.model;


import java.util.HashSet;
import java.util.Set;

import com.ecommerce.Ecommerce_APP.domain.PaymentMethod;
import com.ecommerce.Ecommerce_APP.domain.PaymentOrderStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
public class PaymentOreder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long amount;


    private String paymentLinkId;

    private PaymentOrderStatus status = PaymentOrderStatus.PENDING;
    private PaymentMethod paymentMethod;


    @ManyToOne
    private User user;

    @OneToMany
    private Set<Order> orders = new HashSet<>();


}
