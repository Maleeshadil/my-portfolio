# Portfolio Website 

<img width="1470" height="833" alt="Portfolio" src="https://github.com/user-attachments/assets/75e8119e-00af-44ba-8f09-b95263565ecd" />


## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📧 EmailJS Configuration

To enable the contact form, you need to set up EmailJS:

1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Maleesha Dilshan)

4. Update the credentials in `src/utils/emailjs.ts`:
   ```typescript
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id';
   const PUBLIC_KEY = 'your_public_key';
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/data/portfolio.ts` - Projects, skills, certifications
- `src/components/sections/Contact.tsx` - Contact information
- `src/components/sections/Footer.tsx` - Footer contact details
- `index.html` - SEO meta tags

### Images
- Replace project images in `src/data/portfolio.ts` with your actual project screenshots
- Add your CV file to `public/cv.pdf`
- Add a profile image if desired

### Colors & Styling
- Modify `tailwind.config.js` for custom colors
- Update gradient backgrounds in components
- Customize animations in `src/utils/animations.ts`

## 📱 Features Included

✅ Fully responsive design  
✅ Smooth scroll navigation  
✅ Framer Motion animations  
✅ EmailJS contact form  
✅ Modern gradient backgrounds  
✅ Glass morphism effects  
✅ Professional typography  
✅ Mobile-friendly navigation  
✅ Hover animations  
✅ Progress bars for skills  
✅ Project showcase cards  
✅ Certification display  
✅ Social media links  

## 🛠 Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact Form
- **Lucide React** - Icons
- **Vite** - Build Tool

## 📦 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   └── sections/        # Page sections
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Portfolio.tsx
│       ├── Certifications.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── data/
│   └── portfolio.ts     # Portfolio data
├── types/
│   └── index.ts         # TypeScript interfaces
├── utils/
│   ├── animations.ts    # Framer Motion configs
│   └── emailjs.ts       # EmailJS service
├── App.tsx
├── main.tsx
└── index.css
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🔧 Environment Variables

Create a `.env` file for sensitive data:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update `src/utils/emailjs.ts` to use these variables:
```typescript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
