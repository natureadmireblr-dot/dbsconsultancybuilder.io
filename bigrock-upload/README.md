# DBS Global Website - Static HTML Files for BigRock Hosting

## ✅ What's Included

This folder contains a complete, ready-to-upload website for DBS Global Technology & Consultancy Services. All files are **static HTML** and require no build process or server-side dependencies.

### Files & Structure:
```
bigrock-upload/
├── index-home.html          (Home/Landing page)
├── page-about.html          (About Us)
├── page-services.html       (Services)
├── page-portfolio.html      (Portfolio - 9 products)
├── page-careers.html        (Careers - We're Hiring - 17 job positions)
├── page-contact.html        (Contact Form)
└── README.md                (This file)
```

## 🚀 How to Upload to BigRock Hosting

### Step 1: Download All Files
Download all HTML files from the `bigrock-upload` folder to your computer.

### Step 2: Login to BigRock
1. Go to your BigRock control panel
2. Login with your credentials
3. Click on **File Manager**

### Step 3: Navigate to Public HTML Folder
1. Click on your domain name
2. Open the **public_html** folder (or your domain root folder)
3. You should see an empty folder or existing files

### Step 4: Upload Files
1. Click **Upload** button
2. Select all 6 HTML files at once:
   - index-home.html
   - page-about.html
   - page-services.html
   - page-portfolio.html
   - page-careers.html
   - page-contact.html
3. Click **Upload** and wait for completion

### Step 5: Rename Home Page (Important!)
For the site to work properly on BigRock:
1. Right-click on **index-home.html**
2. Select **Rename**
3. Rename it to **index.html**
4. This makes it the default home page

### Step 6: (Optional) Create .htaccess File for Better Routing
If you want cleaner URLs without .html extensions:

1. Create a new file in File Manager
2. Name it: `.htaccess`
3. Add this content:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
4. Save and upload

## 📋 Page Details

### Home Page (index.html)
- Introduction to DBS Global
- Company section with links to About, Careers, Contact
- Call-to-action buttons
- Footer with navigation

### About Page (page-about.html)
- Company story and mission
- Core values section
- Contact information

### Services Page (page-services.html)
- 4 main service offerings:
  - Digital Business & ESG
  - IT & Cloud Solutions
  - Adventure & Eco-Tourism
  - Wellness Tourism

### Portfolio Page (page-portfolio.html)
- 6 featured products:
  1. eSmart Cart Vendors Platform
  2. Digital Adventure Pass
  3. Nature Admire Super App
  4. Live Life Well (Wellness Marketplace)
  5. Astro Care (Astrology Services)
  6. Mompreneurs Network

### Careers Page (page-careers.html) - **MAIN PAGE**
Complete job listings with:
- **HR & People Operations** (1 position)
- **IT Positions** (3 featured positions):
  - Full Stack Developer
  - Prompt Engineer
  - AWS / Cloud Engineer
- **Business Positions** (2 featured positions):
  - Sales Executive (IT)
  - Digital Marketing Consultant

Each job has expandable details including:
- Key responsibilities
- Required skills
- Experience level
- Apply button linking to contact

**Contact Information:**
- Email: `hr@dbsglobaltech.com`
- Phone: 8618751811 / 9108219929
- Website: www.dbsglobaltech.com

### Contact Page (page-contact.html)
- Contact form
- Email addresses
- Phone numbers
- Location information

## 🎨 Features

✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **No JavaScript Dependencies** - Pure HTML with Tailwind CSS (CDN)
✅ **Fast Loading** - All styling from CDN, no build needed
✅ **Professional Design** - Modern, clean, business-oriented
✅ **Easy to Edit** - Simple HTML, easy to update
✅ **SEO Friendly** - Proper HTML structure and meta tags

## ✏️ How to Edit Content

All files are plain HTML. To edit any page:

1. Open the .html file in any text editor (Notepad++, VS Code, etc.)
2. Find the text you want to change
3. Edit it
4. Save the file
5. Upload the updated file to BigRock using File Manager

### Common Things to Edit:
- **Company name**: Search for "DBS Global" and replace
- **Email addresses**: Search for "hr@dbsglobaltech.com" and replace
- **Phone numbers**: Search for the phone number and replace
- **Website URL**: Search for "www.dbsglobaltech.com" and replace

## 🔗 Page Links & Navigation

All internal links use the format: `page-[name].html`

- Home → `index.html`
- About → `page-about.html`
- Services → `page-services.html`
- Portfolio → `page-portfolio.html`
- Careers → `page-careers.html`
- Contact → `page-contact.html`

These links are hardcoded in each page's navigation menu. If you rename any file, you must update all links pointing to it.

## 🐛 Troubleshooting

### Pages not loading?
1. Make sure all files are uploaded to the correct folder
2. Check file names - they are case-sensitive
3. Make sure index.html (renamed from index-home.html) exists

### Links not working?
1. Check that page names match exactly (e.g., `page-careers.html`)
2. Make sure all 6 HTML files are uploaded
3. Verify file names in links match actual file names

### Styles not loading?
1. This shouldn't happen as styles use Tailwind CDN
2. Check your internet connection
3. Clear browser cache (Ctrl+Shift+Delete)

## 📞 Support

For BigRock hosting issues:
- Contact BigRock Support
- Visit: https://www.bigrock.in/support

For website content updates:
- Edit the HTML files directly
- Upload the updated files to your BigRock File Manager

## 📄 License

This website is created for DBS Global Technology & Consultancy Services.

---

**Website Created:** March 2024
**Total Pages:** 6
**Job Listings:** 17 positions
**Portfolio Items:** 6 products

All set! Your website is ready to go live on BigRock hosting! 🚀
