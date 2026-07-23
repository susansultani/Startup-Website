# Pulse — Health Intelligence Platform

**Pulse** is a responsive, multi-page marketing website for a fictional health-tech startup that turns a user's heart rate, sleep and daily activity into a personalized, adaptive health plan. This project was built as a team assignment to apply HTML, CSS, Bootstrap, Git and GitHub in a real, collaborative workflow.

> ⚠️ This is a **concept/academic project**. Pulse is not a real company, and the site contains no real user data, backend, or medical functionality.

---

## 📌 Project Goal

Design and build a multi-page, fully responsive website using:
- Semantic **HTML5**
- **CSS3** (custom design system on top of Bootstrap)
- **Bootstrap 5** components and grid
- Version control with **Git** and collaboration via **GitHub**

---

## ✨ Concept

Most health apps give everyone the same generic advice — the same step count, the same sleep target, the same rest day. **Pulse** is built around a simple idea: read a person's real data every day (heart rate, sleep stages, training load) and adapt their plan to *them*, not to an average body.

---

## 🗂️ Pages

The site has **6 pages**:

| # | Page | File | Description |
|---|---|---|---|
| 1 | Home | `index.html` | Hero, key stats, feature highlights, process, testimonials, CTA |
| 2 | Features | `features.html` | Deep dive into the core features with mock data visualizations |
| 3 | Pricing | `pricing.html` | Pricing tiers, comparison table, FAQ accordion |
| 4 | About | `about.html` | Company story, stats, values, team grid |
| 5 | Blog | `blog.html` | Articles / health & product updates listing |
| 6 | Contact | `contact.html` | Contact form and direct contact details |

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure across all pages
- **CSS3** — custom design system (`css/style.css`) with CSS variables for color, spacing and typography
- **Bootstrap 5.3** — grid system, navbar, accordion, forms, utilities (via CDN)
- **Vanilla JavaScript** — written inline within each page where needed (no separate JS files)
- **Google Fonts** — Space Grotesk (headings), Inter (body text), IBM Plex Mono (data/labels)

No build tools, frameworks, or backend are required — the site runs as static files.

---

## 📁 Folder Structure

```
pulse-website/
├── index.html         # Home page
├── features.html      # Features page
├── pricing.html        # Pricing page
├── about.html          # About page
├── blog.html            # Blog page
├── contact.html         # Contact page
├── css/
│   └── style.css       # Custom design system + Bootstrap overrides
└── README.md
```

---

## 🚀 Getting Started

### Run locally
1. Clone or download this repository.
2. Open `index.html` directly in your browser — no server or build step required.

```bash
git clone https://github.com/<your-username>/pulse-website.git
cd pulse-website
open index.html   # or double-click the file
```

### Recommended: Live Server
For the best experience (auto-reload while editing), use the **Live Server** extension in VS Code, or run:

```bash
npx serve .
```

---

## 🌐 Deployment (GitHub Pages)

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save — your site will be published at:
   `https://<your-username>.github.io/pulse-website/`

---

## 🎨 Design System

**Palette — Teal & Mint**

| Token | Value | Usage |
|---|---|---|
| Primary — Teal | `#14B8A6` | Core brand color, primary UI elements, data highlights |
| Secondary — Mint | `#5EEAD4` | Supporting accent, soft backgrounds, secondary data points |
| Accent — Coral | `#F97360` | Calls to action, highlights, emphasis |
| Background | `#F8FAFC` | Base page background |
| Text | `#1E293B` | Primary text color |

Typography: **Space Grotesk** (display/headings), **Inter** (body text), **IBM Plex Mono** (data & labels).

---


**Branching convention used:**
- `main` — stable, presentation-ready branch
- `feature/<name>` — one branch per page or feature (e.g. `feature/pricing-page`)
- Pull requests reviewed by at least one teammate before merging into `main`

> Replace the table above with your actual team members and update it before submission.

---

## ✅ Checklist Before Submission

- [ ] Update team member names and GitHub handles above
- [ ] Test all pages on mobile, tablet and desktop widths
- [ ] Verify all internal links work correctly
- [ ] Confirm the repository is public (or shared with the instructor)
- [ ] Push final commit and tag it (e.g. `v1.0`)

---

## 📄 License

This project was created for educational purposes as part of a course assignment. Free to reuse or adapt for learning.
