# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Build the production version
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Git Commit Message Style

Follow this format for commit messages:

```
Brief summary of changes (50 chars or less)

- Bullet point describing key change or feature
- Another bullet point for significant modification
- Additional bullet points for other important changes
- Include technical details when relevant
- Mention any breaking changes or new dependencies
```

**Important**: Do not include any mentions of Claude, AI assistance, or code generation tools in commit messages.

Example:
```
Redesign BlogPost component with modern, responsive layout

- Add Header component integration for consistent navigation
- Implement hero section with gradient background and metadata overlay
- Replace prose classes with custom typography following style guide
- Add breadcrumb navigation and back-to-blog functionality
- Create author card section with bio and social links
- Add related posts section with hover effects
- Implement ScrollToTop component for proper page navigation
- Update CLAUDE.md with comprehensive individual page patterns
- Ensure mobile-responsive design across all screen sizes
```

## Project Architecture

This is a React + TypeScript personal portfolio website built with Vite and styled with Tailwind CSS.

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript rules and React hooks plugin

### Application Structure
The app follows a simple single-page application pattern:

- **Entry Point**: `src/main.tsx` renders the React app into the DOM
- **Main Component**: `src/App.tsx` orchestrates all page sections in a linear layout
- **Component Architecture**: Each section is a separate component in `src/components/`
  - Header: Fixed navigation with smooth scrolling and mobile menu
  - Hero: Main landing section with social links
  - About, Services, Blog, Contact: Content sections
  - Footer: Site footer

### Navigation Pattern
The site uses smooth scrolling navigation implemented in the Header component. Navigation buttons use `scrollIntoView({ behavior: 'smooth' })` to scroll to sections identified by their IDs.

### Styling Approach
- Uses Tailwind utility classes for styling
- Responsive design with mobile-first approach
- Gradient backgrounds and backdrop blur effects
- Consistent color scheme with blue primary colors

### Component Patterns
- All components are functional components with TypeScript
- Uses React hooks (useState) for local state management
- Consistent export pattern: `export default ComponentName`
- Props are typed with `React.FC` interface

## Style Guide for New Pages/Views

### Component Architecture
- **Component Type**: Functional components with TypeScript using `React.FC` interface
- **Export Pattern**: Always use `export default ComponentName`
- **Props Typing**: Define props interfaces when needed
- **File Structure**: One component per file in `src/components/`

### Layout & Structure
- **Container Pattern**: Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for main content containers
- **Section Spacing**: Use `py-20` for main section padding
- **Min Height**: Use `min-h-screen` for full-height sections when appropriate
- **Section IDs**: Add unique `id` attributes for scroll navigation (e.g., `id="about"`)

### Color Scheme
- **Primary Blue**: `blue-600` (main actions), `blue-700` (hover states)
- **Secondary Blue**: `blue-50`, `blue-100`, `blue-400` for accents
- **Text Colors**: 
  - Headers: `text-gray-900`
  - Body text: `text-gray-600`, `text-gray-700`
  - White text on colored backgrounds: `text-white`
- **Background Colors**: 
  - White sections: `bg-white`
  - Light sections: `bg-gray-50`
  - Gradient backgrounds: `bg-gradient-to-br from-blue-50 to-indigo-100`

### Typography
- **Section Headings**: `text-3xl md:text-4xl font-bold text-gray-900 mb-4`
- **Subsection Headings**: `text-2xl font-bold text-gray-900`
- **Body Text**: `text-xl text-gray-600` for lead paragraphs, `text-gray-600` for regular text
- **Hero Text**: `text-4xl md:text-6xl font-bold` for main headlines

### Button Styles
- **Primary CTA**: `bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors`
- **Secondary CTA**: `border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors`
- **Icon Buttons**: Include Lucide React icons with `h-5 w-5` sizing
- **Full Width**: Add `w-full` class for forms and mobile layouts

### Card Components
- **Card Container**: `bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`
- **Card Headers**: Use icon + title pattern with `flex items-center mb-4`
- **Icon Styling**: `p-3 bg-blue-100 rounded-lg mr-4` with `h-6 w-6 text-blue-600` icons

