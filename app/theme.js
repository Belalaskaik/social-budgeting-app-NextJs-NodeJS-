// app/theme.js
import { createTheme } from '@mui/material';
import { styled } from '@mui/system';
import { Box, Button } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ffff', // Brighter cyan
    },
    background: {
      default: '#000000', // Black
      paper: '#111111',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#00ffff',
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderColor: '#00ffff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00ffff',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#00ffff',
          },
          '& .MuiInputBase-input': {
            color: '#ffffff',
          },
        },
      },
    },
  },
});

export const NeonBox = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  boxShadow: `0 0 20px ${theme.palette.primary.main}`,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
}));

export const NeonButton = styled(Button)(({ theme }) => ({
  background: 'transparent',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  border: `2px solid ${theme.palette.primary.main}`,
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    background: theme.palette.primary.main,
    color: '#000000',
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));