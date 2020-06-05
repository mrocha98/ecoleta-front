import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import Header from '../../components/header';
import { Page, Main, Anchor } from './styles';

const Home: React.FC = () => {
  return (
    <Page>
      <div className="content">
        <Header />
        <Main>
          <h1>Seu Marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
        </Main>
        <Anchor to="/create-point">
          <span>
            <FiLogIn />
          </span>
          <strong>Cadastre um ponto de coleta</strong>
        </Anchor>
      </div>
    </Page>
  );
};

export default Home;
