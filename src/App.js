import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [toggled, setToggled] = useState({}); // Track toggled state for each todo

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    const updatedToggled = { ...toggled };
    delete updatedToggled[index];
    setToggled(updatedToggled);
  };

  const toggleTodo = (index) => {
    setToggled((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <div>
          <input style={{ padding: '8px', marginRight: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }} onClick={addTodo}>Add</button>
        </div>
        <table style={{ borderCollapse: 'collapse', width: '80%', margin: '20px auto' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Todo</th>
              <th style={{ border: '1px solid #ddd', padding: '8px'}}>Completed</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{todo}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={toggled[index] || false}
                    onChange={() => toggleTodo(index)}
                  />
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  <button style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => removeTodo(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
