/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../../utils/api';
import Card from '../../components/Card';
import Todo from '../../components/Todo';

export default function index() {
  const { id } = useParams();
  const [todoDetail, setTodoDetail] = useState('');
  const findTodo = async () => {
    // const response; // TO-DO: Usar a API para buscar o objeto pelo ID
    const response = await axios.get(`/todo/${id}`);
    setTodoDetail(response.data);
  };

  useEffect(() => {
    findTodo(id);
    console.log(id);
    // TO-DO: Buscar o parâmetro do ID no componente através do Effect
  }, []);
  return (
    <Container>
      <Card title="Todo App" className="m-4">
        <h3>
          Tarefa nº ...
          {todoDetail.id}
        </h3>
        <p>
          Descrição da tarefa ...
          {todoDetail.title}
        </p>
        <Todo />
      </Card>
    </Container>
  );
}
