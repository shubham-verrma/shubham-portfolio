# Shubham Verma Portfolio

A production-grade, single-page personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features Apple/CRED-level visual polish with dark theme, ultra-legible typography, and performance-optimized animations.

## 🚀 Features

- **Dark Theme**: True black base with subtle neutrals and high-contrast text
- **Responsive Design**: Mobile-first approach scaling from 360px to 1920px+
- **Performance Optimized**: Lighthouse ≥95 on all metrics
- **Accessibility**: AA+ contrast, semantic HTML, keyboard navigation
- **Animations**: Framer Motion with reduced-motion support
- **Content Management**: JSON-based content system for easy editing
- **SEO Optimized**: Metadata, OpenGraph, Twitter cards, sitemap

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter + Plus Jakarta Sans
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Content Management

All content is managed through JSON files in the `/content` directory:

- `hero.json` - Hero section content
- `case-studies.json` - Work case studies
- `stats.json` - Impact numbers
- `experience.json` - Professional experience
- `writing.json` - Writing samples
- `about.json` - About section
- `contact.json` - Contact information

### Theme Customization

Edit `tailwind.config.ts` to customize:

- Colors (bg, layer, text, accent)
- Typography (fonts, sizes)
- Spacing and shadows
- Animation keyframes

### Adding Case Studies

1. Add new case study to `/content/case-studies.json`
2. Include all required fields: id, title, outcome, tags, problem, strategy, execution, result
3. Optional: behindTheScenes, images

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to your hosting platform
# Upload the .next folder and public folder
```

## 📱 Performance

- **Lighthouse Score**: ≥95 on Performance, Accessibility, Best Practices, SEO
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic with Next.js
- **Font Optimization**: Google Fonts with display: swap

## ♿ Accessibility

- **Color Contrast**: AA+ compliance
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Reduced Motion**: Respects prefers-reduced-motion
- **Focus Management**: Visible focus indicators

## 📝 Content Checklist

Before deploying, update:

- [ ] Personal information in all JSON files
- [ ] Contact details and links
- [ ] Case study content and metrics
- [ ] Professional experience
- [ ] Writing samples
- [ ] CV/Resume PDF
- [ ] Social media links
- [ ] Domain name in metadata

## 🔧 Development

### Project Structure

```
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── sections/           # Page sections
├── content/            # JSON content files
├── styles/             # Global styles
├── types/              # TypeScript types
├── utils/              # Utility functions
└── public/             # Static assets
```

### Key Components

- `Button` - Magnetic hover effects
- `WorkCard` - Case study cards with overlay
- `Navigation` - Sticky nav with scroll progress
- `ProgressBar` - Scroll progress indicator
- `CursorFX` - Subtle cursor effects

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ by Shubham Verma
