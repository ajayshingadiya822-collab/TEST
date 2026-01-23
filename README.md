# Professional Services Website - Ajay Shingadiya

A production-ready static website showcasing data analysis, Excel automation, Python programming, web scraping, and business intelligence services.

## 🚀 Quick Deploy to Vercel

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Deploy from this directory:
```bash
vercel
```

3. Follow the prompts and your site will be live!

## 📁 Project Structure

```
ajay/
├── index.html              # Home page
├── services.html           # Services page with detailed offerings
├── about.html             # About page
├── contact.html           # Contact form page
├── 404.html               # Custom 404 error page
├── offline.html           # PWA offline fallback
├── styles.css             # Main stylesheet
├── main.js                # JavaScript functionality
├── service-worker.js      # PWA service worker
├── manifest.json          # PWA manifest
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Search engine crawler instructions
├── humans.txt            # Developer credits
├── vercel.json           # Vercel configuration
├── favicon.png           # Website favicon (32x32)
├── icon-192.png          # PWA icon 192x192
├── icon-512.png          # PWA icon 512x512
└── README.md             # This file
```

## ✨ Features

### Core Pages
- **Home** - Hero section, service overview, stats, industries served
- **Services** - 7 detailed service descriptions with business value
- **About** - Expertise, experience, approach, and values
- **Contact** - Contact form with validation and FAQ section

### Technical Features
- ✅ SEO optimized with meta tags, sitemap, robots.txt
- ✅ Progressive Web App (PWA) with offline support
- ✅ Responsive design (mobile-first)
- ✅ Clean URLs via Vercel rewrites
- ✅ Security headers configured
- ✅ Fast loading with optimized caching
- ✅ Form handling ready (Netlify forms compatible)
- ✅ Smooth animations and transitions
- ✅ Mobile navigation menu

### Services Covered
1. Data Analysis & Business Intelligence
2. Excel & Spreadsheet Automation
3. Web Scraping & Data Extraction
4. Data Cleaning & Validation
5. Database & SQL Services
6. Custom Python Automation
7. Internal Dashboards & Tools

## 🎨 Design

- Modern, professional business aesthetic
- Blue gradient color scheme (#2563eb primary)
- Clean typography with system fonts
- Card-based layouts with subtle shadows
- Hover animations for interactivity
- Fully responsive across all devices

## 🔧 Configuration

### Before Deploying

1. **Update Domain in SEO files:**
   - Replace `https://yourdomain.com` in `sitemap.xml`
   - Update contact email in `contact.html` (currently `ajayshingadiya822@gmail.com`)

2. **Add Icons:**
   - Create `favicon.png` (32x32 pixels)
   - Create `icon-192.png` (192x192 pixels)
   - Create `icon-512.png` (512x512 pixels)
   - Use the blue gradient theme (#2563eb to #764ba2)
   - Include a simple data/analytics symbol

3. **Optional - Contact Form:**
   - Form is configured for Netlify forms
   - For Vercel, integrate with a form service or add serverless function

## 📝 Content Customization

All content is professional and ready to use. To customize:

1. **Personal Details:**
   - Update email in `contact.html` and `humans.txt`
   - Modify footer content if needed

2. **Services:**
   - Edit service descriptions in `services.html`
   - Update service cards in `index.html`

3. **About Page:**
   - Customize experience and industries in `about.html`

## 🌐 Deploy Options

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
netlify deploy
```

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in Settings
3. Select main branch as source

### Any Static Host
Upload all files to your web server root directory.

## 🔍 SEO Checklist

- ✅ Unique title tags on every page
- ✅ Meta descriptions (155 characters max)
- ✅ Proper heading hierarchy (H1-H3)
- ✅ Alt text for images (add when icons are created)
- ✅ Sitemap.xml configured
- ✅ Robots.txt configured
- ✅ Mobile-friendly responsive design
- ✅ Fast loading times
- ✅ HTTPS (via Vercel/Netlify)
- ✅ Semantic HTML5

## 📱 PWA Features

- Works offline after first visit
- Can be installed on mobile/desktop
- Fast loading with service worker caching
- Automatic updates when content changes

## 🛠️ Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Visit `http://localhost:8000`

## 📊 Performance

- Minimal dependencies (vanilla HTML/CSS/JS)
- Optimized caching strategy
- Lazy loading animations
- Efficient CSS with minimal reflows
- Fast Time to Interactive (TTI)

## 🔒 Security

Configured security headers in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## 📞 Support

For questions about the website:
- Review code comments in HTML/CSS/JS files
- Check Vercel documentation for deployment issues
- Modify content directly in HTML files

## 📄 License

All rights reserved © 2026 Ajay Shingadiya

---

**Ready to deploy!** All files are production-ready and require no build process.
