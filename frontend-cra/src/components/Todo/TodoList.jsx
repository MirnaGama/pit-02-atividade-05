import React from 'react';
import {
  Row, Button, Table,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../../utils/api';

const TodoList = ({ todos, setTodos }) => {
  const onCompleteTodo = async ({ target: { checked } }, todo) => {
    const newTodos = todos.map((_todo) => {
      if (_todo.id === todo.id) {
        return {
          ..._todo,
          completed: checked,
        };
      }
      return _todo;
    });

    await axios.put(`/todo/${todo.id}`, {
      ...todo,
      completed: checked,
    });

    setTodos(newTodos);
  };

  const isTodosEmpty = () => {
    if (todos.length <= 0) {
      return <p className="text-center">Lista vazia</p>;
    }
    return '';
  };

  const onRemoveTodo = async (todo) => {
    const newTodos = todos.filter(({ id }) => id !== todo.id);

    await axios.delete(`/todo/${todo.id}`);

    toast.info(`Todo [${todo.title}] removed`);

    setTodos(newTodos);
  };

  const onEditTodo = (todo) => {
    const newTodos = todos.map((_todo) => {
      if (_todo.id === todo.id) {
        return {
          ..._todo,
          edit: !_todo.edit,
        };
      }

      return _todo;
    });

    setTodos(newTodos);
  };

  const onChangeTodo = (event, index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return {
          ...todo,
          title: event.target.value,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const onBlurField = async (todo) => {
    if (todo.title.trim()) {
      await axios.put(`/todo/${todo.id}`, {
        ...todo,
        edit: false,
      });

      onEditTodo(todo);
    } else {
      toast.error('Valor vazio');
    }
  };

  return (
    <Row>
      <Table className="m-2">
        <thead>
          <tr>
            <th>#</th>
            <th>Activity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isTodosEmpty()}
          {todos.map((todo, index) => (
            <tr>
              <td>
                <input
                  onChange={(event) => onCompleteTodo(event, todo)}
                  checked={todo.completed}
                  className="m-2"
                  type="checkbox"
                />

              </td>
              <td width="70%">
                {todo.edit ? (
                  <input
                    onBlur={() => onBlurField(todo)}
                    value={todo.title}
                    onChange={(event) => onChangeTodo(event, index)}
                  />
                ) : (
                    // eslint-disable-next-line react/jsx-indent
                    <span className={todo.completed ? 'completed' : ''}>
                      <Link to={`todo/${todo.id}`}>{todo.title}</Link>
                    </span>
                    // eslint-disable-next-line indent
                  )}

              </td>
              <td>
                <Button onClick={() => onEditTodo(todo)}>Editar</Button>
                <Button
                  onClick={() => onRemoveTodo(todo)}
                  className="ml-2"
                  variant="danger"
                >
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row>
  );
};

export default TodoList;
