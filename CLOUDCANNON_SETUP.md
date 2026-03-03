# CloudCannon Setup Guide

## Overview
Your site is now configured for CloudCannon CMS. All text content, headings, images, videos, and links with the `editable` class can be edited directly in the CloudCannon visual editor.

## What's Been Added

### 1. **Editable Class Tags**
All the following elements have been marked with the `editable` class:
- `<h1>` to `<h6>` - All headings
- `<p>` - Paragraphs
- `<a>` - Links
- `<img>` - Images
- `<video>` - Videos

This allows CloudCannon to identify which elements can be edited in the visual editor.

### 2. **Configuration File**
- **cloudcannon.config.yml** - Main configuration file that tells CloudCannon how to handle your site

### 3. **Editable Regions Defined**
The configuration includes settings for:
- Text formatting (bold, italic, underline, links, strikethrough)
- Heading levels (h1-h6)
- Image and video handling
- Link management

## Setup Steps

### Step 1: Push to Git Repository
First, ensure your site is in a Git repository (GitHub, GitLab, Bitbucket):

```bash
git init
git add .
git commit -m "Add CloudCannon configuration and editable classes"
git push origin main
```

### Step 2: Create CloudCannon Account
1. Go to [CloudCannon](https://cloudcannon.com)
2. Sign up or log in to your account
3. Click "Create Site" or "Connect a Site"

### Step 3: Connect Your Repository
1. Select your Git provider (GitHub, GitLab, or Bitbucket)
2. Authorize CloudCannon to access your repository
3. Select the `SaunaPageSite-main` repository
4. CloudCannon will automatically detect the `cloudcannon.config.yml` file

### Step 4: Start Editing
1. Open CloudCannon's visual editor
2. Navigate to any page (index.html, sauna1.html, etc.)
3. Click on any element with the `editable` class
4. Edit the content directly in the editor
5. Changes are automatically committed to your Git repository

## What Content Can Be Edited

### Directly Editable:
- ✅ All headings (Банях, Вип-баня, etc.)
- ✅ All paragraph text
- ✅ All links and URLs
- ✅ All images (upload new ones, change src)
- ✅ Video embeds

### Examples of Editable Content:
1. **On index.html:**
   - "Пар, возвращающий силы" (main heading)
   - "О банях и других пространствах" (section heading)
   - All description paragraphs
   - All images in galleries
   - All navigation links

2. **On product pages (sauna1.html, hamam.html, etc.):**
   - Page titles
   - Product descriptions
   - Pricing information (in `<p>` tags)
   - Product images
   - Service descriptions

## Formatting Options

When editing text in CloudCannon, you can:
- **Bold text**: `**text**` or select and click Bold
- **Italic text**: `*text*` or select and click Italic
- **Add links**: Select text → Click Link → Enter URL
- **Strikethrough**: Use the strikethrough button
- **Change heading levels**: Use the format dropdown

## Image Management

1. Click on any `<img>` element with `editable` class
2. In the editor panel, click "Upload Image"
3. Choose a new image from your computer
4. CloudCannon will optimize and upload it
5. The image URL is automatically updated in the HTML

## CloudCannon Features You Get

### Visual Editing
- WYSIWYG editor for all content
- Real-time preview of changes
- No need to know HTML or CSS

### Content Management
- Version history and rollback
- Multiple user support (team collaboration)
- Publishing workflows (draft → review → publish)

### Git Integration
- All changes committed automatically
- Easy rollback if needed
- Consistent with your development workflow

### Team Collaboration
- Invite team members
- Different permission levels
- Activity tracking

## Advanced Features

### Conditional Editing
If you want to restrict editing to certain users:
1. Go to CloudCannon settings
2. Set up team members and permissions
3. Create publishing workflows

### Custom Configuration
To customize further, edit `cloudcannon.config.yml`:
- Add new collections
- Modify editor settings
- Configure publishing pipelines
- Set up environment-specific settings

## Troubleshooting

### Content Not Showing as Editable
- Check that the element has `class="editable"` in the HTML
- Clear your browser cache
- Refresh the CloudCannon editor

### Changes Not Committing
- Check Git repository connection
- Ensure your user has write access to the repository
- Review CloudCannon's commit settings

### Images Not Uploading
- Check file size (CloudCannon has limits)
- Ensure format is supported (JPG, PNG, GIF, WebP)
- Check folder permissions

## File Structure
```
SaunaPageSite-main/
├── cloudcannon.config.yml    # Main configuration
├── .cloudcannon/             # CloudCannon metadata
├── index.html                # Homepage (editable)
├── sauna1.html               # Sauna page (editable)
├── banua1.html               # Bath page (editable)
├── hamam.html                # Hamam page (editable)
├── food.html                 # Menu page (editable)
├── fishbanua.html            # Fish bath (editable)
├── luxbanua.html             # Luxury bath (editable)
├── bathhousevip.html         # VIP bathhouse (editable)
├── css/                      # Stylesheets
├── js/                       # JavaScript files
├── images/                   # Images
└── fonts/                    # Font files
```

## Best Practices

1. **Keep Backups**: Always keep Git history as backup
2. **Test Changes**: Review changes before publishing
3. **Content Guidelines**: Keep text concise and SEO-friendly
4. **Image Optimization**: Use optimized images for faster loading
5. **Regular Updates**: Update content regularly for better SEO

## Support

- CloudCannon Documentation: https://cloudcannon.com/documentation/
- CloudCannon Support: support@cloudcannon.com
- Git Integration Guide: https://cloudcannon.com/documentation/articles/connecting-a-git-repository/

## What's Next

1. Test the visual editor with a non-critical page
2. Invite team members to CloudCannon
3. Set up a publishing workflow if needed
4. Train content editors on how to use the editor
5. Set up automatic backups

---

**Note:** The `editable` class has been added to all text, heading, image, video, and link elements. Your site is now ready for CloudCannon CMS integration!
