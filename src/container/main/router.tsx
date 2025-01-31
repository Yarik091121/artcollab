import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ListPage from '../list';
import DetailPage from '../detail';
import Promo from '../promo';
import { getNavigationValue } from '@brojs/cli';
import Layout from './components/layout';

export const router = createBrowserRouter([
  {
    path: getNavigationValue('artcollab.main'),
    element: <Layout />,
    children: [
      {
        path: getNavigationValue('artcollab.main'),
        element: <ListPage />
      },
      {
        path: getNavigationValue('artcollab.detail'),
        element: <DetailPage />
      },
      {
        path: getNavigationValue('artcollab.promo'),
        element: <Promo />
      },
      { path: '*', element: <h1>404</h1> }
    ]
  }
]);