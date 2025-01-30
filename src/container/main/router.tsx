import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { getNavigationValue } from '@brojs/cli';
import Layout from './components/layout';
import MainPage from './components/page';
import DetailPage from '../detail';
import NotFoundPage from '../404';

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
      { 
        path: '*', 
        element: <NotFoundPage /> 
      }
    ]
  }
]);