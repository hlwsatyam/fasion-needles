import React from 'react';
import Dashboard from 'src/components/_admin/dashboard';
// Meta information
export const metadata = {
  title: 'fasion needles - Dashboard',
  description: 'Welcome to the fasion needles Dashboard. Manage your e-commerce operations with ease.',
  applicationName: 'fasion needles Dashboard',
  authors: 'fasion needles',
  keywords: 'dashboard, e-commerce, management, fasion needles',
  icons: {
    icon: '/favicon.png'
  }
};
export default function page() {
  return (
    <>
      <Dashboard />
    </>
  );
}
