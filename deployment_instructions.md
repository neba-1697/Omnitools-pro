# Deployment Instructions for YegaraHost

YegaraHost uses standard cPanel/Apache hosting. Since this is a React Single Page Application (SPA), it needs to be built into static files before uploading.

## 1. Build the Project
Run the following command in your terminal to create the production build:
```bash
npm run build
```
This will create a `dist` (or `build`) folder containing `index.html`, CSS, and JS files.

## 2. Prepare for Upload
1. Locate the `dist` folder created in step 1.
2. Zip the **contents** of the `dist` folder (select all files inside `dist` -> Right Click -> Compress/Zip). Name it `site.zip`.

## 3. Upload to YegaraHost
1. Login to your YegaraHost cPanel.
2. Go to **File Manager**.
3. Navigate to `public_html` (or the subdomain folder where you want the tool site).
4. Click **Upload** and select `site.zip`.
5. Once uploaded, right-click `site.zip` and select **Extract**.
6. Ensure `index.html` is in the root of `public_html`.

## 4. API Key Configuration (Crucial for AI Tools)
The AI Text Summarizer uses the Gemini API. 
1. Get a key from Google AI Studio.
2. Since this is a client-side app on shared hosting, you must bake the key into the build OR use a proxy. 
   * **Quickest Method:** Open `services/geminiService.ts` before building and replace `process.env.API_KEY` with your actual key string (Note: This exposes the key in client code. For strict security, you would need a small PHP proxy script, but for this passive income setup, you can set strict referrer restrictions in Google Cloud Console to only allow your domain).

## 5. SEO & AdSense
1. **AdSense:** Open `components/AdUnit.tsx` and uncomment the script tags. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your AdSense Publisher ID.
2. **Sitemap:** Generate a `sitemap.xml` listing your root URL and all `/tool/[id]` URLs and upload it to `public_html`.

## 6. Troubleshooting
* **White Screen?** Ensure you are using `HashRouter` in `App.tsx` (already configured). This ensures routing works without server-side rewrites on Apache.
