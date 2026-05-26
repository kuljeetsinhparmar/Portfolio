# 🌐 Kuljeetsinh Parmar — Developer Portfolio

A modern, responsive developer portfolio built with **React + Vite**, showcasing my projects, skills, and experience.

🔗 **Live Site:** https://portfolio-taupe-eta-rhgrfm9mho.vercel.app

---

## 📸 Preview

<img width="1701" height="832" alt="image" src="https://github.com/user-attachments/assets/e70d3bd0-cf7f-424a-93a9-046c00b1ba9d" />


---

## ✨ Features

- ⚡ Built with React + Vite (fast builds, instant HMR)
- 🎨 Emerald green custom design system with CSS variables
- 📱 Fully responsive — mobile, tablet, desktop
- 🖱️ Smooth scroll reveal animations
- ⌨️ Typing effect in hero section
- 🖼️ Live iframe project preview in mock browser window
- 📬 Contact form with EmailJS → messages go directly to Gmail
- 🧭 Active navbar highlighting on scroll
- 📄 Resume download button

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, JavaScript (ES6+) |
| Build Tool | Vite |
| Styling | CSS Modules + CSS Variables |
| Animations | CSS keyframes + Intersection Observer |
| Contact Form | EmailJS |
| Deployment | Vercel |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      + Navbar.css
│   │   ├── Hero.jsx        + Hero.css
│   │   ├── About.jsx       + About.css
│   │   ├── Skills.jsx      + Skills.css
│   │   ├── Projects.jsx    + Projects.css
│   │   ├── Journey.jsx     + Journey.css
│   │   ├── Contact.jsx     + Contact.css
│   │   └── Footer.jsx      + Footer.css
│   ├── data/
│   │   └── portfolio.js    ← all content lives here
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   └── useTyping.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/kuljeetsinhparmar/portfolio.git

# 2. Go into the folder
cd portfolio

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
```

Open [http://localhost:xxxx](http://localhost:xxxx) in your browser.

---

## 📬 Contact Form Setup (EmailJS)

The contact form sends messages directly to Gmail using EmailJS.

1. Sign up free at [emailjs.com](https://www.emailjs.com)
2. Create a Gmail service and email template
3. Open `src/components/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

---

## 📝 Update Content

All portfolio content (bio, skills, projects, journey) lives in one file:

```
src/data/portfolio.js
```

Edit that file — no need to touch any component.

---

## ☁️ Deploy on Vercel

```bash
# Push to GitHub first, then:
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. Click Deploy — done in 60 seconds
```

To update after deploy:

```bash
git add .
git commit -m "your update message"
git push
```

Vercel redeploys automatically on every push.

---

## 📄 Update Resume

1. Export your new resume as `resume.pdf`
2. Replace the file in the `public/` folder
3. Push to GitHub — Vercel updates automatically

---

## 👤 Author

**Kuljeetsinh Parmar**
- 📧 kuljeetsinh1305@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/kuljeetsinh-parmar)
- 🐙 [GitHub](https://github.com/kuljeetsinhparmar)

---

## 📃 License

This project is open source — feel free to use it as inspiration for your own portfolio.
If you do, a ⭐ on the repo would be appreciated!