### Grid Layouts
- **Responsive Grids**: Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` pattern
- **Gap Spacing**: `gap-8` for main content, `gap-4` for tighter layouts
- **Feature Lists**: Use `space-y-3` for vertical spacing in lists

### Form Styling
- **Input Fields**: `w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`
- **Labels**: `block text-sm font-medium text-gray-700 mb-2`
- **Form Layout**: Use `space-y-6` for form field spacing

### Navigation & Interactions
- **Smooth Scrolling**: Implement `scrollIntoView({ behavior: 'smooth' })` for section navigation
- **Hover Effects**: Use `hover:` variants with `transition-colors` or `transition-shadow`
- **Transform Effects**: `hover:scale-105 transform` for social links and cards

### Icon Usage
- **Icon Library**: Lucide React icons exclusively
- **Icon Sizing**: `h-6 w-6` for regular icons, `h-4 w-4` for small icons, `h-8 w-8` for large icons
- **Icon Colors**: Match text color or use brand colors (`text-blue-600`, `text-gray-700`)

### Responsive Design
- **Mobile-First**: Use `sm:`, `md:`, `lg:` breakpoints progressively
- **Text Scaling**: Scale typography with breakpoints (e.g., `text-3xl md:text-4xl`)
- **Layout Changes**: Stack to side-by-side layouts using grid responsive classes

### State Management
- **Local State**: Use `useState` hook for component-specific state
- **Form Handling**: Follow the pattern in Contact.tsx with controlled inputs
- **Event Handlers**: Use clear, descriptive function names (e.g., `handleSubmit`, `scrollToSection`)

### Gradient Usage
- **Hero Sections**: `bg-gradient-to-br from-blue-50 to-indigo-100`
- **Call-to-Action Sections**: `bg-gradient-to-r from-blue-600 to-purple-600`
- **Profile Elements**: `bg-gradient-to-br from-blue-600 to-purple-600`

### Content Structure
- **Section Pattern**: Title + description + content grid/layout
- **Text Centering**: Use `text-center mb-16` for section introductions
- **Max Width**: Constrain text width with `max-w-3xl mx-auto` for readability

## Individual Page Patterns

### Page Layout Structure
- **Header Integration**: Always include site Header component for navigation consistency
- **Main Container**: Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for page content
- **Background**: Use `min-h-screen bg-white` or `bg-gray-50` for alternate sections
- **Hero Section**: Implement hero pattern with gradient backgrounds for feature content

### Article/Blog Post Pages
- **Content Width**: Use `max-w-4xl mx-auto` for article content (reading-optimized)
- **Hero Section**: Featured image with overlay metadata using gradient backgrounds
- **Typography**: Custom article typography instead of prose classes
  - Article headings: `text-2xl md:text-3xl font-bold text-gray-900 mb-6`
  - Article text: `text-lg text-gray-700 leading-relaxed mb-6`
  - Code blocks: `bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto`
- **Navigation Elements**: Breadcrumbs and back buttons using `text-blue-600 hover:text-blue-700`
- **Metadata Display**: Date, reading time, author with icon + text pattern

### Page Navigation
- **Breadcrumbs**: `text-sm text-gray-500` with blue accent for current page
- **Back Buttons**: Icon + text with hover effects `flex items-center space-x-2`
- **Internal Links**: Use site's blue color scheme for consistency

### Content Sections
- **Author Cards**: Follow card component patterns with author info and social links
- **Related Content**: Use grid layouts with hover effects matching main site
- **Share Buttons**: Follow social link patterns from Hero component
- **Progress Indicators**: Use blue color scheme for reading progress

### Mobile Optimization for Individual Pages
- **Content Reflow**: Stack sidebar content below main content on mobile
- **Touch Targets**: Ensure 44px minimum touch targets for navigation
- **Reading Experience**: Optimized line length and spacing for mobile reading
- **Navigation**: Collapsible table of contents for long-form content

## Blog System Design Rules

### Blog Data Structure
Each blog post must follow this exact interface structure:
```typescript
interface BlogPost {
  id: string;           // URL-friendly slug (e.g., "building-scalable-react-applications")
  title: string;        // Display title
  excerpt: string;      // Brief description for cards and meta
  date: string;         // Format: "YYYY-MM-DD"
  readTime: string;     // Format: "X min read" 
  type: "article" | "video";  // Content type for badges and icons
  image: string;        // Featured image URL (400px width for cards, 800px for hero)
  author: string;       // Author name
  pinned?: boolean;     // Optional: featured/pinned status
  content: string;      // HTML content with specific formatting requirements
}
```

### Blog Card Component Styling (Blog.tsx & AllBlogs.tsx)
- **Card Container**: `bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer`
- **Image Container**: `relative` with `w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300`
- **Content Padding**: `p-6` for card content area
- **Metadata Row**: `flex items-center text-sm text-gray-500 mb-3` with Calendar and Clock icons
- **Title**: `text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors`
- **Excerpt**: `text-gray-600 mb-4 line-clamp-3` (requires Tailwind line-clamp plugin)
- **Read More**: `flex items-center text-blue-600 font-medium group-hover:text-blue-700` with ArrowRight icon

### Blog Type Badges
- **Article Badge**: `bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium`
- **Video Badge**: `bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium`
- **Pinned Badge**: `bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium`
- **Badge Container**: `absolute top-4 left-4 flex space-x-2` on image overlay

### Video Post Indicators
- **Play Button Overlay**: Center-positioned with `absolute inset-0 flex items-center justify-center`
- **Play Button Styling**: `bg-black/50 rounded-full p-4` containing `Play` icon `h-8 w-8 text-white`

### Blog Grid Layouts
- **Home Section Grid**: `grid-cols-1 md:grid-cols-2 gap-8` (shows 4 posts maximum)
- **All Blogs Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` (shows all posts)
- **Related Posts Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` (shows 3 posts)

### Blog Post Priority & Sorting
- **Home Page**: Show pinned posts first, then recent posts (limit 4 total)
- **All Blogs Page**: Show pinned posts first, then by date descending
- **Related Posts**: Exclude current post, show 3 most recent others

### Individual Blog Post Layout (BlogPost.tsx)

#### Page Structure
- **Full Page Layout**: `min-h-screen bg-white` with Header component
- **Breadcrumb Navigation**: Gray background section with Home > Blog > Post title hierarchy
- **Hero Section**: `bg-gradient-to-br from-blue-50 to-indigo-100 py-20` two-column layout

#### Hero Section Design
- **Grid Layout**: `grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- **Left Column**: Metadata, title, excerpt, author info, and share buttons
- **Right Column**: Featured image with `rounded-2xl overflow-hidden shadow-2xl`
- **Title**: `text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight`
- **Excerpt**: `text-xl text-gray-600 mb-8 leading-relaxed`

