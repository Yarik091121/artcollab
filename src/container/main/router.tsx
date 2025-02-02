import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { getNavigationValue } from '@brojs/cli';
import Layout from './components/layout';
import MainPage from './components/page';
import DetailPage from '../detail';
import Promo from '../promo';
import Collection from '../collection';
import CreateNFT from '../create-nft';
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
<<<<<<< HEAD
        path: getNavigationValue('artcollab.promo'),
        element: <Promo />
      },
      { path: '*', element: <h1>404</h1> }
=======
        path: getNavigationValue('artcollab.collection'),
        element: <Collection />
      },
      {
        path: getNavigationValue('artcollab.create-nft'),
        element: <CreateNFT />
      },
      { 
        path: '*', 
        element: <NotFoundPage /> 
      }
>>>>>>> origin/dev
    ]
  }
]);