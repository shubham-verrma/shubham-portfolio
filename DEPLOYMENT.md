# Quick Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/shubham-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

3. **Custom Domain (Optional)**
   - Add your domain in Vercel dashboard
   - Update `app/sitemap.ts` and `app/layout.tsx` with your domain

## 📝 Content Updates

Before deploying, update these files:

### Required Updates
- [ ] `/content/hero.json` - Update tagline, headline, subcopy
- [ ] `/content/contact.json` - Update email, social links
- [ ] `/content/about.json` - Update description and personal info
- [ ] `/content/experience.json` - Update work experience
- [ ] `/content/case-studies.json` - Update case studies
- [ ] `/content/stats.json` - Update impact numbers
- [ ] `/content/writing.json` - Update writing samples

### Optional Updates
- [ ] `/public/cv/Shubham_Verma.pdf` - Replace with actual CV
- [ ] `/app/layout.tsx` - Update metadata with your domain
- [ ] `/app/sitemap.ts` - Update domain URL

## 🔧 Environment Variables

For production, you may want to add:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=your@email.com
```

## 📊 Performance Checklist

- [ ] Test with Lighthouse (should score ≥95)
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check accessibility with screen reader
- [ ] Verify reduced-motion works

## 🎨 Customization Tips

1. **Colors**: Edit `tailwind.config.ts` color palette
2. **Fonts**: Update font imports in `app/layout.tsx`
3. **Animations**: Modify motion variants in components
4. **Content**: All content in `/content/*.json` files

## 🚨 Common Issues

1. **Build Errors**: Check TypeScript types in `/types/index.ts`
2. **Styling Issues**: Verify Tailwind classes are correct
3. **Import Errors**: Check file paths and exports
4. **Performance**: Optimize images and animations

---

**Ready to deploy in <10 minutes!** 🎉
