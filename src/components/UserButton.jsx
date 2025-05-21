import React from 'react';
import useUsers from '../hooks/useUsers';

const UserButton = () => {
  const { generateRandomUser } = useUsers();

  return (
    <button onClick={generateRandomUser}>Generar Usuario Aleatorio</button>
  );
};

export default UserButton;
