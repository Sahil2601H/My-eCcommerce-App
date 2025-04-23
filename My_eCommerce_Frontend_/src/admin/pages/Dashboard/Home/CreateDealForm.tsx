import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function CreateDealForm() {
  const [formData, setFormData] = React.useState({
    dealName: '',
    category: '',
    discount: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Deal submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <Box sx={{ 
      maxWidth: 600, 
      mx: 'auto', 
      p: 3, 
      boxShadow: 3, 
      borderRadius: 2, 
      bgcolor: 'background.paper',
      mt: 4
    }}>
      <Typography variant="h5" component="h2" sx={{ 
        fontWeight: 'bold', 
        textAlign: 'center', 
        mb: 3, 
        color: 'primary.main' 
      }}>
        Create New Deal
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Deal Name */}
          <TextField
            fullWidth
            label="Deal Name"
            name="dealName"
            value={formData.dealName}
            onChange={handleChange}
            required
          />

          {/* Category and Discount Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              sx={{ flex: 1 }}
            />
            <TextField
              fullWidth
              label="Discount (%)"
              name="discount"
              type="number"
              value={formData.discount}
              onChange={handleChange}
              required
              sx={{ flex: 1 }}
            />
          </Box>

          {/* Date Row */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              label="Start Date"
              name="startDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.startDate}
              onChange={handleChange}
              required
              sx={{ flex: 1 }}
            />
            <TextField
              fullWidth
              label="End Date"
              name="endDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.endDate}
              onChange={handleChange}
              required
              sx={{ flex: 1 }}
            />
          </Box>

          {/* Description */}
          <TextField
            fullWidth
            label="Description"
            name="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              py: 2,
              borderRadius: 1,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 'medium',
              boxShadow: 'none',
              background: 'linear-gradient(to right, #3b82f6, #1d4ed8)',
              '&:hover': {
                background: 'linear-gradient(to right, #2563eb, #1e40af)',
                boxShadow: 'none'
              }
            }}
          >
            Create Deal
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CreateDealForm;