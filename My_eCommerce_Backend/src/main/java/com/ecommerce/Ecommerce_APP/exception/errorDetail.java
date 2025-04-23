package com.ecommerce.Ecommerce_APP.exception;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class errorDetail {
    

     private String error;
    private String Detail;
    private LocalDateTime time;
}
