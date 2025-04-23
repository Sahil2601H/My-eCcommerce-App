import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../State/Store';
import { sentLoginSignupOtp, sigingin } from '../../State/AuthSlice';
import { sellerLogin } from '../../config/SellerAuthSlice';

function SellerLoginForm() {

  const disPatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: ""
    },
  
    onSubmit: (values) => {
      console.log("Form Data", values);
      
      // Send OTP as string to match Postman's working request
      disPatch(sellerLogin({ 
        email: values.email.trim(), 
        otp: values.otp // Keep as string
      }));
    } // <-- No comma needed here as it's the last property
  });

  const handleSendOtp=()=>{
    disPatch(sentLoginSignupOtp({email:formik.values.email}))

  }

  return (
    <div className='space-y-5'>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3, color: '#1976d2' }}>
        Login As Seller
      </Typography> 

      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email Address"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <div className='space-y-2'>
        <p className='font-medium text-sm opacity-60'> Enter OTP sent to your Email</p>
        <TextField
          fullWidth
          id="otp"
          name="otp"
          label="Enter OTP"
          variant="outlined"
          value={formik.values.otp}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.otp && Boolean(formik.errors.otp)}
          helperText={formik.touched.otp && formik.errors.otp}
        />
      </div>

       
      <Button onClick={handleSendOtp} fullWidth variant='contained' sx={{py:"11px"}} >

Sent-otp

      </Button >


      <Button

      onClick={()=>formik.handleSubmit()}
       fullWidth variant='contained' sx={{py:"11px"}} >

Login

      </Button>
    </div>
  );
}

export default SellerLoginForm;
