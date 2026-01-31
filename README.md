# Personal Portfolio Website - Abhay Das Malikaveettil

A modern, responsive portfolio website showcasing backend development skills built with HTML, CSS, and JavaScript. Perfect for demonstrating Java and Spring Boot expertise to potential employers and internship opportunities.

## 🚀 Features

- **4 Pages**: Home, About, Skills, and Contact
- **Modern Design**: Bold, professional aesthetic with cyan/blue accent colors
- **Backend Developer Focus**: Highlights Java, Spring Boot, SQL, and backend technologies
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Contact Form**: Functional form with validation and success message
- **Clean Code**: Well-organized, commented, and production-ready

## 📁 File Structure

```
portfolio/
├── index.html       # Home page
├── about.html       # About page
├── skills.html      # Skills page
├── contact.html     # Contact page
├── styles.css       # All styling
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## 🎨 Already Customized For You!

This portfolio is already personalized with:
- ✅ Name: Abhay Das Malikaveettil
- ✅ Email: dasabhayyy511@gmail.com
- ✅ LinkedIn: https://www.linkedin.com/in/abhay-das-malikaveettil-0a6007332/
- ✅ Location: Ajman, UAE
- ✅ Focus: Backend Development (Java, Spring Boot, SQL)

### Further Customization Options

**1. Add Your Photo:**
In `about.html`, replace the SVG placeholder in the `.image-placeholder` div with:
```html
<img src="your-photo.jpg" alt="Abhay Das Malikaveettil" style="width: 100%; border-radius: 12px;">
```

**2. Adjust Skill Levels:**
In `skills.html`, modify the `width` percentage in `.level-fill` inline styles:
- Java: Currently 80% (Advanced)
- Spring Boot: Currently 70% (Intermediate)
- SQL: Currently 75% (Intermediate)

**3. Add Projects Section:**
Consider adding a "Projects" page to showcase your backend applications and REST APIs.

**4. Create GitHub Account:**
Once you create a GitHub account, add it back to `contact.html` in the contact methods section.

All colors are defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary: #00f0ff;        /* Main accent color */
    --secondary: #ff006e;      /* Secondary accent */
    --accent: #ffbe0b;         /* Additional accent */
    --bg-dark: #0a0e27;        /* Main background */
    --bg-darker: #050714;      /* Darker background */
    --bg-card: #12192e;        /* Card background */
}
```

Change these values to customize your color scheme!

### 4. Fonts

The site uses:
- **Bebas Neue** for large headings (display font)
- **Outfit** for body text

To change fonts:
1. Find new fonts on [Google Fonts](https://fonts.google.com)
2. Update the `<link>` tag in the `<head>` of each HTML file
3. Update the CSS variables:
   - `--font-display` for headings
   - `--font-body` for paragraphs

## 🌐 How to Use

### Local Development

1. **Download all files** to a folder on your computer
2. **Open index.html** in your web browser
3. **Navigate** between pages using the menu

### Deployment Options

**GitHub Pages (Free):**
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

**Netlify (Free):**
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Get instant hosting with a free URL

**Vercel (Free):**
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Auto-deploy with every update

## 📧 Contact Form Setup

The contact form currently logs submissions to the console. To make it functional:

**Option 1 - Formspree (Easiest):**
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the `<form>` tag in contact.html:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option 2 - EmailJS:**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their setup guide
3. Update the form submission handler in `script.js`

**Option 3 - Backend:**
- Set up your own server with Node.js/PHP
- Create an API endpoint
- Update the form to POST to your endpoint

## 🛠️ Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📱 Mobile Responsive

The site automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ✅ Pre-Launch Checklist

Already completed:
- [x] Updated all name placeholders
- [x] Added contact information (email, LinkedIn)
- [x] Customized content for backend development focus
- [x] Updated skills section with Java/Spring Boot
- [x] Personalized about section

Still todo:
- [ ] Add your professional photo to About page
- [ ] Test all links
- [ ] Test on mobile devices
- [ ] Review contact form functionality
- [ ] Deploy to hosting platform
- [ ] Optional: Create GitHub account and add to contact page
- [ ] Optional: Add a Projects section

## 💡 What This Portfolio Demonstrates

For internship applications, this portfolio showcases:
- ✅ Backend development skills (Java, Spring Boot, SQL)
- ✅ Clean HTML5 structure and semantic markup
- ✅ Modern CSS3 (Flexbox, Grid, animations)
- ✅ JavaScript DOM manipulation and interactivity
- ✅ Responsive design principles
- ✅ Professional presentation and attention to detail

**Core Skills Highlighted:**
- Java & Object-Oriented Programming
- Spring Boot & REST API Development
- SQL & Database Management
- Data Structures & Algorithms
- Git version control
- Problem-solving & clean code practices

**When applying:**
1. Deploy your site to a live URL
2. Add the URL to your resume
3. Include the GitHub repository link
4. Mention specific technologies used
5. Highlight any custom features you added

## 🎓 Learning Resources

Want to improve this further? Check out:
- [MDN Web Docs](https://developer.mozilla.org) - Complete web development reference
- [CSS-Tricks](https://css-tricks.com) - CSS tutorials and tips
- [JavaScript.info](https://javascript.info) - Modern JavaScript tutorial
- [FreeCodeCamp](https://freecodecamp.org) - Free coding courses

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

---

**Good luck with your internship search! 🚀**

Remember: This portfolio shows you can build real websites. Keep learning, keep building, and keep improving!
