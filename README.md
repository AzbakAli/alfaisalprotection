# AlFaisal Protection Website

A professional, bilingual website for AlFaisal Protection for Car Services (تلميع الفيصل), an automotive protection and detailing business in Madinah, Saudi Arabia.

## Features

- **Bilingual Support**: Full English and Arabic with RTL support
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Premium dark theme with elegant typography
- **Interactive Components**:
  - Sticky navigation with mobile menu
  - Hero section with call-to-action
  - Services showcase
  - Gallery with lightbox
  - FAQ accordion
  - Contact form with WhatsApp integration
  - Google Maps integration
- **Performance**: Optimized for fast loading on Saudi mobile networks
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## Tech Stack

- **Framework**: Next.js 14.2.15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Fonts**: Inter (English), IBM Plex Sans Arabic (Arabic)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alfaisal-new
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Configuration

Business details are centralized in `config/business.tsx`. Update this file to change:
- Business names (English and Arabic)
- Contact information
- Address
- Opening hours
- Services
- Social media links

**Important**: Before going live, verify all business information with the business owner:
- Primary phone number
- Address accuracy
- Opening hours
- Service availability
- Social media accounts

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Click deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway

## Business Information Verification

The following information needs verification before public launch:

- [ ] Primary phone number (currently using 0553002606 from listings)
- [ ] Address accuracy
- [ ] Opening hours (from image - needs confirmation)
- [ ] Service availability (PPF, tinting, ceramic coating, polishing, interior detailing)
- [ ] Social media accounts (only Linktree is currently linked)
- [ ] WhatsApp number for inquiries
- [ ] Business email address

## Project Structure

```
alfaisal-new/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navbar with language toggle
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── WhyChooseUs.tsx     # Value proposition
│   ├── Gallery.tsx         # Image gallery with lightbox
│   ├── HowItWorks.tsx      # Customer journey
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Contact.tsx         # Contact form and information
│   └── Footer.tsx          # Footer with links
├── config/
│   ├── business.tsx        # Business configuration
│   └── language.tsx        # Language context provider
├── public/                 # Static assets
└── package.json
```

## Customization

### Colors

The accent color is defined in the components using Tailwind's amber-500. You can customize colors in `tailwind.config.ts`.

### Fonts

Fonts are configured in `app/layout.tsx`. You can replace Inter and IBM Plex Sans Arabic with other Google Fonts.

### Images

Replace the placeholder images in the components with actual business photographs:
- Hero background image in `components/Hero.tsx`
- Service images in `components/Services.tsx`
- Gallery images in `components/Gallery.tsx`

## License

This project is proprietary and intended for use by AlFaisal Protection.

## Support

For technical support or questions about the website, contact the development team.
