import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { FormikProps } from 'formik';

interface PickupAddress {
  name?: string;
  pincode?: string;
  address?: string;
  locality?: string;
  city?: string;
  state?: string;
}

interface BecomeSellerStep2CDProps {
  formik: FormikProps<{ pickupAddress: PickupAddress }>;
}

function BecomeSellerstep2CD({ formik }: BecomeSellerStep2CDProps) {
  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3, color: '#1976d2' }}>
       Pickup Address
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="pickupAddress.name"
            name="pickupAddress.name"
            label="Full Name"
            variant="outlined"
            value={formik.values.pickupAddress.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.name && Boolean(formik.errors.pickupAddress?.name)}
            helperText={formik.touched.pickupAddress?.name && formik.errors.pickupAddress?.name}
          />
        </Grid>
        
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="pickupAddress.pincode"
            name="pickupAddress.pincode"
            label="Pincode"
            variant="outlined"
            value={formik.values.pickupAddress.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.pincode && Boolean(formik.errors.pickupAddress?.pincode)}
            helperText={formik.touched.pickupAddress?.pincode && formik.errors.pickupAddress?.pincode}
          />
        </Grid>
        
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="pickupAddress.city"
            name="pickupAddress.city"
            label="City"
            variant="outlined"
            value={formik.values.pickupAddress.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.city && Boolean(formik.errors.pickupAddress?.city)}
            helperText={formik.touched.pickupAddress?.city && formik.errors.pickupAddress?.city}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="pickupAddress.address"
            name="pickupAddress.address"
            label="Street Address"
            variant="outlined"
            value={formik.values.pickupAddress.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.address && Boolean(formik.errors.pickupAddress?.address)}
            helperText={formik.touched.pickupAddress?.address && formik.errors.pickupAddress?.address}
          />
        </Grid>
        
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="pickupAddress.locality"
            name="pickupAddress.locality"
            label="Locality"
            variant="outlined"
            value={formik.values.pickupAddress.locality}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.locality && Boolean(formik.errors.pickupAddress?.locality)}
            helperText={formik.touched.pickupAddress?.locality && formik.errors.pickupAddress?.locality}
          />
        </Grid>
        
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="pickupAddress.state"
            name="pickupAddress.state"
            label="State"
            variant="outlined"
            value={formik.values.pickupAddress.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pickupAddress?.state && Boolean(formik.errors.pickupAddress?.state)}
            helperText={formik.touched.pickupAddress?.state && formik.errors.pickupAddress?.state}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default BecomeSellerstep2CD;
