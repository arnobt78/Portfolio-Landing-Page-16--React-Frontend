# Portfolio Landing Page 16 - React, Vite, Bootstrap Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2-7952B3)](https://getbootstrap.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.6-CA4245)](https://reactrouter.com/)

A single-page portfolio template built with **React** and **Vite**. It showcases a modern, responsive layout with a hero section, about page, project portfolio grid, and contact form. The project is intended for learning and reuse—customize the content in one config file, add your own styling, and deploy as a personal or demo portfolio. No backend is required; the contact form uses EmailJS for client-side email sending.

- **Live Demo:** [https://portfolio-ui-16.vercel.app/](https://portfolio-ui-16.vercel.app/)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Routes & Pages](#routes--pages)
- [Components & Functionality](#components--functionality)
- [Configuration & Content](#configuration--content)
- [Reusing Components](#reusing-components)
- [Scripts Reference](#scripts-reference)
- [Deployment](#deployment)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Features

- **Single-page app (SPA)** with client-side routing (React Router v6).
- **Responsive layout** using Bootstrap 5 and custom CSS.
- **Dark / light theme toggle** with persistence in `localStorage`.
- **Animated cursor** on desktop (disabled on touch devices).
- **Page transition animations** via `react-transition-group`.
- **Typewriter effect** on the home hero text.
- **Contact form** integrated with EmailJS (no backend needed).
- **SEO-friendly** meta tags and Open Graph data via `react-helmet-async`.
- **Lint support** with ESLint for consistent code style.

---

## Tech Stack

| Category     | Technology                                |
| ------------ | ----------------------------------------- |
| Framework    | React 18.2                                |
| Build tool   | Vite 5.4                                  |
| Routing      | React Router DOM 6.6                      |
| UI / layout  | Bootstrap 5.2, React Bootstrap 2.7        |
| Icons        | React Icons 4.1                           |
| Animations   | React Transition Group, Typewriter Effect |
| Contact form | EmailJS (emailjs-com)                     |
| Head / SEO   | react-helmet-async                        |
| Linting      | ESLint + React & React Hooks plugins      |

**Backend / API:** None. The app is frontend-only. The contact form uses [EmailJS](https://www.emailjs.com/) to send emails from the browser; you configure service/template/user IDs in the project (see [Environment Variables](#environment-variables) and [Configuration & Content](#configuration--content)).

---

## Project Structure

```bash
portfolio-ui-16/
├── public/                 # Static assets (e.g. robots.txt)
├── src/
│   ├── app/
│   │   ├── App.jsx         # Root component, router, scroll-to-top, cursor
│   │   ├── App.css
│   │   └── routes.jsx      # Route definitions + animated route wrapper
│   ├── header/
│   │   ├── index.jsx       # Top bar, logo, nav links, theme toggle, mobile menu
│   │   └── style.css
│   ├── pages/
│   │   ├── home/           # Hero + typewriter + CTA buttons
│   │   ├── about/          # Bio, work timeline, skills, services
│   │   ├── portfolio/      # Project grid (images + links)
│   │   └── contact/        # Contact form (EmailJS) + contact info
│   ├── components/
│   │   ├── themetoggle/    # Dark/light theme switch
│   │   └── socialicons/    # Vertical social links (from content_option)
│   ├── hooks/
│   │   ├── withRouter.jsx  # Injects location, navigate, params into a component
│   │   └── AnimatedCursor.jsx  # Custom cursor (desktop only)
│   ├── assets/
│   │   └── images/         # Images (e.g. logo, screenshots)
│   ├── content_option.js   # Single source for all copy & config (meta, intro, skills, contact, etc.)
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry: mounts <App /> into #root
├── index.html               # HTML shell + meta, scripts
├── vite.config.js
├── vercel.json              # Vercel: build command, output dir (dist)
├── .env.example             # Example env (optional for this project)
├── .eslintrc.cjs
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (or 20+ recommended)
- **npm** (or yarn / pnpm)

### Install and run

```bash
# Clone the repository (or use your fork)
git clone https://github.com/arnobt78/portfolio-ui-16.git
cd portfolio-ui-16

# Install dependencies
npm install

# Start development server (default: http://localhost:5173)
npm run dev
# or
npm start
```

- **Build for production:** `npm run build` → output in `dist/`.
- **Preview production build:** `npm run preview`.
- **Lint:** `npm run lint` or `npm run lint:fix`.

---

## Environment Variables

This project is **frontend-only** and does not require environment variables to run or build. The app uses:

- **`import.meta.env.BASE_URL`** (set by Vite) for the router basename (e.g. empty for root, or subpath if you deploy under a path).

Optional (legacy / tooling):

- **`.env.example`** lists `GENERATE_SOURCEMAP` and `DISABLE_ESLINT_PLUGIN` from the original Create React App setup. With **Vite**, these are not used. You can ignore them or remove `.env` / `.env.example` if you prefer.

**Contact form (EmailJS):**  
Email sending is configured in code, not via `.env`. Edit **`src/content_option.js`** and set:

- `contactConfig.YOUR_EMAIL` – recipient (display + used in template).
- `contactConfig.YOUR_SERVICE_ID` – EmailJS service ID.
- `contactConfig.YOUR_TEMPLATE_ID` – EmailJS template ID.
- `contactConfig.YOUR_USER_ID` – EmailJS user (public) ID.

To get these values:

1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create an email service, template, and copy the IDs into `content_option.js`.

No backend or server-side API is required.

---

## Routes & Pages

All routes are defined in **`src/app/routes.jsx`** and rendered with a transition wrapper.

| Route        | Component   | Description                                        |
| ------------ | ----------- | -------------------------------------------------- |
| `/`          | `Home`      | Hero, typewriter, “My Portfolio” / “Contact Me”    |
| `/about`     | `About`     | About text, work timeline, skills, services        |
| `/portfolio` | `Portfolio` | Grid of project cards (image + description + link) |
| `/contact`   | `ContactUs` | Contact form (EmailJS) + contact details           |
| `*`          | `Home`      | Fallback (404 → home)                              |

Example of how routes are wired:

```jsx
// src/app/routes.jsx
<Routes location={location}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="*" element={<Home />} />
</Routes>
```

---

## Components & Functionality

### App (`src/app/App.jsx`)

- Wraps the app in **React Router** with `basename={import.meta.env.BASE_URL}`.
- Renders **AnimatedCursor** (desktop only), **ScrollToTop** (scroll to top on route change), **Headermain**, and **AppRoutes**.

### Header (`src/header/index.jsx`)

- Fixed top bar: logo (from `content_option.logotext`), theme toggle, hamburger menu.
- Slide-out menu with links to Home, Portfolio, About, Contact and footer social links from `content_option.socialprofils`.

### Theme toggle (`src/components/themetoggle/index.jsx`)

- Toggles light/dark by setting `data-theme` on `document.documentElement` and saving the value in `localStorage` so the choice persists across reloads.

### Social icons (`src/components/socialicons/index.jsx`)

- Renders a vertical list of social links from `content_option.socialprofils`, with icons from `react-icons/fa` (e.g. GitHub, Twitter, Facebook, LinkedIn). Add or change links in `socialprofils`.

### Animated cursor (`src/hooks/AnimatedCursor.jsx`)

- Replaces the default cursor with a custom dot on desktop; disabled on touch devices. Used in `App.jsx` with configurable size, color, and scale.

### withRouter (`src/hooks/withRouter.jsx`)

- HOC that injects `location`, `navigate`, and `params` from React Router into a component. Used by the routes wrapper so the transition group can key by `location.key`.

### Pages

- **Home:** Uses `introdata` and `meta` from `content_option.js`; typewriter strings come from `introdata.animated`; hero image from `introdata.your_img_url`.
- **About:** Uses `dataabout`, `worktimeline`, `skills`, `services` for sections.
- **Portfolio:** Uses `dataportfolio` (array of `{ img, description, link }`).
- **Contact:** Uses `contactConfig` and `meta`; form submit calls EmailJS with `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_USER_ID`, and template parameters (e.g. `from_name`, `user_name`, `message`).

---

## Configuration & Content

All editable copy and config live in **`src/content_option.js`**. No env vars are required for content.

- **`meta`** – `title`, `description`, `keywords`, `canonicalUrl`, `ogImage`, `author` (used for SEO and Helmet on each page).
- **`logotext`** – Text shown as the logo in the header.
- **`introdata`** – Hero title, typewriter strings, short description, hero image URL.
- **`dataabout`** – About section title and body.
- **`worktimeline`** – Array of `{ jobtitle, where, date }`.
- **`skills`** – Array of `{ name, value }` (e.g. for progress bars).
- **`services`** – Array of `{ title, description }`.
- **`dataportfolio`** – Array of `{ img, description, link }` for project cards.
- **`contactConfig`** – `YOUR_EMAIL`, `YOUR_FONE`, `description`, and EmailJS IDs.
- **`socialprofils`** – Object mapping platform names to URLs (e.g. `github`, `twitter`, `facebook`, `linkedin`).

Example: adding a new skill

```js
// In content_option.js, add to the skills array:
{ name: "Your Skill", value: 85 },
```

Example: adding a social link

```js
// In content_option.js, socialprofils:
socialprofils: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  // ...
},
```

---

## Reusing Components

- **In this repo:** Import from the existing paths (e.g. `import Headermain from "../header"`, `import { Socialicons } from "../components/socialicons"`). Ensure `content_option.js` (or your own config) exports the data they need.
- **In another React project:** Copy the component folder (e.g. `themetoggle/` or `socialicons/`) and its `style.css`. Install any dependencies (e.g. `react-icons`). Replace imports from `../../content_option` with your own config or props.
- **Theme toggle:** Depends on CSS that uses `[data-theme="dark"]` (or similar). Reuse the same `data-theme` + `localStorage` pattern and adapt your global CSS to that attribute.
- **Contact form:** Copy the Contact page (or extract the form), install `emailjs-com`, and plug in your EmailJS IDs and template params. No backend required.

---

## Scripts Reference

| Command             | Description                                                |
| ------------------- | ---------------------------------------------------------- |
| `npm run dev`       | Start Vite dev server                                      |
| `npm start`         | Same as `dev`                                              |
| `npm run build`     | Production build → `dist/`                                 |
| `npm run preview`   | Serve `dist/` locally                                      |
| `npm run lint`      | Run ESLint on `src` (.js, .jsx)                            |
| `npm run lint:fix`  | ESLint with auto-fix                                       |
| `npm run predeploy` | Build + copy `index.html` to `404.html` (for SPA fallback) |
| `npm run deploy`    | Deploy `dist` with gh-pages (if configured)                |

---

## Deployment

- **Vercel:** Connect the repo; build command `npm run build`, output directory `dist`. Optional: use root `vercel.json` with `buildCommand` and `outputDirectory: "dist"` (already present).
- **Other static hosts:** Run `npm run build`, then upload the contents of `dist/`. For SPA routing, configure fallback to `index.html` (e.g. `404.html` or server rewrite rules).

---

## Keywords

Portfolio, React, Vite, SPA, single-page application, Bootstrap, React Router, EmailJS, contact form, dark mode, theme toggle, typewriter effect, animated cursor, react-helmet-async, SEO, open graph, frontend, demo, learning, open-source, MIT.

---

## Conclusion

**Portfolio Landing Page 16** is a frontend-only, React + Vite portfolio template. You can run it locally with `npm install` and `npm run dev`, change all content and links in `src/content_option.js`, and optionally connect the contact form to EmailJS without a backend. The structure (pages, header, theme toggle, social icons, cursor, routes) is modular so you can reuse parts in other projects. Use the scripts above for development, build, lint, and deployment.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
