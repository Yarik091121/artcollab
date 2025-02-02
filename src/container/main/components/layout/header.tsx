// import React from 'react';
// import { getNavigationValue } from '@brojs/cli';
// import { HeaderContainer, NavContainer, NavItem, NavLink } from './index.style';
// import Logo from './logo/logo';

// const navigations: Array<{ name: string; href: string }> = [
//   {
//     name: 'Главная',
//     href: getNavigationValue('artcollab.main')
//   },
//   {
//     name: 'Детальная информация',
//     href: getNavigationValue('artcollab.detail')
//   },
//   {
//     name: 'Акции',
//     href: getNavigationValue('artcollab.promo')
//   }
// ];

// const Header = (): React.ReactElement => {
//   return (
//     <HeaderContainer>
//       <Logo />
//       <NavContainer>
//         {navigations.map((item) => {
//           return (
//             <NavItem key={item.name}>
//               <NavLink to={item.href} end>
//                 {item.name}
//               </NavLink>
//             </NavItem>
//           );
//         })}
//       </NavContainer>
//     </HeaderContainer>
//   );
// };

// export default Header;