# Decap CMS Quick Start Guide

## What is Decap CMS?

A simple, user-friendly interface to edit your website content without coding. All changes are automatically saved to your Git repository.

## Access the CMS

1. Go to: **https://yourdomain.com/admin**
2. Login with your GitHub account (or other Git provider)
3. Start editing!

## What Can You Edit?

### 1. **Homepage Content**
- Hero title and subtitle
- About section text
- Footer information

**To edit:**
1. Click **"Site Content"** → **"Homepage"**
2. Edit text fields
3. Click **"Save"** → **"Publish"**

### 2. **Contact Information**
Edit phone, email, address, and social media links globally

**To edit:**
1. Click **"Site Content"** → **"Contact Info"**
2. Update phone, email, address
3. Update social media links
4. Click **"Save"** → **"Publish"**

Changes appear everywhere these details are used on the site.

### 3. **Sauna Pages**
Edit individual sauna descriptions, images, pricing, and videos

**To edit existing sauna:**
1. Click **"Saunas"**
2. Click the sauna name (e.g., "Fisherman's Sauna")
3. Edit title, description, images, price
4. Click **"Save"** → **"Publish"**

**To add new sauna:**
1. Click **"Saunas"** → **"New"**
2. Fill in:
   - Sauna Name (display name)
   - URL Slug (unique identifier, lowercase, no spaces)
   - Main Title (H1 on page)
   - Description
   - Featured Image (upload from computer)
   - Gallery Images (upload multiple)
   - Video URL (path to video file)
   - Price (in euros)
3. Click **"Save"** → **"Publish"**

### 4. **Services**
Edit massage services, banya attendant info, and broom options

**To edit/add service:**
1. Click **"Services"**
2. Click service or click **"New"** to add
3. Enter:
   - Service Name
   - Description
   - Price (€)
   - Category (choose from: banshchik, veniki, massage, other)
4. Click **"Save"** → **"Publish"**

## Image Management

### Upload Images
1. Click any image field
2. Click **"Upload"** button
3. Select image from your computer
4. Decap CMS optimizes automatically

### Replace Images
1. Click the image field
2. Click the uploaded image thumbnail
3. Click **"Replace"** or **"Delete"**
4. Upload new image

## Making Changes - Step by Step

### Example: Change the phone number

1. **Open CMS:** Go to https://yourdomain.com/admin
2. **Navigate:** Click "Site Content" → "Contact Info"
3. **Edit:** Change the phone number field
4. **Save:** Click "Save" button (draft)
5. **Publish:** Click "Publish" button (goes live)

### Example: Add a new sauna

1. **Open CMS:** https://yourdomain.com/admin
2. **Navigate:** Click "Saunas"
3. **Create:** Click "New" button
4. **Fill in:**
   - Name: "Stone Bath"
   - Slug: "stonebath"
   - Title: "Каменная баня"
   - Description: (write description)
   - Upload image and gallery photos
   - Set price: 30.00
5. **Save:** Click "Save"
6. **Publish:** Click "Publish"

New sauna appears on site immediately!

### Example: Update hero title on homepage

1. **Open CMS:** https://yourdomain.com/admin
2. **Navigate:** "Site Content" → "Homepage"
3. **Edit:** Change "Hero Title" field
4. **Publish:** Click "Publish"

Changes appear on home page immediately!

## Save vs Publish

- **Save** = Draft (only you see it)
- **Publish** = Live (everyone sees it)

Always click **Publish** when ready to go live!

## Undo Changes

If you make a mistake:
1. Click the **"Unpublish"** button (reverts to previous version)
2. Or contact your developer to undo via Git

## Tips & Tricks

### Image Best Practices
- Use high-quality images (at least 1200px wide)
- JPG for photos, PNG for graphics
- Keep file size under 2MB for fast loading
- Decap CMS auto-optimizes, so don't worry about compression

### Text Best Practices
- Keep descriptions concise
- Use line breaks for readability
- Avoid special characters when possible
- Spell check before publishing

### SEO
- Edit page titles and descriptions
- Use descriptive image names
- Keep URLs simple and descriptive

## Common Tasks

### Change Header Phone Number
1. Site Content → Contact Info
2. Edit "Phone Number"
3. Publish

### Update Social Media Links
1. Site Content → Contact Info
2. Edit Telegram, Instagram, WhatsApp URLs
3. Publish

### Add New Service (e.g., Massage)
1. Services → New
2. Name: "Swedish Massage"
3. Description: "Professional Swedish massage..."
4. Price: 45.00
5. Category: "massage"
6. Publish

### Replace All Sauna Images
1. Saunas → Choose sauna
2. Click image field
3. Upload new image
4. Publish

## Troubleshooting

### Can't login?
- Make sure you have access to the GitHub repo
- Try logging out and back in
- Check that Git Gateway is enabled in Netlify

### Changes not showing on website?
- Click **Publish** (not just Save)
- Wait 30 seconds for deployment
- Clear browser cache (Ctrl+Shift+Delete)

### Image not uploading?
- Check file size (under 5MB)
- Try JPG instead of PNG
- Check internet connection

### Accidentally deleted content?
- Check Git history or contact developer
- All changes are version controlled

## Who to Contact

**Questions about:**
- How to use CMS → Read this guide again or ask your manager
- CMS not working → Contact your developer
- Content/copywriting → Ask your content manager
- Images/design → Ask your designer

## Resources

- **Decap CMS Docs:** https://decapcms.org/docs/
- **GitHub Help:** https://docs.github.com
- **Netlify Docs:** https://docs.netlify.com

---

**Remember:** All your changes are automatically saved to Git, so you can always revert if needed!

Enjoy editing your site! 🚀
