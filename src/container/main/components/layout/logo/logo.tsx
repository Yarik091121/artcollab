import React from 'react';
import styled from '@emotion/styled';
import logoPng from './logo_NFT.png';

const LogoStyled = styled.img`
  width: 96px;
  height: 24px;
  padding: 8px;
`;

// ${__webpack_public_path__}/remote-assets/logo.png

const Logo = () => {
  return <LogoStyled src={logoPng} alt={'logo'} />;
};

export default Logo;