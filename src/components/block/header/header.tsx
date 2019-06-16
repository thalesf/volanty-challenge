import React from 'react';
import Logo from './logo';
import { HeaderWrapper } from './style';

const Header: React.FC = () => {
  return (
    <header className="header">
      <HeaderWrapper>
        <Logo size={300} />
      </HeaderWrapper>
    </header>
  )
}

export default Header;