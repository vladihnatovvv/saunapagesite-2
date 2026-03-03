# VIP-RU Sauna Website - Decap CMS Setup

## Quick Links

- **CMS Admin:** `https://yourdomain.com/admin` (after deployment)
- **Quick Start Guide:** [DECAP_CMS_QUICK_START.md](DECAP_CMS_QUICK_START.md)
- **Technical Setup:** [DECAP_CMS_SETUP.md](DECAP_CMS_SETUP.md)
- **Deployment Guide:** [DEPLOYMENT_STEPS.md](DEPLOYMENT_STEPS.md)
- **Full Summary:** [DECAP_CMS_SUMMARY.md](DECAP_CMS_SUMMARY.md)

## What's New?

This website now uses **Decap CMS** for content management. No more editing HTML directly!

### What You Can Edit Now
- ✅ All page titles and descriptions
- ✅ Images and photo galleries
- ✅ Sauna details and prices
- ✅ Contact information
- ✅ Service listings
- ✅ Social media links

### How to Edit
1. Go to `yourdomain.com/admin`
2. Login with GitHub
3. Edit content in the web interface
4. Click "Publish"
5. Done! Changes appear on website in 30 seconds

## File Structure

```
project-root/
├── admin/
│   ├── config.yml          # CMS configuration
│   └── index.html          # CMS interface
├── _content/               # Content files (Git-tracked)
│   ├── homepage.yml
│   ├── contacts.yml
│   └── saunas/
│       ├── fishbanua.yml
│       ├── luxbanua.yml
│       ├── banua1.yml
│       └── bathhousevip.yml
├── js/
│   └── content-loader.js   # Loads content into pages
├── images/                 # All images
├── index.html              # Updated with content-loader.js
└── [other files]
```

## Setup Requirements

1. GitHub account (free)
2. Netlify account (free)
3. Domain name (optional - can use free Netlify subdomain)

## Quick Setup (5 minutes)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add Decap CMS"
git push origin main
```

### Step 2: Connect to Netlify
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Connect your GitHub repo
4. Click "Deploy"

### Step 3: Enable Git Gateway
1. In Netlify dashboard
2. Settings → Access control → Git Gateway
3. Enable it

### Step 4: Access CMS
Visit: `https://yoursite.netlify.app/admin`

## What's Changed in the Code?

### New Files Added
- `admin/config.yml` - CMS configuration
- `admin/index.html` - CMS admin interface
- `js/content-loader.js` - Content loading script
- `_content/` folder - All content files
- Documentation files (this guide + others)

### Modified Files
- `index.html` - Added:
  - `<script src="/js/content-loader.js"></script>`
  - `data-contact` and `data-social` attributes

### Unchanged
- CSS, styling, layout all the same
- JavaScript functionality unchanged
- All existing features work as before
- No breaking changes

## Managing Content

### Edit Text
1. CMS → (collection) → click item
2. Edit text field
3. Publish

### Upload Images
1. Click image field
2. Click "Upload"
3. Select from computer
4. Publish

### Add New Sauna
1. CMS → Saunas → New
2. Fill in all fields
3. Upload featured image
4. Add gallery images
5. Publish

### Update Contact Info
1. CMS → Site Content → Contact Info
2. Edit all fields
3. Publish
4. Updates everywhere on site!

## File Locations

### Where Content Is Stored
All content is in YAML files inside `_content/` folder:
- `_content/homepage.yml` - Homepage content
- `_content/contacts.yml` - Contact & social info
- `_content/saunas/*.yml` - Individual sauna pages
- `_content/services/*.yml` - Individual services

### How It Works
1. You edit in CMS admin panel
2. CMS saves to YAML file
3. File is committed to Git
4. Website loads content from YAML
5. Changes appear on website

## Costs

- GitHub: FREE ✅
- Netlify: FREE ✅
- Decap CMS: FREE ✅
- Total: **$0/month** (except domain at $10-15/year)

## Support

### For Questions About...

**How to use the CMS?**
→ Read: [DECAP_CMS_QUICK_START.md](DECAP_CMS_QUICK_START.md)

**How to set it up?**
→ Read: [DEPLOYMENT_STEPS.md](DEPLOYMENT_STEPS.md)

**Technical details?**
→ Read: [DECAP_CMS_SETUP.md](DECAP_CMS_SETUP.md)

**Full overview?**
→ Read: [DECAP_CMS_SUMMARY.md](DECAP_CMS_SUMMARY.md)

## Troubleshooting

### CMS won't load
- Make sure Git Gateway is enabled
- Clear browser cache (Ctrl+Shift+Delete)
- Try private/incognito window

### Can't publish changes
- Verify you have write access to GitHub
- Check Git Gateway token is valid
- Try logout and login again

### Changes not appearing
- Click "Publish" not just "Save"
- Wait 30 seconds for deployment
- Refresh browser (Ctrl+F5)

### Images broken
- Check image paths are `/images/filename`
- Verify image file uploaded successfully
- Try different format (JPG vs PNG)

## Next Steps

1. ✅ **Review this README**
2. ✅ **Read QUICK_START guide** (for team)
3. ✅ **Deploy to GitHub** (push your code)
4. ✅ **Connect to Netlify** (setup hosting)
5. ✅ **Enable Git Gateway** (enable CMS)
6. ✅ **Test CMS** (login and edit something)
7. ✅ **Create all sauna pages** (add missing saunas)
8. ✅ **Update contact info** (verify all details)
9. ✅ **Add all services** (massages, brooms, etc.)
10. ✅ **Train team** (share QUICK_START guide)

## Key Commands

```bash
# View Git history
git log --oneline

# Revert a change
git revert <commit-hash>
git push origin main

# Check status
git status
```

## Version Info

- **Decap CMS:** v3.0.0+
- **Node:** Not required
- **Build time:** 1 minute on Netlify
- **Uptime:** 99.9% (Netlify guarantee)

## License

All documentation and code: MIT License (free to use and modify)

---

**Ready to go?** Start with [DECAP_CMS_QUICK_START.md](DECAP_CMS_QUICK_START.md)!

**Questions?** Check the other documentation files.

**Need help?** Contact your developer or see Decap CMS docs: https://decapcms.org
