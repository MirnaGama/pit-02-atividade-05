import React from 'react';
import { Container } from 'react-bootstrap';
import axios from '../../utils/api';

import Card from '../../components/Card';

export default function index() {
    const todo = useState([]);

    const findTodo = async (id) => {
        const response; // TO-DO: Usar a API para buscar o objeto pelo ID
        
        // setTodo(response.data);
        // TO-DO: Colocar a response num objeto ToDo e mostrar as informações na tela
      };
    
      useEffect(() => {
        findTodo(/*parametro ID aqui*/); // TO-DO: Buscar o parâmetro do ID no componente através do Effect
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