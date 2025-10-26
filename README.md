# Jasmine Khamuani - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Optimized for mobile and desktop viewing
- **Modern UI**: Clean, minimal design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Smooth Navigation**: React Router with animated page transitions
- **Interactive Elements**: Hover effects, animated components using Framer Motion
- **Accessibility**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation

1. Navigate to the project directory:
```bash
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
personal-website/
├── public/
│   ├── vite.svg          # Favicon (replace with your own)
│   └── resume.pdf        # Your resume PDF (add this file)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx    # Navigation bar component
│   │   └── Footer.jsx    # Footer component
│   ├── pages/
│   │   ├── Home.jsx      # Home page
│   │   ├── About.jsx     # About page
│   │   ├── Projects.jsx  # Projects page
│   │   └── Resume.jsx    # Resume page
│   ├── App.jsx           # Main app component with routing
│   ├── index.css         # Global styles and Tailwind imports
│   └── main.jsx          # App entry point
├── index.html
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite configuration
└── package.json
```
