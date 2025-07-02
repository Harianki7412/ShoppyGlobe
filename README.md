# ShoppyGlobe E-commerce Application

ShoppyGlobe is a basic e-commerce application built with React, featuring product listing, detailed product views, a shopping cart, and client-side state management using Redux. The application is styled entirely with Tailwind CSS for a responsive and modern look.

## Live Demo (Optional)
[Link to your deployed demo, e.g., Netlify, Vercel]

## Features

* **Header:** Displays navigation links (Home, Products) and a dynamic shopping cart icon with item count.
* **Home Page:** A welcoming landing page with a hero section and a display of featured/popular products.
* **Product List Page:**
    * Fetches and displays a list of products from `https://dummyjson.com/products`.
    * Includes a custom React hook (`useProducts`) for data fetching logic.
    * Implemented search functionality to filter products by title or description.
    * Category filtering dropdown to narrow down products.
    * Each product is rendered using a `ProductItem` component.
* **Product Detail Page:**
    * Displays comprehensive information about a selected product, fetched based on route parameters.
    * Includes product images, description, price, rating, and stock information.
    * "Add to Cart" button to add the product to the shopping cart.
    * "Back to Products" button for navigation.
* **Shopping Cart Page:**
    * Displays all items currently in the cart.
    * Allows users to modify quantities of individual items or remove them entirely.
    * Calculates and displays the total cart value.
    * "Clear Cart" button to empty the cart.
    * "Proceed to Checkout" button to navigate to the checkout page.
* **Cart Item Component:** Represents a single item within the shopping cart, providing quantity controls and a remove option.
* **Checkout Page:** A placeholder page for the checkout process.
* **404 Not Found Page:** A custom page for handling unknown routes.
* **State Management with Redux:**
    * Redux Toolkit is used for efficient state management of product data and cart items.
    * `productSlice` manages the fetched product list, loading status, and errors.
    * `cartSlice` manages adding, removing, and updating quantities of items in the cart. Selectors are used for easy data access (e.g., total items, total price).
* **Event Handling:** All interactive elements (Add to Cart, Remove from Cart, Quantity change) correctly dispatch Redux actions.
* **React Routing:** Implemented using `react-router-dom` for seamless navigation between pages. Dynamic routes are used for product details (`/products/:id`).
* **React Lists:** Products and cart items are rendered as lists with unique `key` props for efficient rendering.
* **Performance Optimization:** `React.lazy` and `Suspense` are used to code-split and lazy-load page components, improving initial load times.
* **Styling:** All components are styled using Tailwind CSS, ensuring a responsive design across various screen sizes.
* **Error Handling:** Implemented graceful error handling for failed API requests, displaying informative messages to the user.

## API Used

* **Products API:** `https://dummyjson.com/products`
    * Used for fetching the list of all products and individual product details.
    * **Note:** This API does not support cart management or order processing. All cart functionality is managed client-side using Redux and will not persist on page refresh.

## How to Run the Application Locally

Follow these steps to set up and run the ShoppyGlobe application on your local machine:

1.  **Clone the Repository:**
    ```bash
    git Repository [`https://github.com/Harianki7412/ShoppyGlobe.git`]
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev

    ```

    This will open the application in your default web browser at `http://localhost:5173`.