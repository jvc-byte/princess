# Relationship Website Project

A beautifully crafted interactive web experience designed for a special someone. This project features a series of engaging elements such as messages, questions, a letter, and a closing segment to create a heartfelt and immersive journey.

## 🚀 Live Demo
[Visit the website](https://cute-princess.vercel.app/)

## 📌 Features
- 🔐 **Passcode Protection** - Ensures a personalized entry.
- 💌 **Letter** - A heartfelt message displayed beautifully.
- 🎶 **Music Section** - A dedicated page for romantic tunes.
- 🖼️ **Picture Carousel** - A gallery of memorable images.
- ⏳ **Timer** - A e to build anticipation.
- 💬 **Sweet Messages** - Random messages to brighten the experience.
- 🔄 **Smooth Navigation** - Seamless routing with React Router.

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS
- **Routing**: React Router
- **Deployment**: Vercel

## 📂 Project Structure
```
├── src
│   ├── assets
│   ├── components
│   │   ├── Passcode.jsx
│   │   ├── Question.jsx
│   │   ├── Timer.jsx
│   │   ├── Recap.jsx
│   │   ├── Letter.jsx
│   │   ├── Closing.jsx
│   │   ├── Music.jsx
│   │   ├── Picture.jsx
│   │   ├── Message.jsx
│   │   ├── ValQuestion.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
├── public
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── vercel.json
```

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/jvc-byte/princess.git
   cd princess
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the development server**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

## 🚀 Deployment on Vercel
This project is deployed using Vercel. To manually deploy:
```sh
vercel --prod
```

Ensure `vercel.json` is correctly configured:
```json
{
  "rewrites": [
    { "source": "/*", "destination": "/index.html" }
  ]
}
```

## 🐞 Troubleshooting
**404 Error on Production?**
- Ensure React Router is correctly configured.
- Try using `HashRouter` instead of `BrowserRouter`.
- Check `vite.config.js` to set the correct `base` path.

## 📜 License
This project is for personal use and is not open for public distribution.

---
❤️ Built with love and care.
