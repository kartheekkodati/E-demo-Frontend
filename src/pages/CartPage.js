import React, { useContext } from 'react';
import { Container, Table, Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();
  
  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity));
  };
  
  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  if (cartItems.length === 0) {
    return (
      <Container className="py-5">
        <h1 className="mb-4">Your Cart</h1>
        <Alert variant="info">
          Your cart is empty. <Link to="/">Continue shopping</Link>
        </Alert>
      </Container>
    );
  }
  
  return (
    <Container className="py-5">
      <h1 className="mb-4">Your Cart</h1>
      
      <Table responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                  />
                  <div>
                    <Link to={`/product/${item.id}`} className="text-decoration-none">
                      {item.name}
                    </Link>
                  </div>
                </div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td style={{ width: '150px' }}>
                <Form.Control
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  style={{ width: '80px' }}
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">Total:</td>
            <td className="fw-bold">${getCartTotal().toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
      
      <div className="d-flex justify-content-between mt-4">
        <Button 
          as={Link} 
          to="/" 
          variant="outline-primary"
        >
          Continue Shopping
        </Button>
        <Button 
          variant="primary" 
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </div>
    </Container>
  );
};

export default CartPage;
