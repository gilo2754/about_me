A modern, responsive portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion. Designed for a Full-Stack Software Engineer freelancer based in Germany.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant interactions and transitions
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Professional Sections**: 
  - Hero landing page with animated elements
  - About page with skills and bio
  - Experience timeline with interactive tabs
  - Project showcase with featured and additional works
  - Contact form with validation
- **SEO Optimized**: Complete meta tags, OpenGraph, and Twitter Card support
- **Performance Focused**: Optimized images, fonts, and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- **Deployment**: Ready for [Vercel](https://vercel.com/)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page with skills and bio
│   ├── contact/           # Contact form page
│   ├── experience/        # Interactive experience timeline
│   ├── work/              # Projects showcase
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Hero landing page
│   └── globals.css        # Global styles and animations
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Header navigation with mobile menu
│   └── Footer.tsx         # Footer with social links
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/carlomenjivar/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Layout & SEO** (`src/app/layout.tsx`):
   - Update metadata (title, description, keywords)
   - Change OpenGraph and Twitter Card data
   - Update URL references

2. **Navigation** (`src/components/Navigation.tsx`):
   - Update logo/initials
   - Modify navigation items if needed
   - Update resume link

3. **Hero Section** (`src/app/page.tsx`):
   - Update name, title, and description
   - Modify company highlights
   - Update email and contact links

4. **About Page** (`src/app/about/page.tsx`):
   - Update bio and personal story
   - Modify skills and technologies
   - Update professional photo placeholder

5. **Experience** (`src/app/experience/page.tsx`):
   - Update work experience data
   - Modify descriptions and achievements
   - Update technologies used

6. **Projects** (`src/app/work/page.tsx`):
   - Replace with your actual projects
   - Update project descriptions, technologies, and links
   - Add real project images

7. **Contact** (`src/app/contact/page.tsx`):
   - Update contact information
   - Modify social media links
   - Configure form submission (currently simulated)

### Styling & Design

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Animations**: Customize animations in `src/app/globals.css`

### Contact Form Integration

The contact form currently uses a simulated submission. To integrate with a real backend:

1. Replace the form submission logic in `src/app/contact/page.tsx`
2. Add your preferred form handling service (Formspree, Netlify Forms, etc.)
3. Update the success/error handling

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS Amplify**: Connect your Git repository
- **DigitalOcean App Platform**: Deploy directly from GitHub

## 📊 Performance

This portfolio is optimized for performance with:

- Server-side rendering (SSR) with Next.js
- Optimized images with `next/image`
- Code splitting and lazy loading
- Minimal bundle size with tree shaking
- Efficient CSS with Tailwind CSS

## 🎯 SEO Features

- Complete meta tags for search engines
- OpenGraph tags for social media sharing
- Twitter Card support
- Structured data markup
- Semantic HTML for accessibility
- Fast loading times for better rankings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Brittany Chiang](https://brittanychiang.com/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Fonts by [Google Fonts](https://fonts.google.com/)

## 📞 Contact

Carlo Menjivar - [carlo@unmega.com](mailto:carlo@unmega.com)

Project Link: [https://github.com/carlomenjivar/portfolio-nextjs](https://github.com/carlomenjivar/portfolio-nextjs)

---

⭐ **Star this repository if you found it helpful!**
