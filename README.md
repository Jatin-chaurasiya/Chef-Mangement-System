# 🍽️ Club Chefs — Chef Management System (Frontend)

A modern **premium culinary website UI** built using **React.js**, inspired by luxury editorial food brands.
This project showcases chef profiles, recipes, community stories, and authentication modals with elegant animations and theme support.

---

# 🚀 Live Concept

Club Chefs is designed as a **chef portfolio + recipe management platform frontend** with:

* Elegant typography
* Editorial layouts
* Smooth animations
* Glassmorphism effects
* Dark / Light theme support
* Authentication UI (Frontend only)

---

# 🧰 Tech Stack

### Frontend

* ⚛️ React.js (Functional Components + Hooks)
* 🧭 React Router DOM
* 🎨 Tailwind CSS
* 🅱️ Bootstrap 5 (Grid & Layout)
* 💅 Custom CSS (Luxury styling & animations)

### State Management

* Context API

  * Theme Context
  * Auth Context

### UI / UX

* Responsive Design (Mobile-First)
* Smooth Transitions & Hover Effects
* Modal Animations
* Glass Blur Navbar
* Image Overlays
* Gradient Buttons

---

# ✨ Features Implemented

## 🧭 Navigation

* Transparent Navbar over hero
* Sticky Navbar on scroll
* Backdrop blur effect
* Responsive mobile menu
* Theme toggle button
* Login / Register buttons

---

## 🌗 Dark / Light Theme

* Global theme using CSS variables
* Persistent theme with localStorage
* Automatic system preference detection
* Smooth transitions between modes

---

## 🔐 Authentication (Frontend Only)

### Register Modal

* Full Name
* Email
* Password + Confirm Password
* Password Strength Indicator
* Terms & Conditions checkbox
* Social buttons (UI only)
* Validation logic
* Success simulation

### Login Modal

* Email & Password
* Show / Hide password
* Remember me
* Error handling
* Social login UI
* Switch between Login ↔ Register

### Auth Context

Handles:

* Modal open / close
* Fake login/register
* User state
* Logout

---

## 🏠 Pages & Sections

### Hero Section

* Full screen background
* Zoom animation
* Overlay gradient
* CTA button

### Intro / Mission

* Split layout
* Editorial typography
* CTA

### Meet Our Chefs

* Chef cards
* Hover zoom
* Expand modal support

### Chef’s Favorites

* Filters / Tabs
* Gallery grid
* Hover animation

### Club News

* News cards
* Image + text layout

### Editor’s Notes

* Blog style cards

### Cooking Stories

* Dark block section
* Mosaic image layout

### Footer

* Links
* Social icons
* Newsletter input

---

# 📁 Project Structure

```
src/
│
├── assets/
│   └── images/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ChefSection.jsx
│   ├── Favorites.jsx
│   ├── News.jsx
│   ├── Notes.jsx
│   ├── Stories.jsx
│   ├── RegisterModal.jsx
│   └── LoginModal.jsx
│
├── context/
│   ├── ThemeContext.jsx
│   └── AuthContext.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Chefs.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🎨 Design Highlights

* Luxury gold accent color
* Editorial serif headings (Cormorant Garamond)
* Clean sans typography (Poppins)
* Card hover elevation
* Image zoom on hover
* Section spacing with generous padding
* Modal glass blur background

---

# ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/your-username/club-chefs.git

# Navigate project
cd club-chefs

# Install dependencies
npm install

# Run development server
npm run dev
```

---

# 📦 Dependencies

```json
react
react-dom
react-router-dom
tailwindcss
bootstrap
```

---

# 🌍 Theme System

Theme controlled using:

```
CSS Variables + Context API
```

Variables include:

```
--bg
--surface
--text
--border
--gold
--modal-bg
--input-bg
```

---

# 🔮 Future Improvements (Planned)

* Backend integration (Node / Spring Boot)
* JWT Authentication
* Chef Dashboard Panel
* Recipe CRUD
* Favorites System
* Search & Filters
* Pagination
* Profile Page
* Admin Panel
* Animations with Framer Motion
* Image optimization & lazy loading

---

# 📱 Responsive Support

Works on:

* Mobile 📱
* Tablet 📲
* Desktop 💻
* Large Screens 🖥️

---

# 👨‍💻 Author

**Jatin Chaurasiya**

Engineering Student
Frontend Developer (React)

---

# 📜 License

This project is for educational and portfolio purposes.

---

# ⭐ Acknowledgment

Inspired by premium culinary editorial websites and modern luxury UI trends.

---

# ❤️ Contribution

Feel free to fork and enhance the project.

---

# 🏁 Conclusion

Club Chefs demonstrates how modern React UI, theme systems, and elegant design can combine to create a professional-grade frontend experience without backend integration.

---
