import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  Chip
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { companyInfo } from '../data/companyInfo';
import { categories } from '../data/productsData';

export default function Footer({ setActivePage, setSelectedCategory }) {
  const handleNav = (pageId, category = null) => {
    setActivePage(pageId);
    if (category && setSelectedCategory) {
      setSelectedCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#061D42',
        color: '#E2E8F0',
        pt: 8,
        pb: 4,
        borderTop: '3px solid #0B3C7D',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: Brand & Legacy */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                component="img"
                src="/fortis-logo.jpg"
                alt="Fortis Rasayan Logo"
                sx={{
                  height: 48,
                  backgroundColor: 'white',
                  p: 0.5,
                  borderRadius: 1.5
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  FORTIS RASAYAN
                </Typography>
                <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 600, letterSpacing: '0.05em' }}>
                  PVT. LTD.
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: '#94A3B8', lineHeight: 1.7, mb: 2 }}>
              Reliable Chemical Solutions. Trusted Business Partnerships. Established to meet diverse industrial, laboratory, and high-purity chemical requirements.
            </Typography>

            <Box sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.04)', borderRadius: 2, border: '1px solid rgba(255, 255, 255, 0.08)', mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#38BDF8', fontWeight: 700, display: 'block', mb: 0.5 }}>
                PROMOTED BY RAJU CHEMICAL INDUSTRIES
              </Typography>
              <Typography variant="caption" sx={{ color: '#CBD5E1', display: 'block', lineHeight: 1.5 }}>
                Serving the chemical industry with manufacturing & distribution excellence across South India since 1980.
              </Typography>
            </Box>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase', mb: 2.5 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.2}>
              <Link
                component="button"
                onClick={() => handleNav('home')}
                sx={{ color: '#94A3B8', textAlign: 'left', textDecoration: 'none', '&:hover': { color: '#38BDF8' } }}
              >
                Home Page
              </Link>
              <Link
                component="button"
                onClick={() => handleNav('products')}
                sx={{ color: '#94A3B8', textAlign: 'left', textDecoration: 'none', '&:hover': { color: '#38BDF8' } }}
              >
                Chemical Products
              </Link>
              <Link
                component="button"
                onClick={() => handleNav('about')}
                sx={{ color: '#94A3B8', textAlign: 'left', textDecoration: 'none', '&:hover': { color: '#38BDF8' } }}
              >
                About Our Heritage
              </Link>
              <Link
                component="button"
                onClick={() => handleNav('about')}
                sx={{ color: '#94A3B8', textAlign: 'left', textDecoration: 'none', '&:hover': { color: '#38BDF8' } }}
              >
                Leadership & Vision
              </Link>
              <Link
                component="button"
                onClick={() => handleNav('contact')}
                sx={{ color: '#94A3B8', textAlign: 'left', textDecoration: 'none', '&:hover': { color: '#38BDF8' } }}
              >
                Enquiry & Contact
              </Link>
            </Stack>
          </Grid>

          {/* Column 3: Product Categories */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase', mb: 2.5 }}>
              Product Categories
            </Typography>
            <Stack spacing={1.2}>
              {categories.slice(1).map((cat, idx) => (
                <Link
                  key={idx}
                  component="button"
                  onClick={() => handleNav('products', cat)}
                  sx={{
                    color: '#94A3B8',
                    textAlign: 'left',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8,
                    fontSize: '0.85rem',
                    '&:hover': { color: '#38BDF8' }
                  }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 9, opacity: 0.6 }} />
                  {cat}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact & Registered Office */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase', mb: 2.5 }}>
              Registered Office
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.2, mb: 2 }}>
              <LocationOnIcon sx={{ color: '#38BDF8', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
              <Typography variant="caption" sx={{ color: '#94A3B8', lineHeight: 1.6 }}>
                <strong>Fortis Rasayan Pvt. Ltd.</strong><br />
                {companyInfo.details.registeredOffice}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1.2, mb: 1.5 }}>
              <PhoneIcon sx={{ color: '#38BDF8', fontSize: 18, mt: 0.3, flexShrink: 0 }} />
              <Box>
                {companyInfo.details.phones.map((phone, i) => (
                  <Typography key={i} variant="caption" sx={{ display: 'block', color: '#CBD5E1' }}>
                    <a
                      href={`tel:${companyInfo.details.rawPhones[i]}`}
                      style={{ color: '#CBD5E1', textDecoration: 'none' }}
                    >
                      {phone}
                    </a>
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1.2, mb: 2.5 }}>
              <EmailIcon sx={{ color: '#38BDF8', fontSize: 18, mt: 0.3, flexShrink: 0 }} />
              <Typography variant="caption">
                <a
                  href={`mailto:${companyInfo.details.email}`}
                  style={{ color: '#38BDF8', textDecoration: 'none' }}
                >
                  {companyInfo.details.email}
                </a>
              </Typography>
            </Box>

            {/* Statutory CIN / GSTIN Box */}
            <Box sx={{ p: 1.5, bgcolor: 'rgba(2, 132, 199, 0.1)', borderRadius: 2, border: '1px solid rgba(2, 132, 199, 0.2)' }}>
              <Typography variant="caption" sx={{ display: 'block', color: '#94A3B8', fontSize: '0.72rem' }}>
                CIN: <strong style={{ color: '#FFFFFF' }}>{companyInfo.details.cin}</strong>
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', color: '#94A3B8', fontSize: '0.72rem' }}>
                GSTIN: <strong style={{ color: '#FFFFFF' }}>{companyInfo.details.gstin}</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            color: '#64748B',
            fontSize: '0.8rem'
          }}
        >
          <Typography variant="caption">
            © {new Date().getFullYear()} Fortis Rasayan Pvt. Ltd. All rights reserved. Backed by Raju Chemical Industries (Since 1980).
          </Typography>
          <Typography variant="caption">
            ISO / Quality Standard Compliant • COA & MSDS Provided with All Dispatches
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