#### Author Section in Hero
- **Author Avatar**: `w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center` with User icon
- **Author Info**: Name as `font-semibold text-gray-900`, role as `text-sm text-gray-600`
- **Share Buttons**: Social icons in `p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform`

#### Article Content Styling
- **Content Container**: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8` for optimal reading width
- **Section Padding**: `py-16` for main article section
- **Typography Overrides**: Dynamic HTML class injection for consistent styling:
  - H2: `text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 first:mt-0`
  - Paragraphs: `text-lg text-gray-700 leading-relaxed mb-6`
  - Lists: `text-lg text-gray-700 mb-6 space-y-2`
  - List Items: Custom bullet with `text-blue-600 mr-3 mt-2` colored bullet
  - Inline Code: `bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono`
  - Code Blocks: `bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6`

#### Author Card Section
- **Section Background**: `py-16 bg-gray-50`
- **Card Styling**: `bg-white rounded-2xl p-8 shadow-lg`
- **Layout**: Flexible column/row with `flex-col md:flex-row items-center md:items-start`
- **Large Avatar**: `w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full`
- **Social Links**: `p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors`

#### Breadcrumb Navigation
- **Background**: `bg-gray-50 border-b border-gray-200`
- **Links**: `text-sm text-gray-500` with `hover:text-blue-600 transition-colors`
- **Current Page**: `text-blue-600 font-medium truncate`
- **Separators**: ChevronRight icons `h-4 w-4`
- **Home Icon**: Include Home icon in first breadcrumb link

#### Related Posts Section
- **Section Title**: `text-3xl md:text-4xl font-bold text-gray-900 mb-4`
- **Grid**: Same card styling as blog listing pages
- **CTA Button**: Link back to blog section with `bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700`

### All Blogs Page Features (AllBlogs.tsx)

#### Search and Filter System
- **Search Input**: `w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500`
- **Search Icon**: `absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400`
- **Filter Dropdown**: `pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500`
- **Filter Options**: "All Types", "Articles", "Videos"
- **Search Container**: `max-w-2xl mx-auto flex flex-col sm:flex-row gap-4`

#### Empty State
- **No Results Container**: `text-center py-16`
- **Search Icon**: `h-16 w-16 mx-auto mb-4 text-gray-400`
- **Empty State Text**: `text-2xl font-bold text-gray-900 mb-2` and `text-gray-600`

#### Results Counter
- **Counter Display**: `text-lg text-gray-600` showing "X post(s) found"
- **Positioned**: `text-center mb-12` above the results grid

### Blog Content Formatting Rules

#### HTML Content Structure
Blog post content should use semantic HTML with these specific patterns:
- **Headings**: Use `<h2>` for main sections (automatically styled)
- **Paragraphs**: Use `<p>` tags for body text (automatically styled)
- **Lists**: Use `<ul>` and `<li>` for bulleted lists (custom bullet styling applied)
- **Code**: Use `<code>` for inline code, `<pre><code>` for code blocks
- **Strong Text**: Use `<strong>` for bold emphasis

#### Code Block Requirements
- **Inline Code**: Single backticks become gray background pills
- **Code Blocks**: Triple backticks become dark-themed blocks with syntax highlighting
- **Language Support**: Include language hints for proper highlighting
- **Overflow Handling**: Horizontal scroll for long code lines

### Blog Navigation Patterns

#### Internal Linking
- **Blog Home Link**: Always use `/#blog` for main blog section
- **Individual Posts**: Use `/blog/{post-id}` pattern
- **All Blogs**: Use `/blogs` route
- **Back Navigation**: Include back to blog options on individual posts

