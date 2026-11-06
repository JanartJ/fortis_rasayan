import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Alert,
  CircularProgress,
  Grid,
  MenuItem
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SendIcon from '@mui/icons-material/Send';
import { products } from '../data/productsData';

export default function EnquiryModal({ open, onClose, initialProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productName: '',
    quantity: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        productName: initialProduct.name
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        productName: ''
      }));
    }
    setSubmitted(false);
    setError('');
  }, [initialProduct, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields (Name, Email, Phone).');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate backend processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productName: '',
      quantity: '',
      message: '',
    });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 1
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#0B3C7D' }}>
            Request Quotation & Product Enquiry
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Fortis Rasayan Pvt. Ltd. • Fast response within 2-4 business hours
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ pt: 2 }}>
        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 64, color: '#059669', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>
              Enquiry Received!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Thank you, <strong>{formData.name}</strong>. Our commercial and technical sourcing team will review your requirement for <strong>{formData.productName || 'chemical products'}</strong> and reach out to you shortly.
            </Typography>
            <Box sx={{ bgcolor: '#F1F5F9', p: 2, borderRadius: 2, display: 'inline-block', mb: 3 }}>
              <Typography variant="caption" sx={{ color: '#475569', display: 'block' }}>
                Enquiry Reference ID:
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0B3C7D', letterSpacing: '0.05em' }}>
                FR-ENQ-2026-{Math.floor(100000 + Math.random() * 900000)}
              </Typography>
            </Box>
            <Box>
              <Button variant="contained" color="primary" onClick={handleReset}>
                Done
              </Button>
            </Box>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  size="small"
                  label="Contact Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Company / Enterprise"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Apex Engineering Ltd."
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  size="small"
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  size="small"
                  label="Phone / Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98410 XXXXX"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  label="Chemical Product of Interest"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  helperText="Select a product or choose 'Other / Custom Sourcing'"
                >
                  <MenuItem value="">-- Select Product --</MenuItem>
                  {products.map((p) => (
                    <MenuItem key={p.id} value={p.name}>
                      {p.name} ({p.grade})
                    </MenuItem>
                  ))}
                  <MenuItem value="Other / Custom Chemical Sourcing">
                    * Other / Custom Chemical Sourcing
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="Estimated Quantity / Packaging Needed"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 5 MT Bulk Tanker / 20 Drums / 500 Liters"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                  label="Specific Requirements / Delivery Location / Specs"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention target grade, purity, required delivery timeline or test certificate requests..."
                />
              </Grid>
            </Grid>

            <DialogActions sx={{ px: 0, pt: 3, pb: 0 }}>
              <Button onClick={onClose} color="inherit" disabled={loading}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                disabled={loading}
                sx={{ px: 3 }}
              >
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            </DialogActions>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
