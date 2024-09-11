import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, useMediaQuery, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock password reset email sending
    alert(`A password reset link has been sent to ${email}`);
    navigate('/login'); // Redirect to login page after "sending" the reset email
  };

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      sx={{ height: '100vh', bgcolor: '#ffffff' }}
    >
      <Box
        sx={{
          width: isSmallScreen ? '90%' : 400,
          p: 4,
          bgcolor: '#ffffff',
          color: 'black',
          borderRadius: 2,
          boxShadow: '0 0 20px rgba(0,0,0,0.8)',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Enter your email to receive a password reset link.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ style: { color: 'black' } }}
            InputProps={{ style: { color: '#f4f4f4', backgroundColor: '#ffffff' } }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, bgcolor: '#ff8c00', '&:hover': { bgcolor: '#e07600' } }}
          >
            Send Reset Link
          </Button>
        </form>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Remembered your password?{" "}
            <Link href="/login" underline="hover" sx={{ color: '#ff8c00' }}>
              Log in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default ForgotPassword;
