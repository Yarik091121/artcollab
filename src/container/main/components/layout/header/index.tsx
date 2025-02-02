import React from 'react';
import { Link } from 'react-router-dom'
import { getNavigationValue } from '@brojs/cli';
import Logo from '../logo/logo';

import './index.css';

const navigations: Array<{ name: string; href: string }> = [
  {
    name: 'Главная страница',
    href: getNavigationValue('artcollab.main')
  },
  {
    name: 'Коллекции',
    href: getNavigationValue('artcollab.collection')
  },
  {
    name: 'Акции',
    href: getNavigationValue('artcollab.promo')
  },
  {
    name: 'Вайт-лист',
    href: getNavigationValue('artcollab.white-list')
  },
  {
    name: 'Создать nft',
    href: getNavigationValue('artcollab.create-nft')
  },
  {
    name: 'Топы',
    href: getNavigationValue('artcollab.tops')
  },
  {
    name: 'Контакты',
    href: getNavigationValue('artcollab.contacts')
  }
];

const Header = (): React.ReactElement => {
  const forceUpdate = React.useReducer(x => x + 1, 0)[1];

   const splitArray = (arr: any[]) => {
    const halfLength = Math.ceil(arr.length / 2);
    return [arr.slice(1, halfLength), arr.slice(halfLength)];
  };

  const [leftNav, rightNav] = splitArray(navigations);

  return (
    <header className="header-wrapper">
      <div className="nav-bar left-nav">
        {leftNav.map(({ name, href }) => (
          <div key={href} className="nav-item">
            <Link onClick={() => forceUpdate()} to={href} className='header-link'>
              {name}
            </Link>
          </div>
        ))}
      </div>
      <div className="logo-container">
        <Link onClick={() => forceUpdate()}  to={getNavigationValue('artcollab.main')}> <Logo /> </Link>
      </div>
      <div className="nav-bar right-nav">
        {rightNav.map(({ name, href }) => (
          <div key={href} className="nav-item">
            <Link onClick={() => forceUpdate()} to={href} className='header-link'>
              {name}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;