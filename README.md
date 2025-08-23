# FlipSter 🎮  

FlipSter is a **C2C e-commerce platform** built as an MVP where users can buy and sell gaming accounts.  
The project is designed with **scalability, maintainability, and production-readiness** in mind, making it a strong case study for modern full-stack development.

---

## 🚀 Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI & Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Backend & Auth:** [Supabase](https://supabase.com/) (Database, Auth, Storage)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/) (custom `GamingToaster`)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **PWA Support:** Custom Service Worker + Install Prompt
- **Form Handling:** React Hook Form + Zod

---

## ✨ Features (Current MVP)
- 🔑 **Authentication**
  - Email/Password signup & login
  - Google OAuth integration  
  - Custom Google Signup modal (shared across header & sell button)

- 🎮 **Game Listings**
  - Create & manage listings (title, description, price, images)
  - Upload images to Supabase Storage
  - Fetch user’s listings from Supabase
  - Delete listings securely with Row Level Security (RLS)

- 👤 **User Profile**
  - Basic user store with Zustand
  - Profile form and avatar uploader
  - My Listings page & My Favorites placeholder

- 📱 **PWA Ready**
  - Service worker for offline caching
  - PWA install modal (mobile + desktop support)

- ⚡ **UI Components**
  - Reusable card, banner slider, and hero section
  - Gaming-themed toast notifications
  - Top progress bar for navigation feedback

---

## 🗂️ Project Structure
```bash
src/
├── app/                  # Next.js app router (pages, layouts)
├── components/           # Shared + feature-based UI components
│   ├── shared/           # Generic components (toaster, modal, etc.)
│   └── pageComponents/   # Page-specific UI
├── context/              # React context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions & types
├── services/             # Supabase service layer (auth, listings, users)
├── store/                # Zustand stores
├── providers/            # App-level providers (e.g., ServiceWorkerProvider)
└── styles/               # Global CSS
