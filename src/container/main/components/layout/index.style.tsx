import styled from '@emotion/styled';
import { NavLink as NavLinkBase } from 'react-router-dom';

export const HeaderContainer = styled('header')`
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 24px;
  padding: 12px 0;
`;

export const NavItem = styled.div``;

export const NavLink = styled(NavLinkBase)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &.active {
    border-bottom: 2px solid black;
  }
`;