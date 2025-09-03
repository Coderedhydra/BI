# ByteBloom - Royal AI Solutions Portfolio

A premium, royal-themed portfolio website for ByteBloom AI Solutions, built with Vite and optimized for Netlify deployment.

## Features

- **Royal Purple Theme**: Elegant royal purple and gold color scheme
- **Fully Responsive**: Works perfectly on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Modern Design**: Clean, professional layout with smooth animations
- **Business-Focused**: Clear value propositions and ROI metrics
- **Contact Integration**: WhatsApp and phone contact options

## Technology Stack

- **Vite**: Fast build tool and dev server
- **Vanilla JavaScript**: No framework dependencies
- **CSS3**: Modern styling with CSS variables
- **Font Awesome**: Premium icons
- **Google Fonts**: Cinzel (royal) and Montserrat fonts

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Netlify

### Option 1: Git Deployment

1. Push this folder to a GitHub repository
2. Connect the repository to Netlify
3. Deploy settings are already configured in `netlify.toml`

### Option 2: Direct Upload

1. Run `npm run build`
2. Drag the `dist` folder to Netlify's upload area

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

## Project Structure

```
bytebloom-portfolio/
├── public/
│   └── crown.svg          # Royal crown favicon
├── src/
│   ├── app.js            # Main app logic
│   ├── main.js           # Entry point
│   └── style.css         # Royal-themed styles
├── index.html            # Main HTML template
├── netlify.toml          # Netlify configuration
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

## Color Palette

- **Royal Purple**: #4a148c - #8e24aa
- **Gold**: #ffd700 - #ffb300
- **Neutrals**: White, off-white, grays

## Contact Information

- **Phone**: +91-8459431389
- **WhatsApp**: +91-9075228258
- **Email**: amitjaiswal044@gmail.com

## License

© 2024 ByteBloom. All rights reserved.