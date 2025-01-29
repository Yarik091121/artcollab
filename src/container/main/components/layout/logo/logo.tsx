import React from 'react';
import styled from '@emotion/styled';
import logoPng from './logo_NFT.png';

const LogoStyled = styled.img`
  width: 233px;
  height: 57px;
  padding: 10px;
  border-radius: 5px;
  margin: 20px 100px 20px 100px;   
`;

// ${__webpack_public_path__}/remote-assets/logo.png

const Logo = () => {
  return <LogoStyled src={logoPng} alt={'logo'} />;
};

export default Logo;