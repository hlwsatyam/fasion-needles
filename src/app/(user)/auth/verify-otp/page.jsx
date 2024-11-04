import React from 'react';
// guard
import AuthGuard from 'src/guards/auth';
// mui
import { Box } from '@mui/material';
//  components
import OTPMain from 'src/components/_main/auth/otp';

// Meta information
export const metadata = {
  title: 'Verify Your Email with fasion needles | Confirm Your Account for Secure Shopping',
  description:
    'Complete the email verification process at fasion needles to ensure a secure and personalized shopping experience. Confirm your account and gain access to exclusive features. Shop confidently with a verified email. Verify now!',
  applicationName: 'fasion needles',
  authors: 'fasion needles',
  keywords: 'ecommerce, fasion needles, Commerce, VerifyEmail fasion needles, VerifyEmail Page fasion needles'
};
export default async function VerifyOTP() {
  return (
    <>
      <AuthGuard>
        <Box className="auth-pages">
          <OTPMain />
        </Box>
      </AuthGuard>
    </>
  );
}
