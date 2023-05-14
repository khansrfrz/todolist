import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Write Code', completed: true },
    { id: 3, title: 'Take a break', completed: false }
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = { id: Date.now(), title: newTodo, completed: false };
      setTodoList([...todoList, newTodoItem]);
      setNewTodo('');
      console.log(newTodoItem)
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const handleUpdateTodo = (id, title) => {
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const handleCompleteTodo = (id) => {
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <tr key={todo.id}>
              <td className={todo.completed ? 'completed' : ''}>{todo.title}</td>
              <td>
                <button onClick={() => handleCompleteTodo(todo.id)}>Complete</button>
                <button onClick={() => handleUpdateTodo(todo.id, prompt('Enter new todo title'))}>Update</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
