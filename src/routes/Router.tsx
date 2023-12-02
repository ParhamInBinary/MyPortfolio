import { RouteObject, useRoutes } from 'react-router-dom';

import App from '../App';
import {
  AboutMePage,
  ContactPage,
  HomePage,
  PageNotFound,
  ProjectsPage,
  ResumePage,
} from '../pages';

export const Routes = () => {
  const routes: RouteObject[] = [
    {
      element: <App />,
      children: [
        {
          path: '/',
          children: [
            {
              index: true,
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
          ],
        },
      ],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ];

  return useRoutes(routes);
};
