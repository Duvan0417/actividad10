import React from 'react';

const UserEdit = ({ user, onSave }) => {
  const handleSave = () => {
    // para guardar cambios
    onSave(user);
  };

  return (
    <div className="user-edit">
      <h2>Editar Usuario</h2>
      <button onClick={handleSave}>Guardar Cambios</button>
    </div>
  );
};

export default UserEdit;
