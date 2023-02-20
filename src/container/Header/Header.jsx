import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Busque novos sabores" /> 
      <h1 className="app__header-h1">A chave para um jantar requintado</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Descubra o melhor da alta gastronomia em nosso restaurante. Pratos requintados e ambiente elegante. Faça sua reserva agora!</p>
      <button type="button" className="custom__button">Explorar Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;