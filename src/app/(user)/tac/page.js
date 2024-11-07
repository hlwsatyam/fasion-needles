import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const termsAndConditions = [
  {
    title: "1. Introduction",
    content:
      "Welcome to FashionNeedles. These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms. If you do not agree to these terms, please do not use our website."
  },
  {
    title: "2. Acceptance of Terms",
    content:
      "By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not access or use our services."
  },
  {
    title: "3. Changes to Terms",
    content:
      "We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of the site after changes will constitute your acceptance of the new terms."
  },
  {
    title: "4. Account Registration",
    content:
      "To access certain features, you may be required to register for an account. You agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account and password."
  },
  {
    title: "5. User Responsibilities",
    content:
      "You are responsible for your use of the services, and you agree not to misuse our services. You will not: (a) use our services for any illegal or unauthorized purpose; (b) interfere with or disrupt the security or performance of our services."
  },
  {
    title: "6. Orders and Payments",
    content:
      "All orders are subject to acceptance, and we reserve the right to refuse or cancel orders for any reason. We accept various payment methods. You are responsible for ensuring that your payment information is accurate and up to date."
  },
  {
    title: "7. Shipping and Delivery",
    content:
      "Delivery times may vary based on your location. We are not responsible for delays caused by third-party carriers. Once your order is shipped, you will receive a confirmation email with tracking information."
  },
  {
    title: "8. Returns and Refunds",
    content:
      "Our return policy allows for returns within 30 days of receipt. Items must be in their original condition with tags attached. Refunds will be processed within a certain number of days after we receive the returned item."
  },
  {
    title: "9. Intellectual Property",
    content:
      "All content on the FashionNeedles website, including text, graphics, logos, and images, is the property of FashionNeedles and is protected by copyright, trademark, and other intellectual property laws."
  },
  {
    title: "10. Limitation of Liability",
    content:
      "FashionNeedles is not liable for any damages arising from the use of our services or products. We do not guarantee the accuracy, reliability, or completeness of any information on our website."
  },
  {
    title: "11. Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these Terms will be resolved in the courts of [Your Location]."
  },
  {
    title: "12. Contact Information",
    content:
      "If you have any questions about these Terms, please contact us at support@fashionneedles.com. We will respond to your inquiry as soon as possible."
  },
  {
    title: "13. Privacy Policy",
    content:
      "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information."
  },
  {
    title: "14. User-Generated Content",
    content:
      "Users may post reviews, comments, or other content. By posting content, you grant FashionNeedles a non-exclusive, royalty-free license to use, reproduce, and publish that content."
  },
  {
    title: "15. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We do not endorse these sites and are not responsible for their content. Use of these websites is at your own risk."
  },
  {
    title: "16. Dispute Resolution",
    content:
      "Any disputes arising from or related to these Terms will be resolved through binding arbitration in accordance with the rules of the [Arbitration Association]."
  },
  {
    title: "17. Termination",
    content:
      "We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without prior notice or liability, for any reason."
  },
  {
    title: "18. Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless FashionNeedles from any claims, losses, liabilities, damages, costs, or expenses arising out of your use of our services."
  },
  {
    title: "19. Severability",
    content:
      "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect."
  },
  {
    title: "20. Entire Agreement",
    content:
      "These Terms constitute the entire agreement between you and FashionNeedles regarding your use of our services and supersede any prior agreements."
  }
];

const TermsPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Terms and Conditions
      </Typography>
      <Box>
        {termsAndConditions.map((term, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              {term.title}
            </Typography>
            <Typography variant="body1">{term.content}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default TermsPage;
