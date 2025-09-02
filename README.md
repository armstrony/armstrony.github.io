# Hafi's Portfolio Website

A modern, responsive portfolio website showcasing the work of Hafi, an iOS Developer, Web Developer, and DevOps Enthusiast. Built with React, TypeScript, and enhanced with smooth scrolling animations using GSAP.

## 🚀 Live Demo

Visit the live portfolio: [armstrony.github.io](https://armstrony.github.io)

## ✨ Features

- **Modern Design**: Clean, developer-focused aesthetic with a dark theme
- **Smooth Animations**: GSAP-powered smooth scrolling and scroll-triggered animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Sections**:
  - Hero section with animated introductions
  - Project showcase with detailed descriptions
  - Skills categorization with visual elements
  - About me section with personal story
  - Contact information and social links
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **Type Safety**: Full TypeScript implementation for better code quality

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS 4.0** - Utility-first CSS framework with Vite integration
- **Vite 6.0** - Next-generation frontend build tool

### Animations & Interactions

- **GSAP 3.13** - Professional-grade animation library with React integration
- **ScrollTrigger** - Scroll-based animations
- **ScrollSmoother** - Smooth scrolling experience
- **React Type Animation** - Typewriter effect animations

### Icons & Assets

- **Lucide React** - Beautiful, customizable icons
- **Custom Assets** - Project screenshots and branding materials

### Development Tools

- **ESLint 9.17** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **GitHub Pages** - Deployment and hosting with gh-pages

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── AboutMeSection.tsx    # Personal introduction
│   ├── ContactSection.tsx    # Contact information
│   ├── Footer.tsx           # Site footer
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Landing section
│   ├── ProjectSection.tsx   # Project showcase
│   ├── QuoteSection.tsx     # Inspirational quotes
│   ├── SectionTitle.tsx     # Reusable section titles
│   └── SkillsSection.tsx    # Skills and technologies
├── assets/              # Images and static assets
│   ├── project screenshots
│   └── branding materials
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
├── index.css          # Global styles
└── vite-env.d.ts      # Vite type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm package manager
- Git for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/armstrony/armstrony.github.io.git
   cd armstrony.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run predeploy` - Automatically runs before deploy (builds the project)
- `npm run deploy` - Deploy to GitHub Pages using gh-pages

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the hero section in `src/components/HeroSection.tsx`
2. **Projects**: Update project data in `src/components/ProjectSection.tsx`
3. **Skills**: Modify skills categories in `src/components/SkillsSection.tsx`
4. **About Section**: Update personal story in `src/components/AboutMeSection.tsx`
5. **Contact Info**: Change contact details in `src/components/ContactSection.tsx`

### Styling

The project uses Tailwind CSS 4.0 with Vite integration for styling. Key design elements:

- **Color Scheme**: Dark theme with teal accents (`#282C34` background, `teal-400` highlights)
- **Typography**: Monospace font family for developer aesthetic
- **Layout**: Responsive grid system with mobile-first approach
- **Animations**: GSAP-powered smooth scrolling with ScrollSmoother and ScrollTrigger
- **Interactive Elements**: Hover effects and smooth transitions throughout

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation links in `src/components/Header.tsx`

## 📱 Featured Projects

The portfolio showcases several key projects:

- **Chromatch** - iOS app for personal color season discovery using computer vision (Swift, SwiftUI, Vision, SwiftData, VideoToolbox)
- **Coffice** - Coffee shop finder for Green Office Park with health integration (Swift, SwiftUI, Core Location, HealthKit, Core Motion)
- **MeFoRa** - Health-focused dietary recommendation app for specific medical conditions (Android, Kotlin, Jetpack Compose, Firebase)
- **METAIN** - Traffic analysis with YOLOv11 ML model and heatmap visualization (macOS, SwiftUI, CoreML, MapKit, Charts)
- **Project Livium** - VTuber agency website with modern web technologies (Laravel, PHP, Bootstrap, JavaScript)

## 🌐 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions:

1. **Build Process**: `npm run build` creates optimized production files
2. **Deployment**: `npm run deploy` pushes to `gh-pages` branch
3. **Live Site**: Available at the configured GitHub Pages URL

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Hafi** - iOS Developer, Web Developer & DevOps Enthusiast

- **Email**: developer.hafi@gmail.com
- **GitHub**: [@armstrony](https://github.com/armstrony)
- **LinkedIn**: [mkhadafiess](https://linkedin.com/in/mkhadafiess)

---

_Built with ❤️ using React, TypeScript, and modern web technologies_
