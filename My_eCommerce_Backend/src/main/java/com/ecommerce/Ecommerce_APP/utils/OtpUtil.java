package com.ecommerce.Ecommerce_APP.utils;

import java.util.Random;

public class OtpUtil {
    
    public static String genrateotp(){

    int otplenght=6;

    Random rand=new Random();

    StringBuilder otp=new StringBuilder();

    for(int i=0; i<otplenght;i++)
    {

        otp.append(rand.nextInt(10));

    }
    return otp.toString();}
}
