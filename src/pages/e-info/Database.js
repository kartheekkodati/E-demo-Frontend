import React from 'react';

const Database = () => {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Database Systems</h2>
      
      <div className="bg-white rounded-lg shadow-lg border">
        <div className="p-6">
          <h5 className="text-xl font-semibold text-gray-700 mb-4">Database(SQL and NoSQL)</h5>
          
          <div className="space-y-6">
            {/* SQL Databases Section */}
            <div className="border rounded-lg p-4 bg-blue-50">
              <h6 className="text-lg font-semibold text-blue-800 mb-3">Who use SQL Databases</h6>
              
              <div className="bg-white p-4 rounded border">
                <h7 className="font-medium text-gray-700 mb-2 block">MySQL:</h7>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  <li>Order Service</li>
                  <li>User Service</li>
                </ul>
                
                <p className="font-medium text-gray-700 mb-3">Why MySQL with Hibernate:</p>
                
                <div className="space-y-4">
                  {/* Order Service */}
                  <div className="bg-gray-50 p-4 rounded">
                    <h8 className="font-semibold text-gray-800">1. Order Service</h8>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li><span className="font-medium">Database:</span> ecommerce_orders</li>
                      <li><span className="font-medium">Why MySQL?</span></li>
                      <ul className="ml-4 list-disc list-inside text-xs text-gray-600 mt-1">
                        <li>Orders need ACID properties for transactions</li>
                        <li>Structured data with fixed schema</li>
                        <li>Relationships between orders, items, and users</li>
                        <li>Critical financial data needs consistency</li>
                        <li>Good for complex joins between order details</li>
                      </ul>
                    </ul>
                  </div>
                  
                  {/* User Service */}
                  <div className="bg-gray-50 p-4 rounded">
                    <h8 className="font-semibold text-gray-800">2. User Service</h8>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li><span className="font-medium">Database:</span> ecommerce_users</li>
                      <li><span className="font-medium">Why MySQL?</span></li>
                      <ul className="ml-4 list-disc list-inside text-xs text-gray-600 mt-1">
                        <li>User data is structured and relational</li>
                        <li>Secure authentication and authorization</li>
                        <li>Strong data consistency needed</li>
                        <li>User transactions need to be reliable</li>
                        <li>Good for user-order relationship queries</li>
                      </ul>
                    </ul>
                  </div>
                  
                  {/* MySQL Example Flow */}
                  <div className="bg-blue-100 p-4 rounded mt-4">
                    <h8 className="font-semibold text-blue-800 mb-3">MySQL Services: Example Request Flow</h8>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">1</span>
                        <div>
                          <p className="font-medium">Client Request:</p>
                          <p className="text-gray-600">Client → REST API: <code className="bg-gray-200 px-1 rounded">GET http://localhost:8080/api/users/123</code></p>
                          <p className="text-xs text-gray-500">(Client sends a GET request to fetch user data, including user ID in the URL)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">2</span>
                        <div>
                          <p className="font-medium">REST API (Port 8080):</p>
                          <p className="text-gray-600">REST API → REST API: Validates Request (authentication)</p>
                          <p className="text-gray-600">REST API → User Service: Routes request based on URL pattern</p>
                          <p className="text-xs text-gray-500">(REST API validates the request and routes it to the User Service)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">3</span>
                        <div>
                          <p className="font-medium">User Service:</p>
                          <p className="text-gray-600">User Service → Hibernate: Processes user ID (123)</p>
                          <p className="text-gray-600">User Service → Hibernate: Maps request to User entity</p>
                          <p className="text-gray-600">User Service → Hibernate: Generates SQL query (<code className="bg-gray-200 px-1 rounded">SELECT * FROM users WHERE id = 123</code>)</p>
                          <p className="text-xs text-gray-500">(User Service processes the request, interacts with Hibernate ORM to generate SQL)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">4</span>
                        <div>
                          <p className="font-medium">MySQL/Hibernate:</p>
                          <p className="text-gray-600">Hibernate → MySQL: Sends SQL query</p>
                          <p className="text-gray-600">MySQL → Hibernate: Returns data (user data)</p>
                          <p className="text-gray-600">Hibernate → Hibernate: Converts data to Java User object</p>
                          <p className="text-xs text-gray-500">(MySQL executes the query and returns data to Hibernate, which converts it to a Java object)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">5</span>
                        <div>
                          <p className="font-medium">Returns User Data:</p>
                          <p className="text-gray-600">User Service → REST API: Converts User object to JSON</p>
                          <p className="text-gray-600">REST API → Client: Sends JSON response with user data</p>
                          <p className="text-xs text-gray-500">(User Service converts the data into JSON, and the REST API sends it back to the client)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NoSQL Databases Section */}
            <div className="border rounded-lg p-4 bg-green-50">
              <h6 className="text-lg font-semibold text-green-800 mb-3">Who use NoSQL Databases</h6>
              
              <div className="bg-white p-4 rounded border">
                <h7 className="font-medium text-gray-700 mb-2 block">MongoDB:</h7>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  <li>Product Service</li>
                  <li>Inventory Service</li>
                </ul>
                
                <p className="font-medium text-gray-700 mb-3">Why MongoDB:</p>
                
                <div className="space-y-4">
                  {/* Product Service */}
                  <div className="bg-gray-50 p-4 rounded">
                    <h8 className="font-semibold text-gray-800">1. Product Service</h8>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li><span className="font-medium">Database:</span> MongoDB collection for products</li>
                      <li><span className="font-medium">Why MongoDB?</span></li>
                      <ul className="ml-4 list-disc list-inside text-xs text-gray-600 mt-1">
                        <li>Products have varying attributes</li>
                        <li>Flexible schema for different product types</li>
                        <li>Fast reads for product browsing</li>
                        <li>Easy to update product information</li>
                        <li>Better for catalog searches</li>
                      </ul>
                    </ul>
                  </div>
                  
                  {/* Inventory Service */}
                  <div className="bg-gray-50 p-4 rounded">
                    <h8 className="font-semibold text-gray-800">2. Inventory Service</h8>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li><span className="font-medium">Database:</span> MongoDB for inventory tracking</li>
                      <li><span className="font-medium">Why MongoDB?</span></li>
                      <ul className="ml-4 list-disc list-inside text-xs text-gray-600 mt-1">
                        <li>Real-time inventory updates</li>
                        <li>High-performance read/write operations</li>
                        <li>Flexible schema for different inventory types</li>
                        <li>Good for real-time stock monitoring</li>
                        <li>Easy scaling for large product catalogs</li>
                      </ul>
                    </ul>
                  </div>
                  
                  {/* MongoDB Example Flow */}
                  <div className="bg-green-100 p-4 rounded mt-4">
                    <h8 className="font-semibold text-green-800 mb-3">MongoDB Services: Example Request Flow</h8>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">1</span>
                        <div>
                          <p className="font-medium">Client Request:</p>
                          <p className="text-gray-600">Client → REST API: <code className="bg-gray-200 px-1 rounded">GET http://localhost:8080/api/products/prod123</code></p>
                          <p className="text-xs text-gray-500">(Client requests product details using the product ID)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">2</span>
                        <div>
                          <p className="font-medium">REST API:</p>
                          <p className="text-gray-600">REST API → REST API: Validates Request (authentication)</p>
                          <p className="text-gray-600">REST API → Product Service: Routes request to the Product Service based on URL pattern</p>
                          <p className="text-xs text-gray-500">(REST API validates the request and forwards it to the Product Service)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">3</span>
                        <div>
                          <p className="font-medium">Product Service:</p>
                          <p className="text-gray-600">Product Service → MongoDB: Fetch product details (prod123)</p>
                          <p className="text-xs text-gray-500">(Product Service queries MongoDB to fetch product data using the product ID prod123)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">4</span>
                        <div>
                          <p className="font-medium">MongoDB:</p>
                          <p className="text-gray-600">MongoDB → Product Service: Returns product document (prod123)</p>
                          <p className="text-xs text-gray-500">(MongoDB returns the product details as a document to the Product Service)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">5</span>
                        <div>
                          <p className="font-medium">Returns Product Data:</p>
                          <p className="text-gray-600">Product Service → REST API: Converts product document to JSON</p>
                          <p className="text-gray-600">REST API → Client: Sends JSON response with product details</p>
                          <p className="text-xs text-gray-500">(Product Service converts the MongoDB document into JSON format and sends it back through the REST API)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;