import axios from "../axiosCustomize";

const getOrdersByStatusPending = async (keyword, pageIndex, pageSize, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      pageIndex,
      pageSize,
    },
  };
  
  if (keyword) {
    config.params.keyword = keyword;
  }

  try {
    const response = await axios.get(`Order/getOrderByStatusPending`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getOrdersByStatusConfirmed = async (keyword, pageIndex, pageSize, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        pageIndex,
        pageSize,
      },
    };
    
    if (keyword) {
      config.params.keyword = keyword;
    }
  
    try {
      const response = await axios.get(`Order/getOrderByStatusConfirmed`, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

const getOrdersByStatusRejected = async (keyword, pageIndex, pageSize, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          pageIndex,
          pageSize,
        },
      };
      
      if (keyword) {
        config.params.keyword = keyword;
      }
    
      try {
        const response = await axios.get(`Order/getOrderByStatusRejected`, config);
        return response.data;
      } catch (error) {
        throw error;
      }
};

const getOrderByMonthYear = async (month, year, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      month,
      year,
    },
  };
  try {
    const response = await axios.get(`Order/getOrdersSummaryByMonthYear`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateStatusOrderConfirmed = async (orderId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    console.log(`Sending request to confirm order with ID: ${orderId}`);
    console.log(`Token: ${token}`);
    const response = await axios.patch(`Order/updateStatusOrderConfirmed/${orderId}`, {}, config);
    console.log('Response from server:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in updateStatusOrderConfirmed:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

const updateStatusOrderReject = async (orderId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    console.log(`Sending request to confirm order with ID: ${orderId}`);
    console.log(`Token: ${token}`);
    const response = await axios.patch(`Order/updateStatusOrderReject/${orderId}`, {}, config);
    console.log('Response from server:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in updateStatusOrderConfirmed:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

const createOrder = async (data) => {
  return await axios.post(`Order/createOrder`, data);
};

const createPaymentLink  = async (data) => {
  return await axios.post(`Order/createPaymentLink`, data);
};

export {
  createOrder, createPaymentLink, getOrderByMonthYear,
  getOrdersByStatusConfirmed,
  getOrdersByStatusPending,
  getOrdersByStatusRejected,
  updateStatusOrderConfirmed,
  updateStatusOrderReject
};

