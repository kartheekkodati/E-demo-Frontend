import React, { useState } from 'react';

const StepByStepOOP = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const services = [
    {
      id: 1,
      title: "User Service",
      subtitle: "Foundation of User Management",
      description: "The User Service is the foundation of our e-commerce system, handling user authentication, registration, and profile management.",
      concepts: [
        {
          name: "Encapsulation",
          explanation: "User data (name, email, password) is protected within the User class",
          implementation: "Private fields with getter/setter methods ensure data validation"
        },
        {
          name: "Inheritance", 
          explanation: "Admin and Customer classes inherit from the base User class",
          implementation: "Common functionality like authentication is reused and extended"
        },
        {
          name: "Polymorphism",
          explanation: "Different user types can be handled through the same interface",
          implementation: "Admin and Customer have different behaviors but same base structure"
        }
      ],
      code: `class User {
    private String name;
    private String email;
    private String password;

    // Encapsulation: Protected data with controlled access
    public String getName() { return name; }
    public void setEmail(String email) {
        if (email.contains("@")) {
            this.email = email;
        }
    }

    public void login() {
        // Common login logic
    }
}

// Inheritance: Specialized user types
class Admin extends User {
    public void manageUsers() {
        // Admin-specific functionality
    }
}

class Customer extends User {
    public void placeOrder(Order order) {
        // Customer-specific functionality
    }
}`,
      nextStep: "Now that we have users, we need products for them to interact with..."
    },
    {
      id: 2,
      title: "Product Service",
      subtitle: "Managing Product Catalog",
      description: "Building on the User Service, the Product Service manages our product catalog with different product types and pricing strategies.",
      concepts: [
        {
          name: "Encapsulation",
          explanation: "Product attributes are bundled together with controlled access",
          implementation: "Price, name, description are private with validation in setters"
        },
        {
          name: "Abstraction",
          explanation: "ProductService hides complex database operations behind simple methods",
          implementation: "Methods like addProduct(), updateProduct() abstract away storage details"
        },
        {
          name: "Polymorphism",
          explanation: "Different product types handle discounts differently",
          implementation: "Electronics and Clothing calculate discounts using their own rules"
        }
      ],
      code: `class Product {
    private String name;
    private double price;
    private String description;

    // Encapsulation: Controlled access to price
    public void setPrice(double price) {
        if (price > 0) {
            this.price = price;
        }
    }
    public double getPrice() { return price; }
}

// Polymorphism: Different discount strategies
class Electronics extends Product {
    public double calculateDiscount() {
        return getPrice() * 0.10; // 10% off electronics
    }
}

class Clothing extends Product {
    public double calculateDiscount() {
        return getPrice() * 0.20; // 20% off clothing
    }
}

// Abstraction: Simple interface for complex operations
class ProductService {
    public void addProduct(Product product) {
        // Hides database complexity
    }
}`,
      nextStep: "With users and products ready, let's handle order processing..."
    },
    {
      id: 3,
      title: "Order Service",
      subtitle: "Processing Customer Orders",
      description: "The Order Service connects Users and Products, managing the ordering process with calculated totals and payment processing.",
      concepts: [
        {
          name: "Encapsulation",
          explanation: "Order details are protected within the Order class",
          implementation: "Order ID, products list, and customer data are encapsulated"
        },
        {
          name: "Abstraction",
          explanation: "Complex payment and total calculation logic is hidden",
          implementation: "Simple methods like placeOrder() hide payment processing complexity"
        },
        {
          name: "Polymorphism",
          explanation: "Different order types can have specialized behavior",
          implementation: "NormalOrder vs ExpressOrder with different delivery calculations"
        }
      ],
      code: `class Order {
    private String orderId;
    private List<Product> products;
    private Customer customer;

    // Encapsulation: Protected order data
    public void addProduct(Product product) {
        products.add(product);
    }

    // Abstraction: Hides complex calculation logic
    public void calculateTotal() {
        double total = 0;
        for (Product product : products) {
            total += product.getPrice();
            total -= product.calculateDiscount(); // Polymorphic call
        }
        System.out.println("Total: $" + total);
    }

    public void processPayment() {
        // Abstract away payment complexity
    }
}

// Polymorphism: Different order types
class ExpressOrder extends Order {
    public double calculateDeliveryFee() {
        return 15.00; // Express delivery fee
    }
}`,
      nextStep: "Orders need inventory tracking to ensure product availability..."
    },
    {
      id: 4,
      title: "Inventory Service",
      subtitle: "Managing Stock Levels",
      description: "The Inventory Service tracks product availability, updating stock levels as orders are processed and managing multiple warehouse locations.",
      concepts: [
        {
          name: "Encapsulation",
          explanation: "Stock quantities and warehouse data are protected",
          implementation: "Private maps and controlled access through specific methods"
        },
        {
          name: "Abstraction",
          explanation: "Complex warehouse management is simplified to basic operations",
          implementation: "checkStock() and updateStock() hide database and warehouse logic"
        },
        {
          name: "Polymorphism",
          explanation: "Different warehouse systems can be managed uniformly",
          implementation: "Local and remote warehouses through same interface"
        }
      ],
      code: `class Inventory {
    private Map<Product, Integer> productStock;
    private String warehouseLocation;

    // Encapsulation: Protected stock data
    public boolean checkStock(Product product) {
        return productStock.getOrDefault(product, 0) > 0;
    }

    // Abstraction: Simple interface for complex operations
    public void updateStock(Product product, int quantity) {
        int currentStock = productStock.getOrDefault(product, 0);
        productStock.put(product, currentStock + quantity);
        
        // Hidden: Update database, notify warehouses, etc.
    }

    public void reserveStock(Product product, int quantity) {
        if (checkStock(product)) {
            updateStock(product, -quantity);
        }
    }
}

// Polymorphism: Different warehouse types
class LocalWarehouse extends Inventory {
    public int getDeliveryTime() { return 1; } // 1 day
}

class RemoteWarehouse extends Inventory {
    public int getDeliveryTime() { return 5; } // 5 days
}`,
      nextStep: "Finally, we need to notify users about their order status..."
    },
    {
      id: 5,
      title: "Notification Service",
      subtitle: "Customer Communication",
      description: "The Notification Service completes our system by keeping customers informed through multiple channels (email, SMS, push notifications).",
      concepts: [
        {
          name: "Encapsulation",
          explanation: "Notification details are bundled within the Notification class",
          implementation: "Recipient, message, and type are protected with controlled access"
        },
        {
          name: "Abstraction",
          explanation: "Complex sending mechanisms are hidden behind simple interfaces",
          implementation: "sendNotification() abstracts email servers, SMS gateways, etc."
        },
        {
          name: "Inheritance",
          explanation: "Specific notification types extend base Notification class",
          implementation: "EmailNotification, SMSNotification inherit common functionality"
        },
        {
          name: "Polymorphism",
          explanation: "Different notification methods handled through same interface",
          implementation: "Runtime selection of email, SMS, or push notification"
        }
      ],
      code: `// Encapsulation: Protected notification data
class Notification {
    private String recipient;
    private String message;
    private String notificationType;

    // Abstraction: Simple send interface
    public void send() {
        NotificationSender sender = 
            NotificationSenderFactory.createSender(notificationType);
        sender.sendNotification(this);
    }
}

// Polymorphism: Common interface for all senders
interface NotificationSender {
    void sendNotification(Notification notification);
}

// Inheritance + Polymorphism: Specific implementations
class EmailSender implements NotificationSender {
    public void sendNotification(Notification notification) {
        // Abstract away: SMTP connection, authentication, etc.
        connectToEmailServer();
        sendEmail(notification.getMessage());
    }
}

class SMSSender implements NotificationSender {
    public void sendNotification(Notification notification) {
        // Abstract away: SMS gateway, carrier networks, etc.
        connectToSMSGateway();
        sendSMS(notification.getMessage());
    }
}

// Factory Pattern: Creates appropriate sender
class NotificationSenderFactory {
    public static NotificationSender createSender(String type) {
        switch(type) {
            case "Email": return new EmailSender();
            case "SMS": return new SMSSender();
            default: return new PushNotificationSender();
        }
    }
}`,
      nextStep: "Congratulations! You've built a complete e-commerce system using OOP principles!"
    }
  ];

  const nextStep = () => {
    if (currentStep < services.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const currentService = services[currentStep];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
      padding: '2rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            Step-by-Step E-commerce System
          </h1>
          <p style={{
            color: '#6b7280',
            fontSize: '1.125rem'
          }}>
            Building services one by one using OOP principles
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            {services.map((service, index) => (
              <div key={service.id} style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={() => goToStep(index)}
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    backgroundColor: index <= currentStep ? '#3b82f6' : '#d1d5db',
                    color: index <= currentStep ? 'white' : '#6b7280',
                    boxShadow: index === currentStep ? '0 0 0 4px rgba(59, 130, 246, 0.3)' : 'none'
                  }}
                >
                  {index < currentStep ? '✓' : index + 1}
                </button>
                {index < services.length - 1 && (
                  <div style={{
                    width: '4rem',
                    height: '4px',
                    margin: '0 0.5rem',
                    backgroundColor: index < currentStep ? '#3b82f6' : '#d1d5db'
                  }} />
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>
              Step {currentStep + 1} of {services.length}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden'
        }}>
          {/* Service Header */}
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            color: 'white',
            padding: '2rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h2 style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {currentService.title}
                </h2>
                <p style={{
                  fontSize: '1.25rem',
                  opacity: 0.9
                }}>
                  {currentService.subtitle}
                </p>
              </div>
              <div style={{
                fontSize: '3.75rem',
                fontWeight: 'bold',
                opacity: 0.2
              }}>
                {currentService.id}
              </div>
            </div>
            <p style={{
              marginTop: '1rem',
              fontSize: '1.125rem',
              opacity: 0.9
            }}>
              {currentService.description}
            </p>
          </div>

          {/* Content */}
          <div style={{ padding: '2rem' }}>
            {/* OOP Concepts Used */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#1f2937'
              }}>
                OOP Concepts Applied
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {currentService.concepts.map((concept, index) => (
                  <div key={index} style={{
                    backgroundColor: '#f9fafb',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    borderLeft: '4px solid #3b82f6'
                  }}>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: 'bold',
                      color: '#3b82f6',
                      marginBottom: '0.5rem'
                    }}>
                      {concept.name}
                    </h4>
                    <p style={{
                      color: '#374151',
                      marginBottom: '0.75rem',
                      fontSize: '0.875rem'
                    }}>
                      {concept.explanation}
                    </p>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      fontStyle: 'italic'
                    }}>
                      <strong>Implementation:</strong> {concept.implementation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Example */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#1f2937'
              }}>
                Code Implementation
              </h3>
              <div style={{
                backgroundColor: '#1f2937',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                overflowX: 'auto'
              }}>
                <pre style={{
                  color: '#10b981',
                  fontSize: '0.875rem',
                  fontFamily: 'monospace',
                  whiteSpace: 'pre-wrap',
                  margin: 0
                }}>
                  {currentService.code}
                </pre>
              </div>
            </div>

            {/* Next Step Preview */}
            {currentStep < services.length - 1 && (
              <div style={{
                backgroundColor: '#eff6ff',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                border: '1px solid #dbeafe'
              }}>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  color: '#1e40af',
                  marginBottom: '0.5rem'
                }}>
                  What's Next?
                </h4>
                <p style={{ color: '#1d4ed8' }}>
                  {currentService.nextStep}
                </p>
              </div>
            )}

            {/* Completion Message */}
            {currentStep === services.length - 1 && (
              <div style={{
                backgroundColor: '#f0fdf4',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                border: '1px solid #bbf7d0',
                textAlign: 'center'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#166534',
                  marginBottom: '1rem'
                }}>
                  🎉 System Complete!
                </h4>
                <p style={{
                  color: '#15803d',
                  fontSize: '1.125rem',
                  marginBottom: '1rem'
                }}>
                  You've successfully built a complete e-commerce system using all four OOP principles:
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  fontSize: '0.875rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    backgroundColor: '#bbf7d0',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '0.25rem'
                  }}>
                    Encapsulation
                  </span>
                  <span style={{
                    backgroundColor: '#bbf7d0',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '0.25rem'
                  }}>
                    Inheritance
                  </span>
                  <span style={{
                    backgroundColor: '#bbf7d0',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '0.25rem'
                  }}>
                    Polymorphism
                  </span>
                  <span style={{
                    backgroundColor: '#bbf7d0',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '0.25rem'
                  }}>
                    Abstraction
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div style={{
            backgroundColor: '#f9fafb',
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontWeight: 'bold',
                cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
                backgroundColor: currentStep === 0 ? '#d1d5db' : '#4b5563',
                color: currentStep === 0 ? '#9ca3af' : 'white'
              }}
            >
              ← Previous
            </button>

            <div style={{ textAlign: 'center' }}>
              <p style={{
                color: '#6b7280',
                fontWeight: 'bold'
              }}>
                {currentService.title}
              </p>
            </div>

            <button
              onClick={nextStep}
              disabled={currentStep === services.length - 1}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontWeight: 'bold',
                cursor: currentStep === services.length - 1 ? 'not-allowed' : 'pointer',
                backgroundColor: currentStep === services.length - 1 ? '#d1d5db' : '#3b82f6',
                color: currentStep === services.length - 1 ? '#9ca3af' : 'white'
              }}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Service Overview */}
        <div style={{
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => goToStep(index)}
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '2px solid',
                borderColor: index === currentStep ? '#3b82f6' : index < currentStep ? '#10b981' : '#d1d5db',
                backgroundColor: index === currentStep ? '#eff6ff' : index < currentStep ? '#f0fdf4' : 'white',
                cursor: 'pointer'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  margin: '0 auto 0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  backgroundColor: index === currentStep ? '#3b82f6' : index < currentStep ? '#10b981' : '#d1d5db',
                  color: index === currentStep || index < currentStep ? 'white' : '#6b7280'
                }}>
                  {index < currentStep ? '✓' : index + 1}
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: 0
                }}>
                  {service.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepByStepOOP;