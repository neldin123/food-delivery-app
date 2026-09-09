# 🍔 Food Delivery App

A modern food delivery web application built with **React** and **Vite**. The project provides a responsive food browsing and ordering experience with category filtering, a shopping cart, checkout form, and reusable React components.

## ✨ Features

- 🏠 Responsive home page
- 🍕 Browse available food items
- 🔎 Filter food by category
- 🛒 Add food items to the shopping cart
- ➕ Increase item quantities
- ➖ Decrease/remove items from the cart
- 💰 Automatic subtotal and total calculation
- 🚚 Fixed delivery fee calculation
- 🧾 Checkout / delivery information form
- 🔐 Login popup UI
- 📱 Responsive layout for different screen sizes
- 🔔 Toast notifications
- 🧭 Client-side routing between pages

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **React Router**
- **Axios**
- **React Hot Toast**
- **JavaScript (ES6+)**
- **CSS**
- **Context API** for cart state management

## 📂 Project Structure

```text
food-delivery-app/
├── public/
├── src/
│   ├── Components/
│   │   ├── AppDownload/
│   │   ├── ExploreMenu/
│   │   ├── FoodDisplay/
│   │   ├── FoodItem/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── LoginPopUp/
│   │   └── Navbar/
│   │
│   ├── Context/
│   │   └── StoreContext.jsx
│   │
│   ├── Pages/
│   │   ├── Cart/
│   │   ├── Home/
│   │   └── PlaceOrder/
│   │
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🧠 State Management

The application uses React's **Context API** to manage the shopping cart globally.

`StoreContext` is responsible for:

- Storing cart items
- Adding items to the cart
- Removing/decreasing items
- Calculating the total cart amount
- Providing the food list to components

This allows components such as the home page, food items, cart, and checkout page to access shared application state without prop drilling.

## 🛍️ Shopping Cart

The cart supports:

- Adding a food item
- Tracking the quantity of each item
- Removing items
- Calculating the subtotal
- Adding a delivery fee
- Calculating the final total

## 🧭 Pages

### Home

The home page contains:

- Header / hero section
- Food category navigation
- Food listing
- App download section

### Cart

Displays selected food items with:

- Item image
- Name
- Price
- Quantity
- Item total
- Cart subtotal
- Delivery fee
- Final total
- Checkout navigation

### Place Order

Provides a delivery information form and displays the order total before proceeding to payment.

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/neldin123/food-delivery-app.git
```

Navigate to the project directory:

```bash
cd food-delivery-app
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Vite will start the development server and provide a local URL in the terminal.

## 📦 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## 🔮 Future Improvements

- 🔐 Complete user authentication
- 💳 Integrate a real payment gateway
- 🌐 Connect the application to a backend API
- 🗄️ Store products and orders in a database
- 📦 Persistent cart using localStorage or a backend
- 📍 Order tracking
- 👤 User profile and order history
- 🎟️ Functional promo codes
- 🧑‍💼 Admin dashboard for managing food items and orders

## 👨‍💻 Author

**Nooreldin**

GitHub: [@neldin123](https://github.com/neldin123)

## 📄 License

This project is available for learning and portfolio purposes.
