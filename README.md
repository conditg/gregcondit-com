# gregcondit.com

Personal blog built with Next.js 14, Tailwind CSS, and MDX.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server runs at `http://localhost:3000` (or next available port).

---

## Adding a New Blog Post

1. Create a new `.mdx` file in `content/posts/`:

```bash
content/posts/your-post-slug.mdx
```

2. Add frontmatter at the top:

```yaml
---
title: "Your Post Title"
date: "2024-01-15"
author: "Greg Condit"
excerpt: "A brief description that appears on the homepage listing."
---
```

3. Write your content in MDX (Markdown with optional React components).

4. The post will automatically appear on the homepage, sorted by date (newest first).

### Supported Markdown Features

| Feature | Syntax |
|---------|--------|
| Bold | `**text**` |
| Italic | `*text*` |
| Links | `[text](url)` |
| Images | `![alt](/images/posts/filename.png)` |
| Blockquotes | `> quote text` |
| Unordered lists | `- item` |
| Ordered lists | `1. item` |
| Horizontal rule | `---` |
| Callout box | `###### Your callout text` (H6 renders as a bordered box) |

### Special Characters

If you need to use `<>` in your content, use HTML entities:
```
&lt;&gt;  →  renders as <>
```

### Adding Images to Posts

1. Place images in `public/images/posts/`
2. Reference them in MDX:
```markdown
![](/images/posts/your-image.png)
```

Note: Empty alt text `![]()` hides the caption. Add alt text to show a caption below the image.

---

## Project Structure

```
gregcondit-com/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout (Header + Footer)
│   ├── page.tsx              # Homepage (post listing)
│   ├── about/page.tsx        # About page
│   ├── contact/page.tsx      # Contact page
│   └── posts/[slug]/page.tsx # Dynamic post pages
├── components/               # React components
│   ├── Header.tsx            # Site header with nav
│   ├── Footer.tsx            # Site footer with social links
│   ├── PostCard.tsx          # Post preview card
│   ├── Sidebar.tsx           # Profile image sidebar
│   ├── MDXComponents.tsx     # Custom MDX element styling
│   └── ObfuscatedEmail.tsx   # Spam-protected email display
├── content/
│   └── posts/                # MDX blog posts (add new posts here!)
├── lib/
│   └── posts.ts              # Post loading/parsing utilities
├── public/
│   └── images/
│       ├── pfp.png           # Profile photo
│       └── posts/            # Post images
└── styles/
    └── globals.css           # Global styles & CSS variables
```

---

## Editing Site Content

### Homepage
- Edit `app/page.tsx`
- Title and tagline are at the top of the component

### About Page
- Edit `app/about/page.tsx`
- Update the paragraphs in the prose section

### Contact Page
- Edit `app/contact/page.tsx`
- LinkedIn URL is hardcoded in the component
- Email is in `components/ObfuscatedEmail.tsx` (split into parts for spam protection)

### Profile Photo
- Replace `public/images/pfp.png` with your image
- Used on About and Contact pages

### Social Links (Footer)
- Edit `components/Footer.tsx`
- Add/remove social links in the `socialLinks` array

---

## Styling

### Color Scheme

Colors are defined in `tailwind.config.ts` and `app/globals.css`:

**Header/Footer (dark):**
- Background: `#333333`
- Logo: `#ebebeb`
- Nav links: `#969696` → `#ebebeb` on hover

**Content (light):**
- Background: `#ffffff`
- Text: `#000000`
- Muted text: `#666666`
- Borders: `#e5e5e5`

### Typography
- Font: System font stack
- Body: 18px, line-height 1.7
- H1: 42px (32px on mobile)
- H2: 28px (24px on mobile)
- Content max-width: 720px

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Next.js settings
4. Deploy!

Subsequent pushes to `main` trigger automatic deployments.

### Manual Deploy

```bash
npm run build
```

The `.vercelignore` file excludes the `archive/` folder from deployment.

---

## Development Notes

### Adding New Pages

1. Create a folder in `app/` with a `page.tsx` file
2. Add navigation link in `components/Header.tsx` if needed

### MDX Processing

Posts are processed at build time using:
- `gray-matter` - Parses YAML frontmatter
- `next-mdx-remote` - Renders MDX content

Custom element styling is in `components/MDXComponents.tsx`.

### Contact Form

The contact form UI exists but submission is a placeholder. To enable:
1. Sign up for [Formspree](https://formspree.io/) or similar
2. Update `components/ContactForm.tsx` with your form endpoint

Currently, the contact page shows LinkedIn and obfuscated email instead.

---

## Common Tasks

| Task | Command/Location |
|------|------------------|
| Add blog post | Create `content/posts/slug.mdx` |
| Add post image | Put in `public/images/posts/` |
| Update profile photo | Replace `public/images/pfp.png` |
| Edit About text | `app/about/page.tsx` |
| Change email | `components/ObfuscatedEmail.tsx` |
| Add social link | `components/Footer.tsx` |
| Change colors | `tailwind.config.ts` + `app/globals.css` |

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Content:** MDX with gray-matter
- **Deployment:** Vercel
- **Language:** TypeScript

