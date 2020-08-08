import React from 'react';

import successCheckIcon from '../../assets/images/icons/success-check-icon.svg';

import { Container, Content, ButtonLink } from './styles';

type ModalProps = {
  isOpen: boolean;
};

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  if (isOpen) {
    return (
      <Container>
        <Content>
          <img src={successCheckIcon} alt="Ícone de sucesso" />
          <h2>Cadastro salvo!</h2>
          <p>
            Tudo certo, seu cadastro está na nossa lista de professores.
            <br />
            Agora é so ficar de olho no seu Whatsapp.
          </p>

          <ButtonLink to="/study">Acessar lista</ButtonLink>
        </Content>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default Modal;
