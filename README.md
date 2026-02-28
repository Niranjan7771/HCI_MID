# QuickBite - Online Food Delivery App

**HCI Mid-Semester Design Activity**

| | |
|---|---|
| **Name** | Y.Niranjan |
| **Roll No** | CS23B1076 |
| **Course** | Human-Computer Interaction (HCI) |

**Live Demo:** [https://quickbite-4h67.onrender.com](https://quickbite-4h67.onrender.com)

---

## About

QuickBite is an interactive food delivery mobile app prototype built with HTML, CSS, and JavaScript. It demonstrates the application of core HCI principles across 12 screens covering the complete food ordering journey — from onboarding to order tracking.

## Screens

| # | Screen | Description |
|---|--------|-------------|
| 1 | Splash | Brand intro with loading animation |
| 2 | Onboarding (3 slides) | Feature walkthrough — Browse, Order, Enjoy |
| 3 | Login / Sign Up | Phone OTP + Google/Apple sign-in |
| 4 | Home Dashboard | Categories, restaurants, promotions |
| 5 | Search | Filters, sort, trending, recent searches |
| 6 | Restaurant & Menu | Menu browsing, item customization, add to cart |
| 7 | Cart & Checkout | Order review, coupon, bill breakdown |
| 8 | Order Confirmation | Success screen with order details |
| 9 | Order Tracking | Live progress, map, delivery partner info |
| 10 | Order History | Past orders, reorder, rate & review |
| 11 | Profile / Account | Settings, addresses, payments |
| 12 | Help & Support | FAQ, live chat, issue reporting |

## How to Test

### Prerequisites
- A modern web browser (Chrome, Firefox, or Edge)
- No server or installation required

### Steps
**Option 1 — Live Demo (no setup):**
Visit [https://quickbite-4h67.onrender.com](https://quickbite-4h67.onrender.com)

**Option 2 — Run locally:**
1. Clone the repository:
   ```
   git clone https://github.com/Niranjan7771/HCI_MID.git
   ```
2. Open the `HCI_MID` folder
3. Double-click `index.html` to open it in your browser
4. The app starts at the Splash Screen and auto-transitions to Onboarding

### Navigation
- Use the **bottom navigation bar** to switch between Home, Search, Cart, Orders, and Profile
- Use the **navigation guide panel** on the left side for direct access to any screen
- Use **keyboard shortcuts** for quick testing:

| Key | Screen | Key | Screen |
|-----|--------|-----|--------|
| 1 | Splash | 6 | Restaurant |
| 2 | Onboarding | 7 | Cart |
| 3 | Login | 8 | Confirmation |
| 4 | Home | 9 | Tracking |
| 5 | Search | 0 | Orders |

### Testing the Order Flow
1. Complete onboarding → Login with any 10-digit number → Fill OTP
2. On Home, tap a restaurant card
3. Add items from the menu (tap "Add" or tap an item for customization)
4. Go to Cart, apply coupon `WELCOME50`, tap "Place Order"
5. View confirmation → Track order progress

## HCI Principles Applied
- 80-20 Rule (Pareto Principle)
- Shneiderman's 8 Golden Rules
- Nielsen's 10 Usability Heuristics
- Tesler's Law (Conservation of Complexity)
- Serial Position Effect
- Learnability
- Mental Models
- Closure
- Inverted Pyramid
- Flexibility and Robustness

## Tech Stack
- **HTML5** — Structure and content
- **CSS3** — Styling, animations, responsive layout
- **JavaScript** — Interactivity and navigation
- **Font**: Poppins (Google Fonts)
- **Icons**: Font Awesome 6

## Files
```
index.html        — Interactive prototype (12 screens)
styles.css        — Complete design system
app.js            — Navigation and interactivity
report.tex        — LaTeX source for HCI design report
report.pdf        — Compiled design report (with screenshots)
screenshots/      — 16 screen captures used in the report
```

## Report
The full HCI design report (`report.pdf`) includes:
- Detailed analysis of each HCI principle applied
- Screen-by-screen breakdown with screenshots
- Color palette and typography documentation
- User flow diagrams
- Testing instructions
