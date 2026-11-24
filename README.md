# Dixitkumar Sathwara — Portfolio

A responsive, dark-premium personal portfolio built with React, Vite, Tailwind CSS v4, Framer Motion and Lucide icons.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Personalize before publishing

Open `src/App.jsx` and update the `profile` object:

- `email`: the email is populated from the supplied CV (`djsathwara540@gmail.com`). Verify it before launch.
- `github`: replace the generic GitHub URL with your GitHub profile URL.
- `linkedin`: verify your LinkedIn profile URL.

The supplied latest CV is included at `public/Dixitkumar-Sathwara-Resume.pdf` and linked from the hero.

Role dates, skills, achievements and project metrics have been updated from the latest supplied CV. Review all content and confidentiality before publishing.

Agentic AI workflows and tool calling are included because they appear in the supplied CV; ensure claims remain accurate to your hands-on experience.

## Deploy to Netlify

### Option A — GitHub continuous deployment (recommended)

1. Create a GitHub repository, for example `dixitkumar-portfolio`.
2. Push this project to the repository.
3. Sign in at https://app.netlify.com/ and choose **Add new site → Import an existing project**.
4. Connect GitHub and select the repository.
5. Netlify reads `netlify.toml`. Confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Select **Deploy**. Netlify will provide a free `*.netlify.app` URL.
7. Future pushes to the connected branch trigger new deployments.

### Option B — Netlify CLI

```bash
npm install
npm run build
npx netlify deploy --prod --dir=dist
```

Follow the CLI prompts to log in and create/link the Netlify site.

## Notes

- No backend or environment variables are required.
- The contact email button copies the configured email address. Update the placeholder before launch.
- This is a single-page portfolio with responsive navigation and Netlify SPA fallback configuration.
