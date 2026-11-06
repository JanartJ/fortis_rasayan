import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Chip,
  Grid,
  Button,
  Divider,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ScienceIcon from '@mui/icons-material/Science';
import VerifiedIcon from '@mui/icons-material/Verified';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DescriptionIcon from '@mui/icons-material/Description';
import SendIcon from '@mui/icons-material/Send';
import ChemicalGraphic from './ChemicalGraphic';

export default function ProductDetailModal({ product, open, onClose, onEnquire }) {
  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'hidden'
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 12,
            top: 12,
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            '&:hover': { backgroundColor: 'white' }
          }}
        >
          <CloseIcon />
        </IconButton>
        <ChemicalGraphic category={product.category} formula={product.formula} size={160} />
      </Box>

      <DialogTitle sx={{ pb: 1, pt: 2 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap', gap: 0.8 }}>
          <Chip label={product.category} color="primary" size="small" variant="outlined" />
          <Chip label={product.grade} color="secondary" size="small" />
          {product.badge && <Chip label={product.badge} color="info" size="small" />}
        </Stack>
        <Typography variant="h5" component="div" sx={{ fontWeight: 800, color: '#0B3C7D' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CAS Number: <strong>{product.casNumber}</strong> | Formula: <strong>{product.formula}</strong>
        </Typography>
      </DialogTitle>

      <DialogContent dividers sx={{ py: 2.5 }}>
        <Typography variant="body1" sx={{ color: '#334155', mb: 3 }}>
          {product.description}
        </Typography>

        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0B3C7D', textTransform: 'uppercase', letterSpacing: '0.05em', mb: 1.5 }}>
          Technical Specifications
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
              <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 600 }}>
                Purity & Concentration
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700, color: '#0F172A', mt: 0.5 }}>
                {product.purity}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
              <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 600 }}>
                Physical Appearance
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: '#0F172A', mt: 0.5 }}>
                {product.appearance}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Inventory2Icon color="primary" />
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 600 }}>
                  Standard Packaging Options
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#0F172A' }}>
                  {product.packaging}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0B3C7D', textTransform: 'uppercase', letterSpacing: '0.05em', mb: 1.5 }}>
          Recommended Industrial Applications
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
          {product.applications.map((app, index) => (
            <Chip
              key={index}
              label={app}
              variant="outlined"
              size="medium"
              sx={{
                bgcolor: '#F1F5F9',
                borderColor: '#CBD5E1',
                color: '#1E293B',
                fontWeight: 500
              }}
            />
          ))}
        </Stack>

        <Box sx={{ p: 2, bgcolor: '#EFF6FF', borderRadius: 2, border: '1px solid #BFDBFE', display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
          <VerifiedIcon color="primary" sx={{ mt: 0.3 }} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1E40AF' }}>
              Quality Assurance & Documentation
            </Typography>
            <Typography variant="caption" sx={{ color: '#1E3A8A' }}>
              Every batch is supplied with a Certificate of Analysis (COA) and complete Material Safety Data Sheet (MSDS). Meets rigorous purity and industrial benchmark specifications.
            </Typography>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2, bgcolor: '#F8FAFC', justifyContent: 'space-between' }}>
        <Button onClick={onClose} variant="text" color="inherit">
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          onClick={() => {
            onClose();
            onEnquire(product);
          }}
          sx={{ px: 3 }}
        >
          Enquire For This Product
        </Button>
      </DialogActions>
    </Dialog>
  );
}
