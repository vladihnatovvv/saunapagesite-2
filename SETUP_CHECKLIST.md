# Decap CMS Setup Checklist

## Pre-Deployment Checklist

- [ ] Read [START_HERE.md](START_HERE.md)
- [ ] Read [README_DECAP.md](README_DECAP.md)
- [ ] Understand how Decap CMS works
- [ ] GitHub account created (https://github.com)
- [ ] Netlify account created (https://netlify.com)
- [ ] Domain name ready (optional - can use Netlify subdomain)

## Deployment Checklist

### Phase 1: GitHub Setup

- [ ] Initialize Git locally (if not done)
  ```bash
  git init
  git add .
  git commit -m "Initial commit with Decap CMS"
  ```

- [ ] Create repository on GitHub
  - [ ] Go to https://github.com/new
  - [ ] Name: `saunapage-site` (or similar)
  - [ ] Description: "VIP-RU Sauna Website with Decap CMS"
  - [ ] Make repository public or private (your choice)
  - [ ] Create repository

- [ ] Connect local to GitHub
  ```bash
  git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
  git branch -M main
  git push -u origin main
  ```

- [ ] Verify files pushed
  - [ ] Visit GitHub repo page
  - [ ] Check `admin/` folder exists
  - [ ] Check `_content/` folder exists
  - [ ] Check documentation files exist

### Phase 2: Netlify Deployment

- [ ] Go to https://app.netlify.com
- [ ] Click "New site from Git"
- [ ] Choose GitHub
- [ ] Authorize Netlify to access GitHub
- [ ] Select your repository
- [ ] Keep default settings
- [ ] Click "Deploy site"
- [ ] Wait for build to complete (1-2 minutes)
- [ ] Get Netlify site URL (e.g., https://random-name.netlify.app)

### Phase 3: Enable Git Gateway

- [ ] In Netlify dashboard, click your site
- [ ] Go to Settings
- [ ] Go to "Access control"
- [ ] Scroll to "Git Gateway"
- [ ] Click "Enable Git Gateway"
- [ ] Choose GitHub as provider
- [ ] Authorize if prompted
- [ ] Git Gateway is now enabled!

### Phase 4: First CMS Access

- [ ] Visit: `https://your-site.netlify.app/admin`
- [ ] You should see Decap CMS login screen
- [ ] Click "Login with GitHub"
- [ ] Authorize Decap CMS
- [ ] You should see the content editor!

## First Content Edits

### Test Edit 1: Change Contact Phone

- [ ] Login to CMS
- [ ] Click "Site Content"
- [ ] Click "Contact Info"
- [ ] Change phone number to something test-like (e.g., "+49 999 123 4567")
- [ ] Click "Save"
- [ ] Click "Publish"
- [ ] Go to main website
- [ ] Verify phone number changed in multiple places (header, footer, etc.)
- [ ] Revert phone number back
- [ ] Publish again

### Test Edit 2: Update Homepage Title

- [ ] CMS → Site Content → Homepage
- [ ] Change "Hero Title" field
- [ ] Publish
- [ ] Refresh website
- [ ] Verify title changed
- [ ] Revert change
- [ ] Publish again

### Test Edit 3: Edit Sauna Description

- [ ] CMS → Saunas → Fisherman's Sauna
- [ ] Edit description text
- [ ] Publish
- [ ] Check fishbanua.html page
- [ ] Verify description updated
- [ ] Revert
- [ ] Publish again

## Setup Custom Domain (Optional)

- [ ] Go to Netlify site settings
- [ ] Click "Domain management"
- [ ] Add custom domain
- [ ] Update DNS at your domain registrar:
  - [ ] Add CNAME record pointing to Netlify
- [ ] Wait for DNS to propagate (up to 48 hours)
- [ ] Verify custom domain works
- [ ] Set primary domain
- [ ] Enable HTTPS (automatic)

## Post-Deployment Tasks

### Content Creation

- [ ] Add Luxury Bath (Lux баня) sauna
- [ ] Add Wood-Burning Bath (Баня на дровах) sauna
- [ ] Add VIP Bath (Vip-Баня) sauna
- [ ] Upload all images for saunas
- [ ] Set all pricing
- [ ] Add video links

### Services Setup

- [ ] Create "Banshchik (заход)" service - 12.50€
- [ ] Create "Birch Broom" service - 9.00€
- [ ] Create "Oak Broom" service - 10.00€
- [ ] Add any massage services
- [ ] Set categories for all

### Contact Information

- [ ] Verify phone number: +49 170 80 98 695
- [ ] Verify email: info@vip-ru.de
- [ ] Verify address: Westricherstr 62, 44388 Dortmund
- [ ] Verify Telegram link
- [ ] Verify Instagram link
- [ ] Verify WhatsApp link
- [ ] Check all hours of operation

### Pages to Check

- [ ] index.html - Homepage
- [ ] fishbanua.html - Fisherman's Bath
- [ ] luxbanua.html - Luxury Bath
- [ ] banua1.html - Wood-Burning Bath
- [ ] bathhousevip.html - VIP Bath
- [ ] hamam.html - Hamam (if using)
- [ ] food.html - Menu (if using)
- [ ] sauna1.html - Massage (if using)

## Team Onboarding

- [ ] Share [DECAP_CMS_QUICK_START.md](DECAP_CMS_QUICK_START.md) with team
- [ ] Give everyone CMS URL: `https://yourdomain.com/admin`
- [ ] Show each person how to login
- [ ] Have them make a test edit
- [ ] Answer their questions
- [ ] Create team documentation (internal)

## Quality Assurance

### Functionality Tests

- [ ] CMS loads without errors
- [ ] Can login with GitHub
- [ ] Can view all collections
- [ ] Can create new content
- [ ] Can edit existing content
- [ ] Can upload images
- [ ] Can publish changes
- [ ] Changes appear on website
- [ ] Changes appear within 1 minute

### Content Tests

- [ ] All images load correctly
- [ ] All prices display correctly
- [ ] All text renders properly
- [ ] Links work (social media, etc.)
- [ ] Contact info is correct
- [ ] Hours of operation are correct
- [ ] No broken references

### Performance Tests

- [ ] Website loads quickly
- [ ] Images load in reasonable time
- [ ] No console errors in browser
- [ ] Mobile responsive still works
- [ ] Calculator still works (if applicable)
- [ ] All pages accessible
- [ ] Menu navigation works

## Monitoring Setup

- [ ] Set up Netlify email notifications
  - [ ] Go to Netlify site settings
  - [ ] Enable build notifications
  - [ ] Test notification by making a change

- [ ] Check Netlify Analytics (optional)
  - [ ] Enable in Netlify settings
  - [ ] View basic site stats

- [ ] Monitor GitHub commits
  - [ ] Add team members to repo
  - [ ] Set branch protection (optional)
  - [ ] Review pull requests before merge

## Documentation Setup

- [ ] Bookmark CMS URL in browser
- [ ] Save all documentation files locally
- [ ] Add documentation to team wiki/Confluence (if applicable)
- [ ] Create internal procedures document
- [ ] Document custom configurations
- [ ] Create FAQ for team

## Final Steps

- [ ] Test full workflow once more
  - [ ] Make edit in CMS
  - [ ] Publish
  - [ ] Verify on website
  - [ ] Check Git commit
  - [ ] Revert if needed

- [ ] Get team sign-off
  - [ ] Team tested CMS
  - [ ] Team can edit content
  - [ ] Team understands process

- [ ] Go live!
  - [ ] Announce to users
  - [ ] Share CMS URL with stakeholders
  - [ ] Provide documentation

## Ongoing Maintenance

- [ ] Weekly content reviews
- [ ] Monthly backup verification (Git history)
- [ ] Check error logs monthly
- [ ] Update content as needed
- [ ] Monitor website performance
- [ ] Keep team trained on new features

## Rollback Plan

If something breaks:

1. **Quick Rollback:**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```
   Netlify rebuilds automatically

2. **If CMS Won't Load:**
   - Disable Git Gateway in Netlify
   - Check admin/config.yml syntax
   - Check Netlify build logs

3. **If Content Is Lost:**
   - Check Git history (nothing is ever deleted)
   - Revert to previous commit
   - Check backup (GitHub is your backup)

## Success Criteria

✅ **Setup is complete when:**
- [ ] CMS is accessible at yourdomain.com/admin
- [ ] Team can login
- [ ] Team can edit content
- [ ] Changes appear on website within 1 minute
- [ ] All content is migrated from old system
- [ ] Team is trained
- [ ] Documentation is shared
- [ ] Monitoring is in place
- [ ] Team is confident using CMS

## Troubleshooting Reference

### Problem: CMS won't load
**Solution:** Check Git Gateway enabled in Netlify → Settings → Access control

### Problem: Can't login
**Solution:** Clear cache, try private window, verify GitHub account authorized

### Problem: Changes don't save
**Solution:** Check write permissions, verify Git Gateway token valid

### Problem: Changes don't appear on website
**Solution:** Make sure to click "Publish" (not just "Save"), wait 30 sec, refresh

### Problem: Images broken
**Solution:** Check image path is `/images/filename`, verify upload successful

### Problem: Netlify build fails
**Solution:** Check Netlify build logs, verify admin/config.yml syntax

## Timeline Example

**Week 1:**
- Mon: Setup GitHub repo
- Tue: Deploy to Netlify
- Wed: Enable Git Gateway
- Thu: Test CMS thoroughly
- Fri: Team training

**Week 2:**
- Mon-Fri: Migrate content to CMS
- Add all saunas
- Add all services
- Update all pricing

**Week 3:**
- Mon: Final QA
- Tue: Team sign-off
- Wed: Go live announcement
- Thu-Fri: Monitor

**Ongoing:**
- Daily: Monitor website
- Weekly: Review content
- Monthly: Check backups

---

**Status:** [ ] Not Started [ ] In Progress [ ] Complete

**Started on:** ___________
**Completed on:** ___________
**Deployed by:** ___________
**Reviewed by:** ___________

---

**Questions?** Check the documentation files or ask your developer!
