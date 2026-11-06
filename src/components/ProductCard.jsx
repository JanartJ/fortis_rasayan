import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Button,
  Stack
} from '@mui/material';
import ChemicalGraphic from './ChemicalGraphic';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SendIcon from '@mui/icons-material/Send';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

export default function ProductCard({ product, onViewDetails, onEnquire }) {
  return (
    <Card
      className="card-hover-effect"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        border: '1px solid rgba(11, 60, 125, 0.1)',
        overflow: 'hidden',
        background: '#FFFFFF',
      }}
    >
      {/* Product Chemical Graphic */}
      <Box sx={{ position: 'relative' }}>
        <ChemicalGraphic
          category={product.category}
          formula={product.formula}
          size={145}
        />
        {product.badge && (
          <Chip
            label={product.badge}
            size="small"
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              fontWeight: 700,
              fontSize: '0.72rem',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: '#0B3C7D',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              border: '1px solid rgba(11, 60, 125, 0.2)'
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2.5, pb: 1 }}>
        <Box sx={{ mb: 1.2, display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
          <Chip
            label={product.category}
            size="small"
            sx={{
              bgcolor: '#F1F5F9',
              color: '#475569',
              fontSize: '0.72rem',
              fontWeight: 600,
              height: 22
            }}
          />
          <Chip
            label={product.grade.split('(')[0].trim()}
            size="small"
            sx={{
              bgcolor: 'rgba(11, 60, 125, 0.08)',
              color: '#0B3C7D',
              fontSize: '0.72rem',
              fontWeight: 600,
              height: 22
            }}
          />
        </Box>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 700,
            fontSize: '1.15rem',
            lineHeight: 1.35,
            color: '#0B3C7D',
            mb: 0.5,
            minHeight: '2.7em',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: '#64748B',
            fontWeight: 500,
            mb: 1.5,
          }}
        >
          CAS: <strong>{product.casNumber}</strong> • Purity: <strong>{product.purity}</strong>
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#475569',
            fontSize: '0.86rem',
            lineHeight: 1.55,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 2,
            minHeight: '4em',
          }}
        >
          {product.description}
        </Typography>

        <Box
          sx={{
            p: 1.2,
            bgcolor: '#F8FAFC',
            borderRadius: 1.5,
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Inventory2OutlinedIcon sx={{ fontSize: 18, color: '#5A6578' }} />
          <Typography
            variant="caption"
            sx={{
              color: '#334155',
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {product.packaging}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 1, gap: 1 }}>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          startIcon={<InfoOutlinedIcon />}
          onClick={() => onViewDetails(product)}
          sx={{
            flex: 1,
            py: 0.8,
            fontSize: '0.82rem',
            borderColor: '#CBD5E1',
            color: '#475569',
            '&:hover': {
              borderColor: '#0B3C7D',
              color: '#0B3C7D',
              bgcolor: 'rgba(11, 60, 125, 0.04)'
            }
          }}
        >
          Specs
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          endIcon={<SendIcon sx={{ fontSize: '15px !important' }} />}
          onClick={() => onEnquire(product)}
          sx={{
            flex: 1.2,
            py: 0.8,
            fontSize: '0.82rem',
          }}
        >
          Enquire
        </Button>
      </CardActions>
    </Card>
  );
}
