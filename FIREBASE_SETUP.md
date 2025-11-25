# Firebase Authentication Setup Guide

This guide will walk you through setting up Firebase Authentication for Google login in your VerseDrop application.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or select an existing project
3. Enter a project name (e.g., "VerseDrop")
4. Click **"Continue"**
5. (Optional) Enable Google Analytics - you can skip this or enable it
6. Click **"Create project"**
7. Wait for the project to be created, then click **"Continue"**

## Step 2: Register Your Web App

1. In your Firebase project dashboard, click the **Web icon** (`</>`) to add a web app
2. Register your app:
   - **App nickname**: Enter "VerseDrop Web" (or any name you prefer)
   - **Firebase Hosting**: You can skip this for now (uncheck the box)
3. Click **"Register app"**
4. You'll see your Firebase configuration object - **COPY THIS** (you'll need it in Step 4)

## Step 3: Enable Google Authentication

1. In the Firebase Console, go to **"Authentication"** in the left sidebar
2. Click **"Get started"** (if you haven't enabled it yet)
3. Click on the **"Sign-in method"** tab
4. Click on **"Google"** from the list of providers
5. Toggle the **"Enable"** switch to ON
6. Enter your **Project support email** (this is required)
7. Click **"Save"**

## Step 4: Get Your Firebase Configuration

1. Go to **Project Settings** (click the gear icon ⚙️ next to "Project Overview")
2. Scroll down to **"Your apps"** section
3. You should see your web app listed
4. Click on the **"Config"** radio button (not "SDK setup and configuration")
5. You'll see a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 5: Add Environment Variables

1. In your project root, create a file named `.env` (if it doesn't exist)
2. Add the following variables with your Firebase config values:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

3. Replace all the values with your actual Firebase config values from Step 4
4. **Important**: Make sure `.env` is in your `.gitignore` file (it should be by default)

## Step 6: Authorized Domains

Firebase automatically allows these domains:
- `localhost` (for local development)
- Your deployed domain (if you've connected Firebase Hosting)

If you're deploying to a custom domain, you may need to add it:
1. Go to **Authentication** > **Settings** > **Authorized domains**
2. Add your custom domain if needed

## Step 7: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the login page (`/login`)
3. Click "Continue with Google"
4. You should see the Google sign-in popup
5. After signing in, you should be redirected to the home page
6. Check the header - you should see your user avatar/profile

## Troubleshooting

### Error: "Firebase: Error (auth/unauthorized-domain)"
- Make sure your domain is in the authorized domains list
- For localhost, it should work automatically

### Error: "Firebase: Error (auth/api-key-not-valid)"
- Double-check your `.env` file values
- Make sure you copied the correct values from Firebase Console
- Restart your dev server after changing `.env`

### Google Sign-in Popup Blocked
- Check your browser's popup blocker settings
- Make sure you're allowing popups for localhost

### Configuration Not Loading
- Make sure your `.env` file is in the project root (same level as `package.json`)
- Make sure variable names start with `VITE_`
- Restart your dev server after creating/modifying `.env`

## Additional Notes

- **Free Tier**: Firebase Authentication has a generous free tier (50,000 MAU - Monthly Active Users)
- **Security**: Never commit your `.env` file to version control
- **Production**: When deploying, add your environment variables to your hosting platform's environment settings

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs/auth)
- [Firebase Console](https://console.firebase.google.com/)
- Check the browser console for detailed error messages

