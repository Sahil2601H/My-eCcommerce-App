import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { FormikProps } from 'formik';

interface BusinessDetail {
  businessName?: string;
  businessEmail?: string;
  businessMobile?: string;
  logo?: string;
  banner?: string;
  businessAddress?: string;
}

interface BecomeSellerStep4CDProps {
  formik: FormikProps<{ businessDetail: BusinessDetail; sellerName: string; email: string; password: string }>;
}

function BecomeSellerstep4CD({ formik }: BecomeSellerStep4CDProps) {
  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3, color: '#1976d2' }}>
        Supplier Details
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="sellerName"
            name="sellerName"
            label="Seller Name"
            variant="outlined"
            value={formik.values.sellerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
            helperText={formik.touched.sellerName && formik.errors.sellerName}
          />
        </Grid>
        
        <Grid item xs={12}>
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
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="businessDetail.businessName"
            name="businessDetail.businessName"
            label="Business Name"
            variant="outlined"
            value={formik.values.businessDetail.businessName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.businessDetail?.businessName && Boolean(formik.errors.businessDetail?.businessName)}
            helperText={formik.touched.businessDetail?.businessName && formik.errors.businessDetail?.businessName}
          />
        </Grid>
        
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="businessDetail.businessMobile"
            name="businessDetail.businessMobile"
            label="Business Mobile Number"
            variant="outlined"
            value={formik.values.businessDetail.businessMobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.businessDetail?.businessMobile && Boolean(formik.errors.businessDetail?.businessMobile)}
            helperText={formik.touched.businessDetail?.businessMobile && formik.errors.businessDetail?.businessMobile}
          />
        </Grid>
        
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="businessDetail.businessEmail"
            name="businessDetail.businessEmail"
            label="Business Email"
            variant="outlined"
            value={formik.values.businessDetail.businessEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.businessDetail?.businessEmail && Boolean(formik.errors.businessDetail?.businessEmail)}
            helperText={formik.touched.businessDetail?.businessEmail && formik.errors.businessDetail?.businessEmail}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="businessDetail.businessAddress"
            name="businessDetail.businessAddress"
            label="Business Address"
            variant="outlined"
            value={formik.values.businessDetail.businessAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.businessDetail?.businessAddress && Boolean(formik.errors.businessDetail?.businessAddress)}
            helperText={formik.touched.businessDetail?.businessAddress && formik.errors.businessDetail?.businessAddress}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Set Password"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default BecomeSellerstep4CD;
