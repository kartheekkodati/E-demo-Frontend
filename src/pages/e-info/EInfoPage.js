import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EInfoPage = () => {
  const topics = [
    {
      title: 'System Design',
      description: 'Learn about architectural patterns, scalability, and designing robust systems.',
      link: '/e-info/system-design',
      icon: '🏗️'
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Explore fundamental data structures and algorithms for efficient problem solving.',
      link: '/e-info/dsa',
      icon: '🧮'
    },
    {
      title: 'Object-Oriented Programming',
      description: 'Understand OOP concepts, principles, and best practices.',
      link: '/e-info/oops',
      icon: '🧩'
    },
    {
      title: 'Database',
      description: 'Learn about database design, optimization, and management.',
      link: '/e-info/database',
      icon: '🗄️'
    },
    {
      title: 'REST API',
      description: 'Explore REST principles, design patterns, and best practices.',
      link: '/e-info/rest-api',
      icon: '🔌'
    },
    {
      title: 'Kafka',
      description: 'Learn about event streaming, message processing, and Kafka architecture.',
      link: '/e-info/kafka',
      icon: '📨'
    },
    
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">E-Info Learning Hub</h1>
      <p className="lead text-center mb-5">
        Welcome to the E-Info Learning Hub. Explore various technical topics to enhance your knowledge and skills.
      </p>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {topics.map((topic, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm hover-card">
              <Card.Body>
                <div className="text-center mb-3">
                  <span style={{ fontSize: '3rem' }}>{topic.icon}</span>
                </div>
                <Card.Title className="text-center">{topic.title}</Card.Title>
                <Card.Text>{topic.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0 text-center">
                <Link to={topic.link} className="btn btn-primary">
                  Explore
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EInfoPage;
