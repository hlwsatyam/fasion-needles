import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function PaymentFailed() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        bgcolor="#fbe9e7"
        borderRadius="8px"
        padding="24px"
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
      >
        <ErrorOutlineIcon sx={{ fontSize: 80, color: '#e57373' }} />

        <Typography variant="h4" sx={{ mt: 2, color: '#d32f2f' }}>
          Payment Failed
        </Typography>

        <Typography variant="body1" sx={{ mt: 1, color: '#757575' }}>
          Unfortunately, we could not process your payment.
        </Typography>
      </Box>
    </Container>
  );
}

export default PaymentFailed;
