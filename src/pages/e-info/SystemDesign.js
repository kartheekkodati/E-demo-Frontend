import React, { useState } from 'react';

// Simple icon components to replace lucide-react
const Icon = ({ children, className = "w-4 h-4" }) => (
  <span className={`inline-block ${className}`} style={{ fontSize: '16px' }}>{children}</span>
);

const ShoppingCart = ({ className }) => <Icon className={className}>🛒</Icon>;
const Package = ({ className }) => <Icon className={className}>📦</Icon>;
const CreditCard = ({ className }) => <Icon className={className}>💳</Icon>;
const Truck = ({ className }) => <Icon className={className}>🚚</Icon>;
const Users = ({ className }) => <Icon className={className}>👥</Icon>;
const Database = ({ className }) => <Icon className={className}>🗄️</Icon>;
const Cloud = ({ className }) => <Icon className={className}>☁️</Icon>;
const Layers = ({ className }) => <Icon className={className}>📚</Icon>;
const MessageSquare = ({ className }) => <Icon className={className}>💬</Icon>;
const Search = ({ className }) => <Icon className={className}>🔍</Icon>;
const Shield = ({ className }) => <Icon className={className}>🛡️</Icon>;
const BarChart3 = ({ className }) => <Icon className={className}>📊</Icon>;
const FileText = ({ className }) => <Icon className={className}>📄</Icon>;
const Settings = ({ className }) => <Icon className={className}>⚙️</Icon>;
const Zap = ({ className }) => <Icon className={className}>⚡</Icon>;
const Globe = ({ className }) => <Icon className={className}>🌐</Icon>;
const Smartphone = ({ className }) => <Icon className={className}>📱</Icon>;
const Monitor = ({ className }) => <Icon className={className}>🖥️</Icon>;

