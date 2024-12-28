import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { useKeycloak } from './keycloak';

const Main = (): React.ReactElement | string => {
  const { isLoading } = useKeycloak();

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default Main;