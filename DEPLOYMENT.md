# Deployment Guide for SpottedV1

## Quick Summary
- **Frontend**: Deploy on Vercel (automatically from GitHub)
- **Backend**: Deploy on Render or Railway
- **Database**: MongoDB Atlas (cloud hosted)

---

## STEP 1: Prepare Your Backend for Deployment

### 1.1 Create a `.env` file in the backend directory

Create `backend/.env`:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
PORT=5000
```

### 1.2 Update backend/server.js (if not already done)

Make sure your backend reads from environment variables:
```javascript
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
```

### 1.3 Add CORS for deployed frontend

Update your backend server.js to allow your Vercel domain:
```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-vercel-domain.vercel.app'
  ]
}));
```

---

## STEP 2: Deploy Backend on Render.com

### 2.1 Sign up and connect GitHub
1. Go to https://render.com
2. Sign up with GitHub
3. Authorize Render to access your GitHub

### 2.2 Create new Web Service
1. Click "New +" button
2. Select "Web Service"
3. Select your SpottedV1 repository

### 2.3 Configure the service
- **Name**: `spotted-backend`
- **Environment**: `Node`
- **Build Command**: `cd backend && npm install`
- **Start Command**: `node backend/server.js`
- **Region**: Choose closest to you

### 2.4 Add Environment Variables
In Render dashboard:
- `MONGODB_URI` = (your MongoDB connection string from MongoDB Atlas)
- `JWT_SECRET` = (any secure random string like: `your-secret-key-12345`)

### 2.5 Deploy
Click "Create Web Service" and wait for deployment (3-5 minutes)

**Save your backend URL** (looks like: `https://spotted-backend.onrender.com`)

---

## STEP 3: Deploy Frontend on Vercel

### 3.1 Push code to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin feature/sigin
```

### 3.2 Deploy on Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Select your SpottedV1 repository
4. Click "Import"

### 3.3 Configure Project
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `.` (leave default)

### 3.4 Add Environment Variables
Before deploying, click "Environment Variables" and add:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_API_URL` | `https://spotted-backend.onrender.com` |

(Replace with your actual Render backend URL)

### 3.5 Deploy
Click "Deploy" and wait for completion (2-3 minutes)

Your app is now live! 🎉

---

## STEP 4: Verify Everything Works

1. **Frontend**: Open your Vercel URL
2. **Test Signup**: Create a new account
3. **Check Backend**: Verify data is saved in MongoDB
4. **Test Signin**: Login with your credentials
5. **Test Settings**: Edit your profile and save changes

---

## STEP 5: Database Setup (If you haven't already)

### Create MongoDB Atlas account (FREE)
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (free)
3. Create a project
4. Create a cluster (M0 tier - Free)
5. Get connection string:
   - Click "Connect"
   - Copy connection string
   - Replace `<password>` with your database password
   - This is your `MONGODB_URI`

---

## TROUBLESHOOTING

### Frontend won't connect to backend
- Check `NEXT_PUBLIC_API_URL` in Vercel environment variables
- Make sure it matches your Render backend URL exactly
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Backend deployment fails
- Check `npm install` completes successfully
- Verify `MONGODB_URI` is correct
- Check `JWT_SECRET` is set
- Review build logs in Render dashboard

### MongoDB connection error
- Verify connection string is correct
- Check IP whitelist in MongoDB Atlas (should include Render IP)
- In MongoDB Atlas, go to Network Access and add "0.0.0.0/0" to allow all IPs

### CORS errors
- Make sure your backend CORS is configured for your Vercel domain
- Backend server.js should include Vercel URL in cors origin

---

## Update Future Deployments

### To update backend:
```bash
git add backend/
git commit -m "Backend updates"
git push origin feature/sigin
# Render auto-deploys on git push
```

### To update frontend:
```bash
git add src/
git commit -m "Frontend updates"
git push origin feature/sigin
# Vercel auto-deploys on git push
```

---

## Environment Variables Summary

### Backend (Render) - .env file
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/spotted
JWT_SECRET=your-secret-key-here
PORT=5000
```

### Frontend (Vercel) - Dashboard Environment Variables
```
NEXT_PUBLIC_API_URL=https://spotted-backend.onrender.com
```

---

## Useful Links
- Render: https://render.com
- Vercel: https://vercel.com
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Node.js Docs: https://nodejs.org/docs
- Next.js Docs: https://nextjs.org/docs
