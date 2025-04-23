// package com.ecommerce.Ecommerce_APP.Service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.mail.MailException;
// import org.springframework.mail.MailSendException;
// import org.springframework.mail.javamail.JavaMailSender;
// import org.springframework.mail.javamail.MimeMessageHelper;
// import org.springframework.stereotype.Service;

// import jakarta.annotation.PostConstruct;
// import jakarta.mail.MessagingException;
// import jakarta.mail.internet.MimeMessage;
// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class EmailService {

//     @Autowired
//     private final JavaMailSender javaMailSender;

//     // @PostConstruct
//     // public void testMail() {
//     //     try {
//     //         sendVerificationOtpEmail("sh2748607@gmail.com", "123456", "Test Subject Sahil Halpat", "Test Body");
//     //     } catch (Exception e) {
//     //         e.printStackTrace();
//     //     }
//     // }

   
//     public void sendVerificationOtpEmail(String userEmail, String otp, String subject, String text)
//             throws MessagingException {

//         try {

//             MimeMessage mimeMessage = javaMailSender.createMimeMessage();
//             MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
//             mimeMessageHelper.setSubject(subject);
//             mimeMessageHelper.setText(text);
//             mimeMessageHelper.setTo(userEmail);
//             javaMailSender.send(mimeMessage);
//             System.out.println("✅ Email successfully sent to: " + userEmail);

//         } catch (MailException e) {

//             System.out.println("errrror----" + e);

//             throw new MailSendException("failes to sent Email");

//         }

//     }
// }

package com.ecommerce.Ecommerce_APP.Service;

import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;

    public void sendVerificationOtpEmail(String userEmail, String otp, String subject, String text)
            throws MessagingException {

        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeHelper = new MimeMessageHelper(mimeMessage, true);

            mimeHelper.setTo(userEmail);
            mimeHelper.setSubject(subject);
            mimeHelper.setText(text, false); // false means plain text

            javaMailSender.send(mimeMessage);
            System.out.println("✅ Email sent to: " + userEmail);
        } catch (MailException e) {
            System.out.println("❌ Error while sending email: " + e.getMessage());
            throw new MailSendException("Failed to send email to " + userEmail);
        }
    }
}
