import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../../service/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Modal from '../../components/Modal';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container, Main, Footer, Button, ScheduleItem } from './styles';

function TeacherForm() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [overflowEnabled, setOverflowEnabled] = useState('');

  const [data, setData] = useState({
    name: '',
    avatar: '',
    whatsapp: '',
    bio: '',
    subject: '',
    cost: '',
  });

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement> &
      ChangeEvent<HTMLTextAreaElement> &
      ChangeEvent<HTMLSelectElement>
  ) {
    const { id: name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, idx) => {
      if (idx === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post('classes', {
        name: data.name,
        avatar: data.avatar,
        whatsapp: data.whatsapp,
        bio: data.bio,
        subject: data.subject,
        cost: Number(data.cost),
        schedule: scheduleItems,
      })
      .then(() => {
        setOverflowEnabled('hidden');
        window.scrollTo(0, 0);
        setIsOpenModal(true);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return (
    <Container style={{ overflow: overflowEnabled }}>
      <PageHeader
        title="Que incrível quer você que dar aula."
        description="O primeiro passo é preencher este formulário de inscrição"
        typeIcon="rocket"
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome completo"
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />

            {/* prettier-ignore */}
            <Input 
            label="Avatar" 
            name="avatar"
            value={data.avatar}
            onChange={handleInputChange} 
          />

            <Input
              label="Whatsapp"
              name="whatsapp"
              value={data.whatsapp}
              mask="phone"
              onChange={handleInputChange}
            />

            {/* prettier-ignore */}
            <Textarea 
            label="Biografia" 
            name="bio" 
            value={data.bio}
            onChange={handleInputChange} 
          />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label="Matéria"
              name="subject"
              value={data.subject}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Historia', label: 'Historia' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Química', label: 'Química' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Português', label: 'Português' },
                { value: 'Sociologia', label: 'Sociologia' },
              ]}
              onChange={handleInputChange}
            />

            <Input
              label="Custo da sua hora por aula (em R$)"
              name="cost"
              value={data.cost}
              onChange={handleInputChange}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, idx) => (
              <ScheduleItem key={scheduleItem.week_day}>
                <Select
                  label="Dia da semana"
                  name="week_day"
                  value={scheduleItem.week_day}
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                  onChange={(e) =>
                    setScheduleItemValue(idx, 'week_day', e.target.value)
                  }
                />
                <Input
                  type="time"
                  label="Das"
                  name="from"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(idx, 'from', e.target.value)
                  }
                />
                <Input
                  type="time"
                  label="Até"
                  name="to"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(idx, 'to', e.target.value)
                  }
                />
              </ScheduleItem>
            ))}
          </fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <Button type="submit">Salvar cadastro</Button>
          </Footer>
        </form>
      </Main>
      <Modal isOpen={isOpenModal} />
    </Container>
  );
}

export default TeacherForm;
