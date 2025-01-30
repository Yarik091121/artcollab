import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { getNavigationValue } from '@brojs/cli';
import Logo from '../logo/logo';

// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import MenuIcon from '@mui/icons-material/Menu';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Ma\il';
// import IconButton from '@mui/material/IconButton';


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

  // const [open, setOpen] = React.useState(false);
  // const navigate = useNavigate();

   // Функция для разделения массива навигации пополам
   const splitArray = (arr: any[]) => {
    const halfLength = Math.ceil(arr.length / 2);
    return [arr.slice(1, halfLength), arr.slice(halfLength)];
  };

  // Разделение массива навигации на две части
  const [leftNav, rightNav] = splitArray(navigations);

  return (
    <header className="header-wrapper">
      <div className="nav-bar left-nav">
        {leftNav.map(({ name, href }) => (
          <div key={href} className="nav-item">
            <Link onClick={() => forceUpdate()} to={href}>
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
            <Link onClick={() => forceUpdate()} to={href}>
              {name}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;