#### URL Structure
- **Post URLs**: `/blog/{slug}` where slug matches the post ID
- **Consistent Routing**: All blog routes follow React Router patterns
- **SEO-Friendly**: Use descriptive slugs that match post titles

### Blog Responsive Design

#### Mobile Optimizations
- **Card Stacking**: Single column on mobile, multi-column on larger screens
- **Hero Layout**: Stack hero content vertically on mobile
- **Image Sizing**: Maintain aspect ratios across all screen sizes
- **Touch Targets**: Ensure all interactive elements meet 44px minimum
- **Reading Width**: Constrain content width for optimal mobile reading

#### Breakpoint Strategy
- **Mobile First**: Design for mobile, enhance for larger screens
- **Grid Responsiveness**: Use `md:grid-cols-2 lg:grid-cols-3` pattern
- **Typography Scaling**: Scale headings with `text-3xl md:text-4xl` pattern
- **Spacing Adjustments**: Reduce padding/margins on mobile

### Blog Performance Guidelines

#### Image Optimization
- **Featured Images**: Optimize for web with appropriate compression
- **Responsive Images**: Consider different sizes for different layouts
- **Loading Strategy**: Use lazy loading for blog post images
- **Alt Text**: Always include descriptive alt text for accessibility

#### Content Loading
- **Static Content**: Blog posts stored as static data for fast loading
- **Code Splitting**: Consider lazy loading for individual blog post content
- **Search Performance**: Client-side filtering for fast search results

### Blog Accessibility Requirements

#### Screen Reader Support
- **Semantic HTML**: Use proper heading hierarchy and semantic elements
- **Alt Text**: Descriptive alt text for all images
- **Link Text**: Clear, descriptive link text for navigation
- **Form Labels**: Proper labels for search and filter inputs

#### Keyboard Navigation
- **Focus States**: Clear focus indicators for all interactive elements
- **Tab Order**: Logical tab order through content
- **Skip Links**: Consider skip to content links for long pages

### Blog Content Guidelines

#### Writing Style
- **Technical Focus**: Content should be developer-focused and technical
- **Code Examples**: Include practical code examples where relevant
- **Headings**: Use clear, descriptive section headings
- **Length**: Aim for substantial content (8-15 minute read times)

#### Metadata Requirements
- **Accurate Read Times**: Calculate based on average reading speed
- **Relevant Images**: Choose images that relate to the technical content
- **SEO Optimization**: Use descriptive titles and excerpts
- **Consistent Dating**: Use ISO date format for consistency