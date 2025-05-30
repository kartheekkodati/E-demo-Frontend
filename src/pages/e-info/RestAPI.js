import React, { useState } from 'react';

const RestAPI = () => {
  const [activeFlow, setActiveFlow] = useState(null);

  const toggleFlow = (step) => {
    setActiveFlow(activeFlow === step ? null : step);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">REST API Architecture & Flow</h2>
      
      {/* Architecture Flow Diagram */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title text-success">Communication Flow</h5>
          <p className="text-muted">Client → Controller → Service → Repository → Database</p>
          
          <div className="row">
            {[
              { 
                id: 'client', 
                title: 'Client', 
                icon: '🖥️', 
                desc: 'Frontend (React, Mobile App)',
                example: 'GET /products/123'
              },
              { 
                id: 'controller', 
                title: 'Controller', 
                icon: '🎮', 
                desc: 'HTTP Request Handler',
                example: '@GetMapping'
              },
              { 
                id: 'service', 
                title: 'Service', 
                icon: '⚙️', 
                desc: 'Business Logic Layer',
                example: 'productService.getProductById()'
              },
              { 
                id: 'repository', 
                title: 'Repository', 
                icon: '📚', 
                desc: 'Data Access Layer',
                example: 'JpaRepository'
              },
              { 
                id: 'database', 
                title: 'Database', 
                icon: '🗄️', 
                desc: 'Data Persistence',
                example: 'MySQL, PostgreSQL'
              }
            ].map((step, index) => (
              <div key={step.id} className="col-md-2 mb-3">
                <div 
                  className={`card h-100 ${activeFlow === step.id ? 'border-primary bg-light' : 'border-secondary'}`}
                  style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                  onClick={() => toggleFlow(step.id)}
                >
                  <div className="card-body text-center p-2">
                    <div style={{ fontSize: '2rem' }}>{step.icon}</div>
                    <h6 className="card-title mt-2">{step.title}</h6>
                    <small className="text-muted">{step.desc}</small>
                  </div>
                </div>
                {index < 4 && (
                  <div className="text-center mt-2">
                    <span className="text-primary">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Flow Details */}
          {activeFlow && (
            <div className="mt-4 p-3 bg-light rounded">
              {activeFlow === 'client' && (
                <div>
                  <h6>Client Layer</h6>
                  <p>The user interface where users interact with the application. Sends HTTP requests to the backend REST API.</p>
                  <div className="bg-dark text-light p-2 rounded">
                    <code>GET /products/123<br/>POST /products<br/>PUT /products/123</code>
                  </div>
                </div>
              )}
              {activeFlow === 'controller' && (
                <div>
                  <h6>Controller Layer</h6>
                  <p>Entry point for HTTP requests. Maps URLs to Java methods and delegates to Service layer.</p>
                  <div className="bg-dark text-light p-2 rounded">
                    <code>@RestController<br/>@GetMapping<br/>@PostMapping</code>
                  </div>
                </div>
              )}
              {activeFlow === 'service' && (
                <div>
                  <h6>Service Layer</h6>
                  <p>Contains business logic, validates data, and coordinates operations between multiple repositories.</p>
                  <div className="bg-dark text-light p-2 rounded">
                    <code>@Service<br/>productService.getProductById()<br/>Business validation & rules</code>
                  </div>
                </div>
              )}
              {activeFlow === 'repository' && (
                <div>
                  <h6>Repository Layer</h6>
                  <p>Data access abstraction. Provides CRUD operations and custom queries using Spring Data JPA.</p>
                  <div className="bg-dark text-light p-2 rounded">
                    <code>@Repository<br/>JpaRepository<br/>Custom JPQL queries</code>
                  </div>
                </div>
              )}
              {activeFlow === 'database' && (
                <div>
                  <h6>Database Layer</h6>
                  <p>Persistent storage for application data. Can be relational(MySQL) and NoSQL(MongoDB).</p>
                  <div className="bg-dark text-light p-2 rounded">
                    <code>Tables: products, orders, users<br/>SQL queries execution<br/>Data persistence & retrieval</code>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* REST Concepts */}
      <div className="row">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-info">REST Principles</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span><strong>Client-Server:</strong> Separation of concerns</span>
                  <span className="badge bg-primary">Architecture</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span><strong>Stateless:</strong> No client context stored</span>
                  <span className="badge bg-success">Scalability</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span><strong>Cacheable:</strong> Responses can be cached</span>
                  <span className="badge bg-warning">Performance</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span><strong>Uniform Interface:</strong> Consistent API design</span>
                  <span className="badge bg-info">Standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-warning">HTTP Methods</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span><strong>GET:</strong> Retrieve resources</span>
                  <span className="badge bg-success">Safe</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span><strong>POST:</strong> Create new resources</span>
                  <span className="badge bg-primary">Create</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span><strong>PUT:</strong> Update/Replace resources</span>
                  <span className="badge bg-warning">Update</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span><strong>DELETE:</strong> Remove resources</span>
                  <span className="badge bg-danger">Delete</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span><strong>PATCH:</strong> Partial updates</span>
                  <span className="badge bg-info">Modify</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title text-danger">Best Practices</h5>
          <div className="row">
            <div className="col-md-3">
              <h6>Resource Naming</h6>
              <ul className="small">
                <li>Use nouns, not verbs</li>
                <li>Plural resource names</li>
                <li>Consistent URL structure</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Status Codes</h6>
              <ul className="small">
                <li>200 - Success</li>
                <li>201 - Created</li>
                <li>404 - Not Found</li>
                <li>500 - Server Error</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Security</h6>
              <ul className="small">
                <li>Authentication (JWT)</li>
                <li>Authorization roles</li>
                <li>HTTPS encryption</li>
                <li>Input validation</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>API Design</h6>
              <ul className="small">
                <li>Versioning (v1, v2)</li>
                <li>Pagination support</li>
                <li>Error handling</li>
                <li>Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Example Request Flow */}
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title text-success">Example: Product Retrieval Flow</h5>
          <div className="bg-light p-3 rounded">
            <ol>
              <li><strong>Client Request:</strong> <code>GET /products/123</code></li>
              <li><strong>Controller:</strong> <code>@GetMapping getProductById()</code></li>
              <li><strong>Service:</strong> <code>productService.getProductById(123)</code></li>
              <li><strong>Repository:</strong> <code>productRepository.findById(123)</code></li>
              <li><strong>Database:</strong> Execute SQL query and return Product entity</li>
              <li><strong>Response:</strong> Convert to ProductDTO and return JSON to client</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Simple Code Examples */}
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title text-primary">Spring Boot Code Examples</h5>
          <div className="row">
            <div className="col-md-6">
              <h6>Controller Example</h6>
              <div className="bg-dark text-light p-3 rounded">
                <code>
                  @RestController<br/>
                  @RequestMapping("/products")<br/>
                  public class ProductController {`{`}<br/>
                  &nbsp;&nbsp;@GetMapping("/{`{productId}`}")<br/>
                  &nbsp;&nbsp;public ProductDTO getProduct() {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return productService.getById();<br/>
                  &nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </code>
              </div>
            </div>
            <div className="col-md-6">
              <h6>Service Example</h6>
              <div className="bg-dark text-light p-3 rounded">
                <code>
                  @Service<br/>
                  public class ProductService {`{`}<br/>
                  &nbsp;&nbsp;@Autowired<br/>
                  &nbsp;&nbsp;private ProductRepository repo;<br/>
                  <br/>
                  &nbsp;&nbsp;public ProductDTO getById(Long id) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return repo.findById(id);<br/>
                  &nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </code>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <h6>Repository Example</h6>
              <div className="bg-dark text-light p-3 rounded">
                <code>
                  @Repository<br/>
                  public interface ProductRepository extends JpaRepository&lt;Product, Long&gt; {`{`}<br/>
                  &nbsp;&nbsp;Optional&lt;Product&gt; findByName(String name);<br/>
                  &nbsp;&nbsp;List&lt;Product&gt; findByCategory(String category);<br/>
                  {`}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestAPI;