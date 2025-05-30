import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/api';
import { CartContext } from '../contexts/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };
  
  if (loading) {
    return (
      <Container>
        <div className="text-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Container>
    );
  }
  
  if (error || !product) {
    return (
      <Container>
        <Alert variant="danger" className="my-5">
          {error || 'Product not found'}
        </Alert>
        <Button variant="primary" onClick={() => navigate('/')}>
          Back to Products
        </Button>
      </Container>
    );
  }
  
  return (
    <Container className="py-5">
      <Button variant="light" className="mb-4" onClick={() => navigate('/')}>
        &larr; Back to Products
      </Button>
      
      <Row>
        <Col md={6} className="mb-4">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        
        <Col md={6}>
          <h1>{product.name}</h1>
          <p className="text-muted mb-2">{product.category}</p>
          <h3 className="mb-4">${product.price.toFixed(2)}</h3>
          
          <p className="mb-4">{product.description}</p>
          
          <div className="d-flex align-items-center mb-4">
            <Form.Label className="me-3 mb-0">Quantity:</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max={product.stockQuantity}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              style={{ width: '80px' }}
            />
            <span className="ms-3 text-muted">
              {product.stockQuantity} available
            </span>
          </div>
          
          <Button 
            variant="primary" 
            size="lg" 
            onClick={handleAddToCart}
            disabled={product.stockQuantity === 0}
            className="w-100"
          >
            {product.stockQuantity === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
