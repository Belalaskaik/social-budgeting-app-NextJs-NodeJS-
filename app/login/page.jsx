// 'use client'
// import React from 'react';
// import { Button, TextField, Typography, Container, Box, ThemeProvider, createTheme } from '@mui/material';
// import Link from 'next/link';
// import { styled } from '@mui/system';

// // Create a custom theme
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#00ffff', // Brighter cyan
//     },
//     background: {
//       default: '#000000', // Black
//       paper: '#111111',
//     },
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: '#00ffff',
//               borderWidth: 2,
//             },
//             '&:hover fieldset': {
//               borderColor: '#00ffff',
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: '#00ffff',
//             },
//           },
//           '& .MuiInputLabel-root': {
//             color: '#00ffff',
//           },
//           '& .MuiInputBase-input': {
//             color: '#ffffff',
//           },
//         },
//       },
//     },
//   },
// });

// // Styled components
// const NeonBox = styled(Box)(({ theme }) => ({
//   border: `2px solid ${theme.palette.primary.main}`,
//   borderRadius: theme.shape.borderRadius,
//   padding: theme.spacing(4),
//   boxShadow: `0 0 20px ${theme.palette.primary.main}`,
//   backgroundColor: 'rgba(0, 0, 0, 0.7)',
// }));

// const NeonButton = styled(Button)(({ theme }) => ({
//   background: 'transparent',
//   color: theme.palette.primary.main,
//   fontWeight: 'bold',
//   border: `2px solid ${theme.palette.primary.main}`,
//   transition: 'background-color 0.3s, color 0.3s',
//   '&:hover': {
//     background: theme.palette.primary.main,
//     color: '#000000',
//     border: `2px solid ${theme.palette.primary.main}`,
//   },
// }));

// export default function Login() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
//         <NeonBox sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <Typography component="h1" variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 'bold' }}>
//             Login
//           </Typography>
//           <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <NeonButton
//               type="submit"
//               fullWidth
//               variant="outlined"
//               sx={{ mt: 3, mb: 2, height: '48px' }}
//             >
//               Sign In
//             </NeonButton>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//               <Link href="/forgot-password" style={{ color: '#00ffff', textDecoration: 'none' }}>Forgot password?</Link>
//               <Link href="/forgot-username" style={{ color: '#00ffff', textDecoration: 'none' }}>Forgot username?</Link>
//             </Box>
//           </Box>
//           <Box sx={{ mt: 3, width: '100%' }}>
//             <Link href="/" passHref legacyBehavior>
//               <NeonButton
//                 fullWidth
//                 variant="outlined"
//                 sx={{ 
//                   mt: 3, 
//                   mb: 2, 
//                   height: '48px',
//                 }}
//               >
//                 Back to Dashboard
//               </NeonButton>
//             </Link>
//           </Box>
//         </NeonBox>
//       </Container>
//     </ThemeProvider>
//   );
// }