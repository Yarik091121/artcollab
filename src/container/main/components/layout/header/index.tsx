import React from 'react';
import { Link } from 'react-router-dom'
import { getNavigationValue } from '@brojs/cli';
import Logo from '../logo/logo';

import './index.css';

// logo         ||           Коллекции   Создать nft   Контакты

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
    name: 'Создать nft',
    href: getNavigationValue('artcollab.create-nft')
  },
  {
    name: 'Контакты',
    href: getNavigationValue('artcollab.contact')
  }
];

const Header = (): React.ReactElement => {
  const forceUpdate = React.useReducer(x => x + 1, 0)[1];

   const splitArray = (arr: any[]) => {
    const fLength = Math.ceil(arr.length);
    return arr.slice(1, fLength);
  };

  const Nav = splitArray(navigations);

  return (
    <header className="header-wrapper">
        <Link onClick={() => forceUpdate()}  to={getNavigationValue('artcollab.main')}> <Logo /> </Link>
      <div className="nav-bar">
        {Nav.map(({ name, href }) => (
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