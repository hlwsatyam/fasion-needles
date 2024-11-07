"use client";
import React from "react";
import { Box, Typography, List, ListItem, Divider } from "@mui/material";

const CancellationPolicy = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f9f9f9", color: "#333", lineHeight: "1.8" }}>
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
        Fashion Needles Cancellation & Return Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: "auto", textAlign: "justify" }}>
        Welcome to Fashion Needles! We are committed to providing a seamless shopping experience. To ensure customer
        satisfaction, we have crafted a comprehensive policy covering order cancellations, returns, exchanges, and
        refunds. Please review this policy thoroughly before making a purchase.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        1. Order Cancellations
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Fashion Needles, we understand that sometimes plans change. Here are the details about our cancellation
        policy:
      </Typography>
      <List>
        <ListItem>
          <Typography>
            <strong>Cancellation Time Frame:</strong> Orders can be canceled within 24 hours of placement without any
            penalty. After 24 hours, if the order has not been processed for shipping, you may still request a
            cancellation, but please note that we cannot guarantee it.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Processed Orders:</strong> Once an order has been processed for shipping, we are unable to cancel
            it. You may still proceed with a return request following our return and refund policy.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Personalized Items:</strong> Customized or personalized items are final sale and cannot be canceled
            once the order is confirmed.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        2. Return & Exchange Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        If you are not completely satisfied with your purchase, Fashion Needles offers a hassle-free return and exchange
        process. Here’s how it works:
      </Typography>
      <List>
        <ListItem>
          <Typography>
            <strong>Eligibility:</strong> All return requests must be initiated within 30 days of receipt of the
            product. To qualify for a return, items must be unworn, unwashed, and in their original packaging, with all
            tags intact.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Non-Returnable Items:</strong> Certain items such as intimate apparel, earrings, and sale items are
            non-returnable. Additionally, custom orders or items with engraving/personalization are not eligible for
            return.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Exchange Process:</strong> We offer direct exchanges for items that are defective, damaged, or
            incorrect. For exchanges due to size or preference, you may initiate a return and place a new order.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Return Shipping:</strong> Return shipping costs are the responsibility of the customer unless the
            return is due to a defect or error on our part. We will provide a prepaid shipping label for defective
            items.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        3. Refunds
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We aim to process refunds swiftly for your convenience. Please see below for details:
      </Typography>
      <List>
        <ListItem>
          <Typography>
            <strong>Refund Time Frame:</strong> Once a return is received and inspected, refunds will be processed
            within 5-7 business days. Depending on your bank, refunds may take an additional 3-5 business days to appear
            in your account.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Refund Method:</strong> Refunds will be issued to the original form of payment. If a gift card was
            used, a new gift card will be issued for the refund amount.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Partial Refunds:</strong> In some cases, partial refunds may be granted for items that are returned
            in a used or damaged state. Such cases are evaluated individually.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        4. Shipping Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Here at Fashion Needles, we are committed to ensuring timely and secure delivery for all orders.
      </Typography>
      <List>
        <ListItem>
          <Typography>
            <strong>Domestic Shipping:</strong> We offer free standard shipping on orders over $100 within [Country
            Name]. Orders are typically processed within 1-2 business days.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>International Shipping:</strong> For international orders, shipping rates and times vary based on
            destination. Customs fees, if applicable, are the responsibility of the customer.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Shipping Delays:</strong> While we strive to meet delivery times, delays may occur due to factors
            beyond our control, such as weather, customs processing, or carrier issues.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        5. Frequently Asked Questions (FAQs)
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Here are some common questions about our cancellation, return, and refund policies:
      </Typography>
      <List>
        <ListItem>
          <Typography>
            <strong>Can I cancel my order after it’s shipped?</strong> Unfortunately, orders cannot be canceled once
            they have been shipped. However, you may initiate a return once you receive the order.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>What should I do if I receive a damaged item?</strong> Please contact our customer service team
            within 7 days of receiving a damaged item, and we will assist with a replacement or refund.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>How do I track my return status?</strong> After mailing your return, you will receive a tracking
            number to monitor its progress back to our facility.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Should you have any questions or need further assistance, please feel free to reach out to our customer service
        team at <a href="mailto:support@fashionneedles.com">support@fashionneedles.com</a>.
      </Typography>
    </Box>
  );
};

export default CancellationPolicy;
