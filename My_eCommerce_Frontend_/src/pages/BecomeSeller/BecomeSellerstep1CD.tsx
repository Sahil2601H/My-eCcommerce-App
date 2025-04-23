import { Box, TextField } from '@mui/material'
import React from 'react'
import { FormikProps } from 'formik'

interface FormValues {
  mobileNumber?: string
  email?: string
  gstin?: string
}

interface BecomeSellerStep1CDProps {
  formik: FormikProps<FormValues>
}

function BecomeSellerstep1CD({ formik }: BecomeSellerStep1CDProps) {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
      <p className='text-xl font-bold text-center pb-9'>Contact Details</p>

      <div className='space-y-6'>
        <TextField
          fullWidth
          id="mobileNumber"
          name="mobileNumber"
          label="Mobile Number"
          variant="outlined"
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
          helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          variant="outlined"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="gstin"
          name="gstin"
          label="GST Identification Number"
          variant="outlined"
          value={formik.values.gstin}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.gstin && Boolean(formik.errors.gstin)}
          helperText={formik.touched.gstin && formik.errors.gstin}
        />
      </div>
    </Box>
  )
}

export default BecomeSellerstep1CD;
