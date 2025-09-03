# AI Solutions Portfolio Website

A sleek, modern portfolio website for an AI solutions specialist, optimized for Netlify hosting.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Custom Cursor Effect**: Interactive neon trail cursor effect (desktop only)
- **Responsive Design**: Fully mobile-responsive with optimized layouts for all devices
- **Netlify Forms**: Integrated contact forms that work seamlessly with Netlify
- **Performance Optimized**: Lazy loading, smooth scrolling, and optimized animations
- **Interactive Elements**: Hover effects, parallax scrolling, and dynamic content

## Sections

1. **Hero Section**
   - Eye-catching headline and subheadline
   - Call-to-action buttons (Contact & WhatsApp)
   - Animated floating shapes

2. **About Me**
   - Professional introduction
   - Experience highlights (Puntoon Games collaboration)
   - Achievement statistics

3. **Services**
   - AI Video-to-Comic Generation
   - Conversational & Workflow AI Integration
   - Custom Chatbots / Agentic AI
   - Data Intelligence & Visualization Tools

4. **Portfolio**
   - Visual project showcase with hover effects
   - Project descriptions and details

5. **Contact**
   - Multiple contact methods
   - Netlify-integrated contact form
   - Quick contact panel

## Deployment to Netlify

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Log in to Netlify
   - Click "New site from Git"
   - Connect to GitHub and select your repository
   - Deploy settings are already configured (no build command needed)
   - Click "Deploy site"

3. **Form Configuration**:
   - Netlify automatically detects forms with `data-netlify="true"`
   - Forms will work immediately after deployment
   - Check form submissions in Netlify dashboard under "Forms"

## Customization

### Images
Replace placeholder images in the portfolio section with actual project screenshots:
- Update `src` attributes in portfolio items
- Recommended size: 400x300px
- Format: WebP or optimized JPEG/PNG

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f8b500;
    /* ... */
}
```

### Content
Update text content directly in `index.html`:
- Hero section headlines
- About me description
- Service descriptions
- Contact information

### Social Links
Add your social media URLs in the footer section of `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

- Optimize images before uploading (use WebP format when possible)
- Keep total page size under 5MB
- Use Netlify's asset optimization features
- Enable Netlify's CDN for faster global delivery

## Contact Form Setup

The forms are already configured to work with Netlify. After deployment:
1. Test the forms to ensure they're working
2. Set up email notifications in Netlify dashboard
3. Configure spam filters if needed

## License

This project is ready for commercial use. Feel free to modify and customize as needed.