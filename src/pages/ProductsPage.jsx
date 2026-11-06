import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Chip,
  Button,
  Stack,
  IconButton,
  Paper,
  Divider,
  Alert
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ScienceIcon from '@mui/icons-material/Science';
import SendIcon from '@mui/icons-material/Send';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/productsData';
import ProductCard from '../components/ProductCard';

export default function ProductsPage({
  selectedCategory,
  setSelectedCategory,
  onViewProductDetails,
  onEnquireProduct,
  onOpenQuote
}) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term and selected category
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        !selectedCategory ||
        selectedCategory === 'All Products' ||
        item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'Acids & Alkalis' && (item.category.includes('Acids') || item.category.includes('Alkalis')));

      const term = searchTerm.trim().toLowerCase();
      if (!term) return matchesCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(term) ||
        item.formula.toLowerCase().includes(term) ||
        item.casNumber.toLowerCase().includes(term) ||
        item.grade.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.applications.some(app => app.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', pb: 10 }}>
      {/* 1. Header Banner */}
      <Box
        className="hero-gradient"
        sx={{
          color: 'white',
          pt: { xs: 6, md: 8 },
          pb: { xs: 7, md: 9 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Chip
            label="Certified Chemical Supply"
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
              fontSize: { xs: '2rem', sm: '2.8rem' },
              mb: 2,
              color: '#FFFFFF'
            }}
          >
            Industrial & Specialty Chemical Catalog
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 680, mx: 'auto' }}>
            Explore our comprehensive range of high-purity industrial chemicals, analytical reagents, process solutions, and semiconductor-grade compounds.
          </Typography>
        </Container>
      </Box>

      {/* 2. Search & Filter Bar Controls */}
      <Container maxWidth="lg" sx={{ mt: -4, position: 'relative', zIndex: 10 }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2.5, sm: 3 },
            borderRadius: 3,
            bgcolor: '#FFFFFF',
            border: '1px solid rgba(11, 60, 125, 0.12)',
            boxShadow: '0 12px 32px rgba(11, 60, 125, 0.08)'
          }}
        >
          {/* Search Field */}
          <TextField
            fullWidth
            placeholder="Search by chemical name, formula (e.g., HNO3, H2SO4), CAS number (e.g., 7697-37-2), or application..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#0B3C7D', fontSize: 24 }} />
                </InputAdornment>
              ),
              endAdornment: searchTerm ? (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearchTerm('')}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : null,
              sx: {
                borderRadius: 2,
                bgcolor: '#F8FAFC',
                fontSize: '0.95rem'
              }
            }}
          />

          <Divider sx={{ my: 2 }} />

          {/* Category Chips with Horizontal Scroll on Mobile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#0B3C7D', mr: 1 }}>
              <FilterAltIcon sx={{ fontSize: 18 }} />
              <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Filter:
              </Typography>
            </Box>

            {categories.map((cat, idx) => {
              const isSelected = selectedCategory === cat || (!selectedCategory && cat === 'All Products');
              return (
                <Chip
                  key={idx}
                  label={cat}
                  onClick={() => setSelectedCategory(cat === 'All Products' ? null : cat)}
                  clickable
                  variant={isSelected ? 'filled' : 'outlined'}
                  color={isSelected ? 'primary' : 'default'}
                  sx={{
                    fontWeight: isSelected ? 700 : 500,
                    px: 0.5,
                    py: 1.8,
                    fontSize: '0.82rem',
                    transition: 'all 0.2s ease',
                    borderColor: isSelected ? '#0B3C7D' : '#CBD5E1',
                    bgcolor: isSelected ? '#0B3C7D' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#475569',
                    '&:hover': {
                      bgcolor: isSelected ? '#082F63' : 'rgba(11, 60, 125, 0.05)',
                    }
                  }}
                />
              );
            })}
          </Box>
        </Paper>

        {/* Results Counter and Active Filter status */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3, mb: 2, px: 1 }}>
          <Typography variant="body2" sx={{ color: '#475569', fontWeight: 600 }}>
            Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'chemical product' : 'chemical products'}
            {selectedCategory && selectedCategory !== 'All Products' && (
              <span> in <strong>{selectedCategory}</strong></span>
            )}
            {searchTerm && <span> matching "<strong>{searchTerm}</strong>"</span>}
          </Typography>

          {(selectedCategory || searchTerm) && (
            <Button
              size="small"
              variant="text"
              onClick={() => {
                setSelectedCategory(null);
                setSearchTerm('');
              }}
              sx={{ color: '#0B3C7D', fontWeight: 600, textTransform: 'none' }}
            >
              Reset Filters
            </Button>
          )}
        </Box>

        {/* 3. Product Cards Grid with Framer Motion Animation */}
        {filteredProducts.length === 0 ? (
          <Paper sx={{ p: 6, textAlign: 'center', borderRadius: 3, bgcolor: '#FFFFFF', my: 4 }}>
            <ScienceIcon sx={{ fontSize: 60, color: '#94A3B8', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#0B3C7D', mb: 1 }}>
              No Chemical Products Found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto', mb: 3 }}>
              We couldn't find any products matching your search criteria. However, we custom-source and blend specialized chemicals on request.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="outlined"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
              >
                Clear Search
              </Button>
              <Button variant="contained" color="primary" onClick={onOpenQuote}>
                Enquire for Custom Chemical
              </Button>
            </Stack>
          </Paper>
        ) : (
          <motion.div layout>
            <Grid container spacing={3}>
              <AnimatePresence>
                {filteredProducts.map((prod) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={prod.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      style={{ height: '100%' }}
                    >
                      <ProductCard
                        product={prod}
                        onViewDetails={onViewProductDetails}
                        onEnquire={onEnquireProduct}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </AnimatePresence>
            </Grid>
          </motion.div>
        )}

        {/* 4. Custom Sourcing Banner */}
        <Paper
          sx={{
            mt: 8,
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            bgcolor: '#0B3C7D',
            color: 'white',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            boxShadow: '0 8px 30px rgba(11, 60, 125, 0.2)'
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#FFFFFF' }}>
              Looking for a Specific Chemical Grade or Bulk Formulation?
            </Typography>
            <Typography variant="body2" sx={{ color: '#BAE6FD', maxWidth: 640, lineHeight: 1.6 }}>
              Fortis Rasayan provides custom chemical sourcing, specialized purity testing (sub-ppb metals), specialized carboy/tanker packaging, and contract supply agreements.
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            onClick={onOpenQuote}
            endIcon={<SendIcon />}
            sx={{
              bgcolor: '#FFFFFF',
              color: '#0B3C7D',
              fontWeight: 800,
              px: 3.5,
              py: 1.4,
              whiteSpace: 'nowrap',
              '&:hover': { bgcolor: '#F1F5F9' }
            }}
          >
            Custom Requirement Enquiry
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
