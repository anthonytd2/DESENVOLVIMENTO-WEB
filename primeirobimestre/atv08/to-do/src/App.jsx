import { useState } from 'react';
import './App.css';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [textoInput, setTextoInput] = useState('');

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (textoInput.trim() === '') return;

    const novaTarefa = {
      id: Date.now(),
      text: textoInput
    };

    setTarefas([...tarefas, novaTarefa]);
    setTextoInput('');
  };

  const removerTarefa = (id) => {
    const listaFiltrada = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(listaFiltrada);
  };

  return (
    <div className="container">
      <h1>Minha Lista de Tarefas</h1>
      
      <form onSubmit={adicionarTarefa}>
        <input 
          type="text" 
          value={textoInput} 
          onChange={(e) => setTextoInput(e.target.value)} 
          placeholder="Digite uma tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            {tarefa.text}
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}