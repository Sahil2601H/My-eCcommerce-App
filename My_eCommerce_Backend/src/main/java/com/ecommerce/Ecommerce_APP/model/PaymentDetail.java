package com.ecommerce.Ecommerce_APP.model;

import com.ecommerce.Ecommerce_APP.domain.PaymentStatus;

import lombok.Data;

@Data
public class PaymentDetail {

    private String paymentid;
    private String razorpayPaymentLinkedId;
    private String razorpayPaymentReferenceId;
    private String razorpayPaymentStatus;
    private String razorpayPaymetIdZWSP;
    private PaymentStatus status;

}

