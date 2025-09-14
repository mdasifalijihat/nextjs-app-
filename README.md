

# 💰 Next.js Projects

**A modern, AI-powered expense tracking web application built with Next.js 15**, featuring intelligent categorization, real-time analytics, and personalized financial insights.

**Tech Stack:** Next.js 15, React, TypeScript, Tailwind CSS, Chart.js, Prisma, Neon, Clerk, OpenRouter/OpenAI API

---

## ✨ Features

### 🤖 AI-Powered Intelligence

* **Smart Categorization:** AI automatically suggests expense categories based on descriptions.
* **Financial Insights:** Personalized recommendations and spending pattern analysis.
* **Interactive AI Chat:** Get detailed explanations and advice for any insight.

### 💼 Core Functionality

* **Expense Tracking:** Add, edit, and delete expenses with ease.
* **Real-time Charts:** Beautiful visualizations using Chart.js.
* **Statistics Dashboard:** Comprehensive spending analytics.
* **Expense History:** Complete transaction history with search and filter capabilities.

### 🎨 Modern UI/UX

* **Light & Dark Mode:** Seamless theme switching with smooth transitions.
* **Fully Responsive:** Optimized for all screen sizes.
* **Beautiful Animations:** Smooth interactions and hover effects.
* **Gradient Designs:** Modern card layouts with backdrop blur effects.

### 🔐 Authentication & Security

* **Multiple Login Options:** Google, GitHub, Facebook, or email/password.
* **Secure Sessions:** Managed by Clerk authentication.
* **User Profiles:** Personalized dashboards with user information.

---

## 🛠️ Tech Stack

**Frontend:**

* Next.js 15 – React framework with App Router
* React 19 – Latest React with concurrent features
* TypeScript – Type-safe development
* Tailwind CSS – Utility-first CSS framework
* Chart.js – Beautiful charts and visualizations

**Backend & Database:**

* Neon – Serverless PostgreSQL database
* Prisma – Type-safe database ORM
* Server Actions – Direct server functions in Next.js

**AI & Authentication:**

* OpenRouter – Free AI API access without credit cards
* Clerk – Complete authentication solution
* OpenAI Compatible API – For intelligent expense categorization

**Deployment:**

* Vercel – Serverless deployment platform

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/sahandghavidel/next-expense-tracker-ai.git
cd next-expense-tracker-ai
npm install   # or yarn install / pnpm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="your-neon-database-url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/"

# OpenRouter AI
OPENROUTER_API_KEY="your-openrouter-api-key"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Database Setup

```bash
npx prisma generate
npx prisma db push
```

### Run the Development Server

```bash
npm run dev   # or yarn dev / pnpm dev
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 📊 Database Schema

* **User:** Stores user information from Clerk
* **Record:** Stores expense transactions with categories and amounts

> View the complete database diagram: Eraser Diagram

---

## 🎯 Key Features Walkthrough

### 1. Smart Expense Adding

* Enter description, date, and amount
* Click the ✨ button for AI category suggestions
* Manual category selection from predefined options

### 2. AI Insights Dashboard

* Real-time spending pattern analysis
* Categorized insights: warnings, tips, success, info
* Interactive expandable AI explanations
* Confidence scores for each insight

### 3. Visual Analytics

* Interactive Chart.js charts
* Daily, weekly, and monthly views
* Color-coded spending categories
* Responsive design for all devices

### 4. Expense Management

* Complete transaction history
* Search and filter capabilities
* One-click expense deletion
* Real-time updates across all components

---

## 🌐 Deployment

* Deploy on **Vercel (Recommended)**
* Connect your GitHub repository to Vercel
* Add environment variables in Vercel dashboard
* Automatic deployment on every push to main branch

---

## 📎 Useful Links

* **Neon Database:** Serverless PostgreSQL
* **Clerk Authentication:** User management
* **GitHub Repository:** Source code
* **Database Diagram:** Visual schema
* **Next.js Documentation:** Framework docs
* **Tailwind CSS:** Styling framework
* **Vercel Platform:** Deployment platform

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the **MIT License**.

---

## 💖 Support

If you find this project helpful, please give it a ⭐ on GitHub!

Built with ❤️ by **Sahand Ghavidel**

> Demonstrating modern full-stack development with AI integration, completely free to build and deploy.

---

