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

## 🎨 Customization

### 1. Personal Information

Update the following files with your information:

- **Home page** (`src/pages/Home.jsx`):
  - Replace profile picture placeholder with your photo
  - Update social media links (LinkedIn, GitHub, Email)
  - Modify name and tagline

- **About page** (`src/pages/About.jsx`):
  - Update professional summary
  - Customize fun facts
  - Modify technical skills

- **Projects page** (`src/pages/Projects.jsx`):
  - Add/remove/modify project entries
  - Update project links

- **Resume page** (`src/pages/Resume.jsx`):
  - Update email link

### 2. Add Your Resume

Place your resume PDF file in the `public` folder and name it `resume.pdf`.

### 3. Add Profile Picture

Place your profile picture in the `public` folder (e.g., `profile.jpg`) and update the Home page:

```jsx
<img src="/profile.jpg" alt="Jasmine Khamuani" className="w-full h-full object-cover rounded-full" />
```

### 4. Customize Colors

Edit `tailwind.config.js` to change the accent color:

```js
theme: {
  extend: {
    colors: {
      'accent': '#06b6d4', // Change this to your preferred color
    },
  },
},
```

### 5. Update Favicon

Replace `public/vite.svg` with your own favicon.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy your site

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contact

Jasmine Khamuani - [your.email@berkeley.edu](mailto:your.email@berkeley.edu)

Portfolio: [Your deployed site URL]
