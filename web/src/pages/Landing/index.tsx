import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../service/api';

import {
  PageLanding,
  Container,
  LogoContainer,
  ButtonsContainer,
  Connections,
} from './styles';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <PageLanding>
      <Container>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <img src={landing} alt="Plataforma de estudos" className="hero-image" />

        <ButtonsContainer>
          <Link to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aula" />
            Aula
          </Link>
        </ButtonsContainer>
        <Connections>
          Total de {totalConnections} conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </Connections>
      </Container>
    </PageLanding>
  );
}

export default Landing;
