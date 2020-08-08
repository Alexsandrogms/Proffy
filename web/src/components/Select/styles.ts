import styled from 'styled-components';

export const SelectBlock = styled.div`
  margin: 1.6rem 0;
  label {
    font-size: 1.4rem;
  }

  select {
    width: 100%;
    height: 5.6rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

    &:focus-within {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 1px solid var(--color-primary-light);
    }
  }

  &:nth-child(2),
  &:nth-child(3) {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    &:nth-child(2),
    &:nth-child(3) {
      margin-top: 0;
    }
  }
`;
