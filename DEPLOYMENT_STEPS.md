# Deployment Steps for Decap CMS

## What You Need

1. GitHub account (free)
2. Netlify account (free)
3. Your domain name

## Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit with Decap CMS setup"
git branch -M main

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git push -u origin main
```

## Step 2: Connect to Netlify

1. Go to https://app.netlify.com
2. Click **"New site from Git"**
3. Choose **GitHub**
4. Authorize Netlify to access your GitHub
5. Select your repository
6. Click **Deploy**

Netlify automatically deploys every time you push to GitHub!

## Step 3: Enable Git Gateway

Git Gateway allows Decap CMS to authenticate and save changes.

### For Netlify:
1. Go to your site dashboard on Netlify
2. Go to **Settings** → **Access control**
3. Scroll to **Git Gateway**
4. Click **Enable Git Gateway**
5. Set up authentication (GitHub, GitLab, Gitea)

### Generate GitHub Personal Access Token (if needed):
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click **Generate new token**
3. Name it: "Decap CMS"
4. Give it these permissions:
   - `repo` (full control of private repositories)
   - `workflow` (workflow permissions)
5. Copy the token
6. Paste in Netlify Git Gateway settings

## Step 4: Setup Custom Domain (Optional)

1. Go to Netlify site settings
2. Click **Domain management**
3. Add your custom domain
4. Update DNS records with your domain registrar

Or use Netlify's free `.netlify.app` domain temporarily.

## Step 5: Test the CMS

1. Go to: `https://yoursite.netlify.app/admin` (or your custom domain)
2. Login with GitHub
3. Try editing some content
4. Click Save → Publish
5. Check if changes appear on the website

## Step 6: Enable Branch Deploy Previews (Optional)

Allows testing changes before publishing to main:

1. **In Netlify:**
   - Settings → Build & Deploy → Deploy contexts
   - Enable "Deploy preview for pull requests"

2. **In Decap CMS:**
   - Update `admin/config.yml`:
   ```yaml
   backend:
     name: git-gateway
     branch: main

   publish_mode: editorial_workflow
   ```

3. Now when you save (without publishing), it creates a GitHub PR with preview URL

## Production Checklist

- [ ] Git Gateway is enabled
- [ ] CMS admin is accessible at `/admin`
- [ ] Can login with GitHub
- [ ] Can edit content and publish
- [ ] Changes appear on live site within 1 minute
- [ ] Images upload properly
- [ ] All contact info is correct
- [ ] Phone numbers and social links are editable
- [ ] Sauna pages are editable

## Troubleshooting Deployment

### CMS won't load
- Check if Git Gateway is enabled
- Clear browser cache
- Try in private/incognito window

### Can't publish changes
- Make sure Git Gateway is enabled
- Check GitHub personal access token is valid
- Verify user has write access to repo

### Changes don't appear on site
- Check if you clicked "Publish" (not just "Save")
- Wait 30 seconds for Netlify rebuild
- Check deployment logs in Netlify dashboard

### Images broken after upload
- Check image paths in config.yml
- Verify `public_folder` is set to `/images`
- Check that images directory exists

## Next Steps

1. **Inform your team:**
   - Share CMS URL: `https://yoursite.com/admin`
   - Share QUICK_START guide
   - Show them how to login

2. **Create content:**
   - Add all sauna pages
   - Add all services
   - Update contact information

3. **Monitor:**
   - Check Netlify dashboard for errors
   - Review published changes weekly
   - Keep GitHub history clean

## Ongoing Maintenance

### Weekly
- Review published content
- Update pricing if needed
- Add new services/offers

### Monthly
- Check error logs
- Update contact info
- Review git history for issues

### As needed
- Upload new images
- Add new saunas
- Update social media links

## Emergency Rollback

If something goes wrong:

```bash
# See recent commits
git log --oneline -10

# Revert to previous version
git revert <commit-hash>
git push origin main
```

Netlify will automatically rebuild with reverted content.

## Scaling to Production

When ready for real users:

1. **Setup SSL:** Netlify does this automatically (free)
2. **Monitor uptime:** Use Netlify Analytics or StatusPage
3. **Backup:** Git is your backup (commits are permanent)
4. **Scale:** Netlify auto-scales for free

## Support

- **Netlify Issues:** https://support.netlify.com
- **Decap CMS Issues:** https://github.com/decaporg/decap-cms/issues
- **GitHub Help:** https://help.github.com

---

**You're all set!** 🎉

Your Decap CMS is now live and ready to manage content.
