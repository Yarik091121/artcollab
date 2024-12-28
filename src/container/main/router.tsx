import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ListPage from '../list';
import DetailPage from '../detail';
import { getNavigationValue } from '@brojs/cli';
import Layout from './components/layout';

export const router = createBrowserRouter([
  {
    path: getNavigationValue('kfu-24-teacher.main'),
    element: <Layout />,
    children: [
      {
        path: getNavigationValue('kfu-24-teacher.main'),
        element: <ListPage />
      },
      {
        path: getNavigationValue('kfu-24-teacher.detail'),
        element: <DetailPage />
      },
      { path: '*', element: <h1>404</h1> }
    ]
  }
]);