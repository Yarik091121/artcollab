import React from 'react';
import ReactDOM from 'react-dom/client';
  
import App from './app';

import './app-env.d.ts';

export default () => <App/>;
  
let rootElement: ReactDOM.Root
  
export const mount = (Component, element = document.getElementById('app')) => {
  rootElement = ReactDOM.createRoot(element as HTMLElement);
  rootElement.render(<Component/>);

  if(module.hot) {
      module.hot.accept('./app', ()=> {
        rootElement.render(<Component/>);
      })
  }
};

export const unmount = () => {
  rootElement.unmount();
};
