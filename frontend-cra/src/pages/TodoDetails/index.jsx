import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../../utils/api';

import Card from '../../components/Card';

export default function index() {
  const { id } = useParams();
  const [todoDetail, setTodoDetail] = useState('');

  const findTodo = async () => {
    const response = await axios.get(`/todo/${id}`);
    setTodoDetail(response.data);
  };

  useEffect(() => {
    findTodo(id);
  }, []);

  return (
    <Container>
      <Card title="Todo Detail" className="m-4">
        <h3>{`Tarefa n° ${todoDetail.id}`}</h3>
        <b>{`Descrição: ${todoDetail.title}`}</b>
        <p>{`Estado: ${todoDetail.completed ? 'Completa' : 'Pendente'}`}</p>
      </Card>
    </Container>
  );
}
