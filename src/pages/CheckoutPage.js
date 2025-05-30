import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { createOrder } from '../services/api';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    setLoading(true);
    
    try {
      // For demo purposes, we'll use a hardcoded user ID
      const userId = 1;
      
      const orderData = {
        userId: userId,
        orderItems: cartItems.map(item => ({
          productId: item.id,
          quantity: item.quantity
        })),
        shippingAddress: formData
      };
      
      const response = await createOrder(orderData);
      
      // Clear the cart after successful order
      clearCart();
      
      // Navigate to order confirmation page
      navigate(`/order-confirmation/${response.id}`);
    } catch (err) {
      setError('Failed to place order. Please try again.');
      setLoading(false);
    }
  };
  
  if (cartItems.length === 0) {
    return (
      <Container className="py-5">
        <Alert variant="warning">
          Your cart is empty. <Link to="/">Continue shopping</Link>
        </Alert>
      </Container>
    );
  }
  
  return (
    <Container className="py-5">
      <h1 className="mb-4">Checkout</h1>
      
      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}
      
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Shipping Information</h5>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your first name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your last name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your address.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </Form.Group>
                
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your city.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>State/Province</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your state/province.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>ZIP/Postal Code</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your ZIP/postal code.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your country.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your phone number.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <div className="d-flex justify-content-between mt-4">
                  <Button 
                    as={Link} 
                    to="/cart" 
                    variant="outline-primary"
                  >
                    Back to Cart
                  </Button>
                  <Button 
                    type="submit" 
                    variant="primary"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Place Order'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              {cartItems.map(item => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <div>
                    <span className="fw-bold">{item.quantity}x</span> {item.name}
                  </div>
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
              
              <hr />
              
              <div className="d-flex justify-content-between">
                <div className="fw-bold">Total</div>
                <div className="fw-bold">${getCartTotal().toFixed(2)}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
