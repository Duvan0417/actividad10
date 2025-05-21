import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserButton from './components/UserButton';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Gestión de Usuarios</h1>
      <UserForm />
      <UserButton />
      <UserList />
    </div>
  );
};

export default App;