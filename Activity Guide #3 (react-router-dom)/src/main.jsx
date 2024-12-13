import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from './router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





/*import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Contact from './routes/Contact.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/contact', element: <Contact /> },
]);
*/

