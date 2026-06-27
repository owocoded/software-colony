# Software Colony — Digital Transformation Landing Page

A clean, fully responsive single-file HTML landing page for the Software Colony Data Analysis Training programme.

---

## Project Overview

| Detail | Value |
|---|---|
| Client | Software Colony |
| Programme | Digital Transformation — Data Analysis Training |
| Start Date | Friday, 24th July 2026 |
| Duration | 8 Weekends |
| Training Fee | ₦75,000 (discounted rate) |
| Contact | +234 803 854 2817 |

---

## File Structure

```
/
└── software-colony-landing.html   # Complete landing page (single file)
└── README.md                      # This file
```

The entire project is self-contained in **one HTML file** — no build tools, no dependencies, no frameworks required.

---

## Sections

1. **Navigation** — Sticky top bar with logo and a persistent "Register Now" CTA
2. **Hero** — Programme headline, subtext, and an info card with pricing and key details
3. **Stats Strip** — 8 Weekends · 3 Courses · ₦75K Rate · 100% Hands-on
4. **About** — Programme description and three value pillars
5. **Courses** — Microsoft Excel, Microsoft SQL (MSQL), Microsoft Power BI
6. **Incentives** — Certification Exam, Mentorship, Peer Projects
7. **How to Register** — 3-step guide and payment details box
8. **CTA Band** — Urgency section with primary registration button
9. **Footer** — Contact links, WhatsApp, and registration form link

---

## Design System

### Colours

| Token | Hex | Usage |
|---|---|---|
| Yellow | `#F5C800` | Brand accent, CTA band, stat numbers |
| Yellow Light | `#FDE96A` | Hero gradient |
| Green | `#1A6B3C` | Primary buttons, headings, incentives section |
| Dark | `#0F1A10` | Stats strip background, headings |
| Charcoal | `#2B2B2B` | Body text |
| Mid | `#5A5A5A` | Secondary text, captions |
| Light | `#F9F7F0` | Section backgrounds |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | Syne | 700–800 |
| Body / UI | Inter | 400–600 |

Fonts are loaded from Google Fonts via CDN.

---

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 900px | Full two-column hero, three-column grids |
| 600px – 900px | Single-column hero, two-column course/incentive grids |
| < 600px | Fully stacked single-column layout, full-width buttons |

Respects `prefers-reduced-motion` for users who prefer less animation.

---

## Key Links

| Label | URL |
|---|---|
| Registration Form | https://forms.office.com/r/axuXFxLnm5 |
| WhatsApp | https://wa.me/2348038542817 |

---

## Payment Details

| Field | Value |
|---|---|
| Bank | Access Bank |
| Account Number | 0064177282 |
| Account Name | Software Colony |
| Amount | ₦75,000 |

---

## How to Deploy

### Option 1 — Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign up for a free account
2. Drag and drop `software-colony-landing.html` onto the Netlify dashboard
3. Your site is live instantly with a free `.netlify.app` URL
4. Optionally connect a custom domain in the site settings

### Option 2 — GitHub Pages
1. Create a new GitHub repository
2. Upload `software-colony-landing.html` and rename it `index.html`
3. Go to **Settings → Pages → Source → main branch**
4. Your page will be live at `https://yourusername.github.io/repo-name`

### Option 3 — cPanel Hosting
1. Log into your cPanel hosting dashboard
2. Open **File Manager** and navigate to `public_html`
3. Upload `software-colony-landing.html` and rename it `index.html`
4. Access the page via your domain

---

## Updating Content

Since the project is a single HTML file, all updates are made directly inside `software-colony-landing.html`.

| What to change | Where to find it |
|---|---|
| Training fee | Hero card `price-amount` div and payment box |
| Start date | Hero card `meta-value` and stats strip |
| Registration form link | All `href="https://forms.office.com/r/axuXFxLnm5"` attributes |
| Phone / WhatsApp number | Footer and hero card `meta-row` |
| Bank account details | Payment box inside the Register section |
| Course descriptions | `.course-card` divs in the Courses section |

---

## Browser Support

Tested and compatible with all modern browsers:

- Google Chrome (v100+)
- Mozilla Firefox (v100+)
- Safari (v14+)
- Microsoft Edge (v100+)
- Mobile browsers (iOS Safari, Android Chrome)

---

## Built With

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Google Fonts (Syne + Inter)
- No JavaScript frameworks · No build tools · No external dependencies

---

## Contact

**Software Colony**  
📞 +234 803 854 2817  
💬 WhatsApp: +234 803 854 2817
