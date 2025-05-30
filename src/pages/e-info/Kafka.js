import React, { useState } from 'react';

const Kafka = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');
  const [expandedService, setExpandedService] = useState(null);

  // Kafka Fundamentals Data
  const kafkaFundamentals = {
    whatIsKafka: {
      title: "What is Apache Kafka?",
      content: [
        "Apache Kafka is a distributed event streaming platform that enables:",
        "- High-throughput, low-latency message handling",
        "- Fault-tolerant, durable message storage",
        "- Publish-subscribe and queue-based messaging",
        "- Real-time stream processing"
      ]
    },
    components: [
      {
        title: "Topics",
        description: "Categories or feeds where messages are published",
        details: [
          "• Logical channels for message categorization (e.g., 'order-events')",
          "• Can have multiple producers and consumers",
          "• Messages in topics are immutable (append-only)"
        ]
      },
      {
        title: "Partitions",
        description: "How topics are split for parallel processing",
        details: [
          "• Each topic can be divided into partitions",
          "• Enables horizontal scaling and parallelism",
          "• Messages within a partition are ordered",
          "• Partition count determines maximum consumer parallelism"
        ]
      },
      {
        title: "Brokers",
        description: "Kafka servers that handle data storage and serving",
        details: [
          "• Form a Kafka cluster (typically 3-5 brokers in production)",
          "• Each broker handles a subset of partitions",
          "• Automatically replicate data for fault tolerance",
          "• Serve both producer and consumer requests"
        ]
      },
      {
        title: "Producers",
        description: "Applications that publish messages to topics",
        details: [
          "• Decide which partition to write to (round-robin or key-based)",
          "• Can wait for acknowledgments (acks=0,1,all)",
          "• Batch messages for efficiency",
          "• Handle retries for failed deliveries"
        ]
      },
      {
        title: "Consumers",
        description: "Applications that read and process messages",
        details: [
          "• Organized into consumer groups for parallel processing",
          "• Each partition is consumed by only one consumer in a group",
          "• Track progress using offsets",
          "• Can rewind and reprocess messages"
        ]
      }
    ],
    executionFlow: {
      title: "Typical Execution Flow",
      steps: [
        {
          step: 1,
          description: "Producer publishes message to a topic partition"
        },
        {
          step: 2,
          description: "Broker writes message to commit log (disk)"
        },
        {
          step: 3,
          description: "Broker replicates message to other brokers (if replication > 1)"
        },
        {
          step: 4,
          description: "Consumer polls for new messages from its assigned partitions"
        },
        {
          step: 5,
          description: "Consumer processes message and commits offset"
        },
        {
          step: 6,
          description: "Broker retains messages based on retention policy (time/size)"
        }
      ]
    }
  };

  // Microservices Data
  const serviceDetails = {
    order: {
      name: "Order Service",
      role: "Kafka Producer",
      description: "Handles order creation and publishes order events",
      kafkaIntegration: [
        "• The Order Service is responsible for creating orders. Once an order is placed, it needs to trigger downstream processes like payment processing, inventory update, and shipping.",
        "• The Order Service acts as a Kafka producer when an order is placed.",
        "• Publishing Events: When a customer places an order, the Order Service creates an OrderPlaced event, which contains details like the order ID, customer ID, order items, and total amount.",
        "• Kafka Producer: The Order Service sends the OrderPlaced event to a Kafka topic (e.g., order-events).",
        "• Other services, such as Payment Service, Inventory Service, and Shipping Service, consume this event to perform their respective tasks."
      ],
      flow: "Order placed by the client → Order Service generates OrderPlaced event → Kafka topic order-events → Other services consume and process the event.",
      code: `public void placeOrder(Order order) {
    // Logic for placing an order
    OrderPlacedEvent event = new OrderPlacedEvent(order);
    kafkaTemplate.send("order-events", event);  // Sending event to Kafka
}`,
      topics: ["order-events"]
    },
    inventory: {
      name: "Inventory Service",
      role: "Kafka Consumer & Producer",
      description: "Manages product stock levels and updates",
      kafkaIntegration: [
        "• The Inventory Service manages product stock. It listens for events related to order placements to update the stock accordingly.",
        "• After receiving an event indicating an order has been placed, the Inventory Service reduces the stock quantity and sends an InventoryUpdated event.",
        "• Consuming Events: The Inventory Service subscribes to the order-events topic to consume the OrderPlaced event. It then updates the product stock in the database.",
        "• Publishing Events: After updating the inventory, the Inventory Service publishes an InventoryUpdated event to the Kafka topic inventory-events, which could be consumed by other services (e.g., Notification Service to notify users about low stock)."
      ],
      flow: "Order placed event (OrderPlaced) → Inventory Service consumes from order-events → Stock is updated → Inventory Service sends InventoryUpdated event to Kafka topic inventory-events.",
      code: `@KafkaListener(topics = "order-events", groupId = "inventory-group")
public void updateInventory(OrderPlacedEvent event) {
    // Logic for updating stock
    InventoryUpdatedEvent inventoryEvent = new InventoryUpdatedEvent(
        event.getProductId(), 
        newStock
    );
    kafkaTemplate.send("inventory-events", inventoryEvent);
}`,
      topics: ["order-events", "inventory-events"]
    },
    shipping: {
      name: "Shipping Service",
      role: "Kafka Consumer & Producer",
      description: "Handles order shipping after payment confirmation",
      kafkaIntegration: [
        "• The Shipping Service is responsible for processing shipping once payment is confirmed. It listens for events like PaymentProcessed to begin the shipping process.",
        "• It consumes payment-related events and produces shipping-related events.",
        "• Consuming Events: The Shipping Service listens for PaymentProcessed events from the payment-events Kafka topic. Upon receiving this event, it starts the shipping process.",
        "• Publishing Events: Once shipping is initiated, the Shipping Service publishes a ShipmentInitiated event to the shipping-events topic, which might be consumed by the Notification Service to notify the customer."
      ],
      flow: "Payment processed event (PaymentProcessed) → Shipping Service consumes from payment-events → Shipment initiated → Shipping Service sends ShipmentInitiated event to Kafka topic shipping-events.",
      code: `@KafkaListener(topics = "payment-events", groupId = "shipping-group")
public void initiateShipping(PaymentProcessedEvent event) {
    // Shipping initiation logic
    ShipmentInitiatedEvent shipmentEvent = new ShipmentInitiatedEvent(
        event.getOrderId()
    );
    kafkaTemplate.send("shipping-events", shipmentEvent);
}`,
      topics: ["payment-events", "shipping-events"]
    },
    notification: {
      name: "Notification Service",
      role: "Kafka Consumer & Producer",
      description: "Sends customer notifications based on system events",
      kafkaIntegration: [
        "• The Notification Service sends notifications (e.g., email, SMS) based on various events like order placement, payment processing, and shipping updates.",
        "• It is a Kafka consumer and listens to events from multiple topics (e.g., order-events, payment-events, shipping-events).",
        "• Consuming Events: The Notification Service listens to the order-events, payment-events, and shipping-events topics for various events.",
        "• Publishing Events: After sending notifications, it can publish confirmation events (e.g., EmailSent, SMSSent) to Kafka topics, which can be consumed by other services (e.g., logging services)."
      ],
      flow: "Order placed event (OrderPlaced) → Notification Service consumes from order-events → Sends order confirmation email → Notification Service sends EmailSent event to Kafka topic notification-events.",
      code: `@KafkaListener(topics = "order-events", groupId = "notification-group")
public void sendOrderConfirmation(OrderPlacedEvent event) {
    // Logic to send email
    EmailSentEvent emailSentEvent = new EmailSentEvent(
        event.getOrderId()
    );
    kafkaTemplate.send("notification-events", emailSentEvent);
}`,
      topics: ["order-events", "payment-events", "shipping-events", "notification-events"]
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Kafka with Microservices</h1>
        <p className="text-gray-600">
          From fundamentals to service-level implementation
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('fundamentals')}
              className={`py-3 px-4 text-center border-b-2 font-medium text-sm ${
                activeTab === 'fundamentals' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Kafka Fundamentals
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`py-3 px-4 text-center border-b-2 font-medium text-sm ${
                activeTab === 'services' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Service Integrations
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'fundamentals' ? (
            <div className="space-y-8">
              {/* What is Kafka */}
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg text-blue-800 mb-3">
                  {kafkaFundamentals.whatIsKafka.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {kafkaFundamentals.whatIsKafka.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Kafka Components */}
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Core Components</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {kafkaFundamentals.components.map((component, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-blue-700">{component.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{component.description}</p>
                      <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-1">
                        {component.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Flow */}
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">
                  {kafkaFundamentals.executionFlow.title}
                </h3>
                <div className="space-y-3">
                  {kafkaFundamentals.executionFlow.steps.map((step) => (
                    <div key={step.step} className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        {step.step}
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-white rounded border border-gray-300">
                  <h4 className="font-medium text-sm text-gray-800 mb-2">Visual Flow:</h4>
                  <div className="text-xs text-center text-gray-600 bg-gray-100 p-2 rounded">
                    <div>Producer → Topic (Broker) → Consumer</div>
                    <div className="text-gray-400 mt-1">(with replication between brokers)</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(serviceDetails).map(([key, service]) => (
                <div 
                  key={key}
                  className={`p-5 rounded-lg border ${
                    expandedService === key 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setExpandedService(expandedService === key ? null : key)}
                  >
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded">
                      {service.role}
                    </span>
                  </div>

                  {expandedService === key && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Kafka Integration:</h4>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                          {service.kafkaIntegration.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Kafka Flow:</h4>
                          <div className="bg-gray-100 p-3 rounded text-sm">
                            {service.flow}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Topics:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.topics.map(topic => (
                              <span key={topic} className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Code Implementation:</h4>
                        <pre className="text-xs bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                          {service.code}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kafka;