# Kuljeetsinh Portfolio — Setup Guide

## Folder Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← DROP YOUR RESUME HERE
│
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
│   │
│   ├── data/
│   │   └── portfolio.js    ← EDIT THIS to update all content
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   └── useTyping.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
└── package.json
```

---

## STEP 1 — Install & Run Locally

Open a terminal, go to the portfolio folder, then:

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## STEP 2 — Add Your Details

Open `src/data/portfolio.js` and update:

- Your name, email, GitHub URL, LinkedIn URL
- Your resume link (after dropping resume.pdf in /public)
- Your project GitHub link
- Any stats you want to show

That's the only file you need to edit for content.

---

## STEP 3 — Set Up EmailJS (Free — Receive Messages on Gmail)

This lets visitors send you messages directly to your Gmail.
Takes about 10 minutes. Completely free.

### 3a. Create an EmailJS account
1. Go to https://www.emailjs.com
2. Click "Sign Up Free"
3. Use your Gmail to sign up

### 3b. Connect your Gmail
1. In EmailJS dashboard → go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account" → sign in with your Gmail
5. Click "Create Service"
6. Copy the **Service ID** (looks like: service_abc1234)

### 3c. Create an email template
1. Go to "Email Templates" → "Create New Template"
2. Set the template up like this:

   **To email:**     your Gmail address (e.g. kuljeetsinh@gmail.com)
   **From name:**    {{from_name}}
   **Reply to:**     {{reply_to}}
   **Subject:**      Portfolio: {{subject}}
   **Body:**
   ```
   You have a new message from your portfolio:

   Name: {{from_name}}
   Email: {{reply_to}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```

3. Click "Save"
4. Copy the **Template ID** (looks like: template_xyz7890)

### 3d. Get your Public Key
1. Go to "Account" (top right) → "General"
2. Copy your **Public Key** (looks like: AbCdEfGh1234567)

### 3e. Paste keys into Contact.jsx
Open `src/components/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // paste service_abc1234
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // paste template_xyz7890
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // paste AbCdEfGh1234567
```

### 3f. Test it
Run `npm run dev`, go to the contact form, fill it in and send.
Check your Gmail — you should receive the message within a minute.

---

## STEP 4 — Deploy to Vercel (Free)

### 4a. Push to GitHub
```bash
# In the portfolio folder:
git init
git add .
git commit -m "initial portfolio"
```

Then go to https://github.com/new, create a new repo called "portfolio",
and follow GitHub's instructions to push your code.

### 4b. Deploy on Vercel
1. Go to https://vercel.com
2. Sign up / log in with GitHub
3. Click "Add New Project"
4. Import your "portfolio" repository
5. Vercel auto-detects Vite. Just click **Deploy**
6. In ~60 seconds your site is live at:
   `https://portfolio-yourusername.vercel.app`

### 4c. Custom domain (optional, later)
Once deployed, you can add a free .vercel.app subdomain or buy
a custom domain like kuljeetsinh.dev (~₹800/year on Namecheap).

---

## STEP 5 — Add Your Resume

1. Export your resume as a PDF
2. Rename it `resume.pdf`
3. Drop it into the `/public` folder
4. The "Download Resume" buttons will automatically work

---

## Things to Update Later

1. **Add your GitHub URL** in portfolio.js so the GitHub button works
2. **Add project live link** if you deploy the inventory app
3. **Update stats** — once you have more projects or solve more DSA problems
4. **Add more projects** — just add to the `projects` array in portfolio.js
5. **Add a photo** — creates instant human connection with recruiters

---

## How to Update Content

Everything lives in ONE file: `src/data/portfolio.js`

- Change your bio → edit `personal.bio`
- Add a skill  → add to the `skills` array
- Add a project → add an object to the `projects` array
- Update journey → edit the `journey` array

No need to touch any component files.
