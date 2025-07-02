import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';

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
      excerpt: "Learn the best practices for structuring React applications that can grow with your business needs.",
      date: "2024-01-15",
      readTime: "8 min read",
      type: "article",
      image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
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
      excerpt: "Discover advanced TypeScript techniques that will make your code more maintainable and bug-free.",
      date: "2024-01-10",
      readTime: "12 min read",
      type: "video",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
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
      excerpt: "Explore the latest CSS features and how they can improve your development workflow and user experience.",
      date: "2024-01-05",
      readTime: "6 min read",
      type: "article",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
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
      excerpt: "A comprehensive guide to designing efficient and scalable database schemas for modern applications.",
      date: "2023-12-28",
      readTime: "15 min read",
      type: "video",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Ken Saganski",
      content: `
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
    }
  };

  const post = id ? blogPosts[id] : null;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            onClick={goBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </button>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <Clock className="h-4 w-4 ml-4 mr-2" />
            <span>{post.readTime}</span>
            <User className="h-4 w-4 ml-4 mr-2" />
            <span>{post.author}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              post.type === 'video' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {post.type === 'video' ? 'Video' : 'Article'}
            </span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-ul:text-gray-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;