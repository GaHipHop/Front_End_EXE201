import { Box, Button, Divider, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../lib/service/orderService'; // Import hàm createOrder

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(30000); // Phí ship cố định
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    district: '',
    ward: '',
    address: '',
     orderRequirement: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('ATM');
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy giỏ hàng từ localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalPrice = cartItems.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);
    setCartItems(cartItems);
    setTotalPrice(totalPrice + shippingFee); // Cộng thêm phí ship vào tổng giá
  }, [shippingFee]);

  const handlePayment = async () => {
    // Tạo dữ liệu order
    const orderData = {
      userName: shippingInfo.fullName,
      email: shippingInfo.email,
      phone: shippingInfo.phone,
      province: shippingInfo.city,
      wards: shippingInfo.ward,
      address: shippingInfo.address,
      orderRequirement: shippingInfo.orderRequirement, // Thêm yêu cầu đặt hàng nếu có
      paymentMethod: paymentMethod,
      cartItems: cartItems.map(item => ({
        id: item.id,
        quantity: item.quantity,
        productPrice: item.productPrice,
        productName: item.productName,
        productImage: item.productImage,
        color: item.color
      }))
    };

    try {
      // Gọi API để tạo order
      await createOrder(orderData);
      console.log('Thanh toán thành công', { shippingInfo, paymentMethod });

      // Xóa giỏ hàng sau khi thanh toán
      localStorage.removeItem('cartItems');
      setCartItems([]);
      setTotalPrice(0);
      navigate('/success'); // Điều hướng về trang chủ hoặc trang cảm ơn
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Box sx={{ padding: 4, marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
        <Paper sx={{ padding: 4, width: { xs: '100%', md: '60%' }, boxShadow: 3 }}>
          <Typography variant="h6" gutterBottom>THÔNG TIN GIAO HÀNG</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <TextField 
            label="fullName" 
            name="fullName" 
            value={shippingInfo.fullName} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Email" 
            name="email" 
            value={shippingInfo.email} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Phone" 
            name="phone" 
            value={shippingInfo.phone} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="City/Province" 
            name="city" 
            value={shippingInfo.city} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Ward" 
            name="ward" 
            value={shippingInfo.ward} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Street" 
            name="address" 
            value={shippingInfo.address} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Order Requirement" 
            name="orderRequirement" 
            value={shippingInfo.orderRequirement} 
            onChange={handleInputChange} 
            fullWidth 
            margin="normal" 
          />
        </Paper>
        <Paper sx={{ padding: 4, width: { xs: '100%', md: '35%' }, boxShadow: 3 }}>
          <Typography variant="h6" gutterBottom>Payment methods</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <RadioGroup
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel value="ATM" control={<Radio />} label="Pay (ATM, Visa)" />
            <FormControlLabel value="COD" control={<Radio />} label="Payment on delivery (COD)" />
          </RadioGroup>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Order Summary</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          {cartItems.map((item) => (
            <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <img src={item.productImage} alt={item.productName} style={{ width: '50px', marginRight: '10px' }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1">{item.productName}</Typography>
                <Typography variant="body2">Color: {item.color}</Typography>
                <Typography variant="body2">Quantity: {item.quantity}</Typography>
                <Typography variant="body2">Price: {item.productPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Typography>
              </Box>
            </Box>
          ))}
          <Divider sx={{ marginBottom: 2 }} />
          <Typography variant="body1">ship fees: {shippingFee.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography variant="h6">Total: {totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handlePayment}
          style={{
            backgroundColor: "#525252", // Change this color to make the button more visible
            color: "white", // Text color
          }}>
            Checkout
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Checkout;
