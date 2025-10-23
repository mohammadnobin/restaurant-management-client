# 🍽️ Restaurant Management Website - MERN Stack Project (Updated Features)

A full-stack Restaurant Management system built with **MERN (MongoDB, Express, React, Node.js)**, designed to enhance customer experience, streamline food ordering, and simplify restaurant operations.

Live URL: [https://assignment-eleven-3badc.web.app/](https://assignment-eleven-3badc.web.app/)

---

## 🚀 Purpose

This application allows customers to:
- Explore food items with details.
- Search & view food galleries.
- Place orders.
- Track their own orders.

Admins or logged-in users can:
- Add food items.
- Update or manage their added items.
- See their own orders.

---

## 🔑 Authentication

- Email/Password-based login & registration.
- Google login integration.
- JWT Token-based route protection.
- Private route protection for sensitive pages.

---

## 🔥 Key Features

### 🌐 Public Pages
- **Home Page** – Beautiful banner, top-selling foods, and extra sections.
- **All Foods Page** – View all food items with search & quantity display.
- **Gallery Page** – Shows static food images with lightbox effect.
- **Single Food Page** – View food details with purchase button.
- **Contact Page** – Submit inquiries or feedback.
- **FAQ Page** – Frequently Asked Questions for user reference.
- **Blogs Page** – Display restaurant-related blogs.

### 🔒 Private Pages / Dashboard
- **Add Food** – Add food items with rich info.
- **My Foods** – See all foods added by logged-in user with update option.
- **My Orders** – View and delete own orders with date & time.
- **Food Purchase** – Purchase form with quantity control, disabled if unavailable.
- **Dashboard Component** – Unified dashboard for admins and users with enhanced layout.
- **Responsive DashboardLayout** – Refactored for mobile devices.
- **Navbar Improvements** – Easier navigation with quick access to new pages.

---

## 🧠 Challenge Features

- ✅ Cannot buy food if quantity is 0.
- ✅ Cannot buy more than available quantity.
- ✅ Cannot purchase own added food.
- ✅ Food Search by Name.
- ✅ JWT Token implemented with route protection.
- ✅ Theme toggling (light/dark).
- ✅ Profile image dropdown with quick links.
- ✅ Mobile-responsive Dashboard layout.
- ✅ New pages: Contact, FAQ, Blogs integrated into routing.

---

## 🛡️ Security

- ✅ Firebase config secured via `.env` variables.
- ✅ MongoDB credentials secured using `dotenv`.
- ✅ JWT token stored and sent for verifying private routes.

---

## 📦 Used NPM Packages

### 🔧 Backend:
- `express`
- `cors`
- `mongodb`
- `dotenv`
- `jsonwebtoken`

### 🌐 Frontend:
- `react-router-dom`
- `axios`
- `firebase`
- `sweetalert2`
- `react-icons`
- `moment`
- `react-toastify`
- `yet-another-react-lightbox` (for gallery zoom)
- `tailwindcss` + `daisyUI` (for design system)

---

## 🛠️ Project Structure

