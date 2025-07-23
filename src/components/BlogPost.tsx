import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User, Share2, Github, Linkedin, Twitter, ChevronRight, Home } from 'lucide-react';
import Header from './Header';

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  readTime: string;
  type: string;
  image: string;
  author: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const blogPosts: { [key: string]: BlogPostData } = {
    'building-scalable-react-applications': {
      id: 'building-scalable-react-applications',
      title: "Building Scalable React Applications",
      excerpt: "🚧 Placeholder blog post for design demonstration. Learn the best practices for structuring React applications that can grow with your business needs.",
      date: "2024-01-15",
      readTime: "8 min read",
      type: "article",
      image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
        <h2>🚧 This is a Placeholder Blog Post</h2>
        <p><strong>Note:</strong> This is placeholder content created for design demonstration purposes. Real blog content will replace this when actual posts are published.</p>
        
        <h2>Introduction</h2>
        <p>Building scalable React applications requires careful planning and adherence to best practices. In this article, we'll explore the key principles that will help you create maintainable and efficient React applications.</p>
        
        <h2>Component Architecture</h2>
        <p>One of the most important aspects of scalable React applications is having a well-thought-out component architecture. Here are some key principles:</p>
        <ul>
          <li>Keep components small and focused on a single responsibility</li>
          <li>Use composition over inheritance</li>
          <li>Create reusable components with clear APIs</li>
          <li>Implement proper prop validation</li>
        </ul>
        
        <h2>State Management</h2>
        <p>As your application grows, state management becomes crucial. Consider these approaches:</p>
        <ul>
          <li>Use local state for component-specific data</li>
          <li>Lift state up when sharing between components</li>
          <li>Consider Context API for medium-scale applications</li>
          <li>Use Redux or Zustand for complex state management</li>
        </ul>
        
        <h2>Performance Optimization</h2>
        <p>To keep your application fast as it scales:</p>
        <ul>
          <li>Use React.memo for expensive components</li>
          <li>Implement code splitting with React.lazy</li>
          <li>Optimize bundle size with tree shaking</li>
          <li>Use virtual scrolling for large lists</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building scalable React applications is an ongoing process that requires attention to architecture, state management, and performance. By following these best practices, you'll be well on your way to creating applications that can grow with your needs.</p>
      `
    },
    'typescript-tips-for-better-code': {
      id: 'typescript-tips-for-better-code',
      title: "TypeScript Tips for Better Code",
      excerpt: "🚧 Placeholder blog post for design demonstration. Discover advanced TypeScript techniques that will make your code more maintainable and bug-free.",
      date: "2024-01-10",
      readTime: "12 min read",
      type: "video",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
        <h2>🚧 This is a Placeholder Blog Post</h2>
        <p><strong>Note:</strong> This is placeholder content created for design demonstration purposes. Real blog content will replace this when actual posts are published.</p>
        
        <h2>Advanced TypeScript Techniques</h2>
        <p>TypeScript offers many powerful features that can help you write more robust and maintainable code. Let's explore some advanced techniques that every TypeScript developer should know.</p>
        
        <h2>Utility Types</h2>
        <p>TypeScript provides several utility types that can help you transform existing types:</p>
        <ul>
          <li><code>Partial&lt;T&gt;</code> - Makes all properties optional</li>
          <li><code>Required&lt;T&gt;</code> - Makes all properties required</li>
          <li><code>Pick&lt;T, K&gt;</code> - Selects specific properties</li>
          <li><code>Omit&lt;T, K&gt;</code> - Excludes specific properties</li>
        </ul>
        
        <h2>Generic Constraints</h2>
        <p>Use generic constraints to limit the types that can be used with your generic functions:</p>
        <pre><code>interface Lengthwise {
  length: number;
}

function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {
  console.log(arg.length);
  return arg;
}</code></pre>
        
        <h2>Mapped Types</h2>
        <p>Create new types by transforming existing ones:</p>
        <pre><code>type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};</code></pre>
        
        <h2>Conditional Types</h2>
        <p>Use conditional types to create flexible type definitions:</p>
        <pre><code>type ApiResponse&lt;T&gt; = T extends string ? string : T extends number ? number : never;</code></pre>
        
        <h2>Conclusion</h2>
        <p>These advanced TypeScript features can significantly improve your code quality and developer experience. Practice using them in your projects to become more proficient.</p>
      `
    },
    'modern-css-techniques-2024': {
      id: 'modern-css-techniques-2024',
      title: "Modern CSS Techniques in 2024",
      excerpt: "🚧 Placeholder blog post for design demonstration. Explore the latest CSS features and how they can improve your development workflow and user experience.",
      date: "2024-01-05",
      readTime: "6 min read",
      type: "article",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
        <h2>🚧 This is a Placeholder Blog Post</h2>
        <p><strong>Note:</strong> This is placeholder content created for design demonstration purposes. Real blog content will replace this when actual posts are published.</p>
        
        <h2>CSS Grid and Flexbox Mastery</h2>
        <p>Modern CSS layout systems have revolutionized how we build user interfaces. Let's explore the latest techniques and best practices.</p>
        
        <h2>Container Queries</h2>
        <p>Container queries allow you to style elements based on their container's size rather than the viewport:</p>
        <pre><code>.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
  }
}</code></pre>
        
        <h2>CSS Subgrid</h2>
        <p>Subgrid allows nested grids to participate in their parent grid:</p>
        <pre><code>.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-column: span 2;
  grid-template-columns: subgrid;
}</code></pre>
        
        <h2>Custom Properties (CSS Variables)</h2>
        <p>Use CSS custom properties for dynamic theming:</p>
        <pre><code>:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background: var(--primary-color);
  color: white;
}</code></pre>
        
        <h2>Modern Color Functions</h2>
        <p>New color functions provide better color manipulation:</p>
        <ul>
          <li><code>color-mix()</code> for blending colors</li>
          <li><code>oklch()</code> for perceptually uniform colors</li>
          <li><code>color()</code> for wide gamut colors</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>These modern CSS techniques open up new possibilities for creating responsive, maintainable, and visually appealing interfaces. Start incorporating them into your projects today!</p>
      `
    },
    'database-design-fundamentals': {
      id: 'database-design-fundamentals',
      title: "Database Design Fundamentals",
      excerpt: "🚧 Placeholder blog post for design demonstration. A comprehensive guide to designing efficient and scalable database schemas for modern applications.",
      date: "2023-12-28",
      readTime: "15 min read",
      type: "video",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
        <h2>🚧 This is a Placeholder Blog Post</h2>
        <p><strong>Note:</strong> This is placeholder content created for design demonstration purposes. Real blog content will replace this when actual posts are published.</p>
        
        <h2>Database Design Principles</h2>
        <p>Good database design is the foundation of any successful application. Let's explore the fundamental principles that guide effective database design.</p>
        
        <h2>Normalization</h2>
        <p>Database normalization helps eliminate redundancy and improve data integrity:</p>
        <ul>
          <li><strong>First Normal Form (1NF)</strong>: Eliminate repeating groups</li>
          <li><strong>Second Normal Form (2NF)</strong>: Eliminate partial dependencies</li>
          <li><strong>Third Normal Form (3NF)</strong>: Eliminate transitive dependencies</li>
        </ul>
        
        <h2>Entity Relationship Modeling</h2>
        <p>ER models help visualize database structure:</p>
        <ul>
          <li>Identify entities and their attributes</li>
          <li>Define relationships between entities</li>
          <li>Determine cardinality and participation</li>
          <li>Create ER diagrams for documentation</li>
        </ul>
        
        <h2>Indexing Strategies</h2>
        <p>Proper indexing improves query performance:</p>
        <ul>
          <li>Create indexes on frequently queried columns</li>
          <li>Use composite indexes for multi-column queries</li>
          <li>Avoid over-indexing to prevent write performance issues</li>
          <li>Monitor index usage and effectiveness</li>
        </ul>
        
        <h2>Performance Considerations</h2>
        <p>Design with performance in mind:</p>
        <ul>
          <li>Choose appropriate data types</li>
          <li>Normalize vs. denormalize based on usage patterns</li>
          <li>Plan for horizontal and vertical scaling</li>
          <li>Consider read/write patterns</li>
        </ul>
        
        <h2>Security Best Practices</h2>
        <p>Implement security from the ground up:</p>
        <ul>
          <li>Use least privilege principle for database access</li>
          <li>Encrypt sensitive data</li>
          <li>Implement proper authentication and authorization</li>
          <li>Regular security audits and updates</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Effective database design requires understanding your application's requirements, performance needs, and growth patterns. Take time to plan your schema carefully - it will save you significant effort later.</p>
      `
    },
    'api-design-best-practices': {
      id: 'api-design-best-practices',
      title: "RESTful API Design Best Practices",
      excerpt: "🚧 Placeholder blog post for design demonstration. Learn how to design clean, maintainable, and scalable REST APIs that developers will love to use.",
      date: "2024-02-20",
      readTime: "10 min read",
      type: "article",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
        <h2>🚧 This is a Placeholder Blog Post</h2>
        <p><strong>Note:</strong> This is placeholder content created for design demonstration purposes. Real blog content will replace this when actual posts are published.</p>
        
        <h2>Introduction to RESTful API Design</h2>
        <p>Creating well-designed APIs is crucial for building maintainable and scalable applications. REST (Representational State Transfer) provides a set of architectural principles that guide API design.</p>
        
        <h2>Resource-Based URLs</h2>
        <p>Design your URLs around resources, not actions:</p>
        <ul>
          <li>Use nouns, not verbs: <code>/users</code> instead of <code>/getUsers</code></li>
          <li>Use plural nouns for collections: <code>/users</code>, <code>/products</code></li>
          <li>Use nested resources for relationships: <code>/users/123/orders</code></li>
          <li>Keep URLs simple and intuitive</li>
        </ul>
        
        <h2>HTTP Methods and Status Codes</h2>
        <p>Use HTTP methods correctly:</p>
        <ul>
          <li><code>GET</code> - Retrieve data (idempotent)</li>
          <li><code>POST</code> - Create new resources</li>
          <li><code>PUT</code> - Update entire resources (idempotent)</li>
          <li><code>PATCH</code> - Partial updates</li>
          <li><code>DELETE</code> - Remove resources (idempotent)</li>
        </ul>
        
        <h2>Consistent Response Format</h2>
        <p>Maintain consistency across all endpoints:</p>
        <pre><code>{
  "data": { ... },
  "meta": {
    "timestamp": "2024-02-20T10:30:00Z",
    "version": "1.0"
  },
  "errors": []
}</code></pre>
        
        <h2>Versioning Strategy</h2>
        <p>Plan for API evolution:</p>
        <ul>
          <li>Use URL versioning: <code>/api/v1/users</code></li>
          <li>Header versioning: <code>Accept: application/vnd.api+json;version=1</code></li>
          <li>Maintain backward compatibility when possible</li>
          <li>Deprecate old versions gracefully</li>
        </ul>
        
        <h2>Error Handling</h2>
        <p>Provide meaningful error responses:</p>
        <pre><code>{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email format is invalid"
      }
    ]
  }
}</code></pre>
        
        <h2>Security Best Practices</h2>
        <p>Implement security from the start:</p>
        <ul>
          <li>Use HTTPS everywhere</li>
          <li>Implement proper authentication and authorization</li>
          <li>Validate and sanitize all input</li>
          <li>Rate limiting to prevent abuse</li>
          <li>Don't expose sensitive data in URLs</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Good API design is about creating interfaces that are intuitive, consistent, and maintainable. Following these best practices will help you build APIs that developers enjoy working with and that can evolve with your application's needs.</p>
      `
    },
    'performance-optimization-javascript': {
      id: 'performance-optimization-javascript',
      title: "JavaScript Performance Optimization Techniques",
      excerpt: "🚧 Placeholder blog post for design demonstration. Discover practical techniques to optimize JavaScript performance and create faster web applications.",
      date: "2024-02-15",
      readTime: "14 min read",
      type: "video",
      image: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
        <h2>🚧 This is a Placeholder Blog Post</h2>
        <p><strong>Note:</strong> This is placeholder content created for design demonstration purposes. Real blog content will replace this when actual posts are published.</p>
        
        <h2>Understanding JavaScript Performance</h2>
        <p>JavaScript performance optimization is crucial for creating smooth user experiences. This guide covers practical techniques to make your applications faster and more responsive.</p>
        
        <h2>Memory Management</h2>
        <p>Proper memory management prevents memory leaks and improves performance:</p>
        <ul>
          <li>Remove event listeners when components unmount</li>
          <li>Clear intervals and timeouts</li>
          <li>Avoid creating unnecessary closures</li>
          <li>Use weak references when appropriate</li>
        </ul>
        
        <h2>DOM Optimization</h2>
        <p>Minimize DOM manipulation for better performance:</p>
        <pre><code>// Bad: Multiple DOM queries
document.getElementById('item1').style.display = 'none';
document.getElementById('item2').style.display = 'none';
document.getElementById('item3').style.display = 'none';

// Good: Batch operations
const items = ['item1', 'item2', 'item3'];
const fragment = document.createDocumentFragment();
items.forEach(id => {
  const element = document.getElementById(id);
  element.style.display = 'none';
});</code></pre>
        
        <h2>Event Handling Optimization</h2>
        <p>Optimize event handling for better responsiveness:</p>
        <ul>
          <li>Use event delegation for dynamic content</li>
          <li>Debounce expensive operations</li>
          <li>Use passive event listeners when possible</li>
          <li>Remove unused event listeners</li>
        </ul>
        
        <h2>Code Splitting and Lazy Loading</h2>
        <p>Reduce initial bundle size with smart loading:</p>
        <pre><code>// Dynamic imports for code splitting
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Image lazy loading
const img = new Image();
img.loading = 'lazy';
img.src = 'large-image.jpg';</code></pre>
        
        <h2>Algorithm Optimization</h2>
        <p>Choose efficient algorithms and data structures:</p>
        <ul>
          <li>Use <code>Map</code> and <code>Set</code> for fast lookups</li>
          <li>Avoid nested loops when possible</li>
          <li>Use binary search for sorted arrays</li>
          <li>Cache computed results (memoization)</li>
        </ul>
        
        <h2>Web Workers for Heavy Tasks</h2>
        <p>Offload CPU-intensive tasks to prevent UI blocking:</p>
        <pre><code>// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: largeDataset });
worker.onmessage = (e) => {
  console.log('Result:', e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = performHeavyCalculation(e.data);
  self.postMessage(result);
};</code></pre>
        
        <h2>Performance Monitoring</h2>
        <p>Measure and monitor performance continuously:</p>
        <ul>
          <li>Use browser DevTools Performance tab</li>
          <li>Implement performance budgets</li>
          <li>Monitor Core Web Vitals</li>
          <li>Use tools like Lighthouse and WebPageTest</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>JavaScript performance optimization is an ongoing process. Start with measuring current performance, identify bottlenecks, and apply these techniques systematically. Remember that premature optimization can be counterproductive - focus on real performance issues that impact user experience.</p>
      `
    },
    'docker-containerization-guide': {
      id: 'docker-containerization-guide',
      title: "Complete Guide to Docker Containerization",
      excerpt: "🚧 Placeholder blog post for design demonstration. Master Docker fundamentals and learn how to containerize your applications for consistent deployment.",
      date: "2024-02-10",
      readTime: "11 min read",
      type: "article",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
        <h2>🚧 This is a Placeholder Blog Post</h2>
        <p><strong>Note:</strong> This is placeholder content created for design demonstration purposes. Real blog content will replace this when actual posts are published.</p>
        
        <h2>Introduction to Docker</h2>
        <p>Docker revolutionizes application deployment by packaging applications and their dependencies into portable containers. This guide covers everything you need to know about containerizing your applications.</p>
        
        <h2>Docker Fundamentals</h2>
        <p>Understanding core Docker concepts:</p>
        <ul>
          <li><strong>Images</strong> - Read-only templates for creating containers</li>
          <li><strong>Containers</strong> - Running instances of images</li>
          <li><strong>Dockerfile</strong> - Instructions for building images</li>
          <li><strong>Registry</strong> - Storage for Docker images (Docker Hub, ECR)</li>
        </ul>
        
        <h2>Writing Effective Dockerfiles</h2>
        <p>Create optimized Dockerfiles for your applications:</p>
        <pre><code># Use specific base image versions
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership and switch user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]</code></pre>
        
        <h2>Multi-Stage Builds</h2>
        <p>Optimize image size with multi-stage builds:</p>
        <pre><code># Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
