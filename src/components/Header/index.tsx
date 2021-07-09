import React from 'react';
import logo from '../../assets/logo/logo.png';
import { Container, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}

export default Header;