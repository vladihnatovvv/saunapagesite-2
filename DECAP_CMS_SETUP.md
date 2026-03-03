# Decap CMS Integration Guide

## Overview

This site now uses **Decap CMS** (formerly Netlify CMS) to manage all editable content including:
- Page titles and text
- Images and galleries
- Pricing and service information
- Contact details and social links

## File Structure

```
/
├── admin/
│   ├── config.yml          # Decap CMS configuration
│   └── index.html          # CMS interface
├── _content/               # All managed content (Git-tracked)
│   ├── homepage.yml        # Homepage content
│   ├── contacts.yml        # Contact information
│   └── saunas/
│       ├── fishbanua.yml
│       ├── luxbanua.yml
│       ├── banua1.yml
│       └── bathhousevip.yml
├── images/                 # Images (managed via CMS)
└── js/
    └── content-loader.js   # Loads YAML files into pages
```

## Setup Instructions

### 1. Enable Git Gateway (Required)

Decap CMS needs Git backend to save changes. Follow these steps:

**Option A: GitHub**
1. Push repository to GitHub
2. Go to https://app.netlify.com
3. Connect your GitHub repo
4. Enable "Git Gateway" in Netlify settings
5. CMS will be available at: `yoursite.com/admin`

**Option B: GitLab**
1. Push repository to GitLab
2. Use GitLab OAuth for authentication
3. Configure in `admin/config.yml`:
```yaml
backend:
  name: gitlab
  repo: your-username/repo-name
```

**Option C: Gitea (Self-hosted)**
```yaml
backend:
  name: gitea
  api_root: https://your-gitea-instance/api/v1
  repo: your-username/repo-name
```

### 2. Add to Your HTML

Include the content loader script in your pages:

```html
<script src="/js/content-loader.js"></script>
```

Add data attributes to elements that need updating:

```html
<!-- Contact phone -->
<div data-contact="phone">+49 170 80 98 695</div>

<!-- Contact email -->
<a href="mailto:info@vip-ru.de" data-contact="email">info@vip-ru.de</a>

<!-- Social links -->
<a href="https://t.me/viprusauna" data-social="telegram">Telegram</a>
<a href="https://www.instagram.com/viprusauna/" data-social="instagram">Instagram</a>
<a href="https://wa.me/491708098695" data-social="whatsapp">WhatsApp</a>
```

### 3. Update HTML for Dynamic Content

Replace hardcoded content with data attributes:

**For Page Titles & Text:**
```html
<!-- Before -->
<h1>Пар, возвращающий силы</h1>

<!-- After -->
<h1 data-editable="heroTitle">Пар, возвращающий силы</h1>
```

**For Images:**
```html
<!-- Before -->
<img src="images/saunavip1.jpg" alt="VIP-RU Sauna">

<!-- After -->
<img src="images/saunavip1.jpg" alt="VIP-RU Sauna" data-cms-image="sauna-photo">
```

## Managing Content

### Access the CMS

1. Deploy your site to Netlify (or any supported host)
2. Navigate to: `https://yourdomain.com/admin`
3. Login with your Git provider (GitHub/GitLab/etc.)
4. Start editing!

### Content Collections

#### Pages
- Edit main page titles and descriptions
- Metadata and SEO information

#### Saunas
- Sauna name and description
- Featured images and gallery
- Video URLs
- Pricing

#### Services
- Add/edit services (massages, banya services, etc.)
- Set prices
- Categorize services

#### Site Content
- Global homepage content
- Contact information
- Operating hours
- Social media links

## YAML Content Format

### Sauna Example
```yaml
title: "Fisherman's Sauna"
slug: "fishbanua"
mainTitle: "Рыбацкая баня"
descriptionLabel: "Про баню"
description: "Рыбацкая баня - запах дерева, мягкий пар..."
image: "images/saunavip1.jpg"
gallery:
  - image: "images/2026-02-06 15.29.18.jpg"
  - image: "images/saunavip2.jpg"
videoUrl: "images/video.mp4"
price: 25.00
```

### Service Example
```yaml
title: "Банщик (заход)"
description: "Professional banya attendant service"
price: 12.50
category: "banshchik"
```

## Adding New Saunas

1. In Decap CMS, go to **Saunas** collection
2. Click **New**
3. Fill in:
   - Sauna Name (e.g., "Fisherman's Sauna")
   - URL Slug (e.g., "fishbanua") - must be unique
   - Main Title (H1 on page)
   - Description
   - Upload featured image
   - Add gallery images
   - Upload/link video
   - Set price
4. Save and publish

A new YAML file is created in `_content/saunas/`

## Adding New Services

1. Go to **Services** collection
2. Click **New**
3. Fill in service details
4. Select category: banshchik, veniki, massage, or other
5. Set price in euros
6. Save and publish

## Editing Images

### Upload Images
1. In any collection, click image field
2. Click **Upload** button
3. Select image from computer
4. Decap CMS auto-resizes and optimizes

### Image Management
- All images go to `/images` folder
- Images are Git-tracked with content
- Use Decap's built-in image editor for cropping

## Workflow

### Making Changes
```
1. Edit content in Decap CMS admin panel
2. Click "Save" (saves to Git as draft)
3. Click "Publish" (commits to main branch)
4. Changes auto-deployed if using Netlify
```

### Rolling Back
Since all content is in Git:
```bash
git log --oneline _content/
git revert <commit-hash>
git push
```

## Technical Notes

### Content Loader (content-loader.js)

The `content-loader.js` script:
- Fetches YAML files from `_content/` folder
- Parses simple YAML format
- Updates DOM elements with data
- Caches loaded content

**How it works:**
```javascript
const loader = new ContentLoader();

// Load and update element
await loader.updateContent(
  '.my-selector',           // CSS selector
  'heroTitle',              // YAML key
  '_content/homepage.yml'   // YAML file
);
```

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires fetch API and ES6 support
- IE11 not supported (but not needed for admin)

## Troubleshooting

### CMS Won't Load
- Ensure Git Gateway is enabled
- Check admin/config.yml backend settings
- Verify authentication with Git provider

### Content Not Updating
- Clear browser cache
- Check console for JavaScript errors
- Verify YAML file syntax
- Ensure CSS selectors match actual HTML

### Images Not Showing
- Check image paths (must be relative: `/images/file.jpg`)
- Verify images uploaded to correct folder
- Check file permissions

## Security

- Decap CMS requires Git authentication
- Only authorized users can edit content
- All changes tracked in Git history
- Easy audit trail of who changed what

## Next Steps

1. **Deploy to Netlify:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

2. **Enable Git Gateway** in Netlify settings

3. **Share admin URL** with team: `https://yourdomain.com/admin`

4. **Create content structure** (if not done):
   - Add sauna pages
   - Add service listings
   - Update contact info

5. **Train team** on CMS usage

## Support

- Decap CMS Docs: https://decapcms.org/docs/intro/
- GitHub Issues: https://github.com/decaporg/decap-cms/issues
- Community: https://discord.gg/GRy2qQde

---

Questions? Check the configuration and file structure above. All content is Git-backed and versioned!
