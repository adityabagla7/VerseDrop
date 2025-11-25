# Deployment Checklist for VerseDrop

## ✅ Pre-Deployment Checklist

### 1. **Firebase Authorized Domains** ⚠️ CRITICAL
- [ ] Go to [Firebase Console](https://console.firebase.google.com/)
- [ ] Select your project: `versedrop-f5c3e`
- [ ] Navigate to **Authentication** → **Settings** → **Authorized domains**
- [ ] Add your production domain (e.g., `versedrop.in`, `www.versedrop.in`)
- [ ] Add any staging/test domains if needed
- [ ] **Note**: `localhost` is automatically allowed for development

### 2. **Build the Project**
```bash
npm run build
```
- This creates a `dist` folder with production-ready files
- Test locally with: `npm run preview`

### 3. **Environment Variables (Optional but Recommended)**
If you want to use different Firebase configs for production:

- [ ] Create environment variables in your hosting platform:
  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_AUTH_DOMAIN`
  - `VITE_FIREBASE_PROJECT_ID`
  - `VITE_FIREBASE_STORAGE_BUCKET`
  - `VITE_FIREBASE_MESSAGING_SENDER_ID`
  - `VITE_FIREBASE_APP_ID`
  - `VITE_FIREBASE_MEASUREMENT_ID`

**Note**: The code now supports both env vars and hardcoded values (falls back to hardcoded if env vars aren't set).

### 4. **Test Production Build Locally**
```bash
npm run build
npm run preview
```
- [ ] Test login/signup functionality
- [ ] Test Google authentication
- [ ] Verify all routes work correctly

## 🚀 Deployment Platforms

### **Option 1: Vercel** (Recommended - Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite - just click Deploy
5. Add environment variables in Vercel dashboard if needed
6. Your site will be live!

### **Option 2: Netlify**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables in Netlify dashboard if needed

### **Option 3: Firebase Hosting**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build command: `npm run build`
5. Public directory: `dist`
6. Deploy: `firebase deploy`

### **Option 4: GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## ⚠️ Common Deployment Issues

### Issue 1: "auth/unauthorized-domain"
**Solution**: Add your domain to Firebase Authorized Domains (see checklist item 1)

### Issue 2: Routes not working (404 on refresh)
**Solution**: Configure your hosting platform to redirect all routes to `index.html`:
- **Vercel**: Create `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
- **Netlify**: Create `public/_redirects`:
  ```
  /*    /index.html   200
  ```
- **Firebase**: Already handled automatically

### Issue 3: Environment Variables Not Working
**Solution**: 
- Make sure variable names start with `VITE_`
- Restart build after adding env vars
- Check hosting platform's env var documentation

### Issue 4: Analytics Not Working
**Solution**: Analytics only works in browser environment (already handled in code)

## 🔒 Security Notes

1. **Firebase API Keys are Public**: This is normal and safe for client-side apps. Firebase uses domain restrictions for security.

2. **Don't Commit Secrets**: Make sure `.env` files are in `.gitignore` (already done)

3. **Domain Restrictions**: Firebase automatically restricts API usage to authorized domains

## 📝 Post-Deployment

- [ ] Test login/signup on production domain
- [ ] Test Google authentication
- [ ] Verify all pages load correctly
- [ ] Check browser console for errors
- [ ] Test on mobile devices
- [ ] Set up custom domain (if needed)

## 🆘 Need Help?

- Check browser console for specific error messages
- Check Firebase Console for authentication logs
- Verify domain is in authorized domains list
- Test with `npm run preview` locally first

