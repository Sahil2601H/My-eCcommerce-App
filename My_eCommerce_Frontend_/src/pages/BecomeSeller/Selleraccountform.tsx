import { Button, Step, StepLabel, Stepper, Box, Container } from '@mui/material'
import { useFormik } from 'formik';
import React, { useState } from 'react'
import BecomeSellerstep1CD from './BecomeSellerstep1CD';
import BecomeSellerstep2CD from './BecomeSellerstep2CD';
import BecomeSellerstep3CD from './BecomeSellerstep3CD';
import BecomeSellerstep4CD from './BecomeSellerstep4CD';

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

function Selleraccountform() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (direction: number) => () => {
    const newStep = activeStep + direction;

    // Validate the new step is within bounds
    if (newStep >= 0 && newStep < steps.length) {
      setActiveStep(newStep);
    }

    console.log("Active Steps", activeStep);

    // If we're on the last step and clicking "Next", create account
    if (activeStep === steps.length - 1 && direction === 1) {
      handleCreateAccount();
    }
  };

  const handleCreateAccount = () => {
    console.log("Account Created Successfully");
    // Here you would typically add your account creation logic
  };

  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      gstin: "",
      pickupAddress: {
        name: "",
        pincode: "",
        address: "",
        locality: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountNumber: "",
        ifscCode: "",
        accountHolderName: "",
      },
      sellerName: "",
      email: "",
      businessDetail: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        bussinessAddress: "",
      },
      password: "",
    },
    onSubmit: (values) => {
      console.log(values, "Formik Submitted");
    },
  });

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mb: 4 }}>
        {activeStep === 0 && <BecomeSellerstep1CD formik={formik} />}
        {activeStep === 1 && <BecomeSellerstep2CD formik={formik} />}
        {activeStep === 2 && <BecomeSellerstep3CD formik={formik} />}
        {activeStep === 3 && <BecomeSellerstep4CD formik={formik} />}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          onClick={handleStep(-1)}
          variant="contained"
          color="secondary"
          disabled={activeStep === 0}
          sx={{
            px: 3,
            py: 1,
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Back
        </Button>

        <Button
          onClick={handleStep(1)}
          variant="contained"
          color="primary"
          sx={{
            px: 3,
            py: 1,
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {activeStep === steps.length - 1 ? "Create Account" : "Next"}
        </Button>
      </Box>
    </Container>
  );
}

export default Selleraccountform;
