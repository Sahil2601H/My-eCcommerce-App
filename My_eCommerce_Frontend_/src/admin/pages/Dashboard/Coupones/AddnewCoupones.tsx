import React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack
} from '@mui/material';



function AddnewCoupones() {
  const formik = useFormik({
    initialValues: {
      code: '',
      discountPercentage: '',
      validityStartDate: '',
      validityEndDate: '',
      minimumOrderValue: '',
    },
    onSubmit: (values) => {
      console.log('Form Data:', values);
    }
  });

  return (
    <Box sx={{ maxWidth: 600,  mt: 5, padding: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" mb={3} fontWeight="bold">
        Add New Coupon
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            id="code"
            name="code"
            label="Coupon Code"
            value={formik.values.code}
            onChange={formik.handleChange}
          />

          <TextField
            fullWidth
            id="discountPercentage"
            name="discountPercentage"
            label="Discount (%)"
            type="number"
            value={formik.values.discountPercentage}
            onChange={formik.handleChange}
          />

          <TextField
            fullWidth
            id="minimumOrderValue"
            name="minimumOrderValue"
            label="Minimum Order Value"
            type="number"
            value={formik.values.minimumOrderValue}
            onChange={formik.handleChange}
          />

          <TextField
            fullWidth
            id="validityStartDate"
            name="validityStartDate"
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formik.values.validityStartDate}
            onChange={formik.handleChange}
          />

          <TextField
            fullWidth
            id="validityEndDate"
            name="validityEndDate"
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formik.values.validityEndDate}
            onChange={formik.handleChange}
          />

          <Button type="submit" variant="contained" color="primary">
            Add Coupon
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default AddnewCoupones;
