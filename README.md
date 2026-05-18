# 🔍 Local Service Finder - Complete Project

A beautiful, responsive website to find local services (Electricians, Plumbers, Tutors, etc.) with ratings, reviews, and direct contact options.

---

## 📁 Project Structure

```
LocalServiceFinder/
├── index.html      (Main website)
├── style.css       (Beautiful styling)
├── script.js       (Functionality & Logic)
└── README.md       (This file)
```

---

## 🚀 Quick Start

### Step 1: Open in VS Code

```bash
# Navigate to the project folder
cd LocalServiceFinder

# Open in VS Code
code .
```

### Step 2: Install Live Server Extension (Optional but Recommended)

In VS Code:
- Go to Extensions (Ctrl + Shift + X)
- Search for "Live Server"
- Click Install
- Right-click on `index.html` → "Open with Live Server"

### Step 3: Run the Website

**Option A: Using Live Server (Recommended)**
- Right-click `index.html` → "Open with Live Server"
- Website opens in browser automatically

**Option B: Direct Open**
- Double-click `index.html` to open in your default browser

**Option C: Using Python (if you have it)**
```bash
python -m http.server 8000
# Then open http://localhost:8000 in browser
```

**Option D: Using Node.js http-server**
```bash
npm install -g http-server
http-server
# Then open http://localhost:8080 in browser
```

---

## ✨ Features

✅ **Search Functionality** - Find services by name or category
✅ **Location Filter** - Filter by city/location
✅ **Category Filter** - Browse specific service types
✅ **Ratings & Reviews** - See ratings from other customers
✅ **Direct Contact** - Call or email service providers
✅ **Responsive Design** - Works on desktop, tablet, mobile
✅ **Beautiful UI** - Inspired by JustDial & Google
✅ **Fast & Smooth** - No dependencies, pure HTML/CSS/JS

---

## 🎯 How to Use

1. **Search** - Type in the search box to find services
2. **Filter by Location** - Select a location from dropdown
3. **Filter by Category** - Use category buttons or dropdown
4. **View Details** - See provider info, rating, experience
5. **Contact** - Click "Call Now" or "Email" button

---

## 📊 Sample Data

The website includes 10 sample service providers across:
- ⚡ **Electricians** - Ravi Sharma, Deepak Patel
- 🔧 **Plumbers** - Suresh Kumar, Ashok Nair
- 📚 **Tutors** - Anita Sharma, Priya Verma
- 🪵 **Carpenters** - Ramesh Reddy, Rohit Verma
- 🔩 **Mechanics** - Vikram Singh, Anil Kumar

---

## 🔧 How to Add More Services

Edit `script.js` and add to the `services` array:

```javascript
{
    id: 11,
    name: "Your Service Provider Name",
    category: "electrician", // or plumber, tutor, carpenter, mechanic
    phone: "9876543210",
    email: "provider@email.com",
    rating: 4.8,
    reviews: 45,
    location: "Davangere", // or Bangalore, Mysore, Kolar
    experience: "10 years",
    description: "Your description here",
    image: "⚡" // Use emoji
}
```

---

## 🎨 Customization

### Change Colors

Edit in `style.css`:
```css
:root {
    --primary: #1e88e5;        /* Main blue color */
    --accent: #ff6b6b;         /* Red accent */
    --dark: #2c3e50;           /* Dark text */
}
```

### Change Company Name

Edit in `index.html`:
```html
<span>Your Company Name</span>
```

### Add More Locations

Edit in `index.html` → locationFilter `<select>`:
```html
<option value="YourCity">YourCity</option>
```

---

## ⚠️ IMPORTANT - DON'T AFFECT OTHER PROJECTS

✅ **Separate Folder** - This project is in `LocalServiceFinder/` folder only
✅ **No Dependencies** - Uses pure HTML/CSS/JavaScript (no npm needed)
✅ **Isolated** - Doesn't affect any other websites you created
✅ **Safe to Delete** - Just delete this folder if needed

---

## 🚀 Advanced Features (Optional Later)

You can upgrade this to:

### Add Database (MongoDB/Firebase)
```javascript
// Instead of local 'services' array, fetch from database
fetch('https://your-api.com/services')
  .then(res => res.json())
  .then(data => displayServices(data))
```

### Add Google Maps
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY"></script>
```

### Add User Accounts
- Firebase Authentication
- User registration/login
- Save favorites

### Add Admin Panel
- Add/Edit/Delete services
- View customer messages
- Update ratings

### Add Mobile App
- React Native
- Flutter
- iOS/Android apps

---

## 📱 Browser Support

✅ Chrome/Edge
✅ Firefox
✅ Safari
✅ Mobile browsers

---

## 🤝 Support

If you face any issues:

1. **Blank page?** - Check browser console (F12)
2. **Style not loading?** - Refresh page (Ctrl + F5)
3. **Live Server issue?** - Reinstall extension
4. **Want to add feature?** - Edit `script.js`

---

## 📝 License

Free to use for personal & educational projects

---

## ✍️ Notes

- All data is hardcoded (for demo purposes)
- No backend/database needed to run
- Phone numbers & emails in alert (you can modify)
- Perfect for school/college projects

---

**Made with ❤️ | 2026**
