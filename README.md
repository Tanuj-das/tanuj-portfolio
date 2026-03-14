# tanuj.work — Personal Portfolio

A modern, responsive personal portfolio website for **Tanuj Das**, DevOps Specialist with 7.5+ years of experience in CI/CD, Kubernetes, cloud infrastructure, and automation.

## Live

> Coming soon at [tanuj.work](https://tanuj.work)

## Preview

### Dark Mode
The default theme features a deep dark palette with purple accents and an animated particle network background.

### Light Mode
A clean, high-contrast light theme toggled via the navbar — preference is saved to `localStorage`.

## Features

- **Animated Particle Network** — Floating nodes with connecting lines that create a subtle infrastructure/pipeline aesthetic
- **Typewriter Effect** — Cycles through roles: "build CI/CD pipelines", "automate everything", "architect cloud infrastructure", etc.
- **Dark / Light Theme** — Toggle with one click; persisted across sessions via `localStorage`
- **Key Projects Showcase** — Four detailed project cards with descriptions, tech stacks, and impact metrics
- **Experience Timeline** — Vertical timeline covering all roles from 2018 to present
- **Skills Grid** — 20+ tools organized by category with brand-accurate color indicators
- **Certifications** — CKA and HashiCorp Terraform Associate with hover animations
- **Downloadable Resume** — One-click PDF download directly from the hero section
- **Scroll Animations** — Fade-in effects triggered by `IntersectionObserver`
- **Animated Stat Counters** — Numbers count up when scrolled into view
- **Fully Responsive** — Mobile-first layout with hamburger navigation
- **SVG Favicon** — Custom `TD` branded icon
- **Zero Dependencies** — Pure HTML, CSS, and vanilla JavaScript

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| Animation | CSS transitions + Canvas API (particle network) |

## Project Structure

```
tanuj-portfolio/
├── index.html              # Main page — all sections
├── style.css               # Themes, layout, animations
├── script.js               # Particles, typewriter, theme toggle
├── Tanuj-Resume-DevOps.pdf # Downloadable resume
└── README.md
```

## Run Locally

No build step required. Just serve the files:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .

# Or simply open index.html in your browser
```

Then visit [http://localhost:8080](http://localhost:8080).

## Deploy

This is a static site — deploy it anywhere:

**GitHub Pages**
1. Go to repo Settings → Pages
2. Source: Deploy from branch → `main` → `/ (root)`
3. Site will be live at `https://<username>.github.io/tanuj-portfolio/`

**Custom Domain (tanuj.work)**
1. Add a `CNAME` file with `tanuj.work` to the repo root
2. In your domain registrar, add DNS records:
   - `A` records pointing to GitHub Pages IPs
   - Or a `CNAME` record pointing to `<username>.github.io`
3. Enable "Enforce HTTPS" in GitHub Pages settings

**Netlify / Cloudflare Pages**
1. Connect this repo
2. Build command: *(leave empty)*
3. Publish directory: `.`
4. Add custom domain in dashboard

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, typewriter tagline, stats, CTA buttons, resume download |
| **About** | Professional summary, languages, contact info cards |
| **Experience** | Timeline of 4 roles across Amdocs, ConvergeSol, Jumpstart Filings, Nisum |
| **Projects** | Gen-AI Knowledge Base, AWS Security Product, Production Automation Engine, HA Infrastructure |
| **Skills** | Container/Orchestration, Cloud, CI/CD, AI & Methodologies |
| **Certifications** | CKA, HashiCorp Terraform Associate |
| **Education** | B.Tech (UPTU), 12th & 10th (CISCE) |
| **Contact** | Email, LinkedIn, CTA |

## License

This project is for personal use. Feel free to use the structure as a template for your own portfolio.

---

Built by **Tanuj Das** — DevOps Specialist, Pune, India
