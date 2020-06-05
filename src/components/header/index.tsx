import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { HeaderProps } from '../../types';
import { Menu, BackLink } from './styles';
import Logo from '../../assets/logo.svg';

const Header: React.FC<HeaderProps> = ({ displayLink = false }) => {
  return (
    <Menu>
      <img src={Logo} alt="Logo do Ecoleta" />
      {displayLink ? (
        <BackLink to="/">
          <FiArrowLeft />
          Voltar para home
        </BackLink>
      ) : null}
    </Menu>
  );
};

export default Header;
