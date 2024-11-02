"use client";
import React, { useState } from "react";
import { Box, Typography, TextField, Button, Slide, Snackbar, Alert } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const TrackOrder = () => {
  const [orderID, setOrderID] = useState("");
  const [orderFound, setOrderFound] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const handleTrackOrder = (e) => {
    e.preventDefault();
    // Simulate order tracking (integrate with your backend for actual tracking)
    if (orderID) {
      setOrderFound(true); // Set based on actual backend response
      setOpenToast(true);
    }
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
        animation: "fadeIn 2s",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Track Your Order
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
        Enter your Order ID to check the status of your purchase.
      </Typography>

      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Box
          component="form"
          onSubmit={handleTrackOrder}
          sx={{
            maxWidth: 500,
            mx: "auto",
            p: 4,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <TextField
            label="Order ID"
            fullWidth
            required
            value={orderID}
            onChange={(e) => setOrderID(e.target.value)}
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: <LocalShippingIcon sx={{ mr: 1 }} />,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: "100%", padding: "0.8rem", fontWeight: "bold" }}
          >
            Track Order
          </Button>
        </Box>
      </Slide>

      <Snackbar open={openToast} autoHideDuration={3000} onClose={handleCloseToast}>
        <Alert onClose={handleCloseToast}  style={{backgroundColor: orderFound ? "green" : "red",color: "white"}} severity={orderFound ? "success" : "error"} sx={{ width: '100%' }}>
          {orderFound ? "Order found! We’re preparing it for delivery." : "Order not found. Please check your Order ID."}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TrackOrder;
