import React from 'react';

import api from '../../service/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { TeacherItemContent, Button } from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  // prettier-ignore
  const { 
    avatar, 
    name, 
    bio, 
    subject, 
    cost, 
    whatsapp,
    id
  } = teacher;

  const messageForTeacher = `Olá ${name}, tudo bem ? Estou entrando em contato para marca uma aula com o senhor(a)`;

  async function createNewConnection() {
    await api.post('/connections', {
      user_id: id,
    });
  }

  return (
    <TeacherItemContent>
      <header>
        <img src={avatar} alt="profile" className="perfil" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>
        <Button
          target="_blank"
          href={`https://wa.me/+55${whatsapp}?text=${messageForTeacher}`}
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </Button>
      </footer>
    </TeacherItemContent>
  );
};

export default TeacherItem;
