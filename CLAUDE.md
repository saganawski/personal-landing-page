# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Build the production version
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

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