import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Chip,
  Stack,
  Alert,
  CircularProgress,
  MenuItem,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { companyInfo } from '../data/companyInfo';
import { products } from '../data/productsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please provide your Name, Email, and Phone number.');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate enquiry submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      product: '',
      quantity: '',
      message: ''
    });
  };

  return (
    <Box sx={{ bgcolor: '#F8FAFC', pb: 12 }}>
      {/* 1. Header Banner */}
      <Box
        className="hero-gradient"
        sx={{
          color: 'white',
          pt: { xs: 7, md: 9 },
          pb: { xs: 8, md: 10 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Chip
            label="Get in Touch"
            size="small"
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.15)',
              color: '#BAE6FD',
              fontWeight: 700,
              mb: 2
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.2rem', sm: '3rem' },
              mb: 2,
              color: '#FFFFFF'
            }}
          >
            Contact Fortis Rasayan
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 660, mx: 'auto' }}>
            Reach out to our Chennai headquarters for product enquiries, technical data sheets, bulk pricing, or long-term industrial supply partnerships.
          </Typography>
        </Container>
      </Box>

      {/* 2. Main Content Grid */}
      <Container maxWidth="lg" sx={{ mt: -4, position: 'relative', zIndex: 10 }}>
        <Grid container spacing={4}>
          {/* Left: Contact Info & Address */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  bgcolor: '#FFFFFF',
                  border: '1px solid rgba(11, 60, 125, 0.1)'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 3 }}>
                  Registered Office
                </Typography>

                {/* Address Box */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: 'rgba(11, 60, 125, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <LocationOnIcon sx={{ color: '#0B3C7D' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                      {companyInfo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mt: 0.5 }}>
                      No. 40, Krishna Industrial Estate<br />
                      Balamurugan Koil Street<br />
                      Vanagaram, Chennai – 600095<br />
                      Tamil Nadu, India
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2.5 }} />

                {/* Phone Numbers */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: 'rgba(11, 60, 125, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <PhoneIcon sx={{ color: '#0B3C7D' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5 }}>
                      Direct Phone Hotlines
                    </Typography>
                    {companyInfo.details.phones.map((phone, idx) => (
                      <Typography key={idx} variant="body2" sx={{ display: 'block', mb: 0.3 }}>
                        <a
                          href={`tel:${companyInfo.details.rawPhones[idx]}`}
                          style={{ color: '#0B3C7D', textDecoration: 'none', fontWeight: 600 }}
                        >
                          {phone}
                        </a>
                      </Typography>
                    ))}
                  </Box>
                </Box>

                <Divider sx={{ my: 2.5 }} />

                {/* Email Box */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: 'rgba(11, 60, 125, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <EmailIcon sx={{ color: '#0B3C7D' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5 }}>
                      Email Inquiries
                    </Typography>
                    <Typography variant="body2">
                      <a
                        href={`mailto:${companyInfo.details.email}`}
                        style={{ color: '#0284C7', textDecoration: 'none', fontWeight: 600 }}
                      >
                        {companyInfo.details.email}
                      </a>
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Response within 2-4 business hours
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2.5 }} />

                {/* Working Hours */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: 'rgba(11, 60, 125, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <AccessTimeIcon sx={{ color: '#0B3C7D' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 0.5 }}>
                      Working Hours
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {companyInfo.details.workingHours}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Statutory verification card */}
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: '#062551',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <VerifiedUserIcon sx={{ color: '#38BDF8' }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                    Corporate Credentials
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block', mb: 0.5 }}>
                  CIN: <strong style={{ color: '#FFFFFF' }}>{companyInfo.details.cin}</strong>
                </Typography>
                <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block', mb: 1 }}>
                  GSTIN: <strong style={{ color: '#FFFFFF' }}>{companyInfo.details.gstin}</strong>
                </Typography>
                <Typography variant="caption" sx={{ color: '#BAE6FD', display: 'block' }}>
                  Promoted By: <strong>{companyInfo.details.promotedBy}</strong>
                </Typography>
              </Paper>
            </Stack>
          </Grid>

          {/* Right: Enquiry Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={4}
              sx={{
                p: { xs: 3.5, sm: 5 },
                borderRadius: 3,
                bgcolor: '#FFFFFF',
                border: '1px solid rgba(11, 60, 125, 0.12)',
                boxShadow: '0 12px 32px rgba(11, 60, 125, 0.08)'
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Chip
                  label="Official Commercial Channel"
                  size="small"
                  color="primary"
                  sx={{ fontWeight: 700, mb: 1 }}
                />
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 1 }}>
                  Send an Enquiry
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Complete this form to request commercial rates, technical data sheets (TDS), or discuss long-term supply arrangements.
                </Typography>
              </Box>

              {submitted ? (
                <Box sx={{ textAlign: 'center', py: 5 }}>
                  <CheckCircleOutlineIcon sx={{ fontSize: 72, color: '#059669', mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', mb: 1.5 }}>
                    Enquiry Submitted Successfully!
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480, mx: 'auto', mb: 3 }}>
                    Thank you, <strong>{formData.name}</strong> from <strong>{formData.company || 'your organization'}</strong>. Your enquiry for <strong>{formData.product || 'chemical products'}</strong> has been routed to our Chennai sales and technical dispatch office.
                  </Typography>

                  <Box sx={{ bgcolor: '#F8FAFC', p: 2.5, borderRadius: 2, display: 'inline-block', mb: 4, border: '1px solid #E2E8F0' }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      Enquiry Reference ID:
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#0B3C7D', letterSpacing: '0.06em' }}>
                      FR-CH-{Math.floor(100000 + Math.random() * 900000)}
                    </Typography>
                  </Box>

                  <Box>
                    <Button variant="contained" color="primary" onClick={handleReset} sx={{ px: 4 }}>
                      Send Another Enquiry
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {error}
                    </Alert>
                  )}

                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Your Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company / Enterprise Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Delta Manufacturing Ltd."
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        type="email"
                        label="Work Email Address"
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
                        label="Contact Phone / Mobile Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98410 XXXXX"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        label="Chemical Product of Interest"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        helperText="Select from catalog or choose custom sourcing"
                      >
                        <MenuItem value="">-- Select Product --</MenuItem>
                        {products.map((p) => (
                          <MenuItem key={p.id} value={p.name}>
                            {p.name} ({p.grade.split('(')[0]})
                          </MenuItem>
                        ))}
                        <MenuItem value="Other Industrial Chemicals">
                          * Other Industrial Chemicals
                        </MenuItem>
                        <MenuItem value="Custom Semiconductor Chemistry">
                          * Custom Semiconductor Chemistry
                        </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Estimated Volume / Packaging"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 10 MT Tanker / 25 Carboys"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Detailed Requirements / Specifications / Delivery Location"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mention required grade, purity %, delivery frequency, test certificate demands, etc..."
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 3.5, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={loading}
                      endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                      sx={{ px: 4, py: 1.4 }}
                    >
                      {loading ? 'Submitting Enquiry...' : 'Submit Commercial Enquiry'}
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
