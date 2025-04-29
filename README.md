# PastPop

Discover what happened on this day in history!  
Browse a beautiful, Pinterest-style timeline of historical events, with a modern dark navy theme and responsive design.

[Live Demo → past-pop.vercel.app](https://past-pop.vercel.app/)

---

## ✨ What is PastPop?

**PastPop** is a web application that fetches and displays multiple historical events that happened on today's date in previous years. The app presents these events in a visually engaging, card-based, Pinterest-like layout. Each card shows the year, a brief description, and a link to read more on Wikipedia.

---

## 🚀 Features

- **Automatic Date Detection:** Shows events for the current day, every day.
- **Pinterest-style UI:** Responsive masonry grid for a modern, engaging look.
- **Dark Navy Theme:** Default dark mode with navy blue background, beige text, and a theme toggle.
- **Event Cards:** Each event is displayed in a stylish card with hover effects.
- **Wikipedia Links:** Direct access to more information for each event.
- **Footer with Socials:** Quick links to your [GitHub](https://github.com/YashSensei) and [LinkedIn](https://www.linkedin.com/in/yash-agrawal-208841307/).
- **Deployed & Shareable:** Live at [https://past-pop.vercel.app/](https://past-pop.vercel.app/)

---

## 🛠️ Tech Stack

- **Frontend:** React (with TypeScript)
- **Styling:** Tailwind CSS (custom navy/beige theme, responsive, animations)
- **Routing:** React Router
- **Data Fetching:** Custom React hook, fetches from [byabbe.se On This Day API](https://byabbe.se/on-this-day/)
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 📦 Project Structure

```
src/
├── components/      # Reusable UI components (Footer, ThemeToggle, etc.)
├── hooks/           # Custom hooks (e.g., useTodayEvents)
├── pages/           # Main page components
├── styles/          # Global and custom styles
└── App.tsx          # Main app layout and routing
```

---

## 🚦 How It Works

1. **Detects Today's Date:** Uses JavaScript's Date API.
2. **Fetches Events:** Calls the "On This Day" API for today's month and day.
3. **Displays Cards:** Renders each event in a responsive, animated card.
4. **Links to Wikipedia:** Each card can link out for more details.

---

## 🖥️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YashSensei/pastpop.git
   cd pastpop
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run locally:**
   ```bash
   npm run dev
   ```
4. **Open in your browser:**  
   Visit `http://localhost:5173` (or the port shown in your terminal).

---

## 🌐 Live Demo

Check out the deployed app here:  
👉 [https://past-pop.vercel.app/](https://past-pop.vercel.app/)

---

## 🤝 Contributing

Pull requests and suggestions are welcome!  
Feel free to open an issue or submit a PR.

---

## 📄 License

MIT License

---

Created with ❤️ by [YashSensei](https://github.com/YashSensei)
