import React, { useState, ChangeEvent, FormEvent } from 'react';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../service/api';

import { Container, Form, Main, Button } from './styles';

function TeacherList() {
  const [filter, setFilter] = useState({
    subject: '',
    week_day: '',
    time: '',
  });

  const [teachers, setTeachers] = useState([]);

  async function searchTeacher(e: FormEvent) {
    e.preventDefault();

    const { subject, week_day, time } = filter;
    const response = await api.get(`classes`, {
      params: {
        week_day,
        subject,
        time,
      },
    });

    setTeachers(response.data);
  }

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLSelectElement>
  ) {
    const { id: name, value } = e.target;

    setFilter({
      ...filter,
      [name]: value,
    });
  }

  return (
    <Container>
      <PageHeader title={`Estes são os proffys disponíveis.`} typeIcon="smile">
        <Form onSubmit={searchTeacher}>
          <Select
            label="Matéria"
            name="subject"
            value={filter?.subject}
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

          <Select
            label="Dia da semana"
            name="week_day"
            value={filter?.week_day}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
            onChange={handleInputChange}
          />

          <Input
            label="Hora"
            name="time"
            type="time"
            value={filter?.time}
            onChange={handleInputChange}
          />

          <Button type="submit">Filter</Button>
        </Form>
      </PageHeader>

      <Main>
        {teachers &&
          teachers.map((teacher: Teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))}
      </Main>
    </Container>
  );
}

export default TeacherList;
