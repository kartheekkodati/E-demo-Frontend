import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

// Product Service API - Use API Gateway instead of direct service
const PRODUCT_SERVICE_URL = `${API_BASE_URL}/products`;

export const getProducts = async () => {
  try {
    const response = await axios.get(PRODUCT_SERVICE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw error;
  }
};

// Order Service API - Use API Gateway instead of direct service
const ORDER_SERVICE_URL = `${API_BASE_URL}/orders`;

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(ORDER_SERVICE_URL, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${ORDER_SERVICE_URL}/${orderId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order with ID ${orderId}:`, error);
    throw error;
  }
};

export const getOrdersByUserId = async (userId) => {
  try {
    const response = await axios.get(`${ORDER_SERVICE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching orders for user ${userId}:`, error);
    throw error;
  }
};
