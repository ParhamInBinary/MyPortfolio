import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import {
  AboutMePage,
  ContactPage,
  HomePage,
  PageNotFound,
  ProjectsPage,
  ResumePage,
} from './pages';
import { customTheme } from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/aboutme',
        element: <AboutMePage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
