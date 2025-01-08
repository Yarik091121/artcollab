import React from 'react';
import styled from '@emotion/styled';
import logoPng from './logo_NFT.png';

const LogoStyled = styled.img`
  width: 144px;
  height: 36px;
  padding: 12px;
  background-color: rgba(75, 0, 130, 0.8);
  border-radius: 5px;
  margin-right: 10px;   
`;

// ${__webpack_public_path__}/remote-assets/logo.png

const Logo = () => {
  return <LogoStyled src={logoPng} alt={'logo'} />;
};

export default Logo;