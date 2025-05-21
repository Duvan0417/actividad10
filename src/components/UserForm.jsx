import React, { useState } from 'react';
import useUsers from '../hooks/useUsers';

const UserForm = () => {
  const { addUser } = useUsers();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setError("Por favor, ingresa nombres válidos.");
      return;
    }
    addUser({ firstName, lastName });
    setFirstName('');
    setLastName('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Apellido"
      />
      <button type="submit">Agregar Usuario</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default UserForm;
