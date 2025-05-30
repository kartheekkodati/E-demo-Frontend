import React, { useState } from 'react';

const DSA = () => {
  const [activeSection, setActiveSection] = useState(null);

  const dsaTopics = [
    {
      id: 1,
      title: "Arrays",
      useCase: "Storing product data, shopping cart items, order lists",
      example: "Storing a list of items in a shopping cart where each item is represented as an object in an array.",
      syntax: `Product[] shoppingCart = new Product[10]; // Array to store 10 products
shoppingCart[0] = new Product("Smartphone", 499.99);
shoppingCart[1] = new Product("Headphones", 99.99);`
    },
    {
      id: 2,
      title: "Linked Lists",
      useCase: "Managing dynamic collections like user cart items, order history",
      example: "Shopping Cart: When a user adds or removes items, a singly linked list can be used to store items dynamically.",
      syntax: `class Node {
    Product data;
    Node next;
    Node(Product product) {
        this.data = product;
        this.next = null;
    }
}

Node head = new Node(new Product("Smartphone", 499.99));
Node second = new Node(new Product("Headphones", 99.99));
head.next = second;  // Linking nodes`
    },
    {
      id: 3,
      title: "Stacks",
      useCase: "Undo/redo actions, session management",
      example: "Using a stack for session history to track user navigation.",
      syntax: `Stack<String> sessionHistory = new Stack<>();
sessionHistory.push("Homepage");
sessionHistory.push("Product Page");
System.out.println(sessionHistory.peek()); // Top element: Product Page
sessionHistory.pop(); // Remove Product Page`
    },
    {
      id: 4,
      title: "Queues",
      useCase: "Order processing, customer requests",
      example: "Order Processing: Use a queue to process orders as they are placed (FIFO - First In First Out).",
      syntax: `Queue<Order> orderQueue = new LinkedList<>();
orderQueue.offer(new Order("Order1"));
orderQueue.offer(new Order("Order2"));

Order firstOrder = orderQueue.poll();  // Process first order`
    },
    {
      id: 5,
      title: "Hash Maps",
      useCase: "Managing product catalogs, user sessions",
      example: "Product Catalog: Store product data where the product ID is the key and product details are the values.",
      syntax: `Map<Integer, Product> productCatalog = new HashMap<>();
productCatalog.put(1, new Product("Smartphone", 499.99));
Product product = productCatalog.get(1);  // Retrieve product with ID 1`
    },
    {
      id: 6,
      title: "Heaps (Priority Queue)",
      useCase: "Ranking products, managing promotions by priority",
      example: "Product Ranking: A max-heap can be used to rank products based on user ratings, price, or popularity.",
      syntax: `PriorityQueue<Product> productQueue = new PriorityQueue<>(
    Comparator.comparingDouble(Product::getRating).reversed());
productQueue.offer(new Product("Smartphone", 4.8));
productQueue.offer(new Product("Laptop", 4.5));

Product topProduct = productQueue.poll();  // Product with highest rating`
    },
    {
      id: 7,
      title: "Trees (Binary Search Tree)",
      useCase: "Searching and sorting data like product categories or inventory",
      example: "Product Categories: A BST can store product categories for efficient searching.",
      syntax: `class TreeNode {
    String category;
    TreeNode left, right;
    TreeNode(String category) {
        this.category = category;
        left = right = null;
    }
}

TreeNode root = new TreeNode("Electronics");
root.left = new TreeNode("Mobile");
root.right = new TreeNode("Laptop");`
    },
    {
      id: 8,
      title: "Tries",
      useCase: "Autocomplete, keyword matching for product search",
      example: "Product Search: A Trie can implement autocomplete search for products.",
      syntax: `class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEndOfWord;
}

TrieNode root = new TrieNode();
void insert(String word) {
    TrieNode node = root;
    for (char c : word.toCharArray()) {
        node = node.children.computeIfAbsent(c, k -> new TrieNode());
    }
    node.isEndOfWord = true;
}`
    },
    {
      id: 9,
      title: "Graphs",
      useCase: "Recommendation systems, user-product relationships",
      example: "Recommendation System: Model relationships between users and products for recommendations.",
      syntax: `class Graph {
    Map<String, List<String>> adjList = new HashMap<>();
    void addEdge(String product, String recommendedProduct) {
        adjList.computeIfAbsent(product, k -> new ArrayList<>())
               .add(recommendedProduct);
    }
}

Graph productGraph = new Graph();
productGraph.addEdge("Smartphone", "Headphones");
productGraph.addEdge("Headphones", "Laptop");`
    },
    {
      id: 10,
      title: "Dynamic Programming",
      useCase: "Optimization problems like maximizing profit or minimizing cost",
      example: "Knapsack Problem: Calculate the best set of products to offer within a given budget.",
      syntax: `public int knapsack(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    int[][] dp = new int[n + 1][capacity + 1];
    
    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                dp[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], 
                                   dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}`
    },
    {
      id: 11,
      title: "Divide and Conquer",
      useCase: "Sorting and searching large datasets",
      example: "Sorting Products: Use Quick Sort to sort large product catalogs by price, rating, or popularity.",
      syntax: `void quickSort(Product[] products, int low, int high) {
    if (low < high) {
        int pivot = partition(products, low, high);
        quickSort(products, low, pivot - 1);
        quickSort(products, pivot + 1, high);
    }
}

int partition(Product[] products, int low, int high) {
    Product pivot = products[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (products[j].getPrice() < pivot.getPrice()) {
            i++;
            swap(products, i, j);
        }
    }
    swap(products, i + 1, high);
    return i + 1;
}`
    },
    {
      id: 12,
      title: "Sliding Window",
      useCase: "Analyzing time-series data like sales trends",
      example: "Sales Data Analysis: Calculate moving average of sales over a certain period.",
      syntax: `double[] sales = {100, 200, 300, 400, 500, 600, 700};
int windowSize = 3;
for (int i = 0; i <= sales.length - windowSize; i++) {
    double sum = 0;
    for (int j = i; j < i + windowSize; j++) {
        sum += sales[j];
    }
    System.out.println("Average sales from day " + (i + 1) + 
                      " to " + (i + windowSize) + ": " + (sum / windowSize));
}`
    },
    {
      id: 13,
      title: "Backtracking",
      useCase: "Generating combinations of products for bundle offers",
      example: "Shopping Cart Recommendations: Suggest combinations of additional items based on categories.",
      syntax: `void generateCombinations(Product[] products, int index, List<Product> currentCombo) {
    if (index == products.length) {
        System.out.println(currentCombo);
        return;
    }
    
    currentCombo.add(products[index]);
    generateCombinations(products, index + 1, currentCombo);
    
    currentCombo.remove(currentCombo.size() - 1);
    generateCombinations(products, index + 1, currentCombo);
}`
    },
    {
      id: 14,
      title: "Bit Manipulation",
      useCase: "Efficiently handling flags, tracking user preferences",
      example: "User Preferences: Store and check user preferences as binary flags to save memory space.",
      syntax: `int productAttributes = 0; // 0000 (None selected)
productAttributes |= (1 << 0); // Set attribute 0 (availability) -> 0001
productAttributes |= (1 << 2); // Set attribute 2 (color) -> 0101
System.out.println((productAttributes & (1 << 2)) != 0); // Check if attribute 2 is set`
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4 text-primary">Data Structures and Algorithms</h2>
          <p className="lead text-center mb-5">
            Comprehensive guide to DSA concepts with e-commerce use cases and Java implementations
          </p>
        </div>
      </div>

      <div className="row">
        {dsaTopics.map((topic) => (
          <div key={topic.id} className="col-12 col-lg-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-light">
                <h5 className="card-title mb-0 d-flex justify-content-between align-items-center">
                  <span className="text-primary">{topic.title}</span>
                  <button
                    className="btn btn-sm btn-outline-info"
                    onClick={() => toggleSection(topic.id)}
                    title="Click for complexity analysis and tips"
                  >
                    {activeSection === topic.id ? 'Hide Details' : 'Show Details'}
                  </button>
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <strong className="text-success">Use Case:</strong>
                  <p className="text-muted small mt-1">{topic.useCase}</p>
                </div>
                
                <div className="mb-3">
                  <strong className="text-info">Example:</strong>
                  <p className="small mt-1">{topic.example}</p>
                </div>

                <div className="mb-3">
                  <strong className="text-warning">Java Implementation:</strong>
                  <pre className="bg-light p-3 mt-2 rounded border">
                    <code className="text-dark small">{topic.syntax}</code>
                  </pre>
                </div>

                {activeSection === topic.id && (
                  <div className="mt-3 p-3 bg-info bg-opacity-10 rounded">
                    <h6 className="text-info mb-2">💡 Additional Details:</h6>
                    <ul className="small mb-0">
                      {topic.id === 1 && (
                        <>
                          <li>Time Complexity: O(1) for access, O(n) for search</li>
                          <li>Space Complexity: O(n)</li>
                          <li>Best for: Fixed-size collections, random access</li>
                        </>
                      )}
                      {topic.id === 2 && (
                        <>
                          <li>Time Complexity: O(1) for insertion/deletion at head, O(n) for search</li>
                          <li>Space Complexity: O(n)</li>
                          <li>Best for: Dynamic size, frequent insertions/deletions</li>
                        </>
                      )}
                      {topic.id === 3 && (
                        <>
                          <li>Time Complexity: O(1) for push/pop/peek operations</li>
                          <li>Space Complexity: O(n)</li>
                          <li>Best for: LIFO operations, undo functionality</li>
                        </>
                      )}
                      {topic.id === 4 && (
                        <>
                          <li>Time Complexity: O(1) for enqueue/dequeue operations</li>
                          <li>Space Complexity: O(n)</li>
                          <li>Best for: FIFO operations, task scheduling</li>
                        </>
                      )}
                      {topic.id === 5 && (
                        <>
                          <li>Time Complexity: O(1) average for get/put operations</li>
                          <li>Space Complexity: O(n)</li>
                          <li>Best for: Key-value storage, fast lookups</li>
                        </>
                      )}
                      {topic.id === 6 && (
                        <>
                          <li>Time Complexity: O(log n) for insertion/deletion, O(1) for peek</li>
                          <li>Space Complexity: O(n)</li>
                          <li>Best for: Priority-based processing, finding min/max</li>
                        </>
                      )}
                      {topic.id === 7 && (
                        <>
                          <li>Time Complexity: O(log n) for search/insert/delete (balanced)</li>
                          <li>Space Complexity: O(n)</li>
                          <li>Best for: Sorted data, range queries</li>
                        </>
                      )}
                      {topic.id === 8 && (
                        <>
                          <li>Time Complexity: O(m) for insert/search where m is word length</li>
                          <li>Space Complexity: O(alphabet_size * N * M)</li>
                          <li>Best for: String matching, autocomplete features</li>
                        </>
                      )}
                      {topic.id === 9 && (
                        <>
                          <li>Time Complexity: O(V + E) for traversal</li>
                          <li>Space Complexity: O(V + E)</li>
                          <li>Best for: Relationships, networks, recommendations</li>
                        </>
                      )}
                      {topic.id === 10 && (
                        <>
                          <li>Time Complexity: O(n * capacity) for 0/1 knapsack</li>
                          <li>Space Complexity: O(n * capacity)</li>
                          <li>Best for: Optimization problems, resource allocation</li>
                        </>
                      )}
                      {topic.id === 11 && (
                        <>
                          <li>Time Complexity: O(n log n) average for quicksort</li>
                          <li>Space Complexity: O(log n) for recursion stack</li>
                          <li>Best for: Sorting large datasets efficiently</li>
                        </>
                      )}
                      {topic.id === 12 && (
                        <>
                          <li>Time Complexity: O(n) for single pass</li>
                          <li>Space Complexity: O(1)</li>
                          <li>Best for: Subarray problems, moving averages</li>
                        </>
                      )}
                      {topic.id === 13 && (
                        <>
                          <li>Time Complexity: O(2^n) in worst case</li>
                          <li>Space Complexity: O(n) for recursion depth</li>
                          <li>Best for: Finding all solutions, constraint satisfaction</li>
                        </>
                      )}
                      {topic.id === 14 && (
                        <>
                          <li>Time Complexity: O(1) for bitwise operations</li>
                          <li>Space Complexity: O(1)</li>
                          <li>Best for: Flags, compact data representation</li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-primary text-white">
            <div className="card-body text-center">
              <h5 className="card-title">Quick Reference</h5>
              <p className="card-text">
                Click the '+' button on any topic to view the complete Java implementation with syntax examples.
                All examples are tailored for e-commerce applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSA;