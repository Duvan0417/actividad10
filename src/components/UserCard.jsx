import React, { useState } from 'react';
import useUsers from '../hooks/useUsers';

const UserCard = ({ user }) => {
  const { editUser, deleteUser } = useUsers();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(`${user.name.first} ${user.name.last}`);

  const handleEdit = () => {
    const nameParts = newName.trim().split(' ');
    if (nameParts.length < 2) {
      alert("Por favor, ingresa un nombre y apellido válidos.");
      return;
    }
    
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' '); // En caso de apellidos compuestos
    
    editUser(user.login.uuid, { 
      name: { 
        ...user.name,
        first: firstName, 
        last: lastName 
      } 
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar a ${user.name.first} ${user.name.last}?`)) {
      deleteUser(user.login.uuid);
    }
  };

  const handleCancel = () => {
    setNewName(`${user.name.first} ${user.name.last}`);
    setIsEditing(false);
  };

  return (
    <div className="user-card">
      {user.picture && (
        <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
      )}
      
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nombre Apellido"
          />
          <div style={{ marginTop: '10px' }}>
            <button onClick={handleEdit} style={{ marginRight: '5px' }}>
              Guardar
            </button>
            <button onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
          {user.email && <p>Email: {user.email}</p>}
          {user.phone && <p>Teléfono: {user.phone}</p>}
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => setIsEditing(true)} style={{ marginRight: '5px' }}>
              Editar
            </button>
            <button 
              onClick={handleDelete}
              style={{ 
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;