import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ProductListPage = lazy(() => import('./pages/ProductListPage.jsx'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage.jsx'));
const CartPage = lazy(() => import('./pages/CartPage.jsx'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage.jsx'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<NotFoundPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductListPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<div className="text-center py-10 text-xl">Loading...</div>}>
      <RouterProvider router={appRouter} />
    </Suspense>
  </Provider>
);