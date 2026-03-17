# AyeWork Production Website

This is a production-ready Next.js website package for AyeWork.

## Pages
- Home
- About
- How It Works
- For Schools
- For Organizations
- For Students
- Contact

## Run locally
1. Install Node.js 18+
2. Run `npm install`
3. Copy `.env.example` to `.env.local`
4. Run `npm run dev`

## Deploy to Vercel
1. Upload this project to GitHub
2. Import the repository into Vercel
3. Add environment variables from `.env.example`
4. Deploy

## Contact form
The contact form posts to `/api/contact`.
If Resend is configured, submissions will email `CONTACT_TO_EMAIL`.
If not configured, the endpoint returns a safe fallback success response so the site still works during setup.
