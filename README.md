# Anuradha — A Journey Through Life

A cinematic, single-page digital memory book built around 29 unique photographs of Anuradha.

The experience combines editorial storytelling, a personal scrapbook aesthetic, responsive photo collages, scroll animation, a fullscreen lightbox, a complete filterable gallery, and a final memory mosaic.

## Story concept

**Pages of Her Life**

The website intentionally avoids inventing biographical facts. Instead, it tells a universal and personal visual story through:

- Just Being Anuradha
- The Everyday Adventures
- Little Moments. Big Memories.
- The People Between the Memories
- Days Worth Remembering
- Places That Became Memories
- The Joy of Belonging
- A Thousand Versions of Her
- Things Photographs Cannot Show
- And the Story Continues…

## Photo usage

31 image files were supplied. Two pairs were exact duplicates, leaving **29 unique photographs**.

Every unique photograph is:

- mapped into the story experience,
- available in the fullscreen gallery, and
- included in the final memory mosaic.

See [`PHOTO-MAP.md`](./PHOTO-MAP.md) for the complete mapping.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Features

- Cinematic opening loader
- Transparent-to-frosted navigation
- Scroll progress indicator
- Responsive hero with subtle parallax
- Multiple editorial chapter layouts
- Horizontal photo journeys
- Handcrafted collage sections
- Fullscreen memory spotlight
- Filterable masonry gallery
- Keyboard-controlled lightbox
- Previous / next controls
- Escape-to-close support
- Mobile swipe support in the lightbox
- Final 29-image memory mosaic
- Reduced-motion accessibility support
- Responsive layouts for mobile, tablet and desktop
- Hidden footer message
- GitHub Pages deployment workflow

## Folder structure

```text
anuradha-life-journey/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── audio/
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   │   ├── chapters.ts
│   │   ├── gallery.ts
│   │   └── quotes.ts
│   ├── sections/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── PHOTO-MAP.md
├── README.md
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Run locally

Install Node.js 18 or newer, then run:

```bash
npm install
npm run dev
```

Vite will print the local development URL in your terminal.

## Production build

```bash
npm run build
```

The final static site will be created in:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

## Upload to GitHub

1. Create a new empty repository on GitHub.
2. Extract this project folder.
3. Open a terminal inside the folder.
4. Run:

```bash
git init
git add .
git commit -m "Create Anuradha life journey website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Deploy with GitHub Pages

A GitHub Actions workflow is included at:

```text
.github/workflows/deploy.yml
```

After pushing the project:

1. Open your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main`, or manually run the workflow from the **Actions** tab.

The Vite project uses `base: './'`, which keeps static assets compatible with a project-style GitHub Pages URL.

## Deploy with Vercel

Import the GitHub repository into Vercel.

Use:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

No backend or environment variables are required.

## Deploy with Netlify

Import the repository into Netlify and use:

- Build command: `npm run build`
- Publish directory: `dist`

## Change a caption or story

Photo titles, captions and categories are stored in:

```text
src/data/gallery.ts
```

Chapter stories and quotes are stored in:

```text
src/data/chapters.ts
```

Edit the text and save. The UI updates from the data automatically.

## Add a new photograph

1. Add the image to:

```text
public/images/
```

2. Add a new object to the `photos` array in:

```text
src/data/gallery.ts
```

Example:

```ts
{
  id: 30,
  src: 'images/new-memory.jpg',
  title: 'A New Memory',
  caption: 'A new chapter waiting to be remembered.',
  alt: 'Describe the photograph accurately',
  category: 'Little Moments',
}
```

3. To place the image in a story chapter, add its ID to that chapter's `photoIds` array in:

```text
src/data/chapters.ts
```

## Change colours

The primary palette is configured in:

```text
tailwind.config.js
```

Current palette:

- Ivory: `#FFF9F2`
- Soft Cream: `#F7EFE5`
- Deep Burgundy: `#6B2737`
- Dusty Rose: `#D8A7B1`
- Muted Rose: `#BF8B96`
- Champagne Gold: `#C9A66B`
- Charcoal: `#2C2927`
- Soft Grey: `#77716D`
- Sage: `#A8B5A2`

## Optional soundtrack

The project intentionally ships without copyrighted music and does not autoplay sound.

A placeholder folder is provided at:

```text
public/audio/
```

You can later add a soundtrack that you own or have permission to use and connect it to a user-initiated play button.

## Content accuracy

The story copy is intentionally written without asserting unconfirmed personal details. It does not label people in photographs as specific relatives or friends, and it does not invent dates, occupations, education, achievements or locations.

---

**Anuradha — A Journey Through Life**  
*Made with memories.*
