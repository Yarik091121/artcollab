import React from 'react';
import { getNavigationValue } from '@brojs/cli';
import Logo from '../logo/logo';

import './index.css';

const navigations: Array<{ name: string; href: string }> = [
  {
    name: 'Главная',
    href: getNavigationValue('artcollab.main')
  },
  {
    name: 'Детальная информация',
    href: getNavigationValue('artcollab.detail')
  }
];

const Header = (): React.ReactElement => {
  return (
    <div className="header-wrapper">
      <div className="nav-bar">
        <div className="nav-item">Коллекции</div>
        <div className="nav-item">Акции</div>
        <div className="nav-item">Вайт-лист</div>
      </div>
      <div className="">
        <Logo />
      </div>
      <div className="nav-bar">
          <div className="nav-item">Создать NFT</div>
          <div className="nav-item">Топы</div>
          <div className="nav-item">Контакты</div>
      </div>
    </div>
  );
};

export default Header;