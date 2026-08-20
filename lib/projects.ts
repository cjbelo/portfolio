export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  status: "Personal" | "Professional" | "Open Source";
  featured: boolean;
  year: string;
  role: string;
  tech: string[];
  problem: string;
  solution: string;
  challenges: string[];
  learnings: string[];
  links: {
    live?: string;
    github?: string;
  };
  featuredOrder?: number;
  /**
   * Cover image shown on the project card and at the top of the case-study
   * page. Either a single path (shown in every theme) or a light/dark pair
   * that swaps based on the viewer's active theme.
   */
  image?: string | { light: string; dark: string };
  /**
   * Optional additional screenshots rendered in a gallery on the case-study
   * page. Each entry can be a single path or a light/dark pair.
   */
  gallery?: (string | { light: string; dark: string })[];
}

export const projects: Project[] = [
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    shortDescription:
      "Modern, responsive portfolio site built with Next.js 16, React 19, and Tailwind v4 - showcasing experience, projects, and skills.",
    description:
      "A modern, responsive portfolio website that serves as my professional home on the web. It showcases my career history, featured projects, technical skills, and a way to get in touch. Built from scratch with the latest web stack, with careful attention to performance, accessibility, dark-mode design, and motion.",
    status: "Personal",
    featured: true,
    year: "2026",
    role: "Solo Developer",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "shadcn (base-nova)",
      "next-themes",
      "Lucide Icons",
      "Formspree",
      "Vercel",
    ],
    problem:
      "As a senior engineer looking for new opportunities, I needed a personal website that did more than list a resume - it needed to communicate who I am, what I've built, and how to reach me, all while loading fast, working well on every device, and looking polished enough to compete with top-tier portfolios.",
    solution:
      "Built a Next.js 16 App Router site from scratch with a single design language across every page. Used Tailwind v4's CSS-first configuration for theming, Framer Motion for tasteful entrance and scroll-triggered animations, and a token-driven color system that supports light and dark themes with one switch. The site is statically generated for speed, fully responsive down to small phones, and ships with structured metadata for SEO and social sharing.",
    challenges: [
      "Designing a coherent visual system that holds together across 7 distinct pages with very different content shapes",
      "Balancing motion and performance - every animation is GPU-friendly, but the home page still runs at 60fps on mid-range mobile",
      "Wiring dark mode cleanly with next-themes without flashing the wrong theme on first paint",
      "Keeping the codebase small enough to maintain as a one-person side project, without sacrificing polish",
    ],
    learnings: [
      "Tailwind v4's CSS-first @theme and CSS-variable token system is a meaningful upgrade over v3's config file - far less ceremony for the same power",
      "Framer Motion's `useInView` + `once: true` pattern is a great fit for scroll-driven content reveals on marketing-style pages",
      "Server-rendered pages with focused client islands (the filter, the contact form, the theme toggle) give the best of both worlds: fast static content, interactive only where it matters",
    ],
    links: {
      live: "https://cjbelo.vercel.app",
      github: "",
    },
    featuredOrder: 1,
    image: {
      light: "/project-images/personal-portfolio-website/cover.jpg",
      dark: "/project-images/personal-portfolio-website/cover-dark.jpg",
    },
    gallery: [
      {
        light: "/project-images/personal-portfolio-website/home.jpg",
        dark: "/project-images/personal-portfolio-website/home-dark.jpg",
      },
      {
        light: "/project-images/personal-portfolio-website/about.jpg",
        dark: "/project-images/personal-portfolio-website/about-dark.jpg",
      },
      {
        light: "/project-images/personal-portfolio-website/experience.jpg",
        dark: "/project-images/personal-portfolio-website/experience-dark.jpg",
      },
      {
        light: "/project-images/personal-portfolio-website/contact.jpg",
        dark: "/project-images/personal-portfolio-website/contact-dark.jpg",
      },
    ],
  },
  {
    slug: "pothole-watch",
    title: "PotholeWatch - Pavement Assessment Dashboard",
    shortDescription:
      "Real-time pavement defect (pothole) detection dashboard built with React, TypeScript, and Vite - paired with a YOLOv26-seg edge-AI dashcam system.",
    description:
      "A real-time dashboard that turns raw dashcam footage into actionable pavement-defect intelligence. While the dashcam hardware (running YOLOv26-seg on edge AI) and detection API were built by a separate team, I owned the entire operator-facing web app: a live detection feed, severity analytics, work-order management, role-based user administration, and a PWA install story for field operators. The system is in production, deployed at pothole.watch, and used by road crews to triage and dispatch repairs.",
    status: "Professional",
    featured: true,
    year: "2026",
    role: "Frontend / Web App Lead (collaborated with API + edge-AI teams)",
    tech: [
      "React 18",
      "TypeScript",
      "Vite 5",
      "React Router v7",
      "TanStack Query v5",
      "Tailwind CSS 3",
      "Supabase Auth + Storage",
      "Express + Zod (API glue)",
      "Vercel (frontend + serverless API)",
      "vite-plugin-pwa (Workbox)",
      "Axios",
      "React Image Crop",
      "react-hot-toast",
    ],
    problem:
      "Road crews needed a way to monitor live pothole detections from edge-AI dashcams, prioritize repairs by severity, and dispatch work orders - all from the field. The detection pipeline (YOLOv26-seg running on edge hardware) and the upstream API were handled by another team, but the operator experience didn't exist: there was no web app, no way to manage who could log in, no offline story for spotty connections on remote routes, and no admin tooling to grant or revoke crew access.",
    solution:
      "Built the full operator-facing web app from the ground up: a responsive dashboard with a live detection feed, severity distribution charts, a detection history table, an interactive severity-coded map, and a work-orders management screen. Wired auth through Supabase with role-based access (admin / member), implemented a user-management CRUD with avatar uploads (with image cropping) and a CSV-exportable activity log. Migrated the data layer to TanStack Query for caching, optimistic updates, and request deduplication. Made the app installable as a PWA so field operators can pin it to their phone home screen with a real install banner and an in-app update flow that only prompts when a new build is waiting. Server-side: enforced role gates on user write endpoints and stubbed an admin notification hook for the upcoming Web Push integration.",
    challenges: [
      "Translating raw detection payloads from a separate team's API into a dashboard that helps operators prioritize at a glance - severity donuts, color-coded map markers, sortable tables, and a live feed that updates without overwhelming the UI",
      "Designing role-based access that works on both sides of the wire: server-side requireAdmin middleware on write endpoints (defense in depth) plus client-side gating so members see a clean read-only view of the user list",
      "Building a PWA that installs on localhost for testing, ships an update prompt only when the app is installed (not in a regular browser tab), and uses app-shell-only offline caching so live detection data never shows up stale",
      "Wiring Supabase Storage avatar uploads through an Express serverless function - getting the bucket public flag and RLS policy right so service-role uploads succeed without leaking unauthenticated access",
      "Migrating from ad-hoc fetch+useState to TanStack Query without rewriting every page at once - incremental adoption across detections, materials, users, logs, and dashboard widgets",
    ],
    learnings: [
      "Server-side role gating is non-negotiable even when the UI hides write actions - the requireAdmin middleware in api/index.ts is the real gate, and the client-side isAdmin flag is just a UX layer on top",
      "PWA update flows need a 'prompt' registration type (not 'autoUpdate') for installed users, since there are no tabs to close - combined with a standalone-only banner to avoid noise in regular browser tabs",
      "TanStack Query's invalidateQueries pattern makes role-aware data refreshes trivial: after a create/update/delete, one line invalidates the ['users'] key and the list, count, and dependent widgets all rehydrate consistently",
      "Stubbing the future integration point first (notifyAdminsOfNewUser logging the recipient list) gives the eventual Web Push adapter a single, predictable hook to replace - and lets you test the recipient-filter logic today",
    ],
    links: {
      live: "https://pothole.watch",
      github: "", // private repo
    },
    featuredOrder: 2,
    image: "/project-images/pothole-watch/cover.jpg",
    gallery: [
      "/project-images/pothole-watch/dashboard.jpg",
      "/project-images/pothole-watch/detections.jpg",
      "/project-images/pothole-watch/severity-index.jpg",
      "/project-images/pothole-watch/login.jpg",
    ],
  },
  {
    slug: "timeko",
    title: "TimeKo - Offline-First POS & Operations Platform",
    shortDescription:
      "A multi-app point-of-sale and operations ecosystem for fast-food restaurants: a PWA POS terminal, an admin dashboard, an employee portal, and a marketing site - built as a Turborepo monorepo on top of Supabase.",

    description:
      "A multi-app point-of-sale and operations ecosystem for fast-food restaurants in the Philippines. I designed and built the entire stack as a Turborepo monorepo: a PWA POS terminal that keeps selling through internet outages, an admin dashboard for managing products, stores, schedules, payroll, and inventory, an employee self-service portal for time-in/out and shift viewing, and a Next.js marketing site. Every piece shares types, UI, and utilities through internal packages, and talks to the same Supabase backend with row-level security keyed to per-organization, per-store, and per-role boundaries. The system is in production at timeko.app - used to run real shifts, real sales, real payroll across the POS (pos.timeko.app), admin (admin.timeko.app), and staff portal (staff.timeko.app).",
    status: "Professional",
    featured: true,
    year: "2026",
    role: "Solo founder / full-stack developer",
    tech: [
      "React 18 + TypeScript",
      "Vite 5",
      "Next.js 15 (landing)",
      "Turborepo + pnpm workspaces",
      "Tailwind CSS",
      "Zustand (with localStorage persistence)",
      "TanStack Query v5",
      "React Router v7",
      "Supabase (PostgreSQL, Auth, Storage, Edge Functions, Realtime)",
      "vite-plugin-pwa (Workbox)",
      "Web Push (VAPID + send-push edge function)",
      "Recharts",
      "@dnd-kit (drag-and-drop scheduling)",
      "Lucide React",
      "react-hot-toast",
      "PapaParse (CSV import/export)",
      "Vercel (per-app deploys + vercel.json headers)",
    ],
    problem:
      "Small fast-food chains in the Philippines run on cash, intermittent connectivity, and pen-and-paper scheduling. Off-the-shelf POS systems assume stable Wi-Fi, fixed terminals, and single-store operations - none of which match how a 2–5-location turo-turo or burger stand actually works. I needed a system that runs from a tablet at the counter, keeps selling when the internet drops, lets the owner manage products, schedules, and payroll across every store from one dashboard, and gives staff a self-service portal to view their shifts and time in/out - all without paying for per-terminal hardware locks or monthly SaaS per-seat fees.",

    solution:
      "Shipped the product as four focused apps in a Turborepo monorepo, each independently deployable to its own Vercel project: a PWA POS terminal for cashiers at the counter, an admin dashboard for owners, a staff self-service portal, and a Next.js marketing site. The POS keeps selling through internet outages by persisting cart and shift state to localStorage and replaying queued sales through a single transaction when connectivity returns, so a cashier never sees a failed checkout. The admin app handles the full operations back office - products, multi-store inventory with per-store thresholds, drag-and-drop scheduling, payroll composition, and sales analytics - all behind role-gated Supabase RLS policies that key off a small set of SECURITY DEFINER helper functions.\n\nA single Supabase backend ties the four apps together with PostgreSQL, Auth, Storage, Realtime, and six privileged-write edge functions (employee invite, delete, email change, resend invite, push). Each edge function verifies the caller's JWT, checks their role against the target organization, and only then uses the service-role admin API - keeping the service-role key out of the client. Web Push subscriptions are VAPID-keyed through a send-push edge function, with a same-origin check in the service worker to prevent deep-link injection.\n\nShared internal packages keep the apps visually and behaviorally consistent without coupling their builds: a single Tailwind preset, a design system of Button/Modal/Input/Table/Toaster, shared utilities for Philippine peso formatting and store color helpers, and PWA glue for install prompts and icons. The result is a product that runs real shifts, real sales, and real payroll across multiple stores today - at timeko.app, pos.timeko.app, admin.timeko.app, and staff.timeko.app.",
    challenges: [
      "Designing an offline story that survives real outages: the POS keeps selling with a Zustand-backed local DB, queues every sale in an offline outbox, and replays them through a single transaction when connectivity returns - without ever double-charging or losing a shift",
      "Getting Supabase RLS right across 60+ tables: per-store, per-org, per-role policies that all key off a small set of SECURITY DEFINER helper functions (get_user_store_ids, is_org_admin, is_superadmin, get_org_admin_org_id, get_user_store_role), with a recent tightening pass that sealed nine blanket FOR SELECT USING (true) policies that were leaking inventory and product-recipe data to anonymous callers",
      "Payroll is per-employee with policy stored as JSONB on employee_profiles.pay_rate (keyed by CATEGORY): break deduction, schedule clamping, overtime, manual deductions, and hourly-leave-unpaid all compose into one RPC - and pieces derive ONLY from POS sales (no manual override path)",
      "A drag-and-drop weekly schedule that overlays approved leave as violet blocks, auto-fills from each employee's default schedule, and gates write actions by role - the staff portal sees a read-only view of their own schedule plus a leave-filing flow that lands in admin for approval",
      "Shipped a marketing site, an admin app, a staff app, and a PWA POS - each with its own Vercel project, custom domain, CSP + Permissions-Policy headers, and isolated build - by sharing a single Tailwind preset, shared UI components, shared utils, and Turborepo's parallel pipeline",
      "Auth across four apps: Supabase Auth with per-app redirect allowlists, an invite-employee edge function for admin onboarding, and the recent hardening pass that removed a dead JWT-from-URL handoff in admin and staff (CSRF surface), added a same-origin check to the SW notificationclick (deep-link injection), and tightened the prod RLS posture",
    ],

    learnings: [
      "RLS is the real auth layer. The recent tightening pass that sealed nine blanket FOR SELECT USING (true) policies on inventory, product recipes, and store mappings was the single highest-impact security change - and it required zero app code because the helper functions (get_user_store_ids, is_org_admin) already existed; the policies were just wrong",
      "A monorepo pays off the moment the second app shows up. Sharing the Tailwind preset, the Button/Modal/Table design system, the formatCurrency helper, and the SW-glue package across POS/admin/staff kept every app visually consistent and let each one stay independently deployable",
      "Offline-first is a state-management discipline, not a feature. Persisting every cart, shift, and pending sale to localStorage + queuing writes to an outbox + replaying on reconnect means the POS works the same with or without Wi-Fi - and the cashier never has to think about it",
      "Edge functions are the seam where auth checks matter most. Every privileged write (invite, delete, email-change, push) goes through an edge function that verifies the caller's JWT, checks their role against the target org, and only then uses the service-role admin API - a clean pattern that keeps the service-role key out of the client",
      "PWA install + Web Push needs real glue. The installPromptDismissed() helper, the SW-side same-origin URL check on notificationclick, the VAPID-keyed push subscription flow through send-push, and the per-app manifest+icons all had to ship as one feature - half of it is a UX problem, half is a permissions problem, and the seams between them are where bugs live",
    ],
    links: {
      live: "https://timeko.app",
      github: "", // private repo
    },

    featuredOrder: 3,
    image: "/project-images/timeko/cover.jpg",
    gallery: [
      "/project-images/timeko/pos.jpg",
      "/project-images/timeko/admin-dashboard.jpg",
      "/project-images/timeko/schedule.jpg",
      "/project-images/timeko/time-log.jpg",
    ],
  },
  ];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));
}
