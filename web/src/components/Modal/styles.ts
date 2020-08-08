import styled from 'styled-components';
import { Link } from 'react-router-dom';

import successBackground from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: var(--color-primary);
  top: 0;
  left: 0;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  background-image: url(${successBackground});
  background-repeat: no-repeat;
  background-position: left 10rem;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h2 {
    margin-top: 3.6rem;
    color: var(--color-title-in-primary);
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 4.6rem;
  }

  p {
    max-width: 40rem;
    text-align: center;
    margin-bottom: 8rem;
    font-size: 1.4rem;
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    width: 100%;
    height: 90%;
    background-position: center;

    h2 {
      font-size: 4.6rem;
      margin-bottom: 1.6rem;
    }
  }
`;

export const ButtonLink = styled(Link)`
  width: 95%;
  height: 5.6rem;
  background: var(--color-secundary);
  color: var(--color-button-text);
  border-radius: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 3.2rem;
  border: 0;

  &hover {
    background: var(--color-secundary-dark);
  }

  @media (min-width: 700px) {
    width: 20rem;
    margin-top: 0;
  }
`;
