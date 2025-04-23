import { Box, Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

function AddressForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form Submitted Successfully');
  };

  return (
    <Box sx={{ minWidth: 250, maxWidth: 400, margin: 'auto', padding: 4, boxShadow: 3, borderRadius: 2 }}>
      <p className='text-xl font-bold text-center pb-5'>Contact Details</p>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" name='name' value={formData.name} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" type='email' name='email' value={formData.email} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone" type='tel' name='phone' value={formData.phone} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" name='address' value={formData.address} onChange={handleChange} required />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="City" name='city' value={formData.city} onChange={handleChange} required />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="ZIP Code" name='zip' value={formData.zip} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant='contained' color='primary' type='submit'>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default AddressForm;