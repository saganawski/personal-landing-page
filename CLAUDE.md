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