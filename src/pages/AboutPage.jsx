import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ScienceIcon from '@mui/icons-material/Science';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SendIcon from '@mui/icons-material/Send';
import { companyInfo } from '../data/companyInfo';

export default function AboutPage({ setActivePage, onOpenQuote }) {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', pb: 12 }}>
      {/* 1. HERO BANNER */}
      <Box className="hero-gradient" sx={{ color: 'white', pt: { xs: 7, md: 10 }, pb: { xs: 8, md: 11 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Chip
            label="Corporate Profile & Heritage"
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
            About Fortis Rasayan Pvt. Ltd.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#38BDF8',
              fontWeight: 600,
              fontSize: { xs: '1.1rem', sm: '1.35rem' },
              mb: 3
            }}
          >
            Reliable Chemical Solutions. Trusted Business Partnerships.
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 720, mx: 'auto' }}>
            A Chennai-based private limited enterprise promoted by Raju Chemical Industries (est. 1980), carrying forward four decades of proven industry experience, technical know-how, and customer-focused chemical sourcing.
          </Typography>
        </Container>
      </Box>

      {/* 2. OVERVIEW & APPROACH */}
      <Container maxWidth="lg" sx={{ mt: -4, position: 'relative', zIndex: 2, mb: 10 }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3.5, md: 6 },
            borderRadius: 4,
            bgcolor: '#FFFFFF',
            border: '1px solid rgba(11, 60, 125, 0.12)'
          }}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Chip
                label="Our Foundation"
                size="small"
                sx={{ bgcolor: 'rgba(11, 60, 125, 0.08)', color: '#0B3C7D', fontWeight: 700, mb: 1.5 }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 2.5 }}>
                Decades of Experience, Modern Innovation
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                {companyInfo.fullAbout}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                We understand that chemicals play a critical role in manufacturing and industrial processes. Our objective is to provide customers with quality products, dependable supply, and responsive service, helping them maintain continuity and efficiency in their operations.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, bgcolor: '#F8FAFC', borderRadius: 3, border: '1px solid #E2E8F0', height: '100%' }}>
                <Chip
                  label="Our Approach & Philosophy"
                  size="small"
                  color="primary"
                  sx={{ fontWeight: 700, mb: 2 }}
                />
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 2 }}>
                  Beyond Supplying Products
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  {companyInfo.approach}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0B3C7D', mb: 1 }}>
                  Our Promise:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#0284C7', lineHeight: 1.6 }}>
                  {companyInfo.promise}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* 3. PROMOTER BACKGROUND & LEADERSHIP */}
      <Box sx={{ py: 6, mb: 8, bgcolor: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 780, mx: 'auto', mb: 7 }}>
            <Chip
              label="Promoter Background & Leadership"
              size="small"
              sx={{ bgcolor: 'rgba(11, 60, 125, 0.08)', color: '#0B3C7D', fontWeight: 700, mb: 1.5 }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 2 }}>
              Experience That Builds Trust. Vision That Drives the Future.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Fortis Rasayan Pvt. Ltd. is built on a strong foundation of decades of experience in the chemical industry, combined with a new generation of technical expertise and a forward-looking approach to chemical solutions.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Mr. R. Damodara Raju */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid rgba(11, 60, 125, 0.12)',
                  bgcolor: '#F8FAFC',
                  p: { xs: 3.5, sm: 4.5 }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      bgcolor: '#0B3C7D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    <BusinessIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B3C7D' }}>
                      Mr. R. Damodara Raju
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#5A6578', fontWeight: 600 }}>
                      Founder – Raju Chemical Industries
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  Raju Chemical Industries, established in 1980 by Mr. R. Damodara Raju, has built extensive experience in the chemical industry over more than four decades. The company has served customers across South India through its involvement in the manufacture and distribution of industrial chemicals, laboratory chemicals, and process chemicals.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  Under his leadership, the organization has developed a strong understanding of chemical products, industrial applications, customer requirements, and the importance of purity, quality, consistency, and reliability. This long-standing industry experience forms the foundation on which Fortis Rasayan Pvt. Ltd. is being developed.
                </Typography>

                <Box sx={{ p: 2, bgcolor: '#FFFFFF', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#0B3C7D', textTransform: 'uppercase', display: 'block', mb: 1 }}>
                    Key Strengths:
                  </Typography>
                  <Stack spacing={0.8}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: '#059669', fontSize: 16 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155' }}>
                        Over 40 years of chemical manufacturing & trading leadership
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: '#059669', fontSize: 16 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155' }}>
                        Deep understanding of customer specifications & industrial supply chains
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: '#059669', fontSize: 16 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155' }}>
                        Unshakable reputation for purity, consistency, and ethics
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Grid>

            {/* D. Priyadarshini */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid rgba(11, 60, 125, 0.12)',
                  bgcolor: '#F8FAFC',
                  p: { xs: 3.5, sm: 4.5 }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      bgcolor: '#0284C7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    <EngineeringIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B3C7D' }}>
                      D. Priyadarshini
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#0284C7', fontWeight: 600 }}>
                      B.Tech. – Chemical Engineering | Technical & Next-Generation Leadership
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  D. Priyadarshini, a B.Tech. Chemical Engineering graduate, brings a strong technical foundation and a fresh perspective to Fortis Rasayan Pvt. Ltd. With a focus on combining chemical engineering knowledge with innovation, she is driving the company's vision towards emerging and technically demanding areas of the chemical industry.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  Her areas of interest include the development and advancement of specialized chemical solutions for surface treatment applications and the semiconductor industry, with an emphasis on understanding evolving industrial requirements and exploring new opportunities in high-performance chemical applications.
                </Typography>

                <Box sx={{ p: 2, bgcolor: '#FFFFFF', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#0284C7', textTransform: 'uppercase', display: 'block', mb: 1 }}>
                    Vision & Research Focus:
                  </Typography>
                  <Stack spacing={0.8}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: '#0284C7', fontSize: 16 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155' }}>
                        High-purity chemical solutions for Semiconductor fabrication
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: '#0284C7', fontSize: 16 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155' }}>
                        Specialized passivations & surface treatment chemistries
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: '#0284C7', fontSize: 16 }} />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155' }}>
                        Technology-driven, innovation-focused industrial growth
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          </Grid>

          {/* Experience + Innovation Synergy Banner */}
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: 'linear-gradient(135deg, #0B3C7D 0%, #062551 100%)',
              background: 'linear-gradient(135deg, #0B3C7D 0%, #062551 100%)',
              color: 'white'
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5, color: '#FFFFFF' }}>
                  A Combination of Experience & Innovation
                </Typography>
                <Typography variant="body2" sx={{ color: '#CBD5E1', lineHeight: 1.7 }}>
                  With a heritage rooted in Raju Chemical Industries since 1980 and a vision focused on the future, Fortis Rasayan Pvt. Ltd. aims to create lasting value for customers through quality, technical knowledge, innovation, and dependable service.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                <Button
                  variant="contained"
                  onClick={onOpenQuote}
                  endIcon={<SendIcon />}
                  sx={{
                    bgcolor: '#38BDF8',
                    color: '#062551',
                    fontWeight: 700,
                    px: 3.5,
                    py: 1.2,
                    '&:hover': { bgcolor: '#7DD3FC' }
                  }}
                >
                  Partner With Us
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* 4. QUALITY & SERVICE COMMITMENT */}
      <Container maxWidth="lg" sx={{ mb: 10 }} id="quality-service">
        <Box sx={{ textAlign: 'center', maxWidth: 750, mx: 'auto', mb: 6 }}>
          <Chip
            label="Service & Standards"
            size="small"
            sx={{ bgcolor: 'rgba(11, 60, 125, 0.08)', color: '#0B3C7D', fontWeight: 700, mb: 1.5 }}
          />
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#0B3C7D', mb: 2 }}>
            Quality You Can Rely On. Service You Can Count On.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            At Fortis Rasayan Pvt. Ltd., we understand that for corporate and industrial customers, chemical supply is not simply about availability—it is about consistent quality, dependable sourcing, timely delivery, and responsive service.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {companyInfo.focusAreas.map((item, idx) => {
            const icons = [
              <VerifiedIcon sx={{ fontSize: 32, color: '#0B3C7D' }} key="1" />,
              <ScienceIcon sx={{ fontSize: 32, color: '#0B3C7D' }} key="2" />,
              <LocalShippingIcon sx={{ fontSize: 32, color: '#0B3C7D' }} key="3" />,
              <MonetizationOnIcon sx={{ fontSize: 32, color: '#0B3C7D' }} key="4" />,
              <DescriptionIcon sx={{ fontSize: 32, color: '#0B3C7D' }} key="5" />,
              <SupportAgentIcon sx={{ fontSize: 32, color: '#0B3C7D' }} key="6" />
            ];
            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 3,
                    bgcolor: '#FFFFFF',
                    border: '1px solid rgba(11, 60, 125, 0.08)',
                    boxShadow: '0 4px 15px rgba(11, 60, 125, 0.05)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 30px rgba(11, 60, 125, 0.12)'
                    }
                  }}
                >
                  <Box sx={{ mb: 2 }}>{icons[idx]}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0B3C7D', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {item.desc}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* 5. STATUTORY & COMPANY INFORMATION TABLE */}
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3.5, md: 5 },
            borderRadius: 3,
            bgcolor: '#FFFFFF',
            border: '1px solid rgba(11, 60, 125, 0.1)'
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Chip
              label="Official Registrations"
              size="small"
              sx={{ bgcolor: 'rgba(11, 60, 125, 0.08)', color: '#0B3C7D', fontWeight: 700, mb: 1 }}
            />
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B3C7D' }}>
              Company Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Official statutory and incorporation records for Fortis Rasayan Pvt. Ltd.
            </Typography>
          </Box>

          <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, width: '32%', bgcolor: '#F8FAFC', color: '#0B3C7D' }}>
                    Company Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#0F172A' }}>
                    {companyInfo.name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, bgcolor: '#F8FAFC', color: '#0B3C7D' }}>
                    Company Type
                  </TableCell>
                  <TableCell>{companyInfo.details.companyType}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, bgcolor: '#F8FAFC', color: '#0B3C7D' }}>
                    Year of Incorporation
                  </TableCell>
                  <TableCell>{companyInfo.details.incorporationYear}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, bgcolor: '#F8FAFC', color: '#0B3C7D' }}>
                    Corporate Identification Number (CIN)
                  </TableCell>
                  <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: '#0B3C7D' }}>
                    {companyInfo.details.cin}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, bgcolor: '#F8FAFC', color: '#0B3C7D' }}>
                    GSTIN
                  </TableCell>
                  <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: '#0B3C7D' }}>
                    {companyInfo.details.gstin}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, bgcolor: '#F8FAFC', color: '#0B3C7D' }}>
                    Promoted By
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                    {companyInfo.details.promotedBy}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, bgcolor: '#F8FAFC', color: '#0B3C7D' }}>
                    Registered Office
                  </TableCell>
                  <TableCell sx={{ lineHeight: 1.6 }}>
                    {companyInfo.details.registeredOffice}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, bgcolor: '#F8FAFC', color: '#0B3C7D' }}>
                    Contact Phone Numbers
                  </TableCell>
                  <TableCell>
                    {companyInfo.details.phones.join(' / ')}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, bgcolor: '#F8FAFC', color: '#0B3C7D' }}>
                    Official Email
                  </TableCell>
                  <TableCell>
                    <a href={`mailto:${companyInfo.details.email}`} style={{ color: '#0284C7', textDecoration: 'none', fontWeight: 600 }}>
                      {companyInfo.details.email}
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
}
