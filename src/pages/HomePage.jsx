import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
  Paper
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShieldCheckIcon from '@mui/icons-material/Verified';
import SyncIcon from '@mui/icons-material/Loop';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ScienceIcon from '@mui/icons-material/Science';
import MemoryIcon from '@mui/icons-material/Memory';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SendIcon from '@mui/icons-material/Send';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { companyInfo } from '../data/companyInfo';
import { products } from '../data/productsData';
import ProductCard from '../components/ProductCard';

export default function HomePage({ setActivePage, onOpenQuote, onSelectProduct, onViewProductDetails }) {
  // Take first 4 representative products for showcase
  const featuredProducts = products.slice(0, 4);

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. HERO SECTION */}
      <Box className="hero-gradient" sx={{ color: 'white', pt: { xs: 8, md: 12 }, pb: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              {/* Trust Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  borderRadius: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  mb: 3
                }}
              >
                <ShieldCheckIcon sx={{ color: '#38BDF8', fontSize: 18 }} />
                <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.04em', color: '#BAE6FD', textTransform: 'uppercase' }}>
                  Promoted by Raju Chemical Industries (Since 1980)
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.75rem' },
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  mb: 2.5
                }}
              >
                Reliable Chemical Solutions.{' '}
                <Box component="span" sx={{ color: '#38BDF8', display: 'block' }}>
                  Trusted Business Partnerships.
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  color: '#E2E8F0',
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 620
                }}
              >
                Fortis Rasayan Pvt. Ltd. is a Chennai-based chemical enterprise established to supply high-performance industrial, laboratory, and process chemicals to corporate and manufacturing clients across India.
              </Typography>

              {/* Action Buttons */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    setActivePage('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#0B3C7D',
                    fontWeight: 700,
                    px: 3.5,
                    py: 1.4,
                    '&:hover': {
                      backgroundColor: '#F1F5F9',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Explore Products
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={onOpenQuote}
                  endIcon={<SendIcon />}
                  sx={{
                    borderColor: 'rgba(255,255,255,0.7)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    px: 3.5,
                    py: 1.4,
                    '&:hover': {
                      borderColor: '#FFFFFF',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Request a Quote
                </Button>
              </Stack>

              {/* Mini Highlights */}
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#38BDF8' }}>
                      1980
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#CBD5E1' }}>
                      Promoter Heritage
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#38BDF8' }}>
                      COA & MSDS
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#CBD5E1' }}>
                      Certified Quality
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#38BDF8' }}>
                      Chennai Hub
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#CBD5E1' }}>
                      Industrial Estate
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Hero Visual Card */}
            <Grid item xs={12} md={5}>
              <Box
                className="animate-float"
                sx={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: 4,
                  p: { xs: 3, sm: 4 },
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    component="img"
                    src="/fortis-logo.jpg"
                    alt="Logo"
                    sx={{ height: 48, borderRadius: 1.5, bgcolor: 'white', p: 0.5 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                      Fortis Rasayan Pvt. Ltd.
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#BAE6FD', fontWeight: 600 }}>
                      CIN: {companyInfo.details.cin}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ color: '#E2E8F0', lineHeight: 1.6, mb: 3 }}>
                  Our objective is to provide customers with quality products, dependable supply, and responsive service, helping them maintain continuity and efficiency in their operations.
                </Typography>

                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <CheckCircleIcon sx={{ color: '#38BDF8', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      Industrial & Commercial Grade Chemicals
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <CheckCircleIcon sx={{ color: '#38BDF8', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      Semiconductor & High-Purity Reagents
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <CheckCircleIcon sx={{ color: '#38BDF8', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      Advanced Surface Treatment Formulations
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <CheckCircleIcon sx={{ color: '#38BDF8', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      Bulk Tanker & Packaging Solutions
                    </Typography>
                  </Box>
                </Stack>

                <Box sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block' }}>
                      Direct Hotline
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#38BDF8' }}>
                      +91 99419 24488
                    </Typography>
                  </Box>
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => {
                      setActivePage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    sx={{ color: '#FFFFFF', fontWeight: 600 }}
                  >
                    Contact Office →
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. CORE PILLARS / GUIDING PRINCIPLES */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 7 }}>
            <Chip
              label="Our Fundamental Principles"
              size="small"
              sx={{ bgcolor: 'rgba(11, 60, 125, 0.08)', color: '#0B3C7D', fontWeight: 700, mb: 1.5 }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 2 }}>
              A Commitment Built on Trust & Quality
            </Typography>
            <Typography variant="body1" color="text.secondary">
              At Fortis Rasayan, we believe that a successful business relationship goes beyond supplying products. Our business is guided by three fundamental principles.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {companyInfo.principles.map((principle, index) => {
              const icons = [
                <ShieldCheckIcon sx={{ fontSize: 36, color: '#0B3C7D' }} key="1" />,
                <SyncIcon sx={{ fontSize: 36, color: '#0B3C7D' }} key="2" />,
                <SupportAgentIcon sx={{ fontSize: 36, color: '#0B3C7D' }} key="3" />
              ];
              return (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    className="card-hover-effect"
                    sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: 3,
                      border: '1px solid rgba(11, 60, 125, 0.1)',
                      bgcolor: '#F8FAFC',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2.5,
                        bgcolor: 'rgba(11, 60, 125, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5
                      }}
                    >
                      {icons[index]}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#0B3C7D', mb: 1.5 }}>
                      {principle.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                      {principle.description}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 3. HERITAGE & EXPERIENCE BANNER */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#F1F5F9', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="Decades of Chemical Heritage"
                size="small"
                sx={{ bgcolor: 'rgba(11, 60, 125, 0.1)', color: '#0B3C7D', fontWeight: 700, mb: 1.5 }}
              />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 2 }}>
                Backed by Raju Chemical Industries
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#475569', fontWeight: 600, mb: 2 }}>
                Serving the Chemical Industry with Distinction Since 1980
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                Our association with Raju Chemical Industries, which has been serving the chemical industry since 1980, provides Fortis Rasayan with a strong foundation in the chemical business.
              </Typography>

              <Stack spacing={1.5} sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#0B3C7D', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                    Consistent product quality across every consignment
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#0B3C7D', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                    Reliable and timely supply with dedicated logistics
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#0B3C7D', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                    Deep understanding of specific industrial requirements
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#0B3C7D', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                    Building lasting partnerships with reputed organizations
                  </Typography>
                </Box>
              </Stack>

              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Learn About Our Heritage
              </Button>
            </Grid>

            {/* Experience Card */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: '#FFFFFF',
                  border: '1px solid rgba(11, 60, 125, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, bgcolor: 'rgba(11, 60, 125, 0.04)', borderRadius: '0 0 0 100%' }} />
                
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 2 }}>
                  Our Promise
                </Typography>
                <Typography variant="h6" sx={{ color: '#0284C7', fontWeight: 700, mb: 2 }}>
                  Quality Products. Reliable Supply. Responsive Service.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  At Fortis Rasayan Pvt. Ltd., we aim to be a dependable partner for your chemical requirements—supporting your business with professionalism, consistency, and a commitment to long-term relationships.
                </Typography>

                <Divider sx={{ my: 2.5 }} />

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      Registered Office
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                      Vanagaram, Chennai
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      Incorporation Year
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                      2026 (Private Limited)
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. FEATURED CHEMICAL PRODUCTS */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, mb: 6, gap: 2 }}>
            <Box>
              <Chip
                label="Chemical Catalog"
                size="small"
                sx={{ bgcolor: 'rgba(11, 60, 125, 0.08)', color: '#0B3C7D', fontWeight: 700, mb: 1.5 }}
              />
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 1 }}>
                Featured Chemical Products
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Industrial, laboratory, and high-purity process chemicals with complete COA and MSDS documentation.
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setActivePage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              endIcon={<ArrowForwardIcon />}
              sx={{ whiteSpace: 'nowrap' }}
            >
              View All Products
            </Button>
          </Box>

          <Grid container spacing={3}>
            {featuredProducts.map((prod) => (
              <Grid item xs={12} sm={6} md={3} key={prod.id}>
                <ProductCard
                  product={prod}
                  onViewDetails={onViewProductDetails}
                  onEnquire={onSelectProduct}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. LEADERSHIP & INNOVATION HIGHLIGHT */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 750, mx: 'auto', mb: 6 }}>
            <Chip
              label="Promoter Background & Leadership"
              size="small"
              sx={{ bgcolor: 'rgba(11, 60, 125, 0.08)', color: '#0B3C7D', fontWeight: 700, mb: 1.5 }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 2 }}>
              Experience That Builds Trust. Vision That Drives the Future.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Fortis Rasayan brings together two complementary strengths: decades of established industry experience and a new generation of technical vision.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Mr. R. Damodara Raju */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid rgba(11, 60, 125, 0.12)',
                  bgcolor: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(11, 60, 125, 0.06)'
                }}
              >
                <Chip
                  label="Established Industry Experience"
                  color="primary"
                  size="small"
                  sx={{ mb: 2, fontWeight: 700 }}
                />
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 0.5 }}>
                  Mr. R. Damodara Raju
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#5A6578', fontWeight: 600, mb: 2 }}>
                  Founder – Raju Chemical Industries (Est. 1980)
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  Over four decades of extensive leadership in the manufacture and distribution of industrial chemicals, laboratory chemicals, and process chemicals across South India. A deep understanding of product quality, industrial applications, customer requirements, and the importance of purity and consistency.
                </Typography>

                <Stack spacing={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ color: '#059669', fontSize: 18 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: '#1E293B' }}>
                      4+ Decades of Chemical Industry Track Record
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ color: '#059669', fontSize: 18 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: '#1E293B' }}>
                      Established Supply Chain Across South India
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* D. Priyadarshini */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid rgba(11, 60, 125, 0.12)',
                  bgcolor: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(11, 60, 125, 0.06)'
                }}
              >
                <Chip
                  label="New-Generation Technical Vision"
                  color="info"
                  size="small"
                  sx={{ mb: 2, fontWeight: 700 }}
                />
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 0.5 }}>
                  D. Priyadarshini
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#0284C7', fontWeight: 600, mb: 2 }}>
                  B.Tech. – Chemical Engineering | Technical Leadership
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  Brings a strong technical foundation and innovation-focused mindset to Fortis Rasayan. Driving the company's vision towards emerging and technically demanding chemical sectors, specializing in surface treatment chemistry and high-performance semiconductor applications.
                </Typography>

                <Stack spacing={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ color: '#0284C7', fontSize: 18 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: '#1E293B' }}>
                      Chemical Engineering & Process Innovation
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ color: '#0284C7', fontSize: 18 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: '#1E293B' }}>
                      Specialized Solutions for Surface Treatment & Semiconductors
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6. INDUSTRIES SERVED */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 6 }}>
            <Chip
              label="Sectors & Sectors We Cater To"
              size="small"
              sx={{ bgcolor: 'rgba(11, 60, 125, 0.08)', color: '#0B3C7D', fontWeight: 700, mb: 1.5 }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 2 }}>
              Serving Diverse Industrial Segments
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Providing customized and certified chemical solutions to high-precision manufacturing, testing facilities, and corporate operations.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {companyInfo.industries.map((ind, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: '#F8FAFC',
                    borderRadius: 2.5,
                    border: '1px solid #E2E8F0',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: '#0B3C7D',
                      boxShadow: '0 8px 25px rgba(11, 60, 125, 0.08)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0B3C7D', mb: 1 }}>
                    {ind.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {ind.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 7. BOTTOM CTA CALLOUT */}
      <Box sx={{ py: { xs: 8, md: 9 }, bgcolor: '#062551', color: 'white' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <AutoAwesomeIcon sx={{ fontSize: 40, color: '#38BDF8', mb: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#FFFFFF' }}>
            Looking for a Dependable Chemical Partner?
          </Typography>
          <Typography variant="body1" sx={{ color: '#CBD5E1', mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
            Speak with our technical and sourcing team today to discuss your chemical requirements, request batch samples, or receive a formal commercial quotation.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={onOpenQuote}
              endIcon={<SendIcon />}
              sx={{
                bgcolor: '#38BDF8',
                color: '#062551',
                fontWeight: 800,
                px: 4,
                py: 1.5,
                '&:hover': { bgcolor: '#7DD3FC' }
              }}
            >
              Request Commercial Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              startIcon={<PhoneInTalkIcon />}
              sx={{
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              Contact Chennai Office
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
