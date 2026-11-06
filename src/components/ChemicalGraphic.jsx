import React from 'react';
import { Box } from '@mui/material';

export default function ChemicalGraphic({ category, formula, size = 140 }) {
  // Select color tones based on category
  let primaryColor = "#0B3C7D";
  let secondaryColor = "#0284C7";
  let bgGradient = "linear-gradient(135deg, #EBF3FC 0%, #DCE9F8 100%)";

  if (category.includes("Semiconductor")) {
    primaryColor = "#0284C7";
    secondaryColor = "#06B6D4";
    bgGradient = "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)";
  } else if (category.includes("Laboratory")) {
    primaryColor = "#4F46E5";
    secondaryColor = "#7C3AED";
    bgGradient = "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)";
  } else if (category.includes("Surface")) {
    primaryColor = "#0D9488";
    secondaryColor = "#14B8A6";
    bgGradient = "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)";
  } else if (category.includes("Acids")) {
    primaryColor = "#C2410C";
    secondaryColor = "#EA580C";
    bgGradient = "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)";
  } else if (category.includes("Solvents")) {
    primaryColor = "#2563EB";
    secondaryColor = "#3B82F6";
    bgGradient = "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)";
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: size,
        background: bgGradient,
        borderRadius: '12px 12px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(11, 60, 125, 0.08)'
      }}
    >
      {/* Decorative molecular lattice lines in background */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15,
          pointerEvents: 'none'
        }}
        viewBox="0 0 200 120"
      >
        <circle cx="30" cy="30" r="4" fill={primaryColor} />
        <circle cx="80" cy="20" r="4" fill={primaryColor} />
        <circle cx="130" cy="40" r="4" fill={primaryColor} />
        <circle cx="170" cy="25" r="4" fill={primaryColor} />
        <circle cx="50" cy="80" r="4" fill={primaryColor} />
        <circle cx="110" cy="90" r="4" fill={primaryColor} />
        <circle cx="160" cy="85" r="4" fill={primaryColor} />
        <line x1="30" y1="30" x2="80" y2="20" stroke={primaryColor} strokeWidth="1.5" />
        <line x1="80" y1="20" x2="130" y2="40" stroke={primaryColor} strokeWidth="1.5" />
        <line x1="130" y1="40" x2="170" y2="25" stroke={primaryColor} strokeWidth="1.5" />
        <line x1="30" y1="30" x2="50" y2="80" stroke={primaryColor} strokeWidth="1.5" />
        <line x1="80" y1="20" x2="110" y2="90" stroke={primaryColor} strokeWidth="1.5" />
        <line x1="130" y1="40" x2="160" y2="85" stroke={primaryColor} strokeWidth="1.5" />
      </svg>

      {/* Main Chemical Icon Representation */}
      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <svg width="68" height="68" viewBox="0 0 64 64" fill="none">
          {category.includes("Semiconductor") ? (
            /* Silicon wafer / ultra-pure beaker graphic */
            <g>
              <circle cx="32" cy="32" r="28" stroke={primaryColor} strokeWidth="2.5" fill="white" />
              <path d="M16 32H48M32 16V48M20 20L44 44M20 44L44 20" stroke={secondaryColor} strokeWidth="1.5" strokeDasharray="3 3" />
              <rect x="26" y="26" width="12" height="12" rx="2" fill={primaryColor} fillOpacity="0.85" />
              <circle cx="32" cy="32" r="2" fill="white" />
            </g>
          ) : category.includes("Laboratory") ? (
            /* Erlenmeyer Flask graphic */
            <g>
              <path d="M28 8H36V22L47 46C48.5 49.5 46 54 42 54H22C18 54 15.5 49.5 17 46L28 22V8Z" 
                fill="white" stroke={primaryColor} strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M20 40L44 40C42 45 42 52 22 52C19 52 18.5 45 20 40Z" fill={secondaryColor} fillOpacity="0.7" />
              <line x1="26" y1="8" x2="38" y2="8" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="28" cy="46" r="2" fill="white" />
              <circle cx="36" cy="44" r="1.5" fill="white" />
            </g>
          ) : category.includes("Process") || category.includes("Surface") ? (
            /* Surface treatment bath / molecule */
            <g>
              <rect x="12" y="16" width="40" height="36" rx="6" fill="white" stroke={primaryColor} strokeWidth="2.5" />
              <path d="M12 28C18 25 24 31 32 28C40 25 46 31 52 28V46C52 49 49 52 46 52H18C15 52 12 49 12 46V28Z" fill={secondaryColor} fillOpacity="0.6" />
              <line x1="20" y1="12" x2="44" y2="12" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="24" cy="38" r="2.5" fill="white" />
              <circle cx="38" cy="42" r="2" fill="white" />
            </g>
          ) : (
            /* Industrial Drum / Chemical Container graphic */
            <g>
              <rect x="16" y="14" width="32" height="40" rx="6" fill="white" stroke={primaryColor} strokeWidth="2.5" />
              <line x1="16" y1="26" x2="48" y2="26" stroke={primaryColor} strokeWidth="2" />
              <line x1="16" y1="40" x2="48" y2="40" stroke={primaryColor} strokeWidth="2" />
              {/* Chemical hazard/spec diamond */}
              <polygon points="32,29 37,34 32,39 27,34" fill={secondaryColor} />
              <circle cx="22" cy="18" r="2" fill={primaryColor} />
              <rect x="28" y="10" width="8" height="4" rx="1" fill={primaryColor} />
            </g>
          )}
        </svg>

        {/* Chemical formula badge */}
        {formula && (
          <Box
            sx={{
              mt: 1,
              px: 1.5,
              py: 0.25,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: `1px solid ${primaryColor}30`,
              borderRadius: '16px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: primaryColor,
              letterSpacing: '0.04em',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
            }}
          >
            {formula}
          </Box>
        )}
      </Box>
    </Box>
  );
}
