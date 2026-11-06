import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
  Stack,
  Divider,
  Chip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import VerifiedIcon from '@mui/icons-material/Verified';
import { companyInfo } from '../data/companyInfo';

const navItems = [
  { label: 'Home', pageId: 'home' },
  { label: 'Products', pageId: 'products' },
  { label: 'About Us', pageId: 'about' },
  { label: 'Quality & Service', pageId: 'about', sectionId: 'quality-service' },
  { label: 'Contact Us', pageId: 'contact' },
];

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (pageId, sectionId) => {
    setActivePage(pageId);
    setMobileOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <Box
        sx={{
          backgroundColor: '#062551',
          color: '#E2E8F0',
          py: 0.8,
          fontSize: '0.82rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <PhoneIcon sx={{ fontSize: 15, color: '#38BDF8' }} />
                <span>Enquiries: </span>
                <a
                  href={`tel:${companyInfo.details.rawPhones[0]}`}
                  style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600 }}
                >
                  {companyInfo.details.phones[0]}
                </a>
                <span style={{ opacity: 0.6 }}>/</span>
                <a
                  href={`tel:${companyInfo.details.rawPhones[1]}`}
                  style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600 }}
                >
                  {companyInfo.details.phones[1]}
                </a>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <EmailIcon sx={{ fontSize: 15, color: '#38BDF8' }} />
                <a
                  href={`mailto:${companyInfo.details.email}`}
                  style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 500 }}
                >
                  {companyInfo.details.email}
                </a>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, opacity: 0.9 }}>
                <LocationOnIcon sx={{ fontSize: 15, color: '#38BDF8' }} />
                <span>Vanagaram, Chennai</span>
              </Box>
              <Chip
                label="Promoted by Raju Chemical Industries (Est. 1980)"
                size="small"
                sx={{
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  color: '#BAE6FD',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation Bar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#0F172A',
          boxShadow: '0 4px 20px -2px rgba(11, 60, 125, 0.08)',
          borderBottom: '1px solid rgba(11, 60, 125, 0.08)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 78 } }}>
            {/* Logo and Brand Name */}
            <Box
              onClick={() => handleNavClick('home')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                flexGrow: { xs: 1, md: 0 },
                mr: 4
              }}
            >
              <Box
                component="img"
                src="/fortis-logo.jpg"
                alt="Fortis Rasayan Pvt. Ltd."
                sx={{
                  height: { xs: 44, md: 52 },
                  width: 'auto',
                  borderRadius: 1,
                  objectFit: 'contain'
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#0B3C7D',
                    fontSize: { xs: '1.05rem', sm: '1.25rem' }
                  }}
                >
                  FORTIS RASAYAN
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#5A6578'
                  }}
                >
                  Pvt. Ltd. • Chemical Solutions
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, flexGrow: 1 }}>
              {navItems.map((item, idx) => {
                const isActive = activePage === item.pageId && !item.sectionId;
                return (
                  <Button
                    key={idx}
                    onClick={() => handleNavClick(item.pageId, item.sectionId)}
                    sx={{
                      color: isActive ? '#0B3C7D' : '#475569',
                      fontWeight: isActive ? 700 : 500,
                      position: 'relative',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(11, 60, 125, 0.05)',
                        color: '#0B3C7D',
                      },
                      '&::after': isActive ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '20%',
                        width: '60%',
                        height: 2.5,
                        backgroundColor: '#0B3C7D',
                        borderRadius: 2,
                      } : {}
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* CTA Button */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon sx={{ fontSize: '16px !important' }} />}
                onClick={onOpenQuote}
                sx={{
                  px: 2.8,
                  py: 1,
                  boxShadow: '0 4px 14px rgba(11, 60, 125, 0.25)',
                }}
              >
                Request Quote
              </Button>
            </Box>

            {/* Mobile Hamburger Menu Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1, color: '#0B3C7D' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 290,
            p: 2,
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                component="img"
                src="/fortis-logo.jpg"
                alt="Logo"
                sx={{ height: 36, width: 'auto' }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0B3C7D' }}>
                Fortis Rasayan
              </Typography>
            </Box>
            <IconButton onClick={handleDrawerToggle} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />

          <List sx={{ pt: 0 }}>
            {navItems.map((item, idx) => {
              const isActive = activePage === item.pageId && !item.sectionId;
              return (
                <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => handleNavClick(item.pageId, item.sectionId)}
                    sx={{
                      borderRadius: 2,
                      backgroundColor: isActive ? 'rgba(11, 60, 125, 0.08)' : 'transparent',
                      color: isActive ? '#0B3C7D' : '#334155',
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 700 : 500,
                        fontSize: '0.95rem'
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box sx={{ mt: 3 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={() => {
                setMobileOpen(false);
                onOpenQuote();
              }}
              sx={{ py: 1.2 }}
            >
              Request Quote
            </Button>
          </Box>
        </Box>

        <Box sx={{ bgcolor: '#F8FAFC', p: 2, borderRadius: 2, border: '1px solid #E2E8F0', mt: 3 }}>
          <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mb: 0.5, fontWeight: 600 }}>
            Quick Support:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, color: '#0B3C7D' }}>
            +91 99419 24488
          </Typography>
          <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
            info@fortisrasayan.com
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
