# 🌾 AgriConnect – Farmer Marketplace

## 📌 Project Overview

AgriConnect is a digital agriculture marketplace that connects farmers directly with buyers.

The platform allows buyers to explore agricultural products, search and filter products, add products to a shopping cart, place orders, and submit product reviews.

Farmers can register, add agricultural products, view their products, manage orders, and track sales through the farmer dashboard.

The project is developed as a front-end web application using **HTML, CSS and JavaScript**.

---

## 🎯 Problem Statement

Farmers may face difficulties in reaching buyers directly and managing their agricultural products digitally.

Buyers may also find it difficult to access agricultural products from farmers through a simple online platform.

AgriConnect provides a digital marketplace prototype that helps connect farmers and buyers through a single web application.

---

## 🎯 Objectives

- To connect farmers directly with buyers.
- To provide an online marketplace for agricultural products.
- To allow farmers to add and manage products.
- To allow buyers to search and filter agricultural products.
- To provide shopping cart functionality.
- To provide order management.
- To provide separate buyer and farmer dashboards.
- To allow buyers to give product ratings and reviews.
- To provide weather information for farming locations.
- To provide basic farming advice based on weather conditions.

---

## ✨ Features

### 🌾 Product Marketplace

AgriConnect provides agricultural products from different categories:

- Grains
- Vegetables
- Fruits
- Pulses

Users can search products and filter them by category and price.

### 🛒 Shopping Cart

Buyers can:

- Add products to the cart
- Increase product quantity
- Decrease product quantity
- Remove products
- View subtotal
- View delivery charge
- View total amount
- Place orders

### 👤 User Authentication

Users can create accounts as:

- Buyer
- Farmer

The application supports:

- Signup
- Login
- Logout

### 👨‍🌾 Farmer Module

Farmers can:

- Add agricultural products
- View their products
- View orders
- Track sales
- Update order status

### 📊 Dashboard

The application provides separate dashboards for buyers and farmers.

**Buyer Dashboard:**

- Total orders
- Total amount spent
- Order history
- Order status

**Farmer Dashboard:**

- Number of products
- Number of orders
- Sales amount
- Product list
- Order management

### ⭐ Review and Rating

Buyers can provide a rating and written review for products.

The product rating is calculated from submitted reviews.

### 🌦️ Weather Module

Users can enter a city or village to check current weather information.

The weather section provides:

- Temperature
- Humidity
- Wind speed
- Rainfall
- Farming advice

The project uses the **Open-Meteo API** for weather information.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Application logic and functionality |
| Local Storage | Browser-based data storage |
| Open-Meteo API | Weather information |

---

## 🏗️ Project Modules

```text
                 AgriConnect
                      │
        ┌─────────────┴─────────────┐
        │                           │
      Buyer                       Farmer
        │                           │
   ┌────┼────┐                 ┌────┼────┐
   │    │    │                 │    │    │
Products Cart Orders        Products Orders Sales
   │    │    │                 │    │    │
   └────┴────┘                 └────┴────┘
        │                           │
        └───────────┬───────────────┘
                    │
               JavaScript
                    │
              Local Storage
                    │
          ┌─────────┴─────────┐
          │                   │
       Reviews           Weather API
```

---

## 💾 Data Storage

This project is currently implemented as a **front-end prototype**.

Browser **Local Storage** is used to store:

- User accounts
- Current user
- Shopping cart
- Orders
- Reviews
- Farmer-added products

There is currently no external database or server-side backend in this version.

---

## 🌦️ Weather API

The weather module uses the **Open-Meteo API**.

The application first searches for the entered location and obtains its coordinates. It then retrieves current weather information using those coordinates.

The application uses the retrieved temperature and rainfall information to provide basic farming advice.

---

## 📱 Responsive Design

The website includes responsive CSS design so that the interface can adapt to different screen sizes, including mobile devices.

---

## 🚀 Future Scope

The project can be further improved by adding:

- Backend database
- Secure user authentication
- Online payment gateway
- Real-time agricultural market prices
- Product image uploads
- Farmer verification
- Delivery tracking
- Notifications
- AI-based crop recommendations
- Crop disease detection
- Multilingual support
- Advanced farmer analytics

---

## ⚠️ Current Limitations

- Data is stored in browser Local Storage.
- No centralized database is currently implemented.
- Authentication is designed for prototype purposes.
- Market prices are currently displayed as predefined values.
- Online payment is not implemented.
- Farming advice is based on simple weather conditions.

---

## ▶️ How to Run the Project

### Method 1 – Directly in Browser

1. Download or clone the repository.
2. Keep the following files in the same folder:

```text
index.html
style.css
script.js
```

3. Open `index.html` in a web browser.
4. Use the AgriConnect application.

### Method 2 – Using Visual Studio Code

1. Open the project folder in Visual Studio Code.
2. Open `index.html`.
3. Run the project using a local development server such as Live Server.
4. Open the displayed local URL in your browser.

---

## 📂 Project Structure

```text
AgriConnect-Farmer-Marketplace/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── screenshots/
│   ├── home.png
│   ├── products.png
│   ├── cart.png
│   ├── farmer-dashboard.png
│   └── weather.png
│
└── PPT/
    └── AgriConnect-Presentation.pptx
```

---

## 📸 Project Screenshots

Screenshots of the project will be added to the `screenshots` folder.

The screenshots demonstrate:

- Home page
- Product marketplace
- Shopping cart
- Farmer dashboard
- Weather section

---

## 🎓 Project Information

**Project Name:** AgriConnect – Farmer Marketplace

**Project Type:** Front-End Web Application

**Technologies:** HTML, CSS, JavaScript

**Domain:** Agriculture / E-Commerce

**Purpose:** Connecting farmers directly with buyers through a digital marketplace.

---

## 📄 License

This project is developed for academic and educational purposes.
