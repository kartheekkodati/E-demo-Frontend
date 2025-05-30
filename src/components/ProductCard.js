import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <Card className="h-100">
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover' }}
        onError={(e) => {
          console.error("Image failed to load:", product.image);
          e.target.src = "https://via.placeholder.com/300x200?text=Product+Image";
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted mb-2">{product.category}</Card.Text>
        <Card.Text className="mb-2">${product.price.toFixed(2)}</Card.Text>
        <Card.Text className="text-truncate mb-3">{product.description}</Card.Text>
        <div className="mt-auto d-flex justify-content-between">
          <Button 
            as={Link} 
            to={`/product/${product.id}`} 
            variant="outline-primary"
          >
            View Details
          </Button>
          <Button 
            variant="primary" 
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
