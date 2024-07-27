'use client'

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { Button, TextField, Typography, Container, Box, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';
import { theme, NeonBox, NeonButton } from '../theme';
import { signUp } from './actions';

const initialState = {
  message: "Hello World",
  fields: {}
};

export default function SignUp() {
  const [state, formAction] = useFormState(signUp, initialState);

  useEffect(() => {
    if (state.fields && Object.keys(state.fields).length > 0) {
      console.log('Sign-up data:', state.fields);
    }
  }, [state]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <NeonBox sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 'bold' }}>
            Sign Up
          </Typography>
          <Box component="form" action={formAction} noValidate sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <NeonButton
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, height: '48px' }}
            >
              Sign Up
            </NeonButton>
          </Box>
          <Box sx={{ mt: 3, width: '100%' }}>
            <Link href="/" passHref legacyBehavior>
              <NeonButton
                fullWidth
                variant="outlined"
                sx={{ 
                  mt: 3, 
                  mb: 2, 
                  height: '48px',
                }}
              >
                Back to Dashboard
              </NeonButton>
            </Link>
          </Box>
        </NeonBox>
      </Container>
    </ThemeProvider>
  );
}