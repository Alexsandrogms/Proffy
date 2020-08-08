import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
  position: relative;

  @media (min-width: 700px) {
    height: 320px;
  }
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.3rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }

  img:nth-child(2) {
    height: 1.6rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Title = styled.div`
  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  p {
    display: flex;
    margin-top: 2.4rem;
    max-width: 40rem;

    img {
      margin-right: 2.4rem;
    }

    span {
      align-self: center;
      font-size: 1.4rem;
      max-width: 12rem;
      line-height: 2.6rem;
      color: var(--color-text-in-primary);
    }
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10rem;

    strong {
      max-width: 35rem;
    }

    p {
      display: flex;
      max-width: 40rem;
      margin-top: 0;

      img {
        margin-right: 2.4rem;
      }

      span {
        align-self: center;
        font-size: 1.4rem;
        max-width: 12rem;
        line-height: 2.6rem;
        color: var(--color-text-in-primary);
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p:first-child {
    max-width: 40rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;
  }

  p:last-child {
    display: flex;
    max-width: 40rem;

    img {
      margin-right: 2.4rem;
    }

    span {
      align-self: center;
      font-size: 1.4rem;
      max-width: 12rem;
      line-height: 2.6rem;
      color: var(--color-text-in-primary);
    }
  }

  @media (min-width: 700px) {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1.4rem;

      p:first-child {
        text-align: left;
        margin-top: 0;
        margin-bottom: 0.8rem;
        max-width: 30rem;
      }

      p:last-child {
        span {
          max-width: 12rem;
        }
      }
    }
  }
`;
