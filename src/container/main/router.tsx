import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './components/page';
import DetailPage from '../detail';
import { getNavigationValue } from '@brojs/cli';
import Layout from './components/layout';

export const router = createBrowserRouter([
  {
    path: getNavigationValue('artcollab.main'),
    element: <Layout />,
    children: [
      {
        path: getNavigationValue('artcollab.main'),
        element: <MainPage />
      },
      {
        path: getNavigationValue('artcollab.detail'),
        element: <DetailPage />
      },
      { path: '*', element: <h1>404</h1> }
    ]
  }
]);