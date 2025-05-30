import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6} className="text-white">
            <h5>E-Commerce Demo</h5>
            <p className="text-muted">
              A demo e-commerce application built with  React, RestApi, Spring Boot, Java, Mysql and MongoDB, Kafka, and more.
            </p>
          </Col>
          
         
          <Col>
          <h5 style={{ color: 'white' }}>Links</h5>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><a href="https://linkedin.com/in/kartheek-kodati-57635129" style={{ textDecoration: 'none', color: 'white' }}>LinkedIn: https://linkedin.com/in/kartheek-kodati-57635129</a></li>
            <li><a href="https://github.com/kartheekkodati/ecommerce-demo" style={{ textDecoration: 'none', color: 'white' }}>GitHub: github.com/kartheekkodati/ecommerce-demo </a></li>
          </ul>
        </Col>

          
          <Col md={3}>
            <h5>Contact</h5>
            <address className="text-white">
              <p>Email: kartheekkodati1@gmail.com</p>
              <p>Phone:+1 937-986-7559</p>
            </address>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center text-muted">
            <p>&copy; {new Date().getFullYear()} E-Commerce Demo. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
