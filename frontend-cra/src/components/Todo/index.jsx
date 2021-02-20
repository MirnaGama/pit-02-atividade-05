import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from '../../utils/api';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function index() {
  const [todos, setTodos] = useState([]);
  const [network, setNetwork] = useState(true);

  const fetchTodos = async () => {
    await axios.get('/todo').then((response) => {
      setTodos(response.data);
    }).catch(() => {
      toast.error('Network Error');
      setNetwork(false);
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />

      <div>
        {network ? (
          <TodoList todos={todos} setTodos={setTodos} />
        ) : (
            // eslint-disable-next-line react/jsx-indent
            <p>Network error</p>
            // eslint-disable-next-line indent
          )}

      </div>

    </div>
  );
}
