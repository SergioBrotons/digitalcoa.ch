# GA4 Service Account Setup Guide

## Prerequisites
- Google Analytics 4 property configured
- Google Cloud console access (cloud.google.com)

---

## Step 1: Create Service Account

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click **Create Credentials** → **Service Account**
3. Fill in:
   - Name: `digitalcoa-ga4-reader`
   - Description: `Read GA4 data for DigitalCoa.ch`
4. Click **Done**

## Step 2: Create JSON Key

1. Find your new service account in the list
2. Click **Keys** tab → **Add Key** → **Create new key**
3. Select **JSON**
4. Save the file (you'll send this to me later)

---

## Step 3: Grant GA4 Access

1. Go to: https://analytics.google.com/
2. Open your GA4 property → **Admin** → **Property Access Management**
3. Click **+** to add user
4. Enter the service account email:
   ```
   digitalcoa-ga4-reader@YOUR-PROJECT-ID.iam.gserviceaccount.com
   ```
5. Role: **Viewer** (or Analyst)
6. Click **Add**

---

## Step 4: Enable GA4 Data API

1. Go to: https://console.cloud.google.com/apis/library
2. Search: **Google Analytics Data API**
3. Click **Enable**

---

## Step 5: Share Credentials

After creating the JSON key file, send it to me:
- Path: I'll store it in `research/private/`
- **Never publish to GitHub** (add to .gitignore first)

---

## What's Next
Once I have the JSON credentials, I can query:
- Daily visitors
- Top pages
- Conversions
- Custom events
