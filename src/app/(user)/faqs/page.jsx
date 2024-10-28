import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { question: "What is FashionNeedles?", answer: "FashionNeedles is your go-to online store for the latest fashion trends." },
  { question: "How do I place an order?", answer: "Simply browse our collection, select your items, and follow the checkout process." },
  { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and more." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship to many countries around the world." },
  { question: "How can I track my order?", answer: "Once your order is shipped, you will receive a tracking link via email." },
  { question: "What is your return policy?", answer: "You can return items within 30 days of receipt." },
  { question: "How long does delivery take?", answer: "Delivery usually takes 3-7 business days." },
  { question: "Can I change or cancel my order?", answer: "You can change or cancel your order within 1 hour of placing it." },
  { question: "Do you offer gift cards?", answer: "Yes, we offer gift cards available for purchase on our website." },
  { question: "What should I do if I receive a defective item?", answer: "Please contact customer service for a replacement." },
  { question: "How can I contact customer service?", answer: "You can reach us via the contact form on our website." },
  { question: "Do you offer free shipping?", answer: "Free shipping is available on orders over $50." },
 { question: "Do you ship to P.O. Boxes?", answer: "Yes, we ship to P.O. Boxes." },
  { question: "What is your privacy policy?", answer: "Our privacy policy can be found on our website footer." },
  { question: "How do I reset my password?", answer: "Use the 'Forgot Password' link on the login page." },
  { question: "Can I track my order in real time?", answer: "Real-time tracking is available through our shipping partner." },
  { question: "What is the process for a refund?", answer: "Refunds are processed within 7-10 business days after return." },
  { question: "Do you have a mobile app?", answer: "Currently, we do not have a mobile app." },
  { question: "How can I provide feedback?", answer: "Feedback can be submitted through our contact form." },
  { question: "Do you accept PayPal?", answer: "Yes, PayPal is one of our accepted payment methods." },
  { question: "Can I purchase a product that is on pre-order?", answer: "Yes, pre-order items can be purchased." },
  { question: "How do I know if an item is eligible for return?", answer: "Check the return policy listed on the product page." },
  { question: "What are the shipping costs?", answer: "Shipping costs vary based on location and order size." },
  { question: "How can I find out about new arrivals?", answer: "Subscribe to our newsletter for updates on new arrivals." },
  { question: "Do you have a warranty on your products?", answer: "We offer a warranty on select products." },
  { question: "What should I do if I receive the wrong item?", answer: "Contact customer service for a replacement." },
  { question: "Can I get my order delivered to a store?", answer: "Currently, we do not offer store pickup." },
  { question: "How do you ensure the quality of your products?", answer: "We have strict quality control measures in place." },
  { question: "Do you have a referral program?", answer: "Yes, you can earn rewards by referring friends." },
  { question: "Can I request a specific delivery date?", answer: "Unfortunately, we cannot accommodate specific delivery dates." },
  { question: "What happens if I miss my delivery?", answer: "The courier will attempt re-delivery, and you will be notified." },
  { question: "Are there any hidden fees?", answer: "No, all fees are disclosed at checkout." },
  { question: "How do I change my account information?", answer: "You can update your information in your account settings." },
  { question: "What are your customer service hours?", answer: "Our customer service is available from 9 AM to 5 PM." },
  { question: "Can I order items that are on backorder?", answer: "Yes, backordered items will be shipped as soon as available." },
  { question: "Do you offer personal styling services?", answer: "Currently, we do not offer personal styling services." },
  { question: "What should I do if I have allergies?", answer: "Check product descriptions for allergy information." },
  { question: "Can I view my past orders?", answer: "Yes, you can view past orders in your account." },
  { question: "Do you offer price matching?", answer: "We do not offer price matching at this time." },
  { question: "How often do you restock items?", answer: "We restock popular items regularly." },
  { question: "What payment options are available?", answer: "We accept major credit cards and PayPal." },
  { question: "Are there any age restrictions for purchases?", answer: "You must be 18 years or older to make a purchase." },
  { question: "Can I request a specific product?", answer: "You can contact us with product requests." },
  { question: "What should I do if I receive the wrong size?", answer: "Contact customer service for an exchange." },
  { question: "How can I ensure I receive my order on time?", answer: "Place your order well in advance of any deadlines." },
  { question: "What is your policy on promotional items?", answer: "Promotional items are final sale and cannot be returned." },
];

const FAQPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={2}>
        {faqs.map((faq, index) => (
          <Grid item xs={12} key={index}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FAQPage;
