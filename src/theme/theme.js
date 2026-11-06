import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B3C7D',
      light: '#1D5A9E',
      dark: '#062551',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5A6578',
      light: '#7F8D9F',
      dark: '#38414F',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#0284C7',
      light: '#38BDF8',
      dark: '#0369A1',
    },
    success: {
      main: '#059669',
      light: '#34D399',
      dark: '#047857',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: [
      'Plus Jakarta Sans',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      lineHeight: 1.6,
      color: '#475569',
    },
    body1: {
      lineHeight: 1.7,
      color: '#334155',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 22px',
          fontSize: '0.95rem',
          transition: 'all 0.25s ease-in-out',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0B3C7D 0%, #174E96 100%)',
          boxShadow: '0 4px 12px rgba(11, 60, 125, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #082F63 0%, #0F3F7E 100%)',
            boxShadow: '0 6px 18px rgba(11, 60, 125, 0.35)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: '#0B3C7D',
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
            backgroundColor: 'rgba(11, 60, 125, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px -2px rgba(11, 60, 125, 0.06)',
          border: '1px solid rgba(11, 60, 125, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(11, 60, 125, 0.06)',
        },
      },
    },
  },
});

export default theme;