const SystemDesign = () => {
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const architectureLayers = {
    presentation: {
      title: "Presentation Layer",
      color: "bg-blue-100 border-blue-300",
      icon: <Monitor className="w-5 h-5" />,
      description: "Multiple UI touchpoints serving different user experiences",
      components: [
        { name: "Web Application", icon: <Globe className="w-4 h-4" />, desc: "Responsive e-commerce website" },
        { name: "Mobile Apps", icon: <Smartphone className="w-4 h-4" />, desc: "Native iOS/Android applications" }
      ]
    },
    gateway: {
      title: "API Gateway & Routing Layer",
      color: "bg-green-100 border-green-300",
      icon: <Layers className="w-5 h-5" />,
      description: "Traffic management, authentication, and request routing",
      components: [
        { name: "Load Balancer", icon: <Zap className="w-4 h-4" />, desc: "Distributes incoming requests" },
        { name: "REST API", icon: <MessageSquare className="w-4 h-4" />, desc: "RESTful API endpoints" },
        { name: "Circuit Breaker", icon: <Shield className="w-4 h-4" />, desc: "Fault tolerance mechanism" }
      ]
    },
    microservices: {
      title: "Microservices Layer",
      color: "bg-purple-100 border-purple-300",
      icon: <Package className="w-5 h-5" />,
      description: "Independent business capability services",
      components: [
        { name: "Product Catalog", icon: <Package className="w-4 h-4" />, desc: "Product information management" },
        { name: "Shopping Cart", icon: <ShoppingCart className="w-4 h-4" />, desc: "Cart and session management" },
        { name: "Order Management", icon: <FileText className="w-4 h-4" />, desc: "Order processing workflow" },
        { name: "Payment Service", icon: <CreditCard className="w-4 h-4" />, desc: "Payment processing & billing" },
        { name: "Inventory Service", icon: <BarChart3 className="w-4 h-4" />, desc: "Stock management & availability" },
        { name: "Shipping Service", icon: <Truck className="w-4 h-4" />, desc: "Logistics & delivery management" },
        { name: "User Management", icon: <Users className="w-4 h-4" />, desc: "Authentication & user profiles" }
      ]
    },
    data: {
      title: "Data Layer",
      color: "bg-orange-100 border-orange-300",
      icon: <Database className="w-5 h-5" />,
      description: "Distributed data storage with database-per-service pattern",
      components: [
        { name: "Product Database", icon: <Database className="w-4 h-4" />, desc: "MongoDB for Product Catalog" },
        { name: "Cart Database", icon: <Database className="w-4 h-4" />, desc: "Redis for Shopping Cart" },
        { name: "Order Database", icon: <Database className="w-4 h-4" />, desc: "MySQL for Order Management" },
        { name: "Payment Database", icon: <Database className="w-4 h-4" />, desc: "MySQL for Payment Service" },
        { name: "Inventory Database", icon: <Database className="w-4 h-4" />, desc: "MongoDB for Inventory Service" },
        { name: "Shipping Database", icon: <Database className="w-4 h-4" />, desc: "MySQL for Shipping Service" },
        { name: "User Database", icon: <Database className="w-4 h-4" />, desc: "MySQL for User Management" },
        { name: "Search Engine", icon: <Search className="w-4 h-4" />, desc: "Elasticsearch for Product Search" }
      ]
    }
  };

  const keyPrinciples = [
    {
      title: "Independent Deployment",
      description: "Each microservice can be developed, tested, and deployed independently without affecting other services.",
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Database per Service",
      description: "Each microservice owns its data and database, ensuring loose coupling and data consistency.",
      icon: <Database className="w-6 h-6 text-green-600" />
    },
    {
      title: "API-First Communication",
      description: "Services communicate through well-defined REST APIs or message queues for loose coupling.",
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Fault Tolerance",
      description: "Circuit breakers and bulkhead patterns prevent cascade failures across the system.",
      icon: <Shield className="w-6 h-6 text-red-600" />
    }
  ];

  const communicationPatterns = [
    {
      type: "Synchronous",
      method: "REST APIs",
      use: "Real-time operations (product search, user authentication)",
      pros: "Simple, direct communication",
      cons: "Creates tight coupling, potential latency"
    },
    {
      type: "Asynchronous",
      method: "Message Queues",
      use: "Event-driven operations (order processing, notifications)",
      pros: "Loose coupling, better fault tolerance",
      cons: "Complex error handling, eventual consistency"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            E-commerce Microservices Architecture
          </h1>
          <p className="text-lg text-gray-600">
            Scalable, modular system design for modern e-commerce platforms
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Functional Requirements */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Functional Requirements
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Product Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Shopping & Orders
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Payment & Billing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  User Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Shipping & Delivery
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Search & Analytics
                </li>
              </ul>
            </div>

            {/* Non-Functional Requirements */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Non-Functional Requirements
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Performance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Security
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Scalability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Reliability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Usability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Maintainability
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">System Architecture Diagram</h2>
          <div className="w-full overflow-x-auto">
            <svg viewBox="0 0 1200 750" className="w-full h-auto border border-gray-200 rounded-lg">
              {/* Background */}
              <rect width="1200" height="750" fill="#f8fafc" />
              
              {/* Client Layer */}
              <rect x="50" y="50" width="1100" height="100" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="8" />
              <text x="600" y="80" textAnchor="middle" className="text-lg font-semibold" fill="#1e40af">Client Layer</text>
              
              {/* Client devices */}
              <rect x="300" y="100" width="120" height="40" fill="#60a5fa" stroke="#3b82f6" rx="4" />
              <text x="360" y="125" textAnchor="middle" fill="white" fontSize="12">Web App</text>
              
              <rect x="480" y="100" width="120" height="40" fill="#60a5fa" stroke="#3b82f6" rx="4" />
              <text x="540" y="125" textAnchor="middle" fill="white" fontSize="12">Mobile App</text>
              
              {/* API Gateway Layer */}
              <rect x="50" y="200" width="1100" height="80" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="8" />
              <text x="600" y="230" textAnchor="middle" className="text-lg font-semibold" fill="#15803d">API Gateway & Routing Layer</text>
              
              <rect x="250" y="240" width="150" height="30" fill="#4ade80" stroke="#16a34a" rx="4" />
              <text x="325" y="260" textAnchor="middle" fill="white" fontSize="12">Load Balancer</text>
              
              <rect x="450" y="240" width="150" height="30" fill="#4ade80" stroke="#16a34a" rx="4" />
              <text x="525" y="260" textAnchor="middle" fill="white" fontSize="12">REST API</text>
              
              <rect x="650" y="240" width="150" height="30" fill="#4ade80" stroke="#16a34a" rx="4" />
              <text x="725" y="260" textAnchor="middle" fill="white" fontSize="12">Circuit Breaker</text>
              
              {/* Microservices Layer */}
              <rect x="50" y="330" width="1100" height="180" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" rx="8" />
              <text x="600" y="360" textAnchor="middle" className="text-lg font-semibold" fill="#7c3aed">Microservices Layer</text>
              
              {/* Microservice boxes */}
              <rect x="100" y="380" width="120" height="50" fill="#a855f7" stroke="#9333ea" rx="4" />
              <text x="160" y="395" textAnchor="middle" fill="white" fontSize="10">Product</text>
              <text x="160" y="410" textAnchor="middle" fill="white" fontSize="10">Catalog</text>
              <text x="160" y="425" textAnchor="middle" fill="white" fontSize="8">:8001</text>
              
              <rect x="250" y="380" width="120" height="50" fill="#a855f7" stroke="#9333ea" rx="4" />
              <text x="310" y="395" textAnchor="middle" fill="white" fontSize="10">Shopping</text>
              <text x="310" y="410" textAnchor="middle" fill="white" fontSize="10">Cart</text>
              <text x="310" y="425" textAnchor="middle" fill="white" fontSize="8">:8002</text>
              
              <rect x="400" y="380" width="120" height="50" fill="#a855f7" stroke="#9333ea" rx="4" />
              <text x="460" y="395" textAnchor="middle" fill="white" fontSize="10">Order</text>
              <text x="460" y="410" textAnchor="middle" fill="white" fontSize="10">Management</text>
              <text x="460" y="425" textAnchor="middle" fill="white" fontSize="8">:8003</text>
              
              <rect x="550" y="380" width="120" height="50" fill="#a855f7" stroke="#9333ea" rx="4" />
              <text x="610" y="395" textAnchor="middle" fill="white" fontSize="10">Payment</text>
              <text x="610" y="410" textAnchor="middle" fill="white" fontSize="10">Service</text>
              <text x="610" y="425" textAnchor="middle" fill="white" fontSize="8">:8004</text>
              
              <rect x="700" y="380" width="120" height="50" fill="#a855f7" stroke="#9333ea" rx="4" />
              <text x="760" y="395" textAnchor="middle" fill="white" fontSize="10">Inventory</text>
              <text x="760" y="410" textAnchor="middle" fill="white" fontSize="10">Service</text>
              <text x="760" y="425" textAnchor="middle" fill="white" fontSize="8">:8005</text>
              
              <rect x="425" y="450" width="120" height="50" fill="#a855f7" stroke="#9333ea" rx="4" />
              <text x="485" y="465" textAnchor="middle" fill="white" fontSize="10">Shipping</text>
              <text x="485" y="480" textAnchor="middle" fill="white" fontSize="10">Service</text>
              <text x="485" y="495" textAnchor="middle" fill="white" fontSize="8">:8006</text>
              
              <rect x="850" y="380" width="120" height="50" fill="#a855f7" stroke="#9333ea" rx="4" />
              <text x="910" y="395" textAnchor="middle" fill="white" fontSize="10">User</text>
              <text x="910" y="410" textAnchor="middle" fill="white" fontSize="10">Management</text>
              <text x="910" y="425" textAnchor="middle" fill="white" fontSize="8">:8007</text>
              
              {/* Message Bus */}
              <rect x="300" y="520" width="400" height="30" fill="#fbbf24" stroke="#f59e0b" rx="4" />
              <text x="500" y="540" textAnchor="middle" fill="white" fontSize="12">Message Broker (Kafka)</text>
              
              {/* Data Layer */}
              <rect x="50" y="580" width="1100" height="100" fill="#fed7d7" stroke="#e53e3e" strokeWidth="2" rx="8" />
              <text x="600" y="610" textAnchor="middle" className="text-lg font-semibold" fill="#c53030">Data Layer</text>
              
              {/* Database boxes - Each service has its own database */}
              <rect x="80" y="630" width="120" height="40" fill="#f56565" stroke="#e53e3e" rx="4" />
              <text x="140" y="645" textAnchor="middle" fill="white" fontSize="9">Product DB</text>
              <text x="140" y="660" textAnchor="middle" fill="white" fontSize="7">(MongoDB)</text>
              
              <rect x="220" y="630" width="120" height="40" fill="#f56565" stroke="#e53e3e" rx="4" />
              <text x="280" y="645" textAnchor="middle" fill="white" fontSize="9">Cart DB</text>
              <text x="280" y="660" textAnchor="middle" fill="white" fontSize="7">(Redis)</text>
              
              <rect x="360" y="630" width="120" height="40" fill="#f56565" stroke="#e53e3e" rx="4" />
              <text x="420" y="645" textAnchor="middle" fill="white" fontSize="9">Order DB</text>
              <text x="420" y="660" textAnchor="middle" fill="white" fontSize="7">(MySQL)</text>
              
              <rect x="500" y="630" width="120" height="40" fill="#f56565" stroke="#e53e3e" rx="4" />
              <text x="560" y="645" textAnchor="middle" fill="white" fontSize="9">Payment DB</text>
              <text x="560" y="660" textAnchor="middle" fill="white" fontSize="7">(MySQL)</text>
              
              <rect x="640" y="630" width="120" height="40" fill="#f56565" stroke="#e53e3e" rx="4" />
              <text x="700" y="645" textAnchor="middle" fill="white" fontSize="9">Inventory DB</text>
              <text x="700" y="660" textAnchor="middle" fill="white" fontSize="7">(MongoDB)</text>
              
              <rect x="780" y="630" width="120" height="40" fill="#f56565" stroke="#e53e3e" rx="4" />
              <text x="840" y="645" textAnchor="middle" fill="white" fontSize="9">Shipping DB</text>
              <text x="840" y="660" textAnchor="middle" fill="white" fontSize="7">(MySQL)</text>
              
              <rect x="920" y="630" width="120" height="40" fill="#f56565" stroke="#e53e3e" rx="4" />
              <text x="980" y="645" textAnchor="middle" fill="white" fontSize="9">User DB</text>
              <text x="980" y="660" textAnchor="middle" fill="white" fontSize="7">(MySQL)</text>
              
              <rect x="360" y="680" width="120" height="30" fill="#9ca3af" stroke="#6b7280" rx="4" />
              <text x="420" y="700" textAnchor="middle" fill="white" fontSize="9">Search Engine</text>
              <text x="420" y="710" textAnchor="middle" fill="white" fontSize="7">(Elasticsearch)</text>
              
              {/* Database to Service Connection Lines - One-to-One mapping */}
              {/* Product Catalog to Product DB */}
              <line x1="160" y1="430" x2="140" y2="630" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Shopping Cart to Cart DB */}
              <line x1="310" y1="430" x2="280" y2="630" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Order Management to Order DB */}
              <line x1="460" y1="430" x2="420" y2="630" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Payment Service to Payment DB */}
              <line x1="610" y1="430" x2="560" y2="630" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Inventory Service to Inventory DB */}
              <line x1="760" y1="430" x2="700" y2="630" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Shipping Service to Shipping DB */}
              <line x1="485" y1="500" x2="840" y2="630" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* User Management to User DB */}
              <line x1="910" y1="430" x2="980" y2="630" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Product Catalog to Search Engine (for search functionality) */}
              <line x1="160" y1="430" x2="420" y2="680" stroke="#dc2626" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Connection Lines */}
              {/* Client to API Gateway */}
              <line x1="360" y1="140" x2="325" y2="200" stroke="#64748b" strokeWidth="2" />
              <line x1="540" y1="140" x2="525" y2="200" stroke="#64748b" strokeWidth="2" />
              
              {/* API Gateway to Microservices */}
              <line x1="325" y1="280" x2="160" y2="380" stroke="#64748b" strokeWidth="1" />
              <line x1="525" y1="280" x2="310" y2="380" stroke="#64748b" strokeWidth="1" />
              <line x1="725" y1="280" x2="460" y2="380" stroke="#64748b" strokeWidth="1" />
              
              {/* Microservices to Data Layer - General connections */}
              <line x1="310" y1="430" x2="610" y2="630" stroke="#64748b" strokeWidth="1" />
              <line x1="160" y1="430" x2="780" y2="630" stroke="#64748b" strokeWidth="1" />
              
              {/* Legend */}
              <rect x="950" y="60" width="200" height="120" fill="white" stroke="#d1d5db" rx="4" />
              <text x="1050" y="80" textAnchor="middle" fontSize="12" fontWeight="bold">Legend</text>
              
              <rect x="960" y="90" width="15" height="10" fill="#60a5fa" />
              <text x="980" y="100" fontSize="10">Client Applications</text>
              
              <rect x="960" y="105" width="15" height="10" fill="#4ade80" />
              <text x="980" y="115" fontSize="10">API Gateway</text>
              
              <rect x="960" y="120" width="15" height="10" fill="#a855f7" />
              <text x="980" y="130" fontSize="10">Microservices</text>
              
              <rect x="960" y="135" width="15" height="10" fill="#f56565" />
              <text x="980" y="145" fontSize="10">Databases</text>
              
              <rect x="960" y="150" width="15" height="10" fill="#fbbf24" />
              <text x="980" y="160" fontSize="10">Message Bus</text>
            </svg>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Complete E-commerce Microservices Architecture with independent services, databases, and communication patterns</p>
          </div>
        </div>



        {/* Implementation Considerations */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Implementation Considerations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">Best Practices</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Start with a monolith and gradually extract services using the Strangler Pattern
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Implement comprehensive monitoring and logging across all services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Use containerization (Docker) and orchestration (Kubernetes) for deployment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Implement automated testing for each service and integration points
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Design for eventual consistency and handle distributed transaction challenges
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-red-600">Challenges to Address</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Increased complexity in service orchestration and management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Network latency and reliability between services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Data consistency across distributed services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Service discovery and configuration management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Distributed debugging and troubleshooting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDesign;