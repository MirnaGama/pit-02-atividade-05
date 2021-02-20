/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../../utils/api';

import Card from '../../components/Card';

export default function index() {
  const [todo, setTodo] = useState([]);
  const [number, setNumber] = useState(0);
  const { id } = useParams();
  const bool = todo.completed ? 'finalizada' : 'não finalizada';

  const findTodo = async () => {
    const response = await axios.get(`/todo/${id}`);
    setTodo(response.data);
  };

  useEffect(() => {
    findTodo();
  }, []);
  return (
    <Container>
      <Card title="Todo App" className="m-4">
        <h3>Tarefa nº: {todo.id}</h3>
        <p>Descrição da tarefa: {todo.title}</p>
        <p>Descrição da tarefa: {bool}</p>
      </Card>
    </Container>
  );
}
