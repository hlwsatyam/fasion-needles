import { LoadingButton } from '@mui/lab';
import { Box, Modal, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiPaperclip } from 'react-icons/bi';
import { BsHouseHeart } from 'react-icons/bs';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

function TrackDelevery() {
  const path = window.location.pathname;
  const orderId = path.split('/').pop();
  const [modalOpen, setModalOpen] = useState(false);
  const [shipmentDimension, setShipmentDimension] = useState({
    height: '',
    width: '',

    weight: ''
  });
  const checkAvailibility = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/checkDelivery/${orderId}`);
      if (res.status === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res?.data?.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const createWharehouse = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/createWharehouse`);
      if (res.status === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res?.data?.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const createShipment = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/api/createShipment/${orderId}`, shipmentDimension);
      if (res.status === 200) {
        toast.success(res.data.message);
        setModalOpen(false);
      } else {
        toast.error(res?.data?.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShipmentDimension({ ...shipmentDimension, [name]: value });
  };
  return (
    <Box
      sx={{
        // border: '1px solid red',
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        alignItems: 'center'
      }}
    >
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ width: 400, margin: 'auto', marginTop: '10%', padding: 4, backgroundColor: 'white', borderRadius: 2 }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Enter Shipment Dimensions
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Height"
              name="height"
              type="number"
              value={shipmentDimension.height}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Width"
              name="width"
              type="number"
              value={shipmentDimension.width}
              onChange={handleInputChange}
              fullWidth
            />

            <TextField
              label="Weight"
              name="weight"
              type="number"
              value={shipmentDimension.weight}
              onChange={handleInputChange}
              fullWidth
            />
            <LoadingButton variant="contained" onClick={createShipment} startIcon={<LiaShippingFastSolid />}>
              Create Shipment
            </LoadingButton>
          </Stack>
        </Box>
      </Modal>

      <LoadingButton
        variant="contained"
        startIcon={<TbTruckDelivery />}
        onClick={() => checkAvailibility()}
        loadingPosition="start"
      >
        {'Check Delevery Available'}
      </LoadingButton>
      <LoadingButton
        disabled
        onClick={() => createWharehouse()}
        variant="contained"
        startIcon={<BsHouseHeart />}
        loadingPosition="start"
      >
        {'Create Wharehouse'}
      </LoadingButton>
      <LoadingButton
        onClick={() => setModalOpen(true)}
        variant="contained"
        startIcon={<LiaShippingFastSolid />}
        loadingPosition="start"
      >
        {'Create Shipment'}
      </LoadingButton>
     
    </Box>
  );
}

export default TrackDelevery;
