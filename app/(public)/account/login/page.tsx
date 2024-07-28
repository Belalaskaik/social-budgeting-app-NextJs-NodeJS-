// app/(public)/account/login/page.tsx
'use client';

import React from 'react';
import { Button, TextField, Typography, Container, Box, ThemeProvider, createTheme } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useUserService } from '_services';

// Create a custom theme
const theme = createTheme({
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

// Styled components
const NeonBox = styled(Box)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4),
    boxShadow: `0 0 20px ${theme.palette.primary.main}`,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
}));

const NeonButton = styled(Button)(({ theme }) => ({
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

export default function Login() {
    const userService = useUserService();
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    async function onSubmit({ username, password }: any) {
        await userService.login(username, password);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
                <NeonBox sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component="h1" variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 'bold' }}>
                        Login
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1, width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            {...register('username', { required: 'Username is required' })}
                            error={!!errors.username}
                            helperText={errors.username?.message?.toString()}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            error={!!errors.password}
                            helperText={errors.password?.message?.toString()}
                        />
                        <NeonButton
                            type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 3, mb: 2, height: '48px' }}
                            disabled={formState.isSubmitting}
                        >
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                            Login
                        </NeonButton>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Link href="/account/register" style={{ color: '#00ffff', textDecoration: 'none' }}>Register</Link>
                        </Box>
                    </Box>
                </NeonBox>
            </Container>
        </ThemeProvider>
    );
}