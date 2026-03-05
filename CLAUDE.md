# Project: Ajay Shingadiya — Portfolio & Services Website
A professional portfolio site for Ajay Shingadiya, a data engineering & automation specialist.
Deployed live at: https://ajayshingadiya.vercel.app

---

## 1. TECH STACK
- Framework: Plain HTML5 + CSS3 + Vanilla JavaScript (no build system)
- Styling: Custom CSS in `styles.css` (CSS variables, dark/light theme)
- Icons: Lucide Icons (via CDN unpkg)
- Forms: FormSubmit.co (no backend required)
- Deployment: Vercel (auto-deploy from GitHub on push to `main`)
- Version Control: Git → GitHub (https://github.com/ajayshingadiya822-collab/my-website)

---

## 2. FILE STRUCTURE
```
ajay-2/
├── index.html              ← Home page
├── about.html              ← About page
├── services.html           ← Services offered
├── profile.html            ← Who I Am / profile page
├── contact.html            ← Contact form + info
├── chemical-data.html      ← Chemical data specialisation page
├── strategic-partners.html ← Partnership page
├── 404.html                ← Custom 404 error page
├── success.html            ← Form submission success page
├── offline.html            ← PWA offline fallback
├── styles.css              ← Global stylesheet (ALL pages share this)
├── main.js                 ← Global JS (nav toggle, theme, scroll)
├── service-worker.js       ← PWA service worker
├── manifest.json           ← PWA manifest
├── vercel.json             ← Vercel routing config
├── sitemap.xml             ← SEO sitemap
├── robots.txt              ← SEO robots
└── favicon.svg             ← Site favicon
```

---

## 3. OWNER CONTACT DETAILS (Use EXACTLY as shown everywhere)
- **Name:** Ajay Shingadiya
- **Email:** ajayshingadiya822@gmail.com
- **Phone:** +91 9313564576
- **Location:** Ahmedabad, Gujarat, India
- **Vercel URL:** https://ajayshingadiya.vercel.app
- **GitHub:** https://github.com/ajayshingadiya822-collab/my-website

---

## 4. FORM CONFIGURATION (contact.html)
- FormSubmit endpoint: `https://formsubmit.co/ajayshingadiya822@gmail.com`
- Method: POST
- Redirect after submit: `https://ajayshingadiya.vercel.app/success.html`
- Spam: `_honey` hidden field
- Captcha: `_captcha` = true
- Template: `_template` = table
- Subject: "New Project Brief - Ajay Shingadiya"

---

## 5. CSS DESIGN SYSTEM (styles.css)
All pages use CSS custom properties defined in `:root`. NEVER use hardcoded hex colors.

Key variables:
- `--accent` — primary brand color
- `--bg-base` — page background
- `--bg-surface` — card/panel background
- `--text-primary` / `--text-secondary` — text hierarchy
- `--border` — border color
- `--radius` — border radius
- `--shadow-lg` — card shadow
- `--transition` — standard transition timing

Dark/light theme toggled via `data-theme="dark"` on `<html>`.

---

## 6. EVERY PAGE MUST INCLUDE (critical checklist)
- `<link rel="stylesheet" href="/styles.css">`
- `<script src="https://unpkg.com/lucide@latest"></script>`
- `<script src="/main.js"></script>`
- `<script>lucide.createIcons();</script>` (last line before `</body>`)
- Navigation with hamburger menu button (class: `menu-toggle`)
- Theme toggle button (class: `theme-toggle`)
- Footer with ALL contact details (email, phone, location)

---

## 7. FOOTER TEMPLATE (copy on every page)
```html
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <h3>Ajay Shingadiya</h3>
                <p>Providing enterprise-grade data solutions. Precision. Speed. Scale.</p>
            </div>
            <div class="footer-links">
                <h4>Practice Areas</h4>
                <ul>
                    <li><a href="/services.html#web-scraping">Web Scraping</a></li>
                    <li><a href="/services.html#excel-automation">Excel Automation</a></li>
                    <li><a href="/chemical-data.html">Chemical Data</a></li>
                    <li><a href="/services.html#python-automation">Python Engineering</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Company</h4>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/strategic-partners.html">Partnership</a></li>
                    <li><a href="/profile.html">Who I Am</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h4>Get In Touch</h4>
                <div><i data-lucide="mail"></i> <span>ajayshingadiya822@gmail.com</span></div>
                <div><i data-lucide="briefcase"></i> <span>ajayshingadiya822@gmail.com</span></div>
                <div><i data-lucide="phone"></i> <span>+91 9313564576</span></div>
                <div><i data-lucide="map-pin"></i> <span>Ahmedabad, Gujarat, India</span></div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Ajay Shingadiya. Built for Performance.</p>
            <div class="social-links">
                <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
                <a href="#" aria-label="GitHub"><i data-lucide="github"></i></a>
                <a href="#" aria-label="Twitter"><i data-lucide="twitter"></i></a>
            </div>
        </div>
    </div>
</footer>
```

---

## 8. CRITICAL RULES (NEVER BREAK)
- NEVER change the owner email — always `ajayshingadiya822@gmail.com`
- NEVER change the phone number — always `+91 9313564576`
- NEVER use inline styles for colors — always use CSS variables
- NEVER break the dark/light theme — always test both
- ALWAYS include the footer with full contact info on every page
- ALWAYS push to GitHub after changes: `git add . && git commit -m "..." && git push origin main`
- ALWAYS use clean URLs (vercel.json has `cleanUrls: true`)

---

## 9. GIT WORKFLOW
```bash
# After making changes:
git add .
git commit -m "feat: description of change"
git push origin main
# Vercel auto-deploys in ~1-2 minutes after push
```

---

## 10. DEPLOYMENT
- Vercel project linked to: https://github.com/ajayshingadiya822-collab/my-website
- Branch: `main` (auto-deploy on push)
- No build step needed — static HTML site
- Cache-Control: `public, max-age=3600, must-revalidate` (set in vercel.json)
- After push, wait ~2 min then hard-refresh (`Ctrl+Shift+R`) to see changes
