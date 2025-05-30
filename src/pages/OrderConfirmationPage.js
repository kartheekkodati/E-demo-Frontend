import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Alert, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { getOrderById } from '../services/api';

const OrderConfirmationPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrderById(orderId);
        setOrder(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch order details. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchOrder();
  }, [orderId]);
  
  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Container>
    );
  }
  
  if (error || !order) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          {error || 'Order not found'}
        </Alert>
        <Button as={Link} to="/" variant="primary">
          Return to Home
        </Button>
      </Container>
    );
  }
  
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="border-0 shadow">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-check-lg" style={{ fontSize: '2rem' }}></i>
                </div>
                <h1 className="mt-3">Order Confirmed!</h1>
                <p className="text-muted">Your order has been placed successfully.</p>
              </div>
              
              <Card className="mb-4">
                <Card.Header className="bg-light">
                  <h5 className="mb-0">Order Details</h5>
                </Card.Header>
                <Card.Body>
                  <Row className="mb-3">
                    <Col sm={4} className="text-muted">Order Number:</Col>
                    <Col sm={8} className="fw-bold">{order.orderNumber}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={4} className="text-muted">Order Date:</Col>
                    <Col sm={8}>{new Date(order.orderDate).toLocaleString()}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={4} className="text-muted">Status:</Col>
                    <Col sm={8}>
                      <span className="badge bg-info">{order.status}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4} className="text-muted">Total Amount:</Col>
                    <Col sm={8} className="fw-bold">${order.totalAmount.toFixed(2)}</Col>
                  </Row>
                </Card.Body>
              </Card>
              
              <Card className="mb-4">
                <Card.Header className="bg-light">
                  <h5 className="mb-0">Items</h5>
                </Card.Header>
                <Card.Body>
                  {order.orderItems.map(item => (
                    <Row key={item.id} className="mb-3">
                      <Col xs={8}>
                        <div className="fw-bold">{item.productName}</div>
                        <div className="text-muted">Quantity: {item.quantity}</div>
                      </Col>
                      <Col xs={4} className="text-end">
                        ${item.subtotal.toFixed(2)}
                      </Col>
                    </Row>
                  ))}
                  <hr />
                  <Row>
                    <Col xs={8} className="fw-bold">Total</Col>
                    <Col xs={4} className="text-end fw-bold">${order.totalAmount.toFixed(2)}</Col>
                  </Row>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Header className="bg-light">
                  <h5 className="mb-0">Shipping Address</h5>
                </Card.Header>
                <Card.Body>
                  <p className="mb-1">{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
                  <p className="mb-1">{order.shippingAddress.addressLine1}</p>
                  {order.shippingAddress.addressLine2 && (
                    <p className="mb-1">{order.shippingAddress.addressLine2}</p>
                  )}
                  <p className="mb-1">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p className="mb-1">{order.shippingAddress.country}</p>
                  <p className="mb-0">{order.shippingAddress.phoneNumber}</p>
                </Card.Body>
              </Card>
              
              <div className="text-center mt-4">
                <Button as={Link} to="/" variant="primary" size="lg">
                  Continue Shopping
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmationPage;
