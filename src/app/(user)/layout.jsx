import * as React from 'react';
// mui
import { Box } from '@mui/material';
// components
import Navbar from 'src/components/layout/_main/navbar';
import Footer from 'src/components/layout/_main/footer';
import { cookies } from 'next/headers';

// Meta information
export const metadata = {
  title: 'fasion needles E-commerce Script | Your Gateway to Seamless Shopping and Secure Transactions',
  description:
    'Log in to fasion needles for secure access to your account. Enjoy seamless shopping, personalized experiences, and hassle-free transactions. Your trusted portal to a world of convenience awaits. Login now!',
  applicationName: 'fasion needles',
  authors: 'fasion needles',
  keywords: 'ecommerce, fasion needles, Commerce, Login fasion needles, LoginFrom fasion needles',
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    images: 'https://fasion needles-app.vercel.app/opengraph-image.png'
  }
};

export default async function RootLayout({ children }) {
  const cookiesList = cookies();
  const hasCookie = cookiesList.get('token');

  return (
    <>
      <Navbar isAuth={hasCookie} />
      {children}
      <Box sx={{ py: { xs: 5, md: 3 } }} />
      <Footer />
    </>
  );
}
