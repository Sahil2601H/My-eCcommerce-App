import { Box, Card, CardContent, TextField, Typography } from '@mui/material';
import React from 'react';
import { FormikProps } from 'formik';

interface BankDetails {
  accountNumber?: string;
  ifscCode?: string;
  accountHolderName?: string;
}

interface BecomeSellerStep3CDProps {
  formik: FormikProps<{ bankDetails: BankDetails }>;
}

function BecomeSellerstep3CD({ formik }: BecomeSellerStep3CDProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ width: '100%', maxWidth: 500, p: 3, boxShadow: 6, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3, color: '#1976d2' }}>
            Bank Details
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              id="bankDetails.accountNumber"
              name="bankDetails.accountNumber"
              label="Account Number"
              variant="outlined"
              value={formik.values.bankDetails.accountNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
              helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
            />

            <TextField
              fullWidth
              id="bankDetails.ifscCode"
              name="bankDetails.ifscCode"
              label="IFSC Code"
              variant="outlined"
              value={formik.values.bankDetails.ifscCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.bankDetails?.ifscCode)}
              helperText={formik.touched.bankDetails?.ifscCode && formik.errors.bankDetails?.ifscCode}
            />

            <TextField
              fullWidth
              id="bankDetails.accountHolderName"
              name="bankDetails.accountHolderName"
              label="Account Holder Name"
              variant="outlined"
              value={formik.values.bankDetails.accountHolderName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
              helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default BecomeSellerstep3CD;
