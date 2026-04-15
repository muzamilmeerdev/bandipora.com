# Bandipora Explorer 🏔️

Ek modern, responsive 3D interactive website Bandipora (Jammu & Kashmir) ke liye.

## Developer
**Muzamil Ahmad Mir**
- 📱 Phone: +91 9103594759
- 📧 Email: muzamilmeer598@gmail.com
- 📷 Instagram: [@muzamilmeerdev](https://instagram.com/muzamilmeerdev)
- 💻 GitHub: [muzamilmeerdev](https://github.com/muzamilmeerdev)
- 💼 LinkedIn: [Muzamil Ahmad Mir](https://linkedin.com/in/muzamil-ahmad-mir)

## Features ✨

- ✅ 3D Hero section with parallax effects
- ✅ Interactive Map - Bandipora locations (Chattibandi, Chanpal, etc.)
- ✅ Photo Gallery with lightbox
- ✅ Attractions showcase
- ✅ Culture & History section
- ✅ Development & Progress
- ✅ Contact Form (Email integration)
- ✅ Fully Responsive Design
- ✅ Glassmorphism UI
- ✅ Smooth Animations

## Installation 🚀

1. **Clone Repository:**
```bash
git clone <your-repo-url>
cd bandipora-explorer
```

2. **Install Dependencies:**
```bash
npm install
# ya
pnpm install
```

3. **Development Server Run Karein:**
```bash
npm run dev
# ya
pnpm dev
```

4. **Build for Production:**
```bash
npm run build
# ya
pnpm build
```

## Email Setup 📧

Contact form se aapki email par message receive karne ke liye:

### Web3Forms Setup (Free & Easy):

1. **Web3Forms Account Banayein:**
   - [https://web3forms.com](https://web3forms.com) par jayein
   - Sign up karein (Free hai)

2. **Access Key Lein:**
   - Dashboard mein access key milegi
   - Access key copy karein

3. **Code Mein Add Karein:**
   - File kholen: `/src/app/components/Contact.tsx`
   - Line 24 par:
   ```typescript
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Yahan apni key dalein
   ```
   - `YOUR_WEB3FORMS_ACCESS_KEY` ki jagah apni actual key paste karein

4. **Test Karein:**
   - Form fill karke submit karein
   - Aapki email (muzamilmeer598@gmail.com) par message aayega!

### Alternative: EmailJS (Agar Web3Forms nahi chahiye)

Contact.tsx file mein EmailJS bhi use kar sakte hain. Instructions [EmailJS.com](https://www.emailjs.com) par milenge.

## Project Structure 📁

```
bandipora-explorer/
├── index.html              # Main HTML file
├── package.json            # Dependencies & scripts
├── src/
│   ├── app/
│   │   ├── App.tsx        # Main App component
│   │   ├── routes.tsx     # Router configuration
│   │   └── components/
│   │       ├── MainLayout.tsx      # Main layout with navigation
│   │       ├── Hero3D.tsx          # 3D Hero section
│   │       ├── About.tsx           # About section
│   │       ├── Attractions.tsx     # Attractions showcase
│   │       ├── Gallery.tsx         # Photo gallery with lightbox
│   │       ├── CultureHistory.tsx  # Culture & History
│   │       ├── Development.tsx     # Development section
│   │       ├── Info.tsx            # Information section
│   │       ├── MapLocation.tsx     # Interactive Map
│   │       ├── Contact.tsx         # Contact form
│   │       └── Developer.tsx       # Developer info
│   └── styles/
│       └── index.css      # Global styles
└── README.md              # Ye file!
```

## Technologies Used 🛠️

- **React 18.3.1** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons
- **Web3Forms** - Email handling

## Sections 📑

1. **Home** - 3D animated hero section
2. **About** - Bandipora ki basic information
3. **Attractions** - Wular Lake, Gurez Valley, Nishat Park, Chandaji Forest Park
4. **Gallery** - Beautiful photos with lightbox
5. **Culture** - Silk Route heritage & Kashmiri culture
6. **Development** - Eco-tourism, Fisheries, Infrastructure
7. **Info** - Location, Climate, Literacy, Travel info
8. **Map** - Interactive map with clickable locations (Chattibandi, Chanpal, etc.)
9. **Contact** - Contact form with email integration
10. **Developer** - Developer contact details

## GitHub Upload Kaise Karein 🐙

1. **GitHub Repository Banayein:**
   - GitHub.com par jayein
   - New Repository create karein

2. **Local Setup:**
```bash
git init
git add .
git commit -m "Initial commit: Bandipora Explorer"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

3. **Future Updates:**
```bash
git add .
git commit -m "Your commit message"
git push
```

## Live Deployment 🌐

### Vercel se Deploy karein (Recommended):

1. [Vercel.com](https://vercel.com) par account banayein
2. GitHub repository connect karein
3. Deploy button click karein
4. Done! Automatic deployment ho jayegi

### Netlify se Deploy karein:

1. [Netlify.com](https://netlify.com) par jayein
2. "New site from Git" select karein
3. Repository select karein
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## Support 💬

Koi problem ho to contact karein:
- Email: muzamilmeer598@gmail.com
- Phone: +91 9103594759
- Instagram: [@muzamilmeerdev](https://instagram.com/muzamilmeerdev)

## License 📄

© 2026 Bandipora Explorer. All rights reserved.

---

Made with ❤️ by Muzamil Ahmad Mir
