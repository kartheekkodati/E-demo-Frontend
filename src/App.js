import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import EInfoPage from './pages/e-info/EInfoPage';
import SystemDesign from './pages/e-info/SystemDesign';
import DSA from './pages/e-info/DSA';
import OOPS from './pages/e-info/OOPS';
import Database from './pages/e-info/Database';
import RestAPI from './pages/e-info/RestAPI';
import Kafka from './pages/e-info/Kafka';

import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1 py-3">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
              <Route path="/e-info" element={<EInfoPage />} />
              <Route path="/e-info/system-design" element={<SystemDesign />} />
              <Route path="/e-info/dsa" element={<DSA />} />
              <Route path="/e-info/oops" element={<OOPS />} />
              <Route path="/e-info/database" element={<Database />} />
              <Route path="/e-info/rest-api" element={<RestAPI />} />
              <Route path="/e-info/kafka" element={<Kafka />} />
              
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
