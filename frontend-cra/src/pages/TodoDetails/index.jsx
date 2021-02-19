/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../../utils/api';
import Card from '../../components/Card';
import Todo from '../../components/Todo';

export default function index() {
  const todo = useState([]);

  const findTodo = async (id) => {
    // const response; // TO-DO: Usar a API para buscar o objeto pelo ID
    const response = await axios.get(`/todo/${todo.id}`, {
      ...todo,

    });
    // setTodo(response.data);
  };

  useEffect(() => {
    const oId = useParams;
    findTodo(oId);
    // TO-DO: Buscar o parâmetro do ID no componente através do Effect
  }, []);
  return (
    <Container>
      <Card title="Todo App" className="m-4">
        <h3>Tarefa nº ...</h3>
        <p>Descrição da tarefa ...</p>
        <Todo />
      </Card>
    </Container>
  );
}
