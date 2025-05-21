import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h2>Detalles de {user.name.first} {user.name.last}</h2>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Dirección: {user.location.city}, {user.location.country}</p>
    </div>
  );
};

export default UserDetails;
