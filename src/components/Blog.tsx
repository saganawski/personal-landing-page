import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Play } from 'lucide-react';

const Blog: React.FC = () => {
  const allBlogPosts = [
    {
      id: "building-scalable-react-applications",
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for structuring React applications that can grow with your business needs.",
      date: "2024-01-15",
      readTime: "8 min read",
      type: "article",
      image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=400",
      pinned: true
    },
    {
      id: "typescript-tips-for-better-code",
      title: "TypeScript Tips for Better Code",
      excerpt: "Discover advanced TypeScript techniques that will make your code more maintainable and bug-free.",
      date: "2024-01-10",
      readTime: "12 min read",
      type: "video",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "modern-css-techniques-2024",
      title: "Modern CSS Techniques in 2024",
      excerpt: "Explore the latest CSS features and how they can improve your development workflow and user experience.",
      date: "2024-01-05",
      readTime: "6 min read",
      type: "article",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "database-design-fundamentals",
      title: "Database Design Fundamentals",
      excerpt: "A comprehensive guide to designing efficient and scalable database schemas for modern applications.",
      date: "2023-12-28",
      readTime: "15 min read",
      type: "video",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "api-design-best-practices",
      title: "RESTful API Design Best Practices",
      excerpt: "Learn how to design clean, maintainable, and scalable REST APIs that developers will love to use.",
      date: "2024-02-20",
      readTime: "10 min read",
      type: "article",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400",
      pinned: true
    },
    {
      id: "performance-optimization-javascript",
      title: "JavaScript Performance Optimization Techniques",
      excerpt: "Discover practical techniques to optimize JavaScript performance and create faster web applications.",
      date: "2024-02-15",
      readTime: "14 min read",
      type: "video",
      image: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "docker-containerization-guide",
      title: "Complete Guide to Docker Containerization",
      excerpt: "Master Docker fundamentals and learn how to containerize your applications for consistent deployment.",
      date: "2024-02-10",
      readTime: "11 min read",
      type: "article",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  // Get pinned posts first, then fill with recent posts to total 4
  const pinnedPosts = allBlogPosts.filter(post => post.pinned);
  const nonPinnedPosts = allBlogPosts.filter(post => !post.pinned).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const homeBlogPosts = [...pinnedPosts, ...nonPinnedPosts].slice(0, 4);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing my thoughts, experiences, and insights about software development, 
            best practices, and the latest technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeBlogPosts.map((post, index) => (
            <Link 
              key={index}
              to={`/blog/${post.id}`}
              className="block"
            >
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.type === 'video' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {post.type === 'video' ? 'Video' : 'Article'}
                    </span>
                    {post.pinned && (
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        Pinned
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blogs" 
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span>View All Posts</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;