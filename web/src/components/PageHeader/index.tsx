import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import rocketIcon from '../../assets/images/icons/rocket.svg';
import smileIcon from '../../assets/images/icons/smile.svg';

import {
  Wrapper,
  TopBarContainer,
  HeaderContent,
  Description,
  Title,
} from './styles';
import api from '../../service/api';

interface PageHeaderProps {
  title: string;
  description?: string;
  typeIcon?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  description,
  typeIcon,
}) => {
  const [totalTeachers, setTotalTeachers] = useState(0);

  useEffect(() => {
    api.get('teachers').then((response) => {
      setTotalTeachers(response.data.total);
    });
  }, []);

  return (
    <Wrapper>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="back" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent>
        <Title>
          <strong>{title}</strong>
          {typeIcon === 'smile' && (
            <p>
              <img src={smileIcon} alt="Ícone de sorriso" />
              <span>Nós temos {totalTeachers} professores.</span>
            </p>
          )}
        </Title>

        <Description>
          {description && <p>{description}</p>}
          {typeIcon === 'rocket' && (
            <p>
              <img src={rocketIcon} alt="Ícone de foguete" />
              <span>Preparare-se! vai ser o máximo</span>
            </p>
          )}
        </Description>

        {children}
      </HeaderContent>
    </Wrapper>
  );
};

export default PageHeader;
