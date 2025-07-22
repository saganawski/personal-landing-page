# Personal Portfolio Website

A modern, responsive portfolio website showcasing professional experience, services, blog content, and projects. Built with React, TypeScript, and Tailwind CSS to create an engaging platform for potential clients and employers.

## 🌟 Features

### Core Sections
- **Hero Landing** - Professional introduction with social media links
- **About** - Personal background and technical expertise
- **Services** - Development services and offerings
- **Blog** - Technical articles and video content with search and filtering
- **Contact** - Professional contact form and information
- **Resume** - Interactive PDF viewer for downloadable resume

### Interactive Components
- **Blog System** - Full-featured blog with individual post pages, search, and categorization
- **Project Showcases** - Dedicated pages for featured projects
- **Responsive Design** - Mobile-first approach with smooth animations
- **Smooth Navigation** - Scroll-based navigation with fixed header
- **Professional Styling** - Modern gradient backgrounds and card-based layouts

## 🚀 Live Demo

Visit the live portfolio: [Your Domain Here]

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Code Quality**: ESLint with TypeScript rules

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx           # Professional background section
│   ├── AllBlogs.tsx        # Blog listing with search/filter
│   ├── Blog.tsx            # Blog preview section
│   ├── BlogPost.tsx        # Individual blog post pages
│   ├── Contact.tsx         # Contact form and information
│   ├── Footer.tsx          # Site footer
│   ├── FreeLandingPage.tsx # Showcase project page
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Main landing section
│   ├── Home.tsx            # Main page layout
│   ├── PrototypeApplication.tsx # Showcase project page
│   ├── Resume.tsx          # Resume viewer page
│   ├── ScrollToTop.tsx     # Utility component
│   └── Services.tsx        # Services and offerings
├── App.tsx                 # Main app component with routing
├── main.tsx               # React app entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎯 Key Features in Detail

### Blog System
- **Content Management**: Static blog posts with metadata (title, date, type, author)
- **Search & Filter**: Real-time search and content type filtering
- **Individual Posts**: Dedicated pages with hero sections and author cards
- **Content Types**: Support for articles and video content
- **Pinned Posts**: Featured content prioritization
- **Related Posts**: Automated related content suggestions

### Professional Showcase
- **Resume Integration**: PDF viewer with download capability
- **Project Pages**: Dedicated showcase pages for key projects
- **Social Media**: Integrated links to GitHub, LinkedIn, YouTube, Instagram
- **Contact Form**: Professional inquiry system
- **Services**: Clear presentation of development offerings

### Design System
- **Color Scheme**: Blue-primary palette with gradient accents
- **Typography**: Hierarchical text sizing with responsive scaling
- **Cards**: Consistent shadow and hover effects
- **Buttons**: Primary and secondary CTA styles
- **Mobile-First**: Responsive grid layouts and touch-optimized interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd personal-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reloading
npm run dev

# Build for production
npm run build

# Run ESLint code quality checks
npm run lint

# Preview production build locally
npm run preview
```

### Development Workflow
1. Start the dev server: `npm run dev`
2. Make changes to components in `src/components/`
3. View changes instantly with hot module replacement
4. Run linting: `npm run lint`
5. Build for production: `npm run build`

### Code Style Guidelines
- **Components**: Functional components with TypeScript interfaces
- **Styling**: Tailwind utility classes with consistent patterns
- **File Organization**: One component per file with descriptive names
- **Responsive Design**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints
- **Accessibility**: Semantic HTML with proper ARIA attributes

## 📝 Content Management

### Adding Blog Posts
Blog posts are defined in the blog components as static data. To add new posts:

1. Add post data to the blog posts array
2. Include required fields: `id`, `title`, `excerpt`, `date`, `readTime`, `type`, `image`, `author`, `content`
3. Use HTML content with semantic markup for proper styling

### Updating Personal Information
- **Hero Section**: Update name, title, and description in `Hero.tsx`
- **About Section**: Modify background and skills in `About.tsx`
- **Services**: Update offerings and pricing in `Services.tsx`
- **Contact Info**: Modify contact details in `Contact.tsx`
- **Social Links**: Update URLs in `Hero.tsx`

### Project Showcases
Create new project pages by:
1. Adding new component files following existing patterns
2. Adding routes to `App.tsx`
3. Including navigation links where appropriate

## 🎨 Customization

### Colors & Branding
The site uses a blue-primary color scheme defined in Tailwind classes:
- Primary: `blue-600`, `blue-700`
- Accents: `blue-50`, `blue-100`, `blue-400`
- Text: `gray-900`, `gray-700`, `gray-600`

### Layout Adjustments
- **Container Width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Spacing**: `py-20` for main sections
- **Grid Layouts**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## 🚀 Deployment

### Building for Production
```bash
npm run build
```

This generates optimized static files in the `dist/` directory ready for deployment to any static hosting service.

### Deployment Options
- **Vercel**: Connect repository for automatic deployments
- **Netlify**: Drag and drop `dist/` folder or connect Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Static Hosting**: Upload `dist/` contents to any web server

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Support**: iOS Safari, Chrome Mobile, Android Browser
- **Responsive**: Optimized for all screen sizes from mobile to desktop

## 🔧 Configuration Files

- **Vite**: `vite.config.ts` - Build tool configuration
- **TypeScript**: `tsconfig.json` - TypeScript compiler options
- **Tailwind**: `tailwind.config.js` - CSS framework configuration
- **ESLint**: `eslint.config.js` - Code quality rules
- **PostCSS**: `postcss.config.js` - CSS processing

## 📄 License

This is a personal portfolio project. Feel free to use as inspiration for your own portfolio, but please don't copy the content directly.

## 📧 Contact

**Ken Saganski**
- **GitHub**: [saganawski](https://github.com/saganawski)
- **LinkedIn**: [ken-saganski](https://www.linkedin.com/in/ken-saganski)
- **YouTube**: [UCKQVgktV_tdPoJbQj2KNpkw](https://youtube.com/channel/UCKQVgktV_tdPoJbQj2KNpkw)
- **Instagram**: [@nullpointninja](https://instagram.com/nullpointninja)

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS*