package com.ecommerce.Ecommerce_APP.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@ControllerAdvice
public class GlobleException {

    
//   @ExceptionHandler(sellerException.class)
//    public ResponseEntity<errorDetail> selllerExceptionHandler(sellerException se ,WebRequest req)
//    {

//     errorDetail errrorDetail = new errorDetail();
    
//     errrorDetail.setDetail(req.getDescription());
//     errrorDetail.setTime(LocalDateTime.now());
//     return new ResponseEntity<>(HttpStatus.BAD_REQUEST);


//    }    
}
