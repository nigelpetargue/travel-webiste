import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Layout from './components/Layout/Layout';
import Home from './routes/Home';
import Category from './routes/Category';
import Blog from './routes/Blog';
import About from './routes/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
