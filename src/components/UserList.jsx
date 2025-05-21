import React from 'react';
import UserCard from './UserCard';
import useUsers from '../hooks/useUsers';

const UserList = () => {
  const { users } = useUsers();

  return (
    <div className="user-list">
      {users.length > 0 ? (
        users.map(user => (
          <UserCard key={user.login.uuid} user={user} />
        ))
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
};

export default UserList;
