import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Card, Button, Badge } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';

// ProductCard component with fallback images
const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const fallbackImage = `https://via.placeholder.com/300x200/6c757d/ffffff?text=${encodeURIComponent(product.name.substring(0, 15))}`;

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={imageError ? fallbackImage : product.image}
        onError={handleImageError}
        style={{ height: '200px', objectFit: 'cover' }}
        alt={product.name}
      />
      
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <Badge bg="secondary" className="mb-2">{product.category}</Badge>
        </div>
        
        <Card.Title className="h5">{product.name}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {product.description}
        </Card.Text>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="text-primary mb-0">${product.price}</h5>
            <small className="text-muted">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </small>
          </div>
          
          <Button 
            variant={product.stock > 0 ? "primary" : "secondary"} 
            disabled={product.stock === 0}
            className="w-100"
            onClick={handleAddToCart}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Products with working Unsplash images that load in production
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 199.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
      stock: 15
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description: "Track your fitness goals with this advanced smartwatch",
      price: 149.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
      stock: 20
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      description: "Comfortable and eco-friendly cotton t-shirt",
      price: 29.99,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop",
      stock: 50
    },
    {
      id: 4,
      name: "Professional Camera Lens",
      description: "50mm prime lens for professional photography",
      price: 599.99,
      category: "Photography",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6536/6536910_rd.jpg;maxHeight=1920;maxWidth=900?format=webp",
      stock: 8
    },
    {
      id: 5,
      name: "Gaming Laptop",
      description: "High-performance laptop for gaming enthusiasts",
      price: 1299.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=200&fit=crop",
      stock: 10
    },
    {
      id: 6,
      name: "Leather Wallet",
      description: "Genuine leather wallet with multiple card slots",
      price: 49.99,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=200&fit=crop",
      stock: 30
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      description: "RGB mechanical keyboard with custom switches",
      price: 129.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
      stock: 25
    },
    {
      id: 8,
      name: "Running Shoes",
      description: "Lightweight and comfortable running shoes",
      price: 89.99,
      category: "Footwear",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
      stock: 40
    },
    {
      id: 9,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with long battery life",
      price: 39.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
      stock: 35
    },
    {
      id: 10,
      name: "Backpack",
      description: "Durable backpack with laptop compartment",
      price: 79.99,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
      stock: 22
    }
  ];
  
  // Get unique categories from products
  const categories = [...new Set(products.map(product => product.category))];
  
  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Container>
      <h1 className="mb-4">Products</h1>
      
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredProducts.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      
      {filteredProducts.length === 0 && (
        <div className="text-center my-5">
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </Container>
  );
};

export default HomePage;