EXPOSE 3000
CMD ["npm", "start"]</code></pre>
        
        <h2>Docker Compose for Multi-Container Apps</h2>
        <p>Orchestrate multiple services with Docker Compose:</p>
        <pre><code>version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:</code></pre>
        
        <h2>Container Security Best Practices</h2>
        <p>Secure your containers from the start:</p>
        <ul>
          <li>Use official base images from trusted sources</li>
          <li>Keep base images updated</li>
          <li>Run containers as non-root users</li>
          <li>Scan images for vulnerabilities</li>
          <li>Use secrets management for sensitive data</li>
          <li>Limit container resources</li>
        </ul>
        
        <h2>Monitoring and Logging</h2>
        <p>Monitor containerized applications effectively:</p>
        <ul>
          <li>Use structured logging (JSON format)</li>
          <li>Implement health checks</li>
          <li>Monitor resource usage</li>
          <li>Use centralized logging solutions</li>
          <li>Set up alerts for critical metrics</li>
        </ul>
        
        <h2>Deployment Strategies</h2>
        <p>Deploy containers to production:</p>
        <ul>
          <li>Use orchestration platforms (Kubernetes, Docker Swarm)</li>
          <li>Implement rolling deployments</li>
          <li>Use load balancers for high availability</li>
          <li>Set up CI/CD pipelines</li>
          <li>Plan for disaster recovery</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Docker containerization provides consistency, portability, and scalability for modern applications. Start with simple containers and gradually adopt more advanced patterns as your needs grow. Remember that containerization is just one part of a complete deployment strategy.</p>
      `
    }
  };

  const post = id ? blogPosts[id] : null;

  if (!post) {
    return <Navigate to="/" replace />;
  }


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <a 
              href={`${import.meta.env.BASE_URL || '/'}#blog`}
              className="hover:text-blue-600 transition-colors"
            >
              Blog
            </a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-blue-600 font-medium truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  post.type === 'video' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {post.type === 'video' ? 'Video' : 'Article'}
                </span>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">Developer & Tech Writer</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 mr-2">Share:</span>
                  <a href="#" className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform">
                    <Twitter className="h-4 w-4 text-blue-400" />
                  </a>
                  <a href="#" className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </a>
                  <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform">
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-content">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(
              /<h2>/g, '<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 first:mt-0">'
            ).replace(
              /<p>/g, '<p class="text-lg text-gray-700 leading-relaxed mb-6">'
            ).replace(
              /<ul>/g, '<ul class="text-lg text-gray-700 mb-6 space-y-2">'
            ).replace(
              /<li>/g, '<li class="flex items-start"><span class="text-blue-600 mr-3 mt-2">•</span><span>'
            ).replace(
              /<\/li>/g, '</span></li>'
            ).replace(
              /<code>/g, '<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">'
            ).replace(
              /<pre><code/g, '<pre class="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6"><code'
            ).replace(
              /<\/code><\/pre>/g, '</code></pre>'
            )}} />
          </div>
        </div>
      </article>

      {/* Author Card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.author}</h3>
                <p className="text-blue-600 font-medium mb-4">Full-Stack Developer & Tech Enthusiast</p>
                <p className="text-gray-600 mb-6">
                  Passionate about creating scalable applications and sharing knowledge through writing. 
                  When not coding, you can find me exploring new technologies and mentoring fellow developers.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                     className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Github className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                     className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                     className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Twitter className="h-5 w-5 text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
            <p className="text-xl text-gray-600">
              Continue exploring more development insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== post.id)
              .slice(0, 3)
              .map(([key, relatedPost]) => (
                <Link key={key} to={`/blog/${relatedPost.id}`} className="block group">
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          relatedPost.type === 'video' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {relatedPost.type === 'video' ? 'Video' : 'Article'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        <Clock className="h-4 w-4 ml-4 mr-2" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href={`${import.meta.env.BASE_URL || '/'}#blog`}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <span>View All Posts</span>
              <ArrowLeft className="h-5 w-5 rotate-180" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;